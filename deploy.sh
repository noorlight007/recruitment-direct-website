#!/usr/bin/env bash
# One-command deploy: ./deploy.sh
# Pushes nothing — it deploys what is on origin/main. Commit & push first.
#
# Local (gitignored) config, never committed:
#   .deploy.local        DEPLOY_HOST, DEPLOY_USER, DEPLOY_PASSWORD (optional if SSH key is set up)
#   .env.deploy.local    env vars written to the server's .env
set -euo pipefail
cd "$(dirname "$0")"

[ -f .deploy.local ] && source .deploy.local
: "${DEPLOY_HOST:?set DEPLOY_HOST in .deploy.local}"
DEPLOY_USER="${DEPLOY_USER:-root}"
APP_DIR="/var/www/recruitment-direct-website"
SERVICE="rd1-website"
TARGET="$DEPLOY_USER@$DEPLOY_HOST"

if [ -n "${DEPLOY_PASSWORD:-}" ]; then
  command -v sshpass >/dev/null || { echo "Install sshpass (brew install sshpass) or use an SSH key"; exit 1; }
  export SSHPASS="$DEPLOY_PASSWORD"
  SSH=(sshpass -e ssh -o StrictHostKeyChecking=accept-new)
  SCP=(sshpass -e scp -o StrictHostKeyChecking=accept-new)
else
  SSH=(ssh); SCP=(scp)
fi

[ -f .env.deploy.local ] || { echo "Missing .env.deploy.local"; exit 1; }

echo "==> Uploading env"
"${SCP[@]}" .env.deploy.local "$TARGET:$APP_DIR/.env"

echo "==> Deploying on $DEPLOY_HOST"
"${SSH[@]}" "$TARGET" bash -s <<REMOTE
set -euo pipefail
cd "$APP_DIR"
git fetch origin main
git reset --hard origin/main
npm ci --no-audit --no-fund
npm run build

if [ ! -f /etc/systemd/system/$SERVICE.service ]; then
  echo "==> Creating systemd service $SERVICE (first run)"
  cat > /etc/systemd/system/$SERVICE.service <<UNIT
[Unit]
Description=RD1 Next.js website
After=network.target

[Service]
WorkingDirectory=$APP_DIR
ExecStart=$(command -v npm) run start
Restart=always
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
UNIT
  systemctl daemon-reload
  systemctl enable $SERVICE
  # free port 3000 from the old hand-started process
  pkill -f "next-server" || true
  sleep 2
  systemctl start $SERVICE
else
  systemctl restart $SERVICE
fi
sleep 3
systemctl is-active $SERVICE
curl -fsS -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3000/
REMOTE
echo "==> Done"
