"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FindStaffForm from "@/components/FindStaffForm";

interface FindStaffModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialLocation?: string;
  initialSector?: string;
}

export default function FindStaffModal({
  open,
  onOpenChange,
  initialLocation = "",
  initialSector = "",
}: FindStaffModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-white text-slate-900 border border-slate-200 rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
        <DialogHeader className="border-b border-slate-100 pb-4 mb-4">
          <DialogTitle className="text-2xl font-extrabold text-[#0c1730] leading-tight text-left">
            Tell us what you need,<br />
            takes around 15 seconds
          </DialogTitle>
          {/* <p className="text-sm text-slate-500 mt-1">
            Let us match your requirements against our nationwide candidate database.
          </p> */}
        </DialogHeader>

        <FindStaffForm
          initialLocation={initialLocation}
          initialSector={initialSector}
          onClose={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
