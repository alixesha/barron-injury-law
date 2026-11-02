import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "right" | "left" | "up" | "scale";

interface RevealProps {
  children: ReactNode;
  /** "right" (text/elements enter from the right), "left", "up", "scale" */
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "article" | "p" | "h1" | "h2" | "h3";
}

/**
 * Scroll-reveal wrapper. Elements start offset (default: from the right)
 * and glide into place the first time they enter the viewport.
 */
export function Reveal({
  children,
  direction = "right",
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as never}
      data-direction={direction}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
