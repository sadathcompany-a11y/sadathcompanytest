import { motion } from "motion/react";
import { forwardRef, type ReactNode } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  /** delay before the first word animates in */
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  italicFrom?: number;
};

/**
 * Word-by-word reveal. Each word rises and fades in with a staggered
 * delay for a smooth editorial transition.
 */
export const AnimatedText = forwardRef<HTMLElement, AnimatedTextProps>(function AnimatedText(
  { text, className, delay = 0, as = "span", italicFrom },
  ref,
) {
  const Tag = motion[as] as typeof motion.span;
  const words = text.split(" ");

  return (
    <Tag
      ref={ref as React.Ref<HTMLSpanElement>}
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
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: "0.35em" },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
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
});

export const FadeIn = forwardRef<
  HTMLDivElement,
  { children: ReactNode; delay?: number; className?: string }
>(function FadeIn({ children, delay = 0, className }, ref) {
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
});
