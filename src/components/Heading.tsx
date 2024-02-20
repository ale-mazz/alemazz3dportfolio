import clsx from "clsx";
import React from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  size = "lg",
  className,
  children,
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight text-slate-300",
        size === "sm" && "text-3xl md:text-4xl",
        size === "md" && "text-5xl md:text-6xl",
        size === "lg" && "text-6xl md:text-8xl",
        size === "xl" && "text-7xl md:text-9xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
