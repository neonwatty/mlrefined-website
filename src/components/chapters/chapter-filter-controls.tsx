import type { ReactNode } from "react";

export function FilterGroup({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div className="grid gap-2">
      <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function FilterButton({
  children,
  isSelected,
  onClick,
}: {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`min-h-10 rounded-md border px-3 text-sm font-black transition-colors ${
        isSelected
          ? "border-[#c79222] bg-[#c79222] text-[#06172d]"
          : "border-[#ddcfad] bg-white text-[#164b8f] hover:bg-[#fff7e7]"
      }`}
      aria-pressed={isSelected}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function SummaryItem({ label, value }: { label: string; value: number }) {
  return (
    <li className="grid justify-items-center text-xs text-[#526070]">
      <strong className="font-serif text-xl font-black text-[#0b2545]">
        {value}
      </strong>
      <span>{label}</span>
    </li>
  );
}
