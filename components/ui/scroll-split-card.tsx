"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useMotionTemplate } from "motion/react";
import { useRef, useState, useEffect } from "react";

interface ScrollSplitCardItem {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  icon?: React.ReactNode;
}

interface ScrollSplitCardProps {
  className?: string;
  cards: ScrollSplitCardItem[];
  containerRef?: React.RefObject<HTMLElement | null>;
}

export function ScrollSplitCard({
  className,
  cards,
  containerRef: externalContainerRef,
}: ScrollSplitCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollContainer, setScrollContainer] = useState<
    React.RefObject<HTMLElement | null> | undefined
  >();

  useEffect(() => {
    if (externalContainerRef?.current) {
      setScrollContainer(externalContainerRef);
    }
  }, [externalContainerRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    ...(scrollContainer ? { container: scrollContainer } : {}),
    offset: ["start start", "end end"],
  });

  // Separación vertical: top sube, bottom baja
  const topY    = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, -36, -18]);
  const bottomY = useTransform(scrollYProgress, [0, 0.4, 0.8], [0,  36,  18]);
  const scale   = useTransform(scrollYProgress, [0, 0.4], [1, 0.93]);

  // Flip en eje X
  const rotateX     = useTransform(scrollYProgress, [0.4, 0.8], [0, 180]);
  const rotateZTop  = useTransform(scrollYProgress, [0.4, 0.8], [0, -3]);
  const rotateZBot  = useTransform(scrollYProgress, [0.4, 0.8], [0,  3]);

  // Border radius: conectado → separado con esquinas redondeadas
  const brTop = useTransform(scrollYProgress, [0, 0.2], ["16px 16px 0px 0px", "16px 16px 16px 16px"]);
  const brMid = useTransform(scrollYProgress, [0, 0.2], ["0px 0px 0px 0px",   "16px 16px 16px 16px"]);
  const brBot = useTransform(scrollYProgress, [0, 0.2], ["0px 0px 16px 16px", "16px 16px 16px 16px"]);

  const borderOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.2]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.4]);
  const boxShadow = useMotionTemplate`inset 0 1px 1px rgba(255,255,255,${borderOpacity}), inset 0 -24px 48px rgba(0,0,0,${shadowOpacity}), 0 25px 50px -12px rgba(0,0,0,${shadowOpacity})`;

  // Subida final del grupo
  const cardsY = useTransform(scrollYProgress, [0.8, 1], [0, -80]);

  // Texto "Scroll down"
  const startTextOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const startTextY       = useTransform(scrollYProgress, [0, 0.1], [0, 20]);

  const borderRadiusFor = (i: number) => (i === 0 ? brTop : i === 2 ? brBot : brMid);
  const yFor            = (i: number) => (i === 0 ? topY  : i === 2 ? bottomY : 0);
  const rotateZFor      = (i: number) => (i === 0 ? rotateZTop : i === 2 ? rotateZBot : 0);

  // Textura base para el lado frontal (gradiente + ruido)
  const textureFront = (i: number) => {
    const shades = ["#1c1c1c", "#2a2a2a", "#1a1a1a"];
    return shades[i];
  };

  return (
    <div ref={containerRef} className={cn("relative h-[280vh] w-full", className)}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-gray-950 [perspective:1200px]">

        {/* Scroll down indicator */}
        <motion.div
          className="absolute top-[18%] left-0 right-0 text-center"
          style={{ opacity: startTextOpacity, y: startTextY }}
        >
          <p className="text-xs font-medium tracking-[0.25em] text-white/40 uppercase">
            Scroll down
          </p>
        </motion.div>

        {/* Grupo de cards */}
        <motion.div
          style={{ scale, y: cardsY, transformStyle: "preserve-3d" }}
          className="flex flex-col w-full max-w-sm sm:max-w-lg px-5"
        >
          {cards.slice(0, 3).map((card, i) => (
            <motion.div
              key={i}
              className="relative"
              style={{
                height: "190px",
                y: yFor(i),
                rotateX,
                rotateZ: rotateZFor(i),
                zIndex: i,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Cara frontal: textura */}
              <motion.div
                className="absolute inset-0 overflow-hidden [backface-visibility:hidden]"
                style={{
                  zIndex: 2,
                  borderRadius: borderRadiusFor(i),
                  boxShadow,
                  backgroundColor: textureFront(i),
                }}
              >
                {/* Ruido */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256")`,
                    backgroundRepeat: "repeat",
                  }}
                />
                {/* Líneas sutiles de textura */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.04) 4px)",
                  }}
                />
              </motion.div>

              {/* Cara trasera: contenido de la card */}
              <motion.div
                className={cn(
                  "absolute inset-0 overflow-hidden flex flex-col justify-center items-center text-center px-6 py-5",
                  "[backface-visibility:hidden] will-change-transform",
                  "border border-white/5"
                )}
                style={{
                  backgroundColor: card.bgColor,
                  color: card.textColor,
                  transform: "rotateX(180deg)",
                  zIndex: 1,
                  borderRadius: borderRadiusFor(i),
                  boxShadow,
                }}
              >
                {/* Ruido */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256")`,
                    backgroundRepeat: "repeat",
                  }}
                />
                <div className="relative z-10 mb-auto">{card.icon}</div>
                <h3 className="relative z-10 mb-1.5 text-base sm:text-lg font-semibold leading-snug">
                  {card.title}
                </h3>
                <p className="relative z-10 text-xs sm:text-sm opacity-90 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
