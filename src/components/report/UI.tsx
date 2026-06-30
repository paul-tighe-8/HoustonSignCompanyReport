import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Badge = ({
  children,
  color = "gray",
  className,
}: {
  children: ReactNode;
  color?: "blue" | "green" | "amber" | "red" | "purple" | "gray" | "gold" | "ai" | "cyan";
  className?: string;
}) => {
  return (
    <span className={cn("report-badge", `badge-${color}`, className)}>
      {children}
    </span>
  );
};

export const Callout = ({
  children,
  color = "blue",
  className,
}: {
  children: ReactNode;
  color?: "blue" | "green" | "amber" | "purple" | "ai";
  className?: string;
}) => {
  return (
    <div className={cn("callout", `callout-${color}`, className)}>
      {children}
    </div>
  );
};

export const Rank = ({ rank }: { rank: string | number }) => {
  let rankClass = "rank-10";
  const numRank = Number(rank);

  if (rank === "—") {
    rankClass = "rank-10";
  } else if (!isNaN(numRank)) {
    if (numRank === 1) rankClass = "rank-1";
    else if (numRank === 2) rankClass = "rank-2";
    else if (numRank === 3) rankClass = "rank-3";
    else if (numRank <= 5) rankClass = "rank-5";
    else if (numRank <= 10) rankClass = "rank-10";
    else rankClass = "rank-bad";
  }

  return <span className={cn("rank", rankClass)}>#{rank}</span>;
};

export const SectionHeader = ({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: ReactNode;
}) => (
  <div className="mb-6 border-b border-transparent">
    <div className="text-[10px] font-extrabold text-report-ai uppercase tracking-widest mb-1.5">
      {number}
    </div>
    <h2 className="text-[24px] font-black text-gray-900 leading-tight mb-2">
      {title}
    </h2>
    <p className="text-[13px] text-gray-500 max-w-[700px] leading-relaxed">
      {desc}
    </p>
  </div>
);

export const SubHeading = ({ children }: { children: ReactNode }) => (
  <h3 className="text-[14px] font-bold text-gray-900 mt-6 mb-2.5 pb-1.5 border-b-2 border-gray-200">
    {children}
  </h3>
);

export const ScoreRow = ({
  label,
  score,
  total = 100,
  fillColor,
  tag,
}: {
  label: string;
  score: number;
  total?: number;
  fillColor: "green" | "purple" | "amber" | "red" | "blue" | "ai";
  tag: ReactNode;
}) => (
  <div className="flex items-center gap-3 mb-2.5">
    <div className="text-[12px] font-semibold w-[120px] shrink-0">{label}</div>
    <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={cn("h-full rounded-full", fillColor === 'ai' ? 'bg-gradient-to-r from-report-ai to-report-blue-mid' : `bg-report-${fillColor}`)}
        style={{ width: `${(score / total) * 100}%` }}
      />
    </div>
    <div className="text-[12px] font-bold w-[35px] text-right shrink-0">
      {score}
    </div>
    <div className="text-[10px] font-semibold w-[100px] shrink-0">{tag}</div>
  </div>
);

export const StatBox = ({
  val,
  lab,
  note,
  src,
  ai = false,
  win = false,
  valColor,
  noteColor,
}: {
  val: ReactNode;
  lab: string;
  note: ReactNode;
  src?: ReactNode;
  ai?: boolean;
  win?: boolean;
  valColor?: "green" | "amber" | "blue" | "ai";
  noteColor?: "green" | "amber" | "ai";
}) => {
  return (
    <div
      className={cn(
        "border rounded-lg p-3.5 text-center transition-colors",
        ai
          ? "bg-report-ai-light border-report-ai-border"
          : win
          ? "bg-report-green-light border-green-300"
          : "bg-gray-50 border-gray-200"
      )}
    >
      <div
        className={cn(
          "text-[28px] font-black leading-none",
          valColor === "green"
            ? "text-report-green"
            : valColor === "amber"
            ? "text-report-amber"
            : valColor === "ai"
            ? "text-report-ai"
            : "text-report-blue"
        )}
      >
        {val}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-1">
        {lab}
      </div>
      <div
        className={cn(
          "text-[10px] font-semibold mt-1",
          noteColor === "amber" ? "text-report-amber" : noteColor === "ai" ? "text-report-ai" : "text-report-green",
          !noteColor && "text-report-green"
        )}
      >
        {note}
      </div>
      {src && (
        <div className="text-[9px] text-gray-400 italic mt-1">{src}</div>
      )}
    </div>
  );
};
