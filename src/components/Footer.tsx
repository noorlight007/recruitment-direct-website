import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-16 px-5 border-t border-[#1e293b]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 text-left">

          {/* BRAND */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4 tracking-tight">Recruitment Direct</h3>
            <p className="text-[#cbd5f5] text-sm leading-relaxed">
              Faster hiring. Verified by consultants.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col text-left">
            <h4 className="text-lg font-bold mb-4 tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#job-search" className="text-[#cbd5f5] text-sm hover:text-white transition-colors">
                  Search Jobs
                </Link>
              </li>
              <li>
                <Link href="/#sectors" className="text-[#cbd5f5] text-sm hover:text-white transition-colors">
                  Sectors
                </Link>
              </li>
              <li>
                <Link href="/#ai-products" className="text-[#cbd5f5] text-sm hover:text-white transition-colors">
                  AI Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#cbd5f5] text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col text-left">
            <h4 className="text-lg font-bold mb-4 tracking-tight">Contact</h4>
            <div className="space-y-2">
              <p className="text-[#cbd5f5] text-sm">01324 613198</p>
              <p className="text-[#cbd5f5] text-sm leading-relaxed">sales@rd1.co.uk</p>
              <p className="text-[#cbd5f5] text-sm leading-relaxed">Linlithgow, Scotland</p>
            </div>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col text-left">
            <h4 className="text-lg font-bold mb-4 tracking-tight">Company</h4>
            <div className="space-y-2">
              <p className="text-[#cbd5f5] text-sm">Company Reg: SC301107</p>
              <p className="text-[#cbd5f5] text-sm">VAT Number: GB880406428</p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#1e293b] pt-10 text-center">
          <div className="text-[#cbd5f5] text-sm mb-4 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-[#1e293b]">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span className="text-[#1e293b]">|</span>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <span className="text-[#1e293b]">|</span>
            <Link href="/modern-slavery" className="hover:text-white transition-colors">Modern Slavery</Link>
            <span className="text-[#1e293b]">|</span>
            <Link href="/policies" className="hover:text-white transition-colors">Policies</Link>
          </div>

          <p className="text-[#cbd5f5] text-[13px]">
            © {new Date().getFullYear()} Recruitment Direct UK Limited. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
