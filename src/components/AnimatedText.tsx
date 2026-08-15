import { motion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  /** delay before the first word animates in */
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  italicFrom?: number;
};

/**
 * Word-by-word reveal. Each word rises, un-blurs and fades in with a
 * staggered delay for a smooth editorial transition.
 */
export function AnimatedText({
  text,
  className,
  delay = 0,
  as = "span",
  italicFrom,
}: AnimatedTextProps) {
  const Tag = motion[as] as typeof motion.span;
  const words = text.split(" ");

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block will-change-transform"
          variants={{
            hidden: { opacity: 0, y: "0.45em", filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <span className={italicFrom !== undefined && i >= italicFrom ? "italic" : undefined}>
            {word}
          </span>
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </Tag>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
