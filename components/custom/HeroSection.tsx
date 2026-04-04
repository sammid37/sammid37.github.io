"use client";

import Link from "next/link";
import { DownloadSimpleIcon, ArrowDownIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef, useState, useCallback } from "react";

// edge: qual lado fixo; edgeVal: distância da borda; top: posição vertical
const STICKERS = [
  { id: 0, edge: "left",  edgeVal: "3%",  top: "10%", color: "bg-primary/25",   size: 56, depth: 0.10 },
  { id: 1, edge: "left",  edgeVal: "5%",  top: "52%", color: "bg-accent/25",    size: 64, depth: 0.07 },
  { id: 2, edge: "left",  edgeVal: "2%",  top: "78%", color: "bg-secondary/25", size: 44, depth: 0.13 },
  { id: 3, edge: "right", edgeVal: "3%",  top: "18%", color: "bg-secondary/25", size: 48, depth: 0.20 },
  { id: 4, edge: "right", edgeVal: "4%",  top: "62%", color: "bg-primary/20",   size: 52, depth: 0.16 },
] as const;

type Offset = { x: number; y: number };

export default function HeroSection() {
  const [dragOffsets, setDragOffsets] = useState<Offset[]>(
    STICKERS.map(() => ({ x: 0, y: 0 }))
  );
  const [scrollY, setScrollY] = useState(0);
  const [activeId, setActiveId] = useState<number | null>(null);
  const dragRef = useRef<{
    id: number;
    startX: number;
    startY: number;
    ox: number;
    oy: number;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sy = window.scrollY;
      setScrollY(sy);
      if (sy === 0) {
        setDragOffsets(STICKERS.map(() => ({ x: 0, y: 0 })));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onMouseDown = useCallback(
    (e: React.MouseEvent, id: number) => {
      e.preventDefault();
      dragRef.current = {
        id,
        startX: e.clientX,
        startY: e.clientY,
        ox: dragOffsets[id].x,
        oy: dragOffsets[id].y,
      };
      setActiveId(id);
    },
    [dragOffsets]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragRef.current) return;
      const { id, startX, startY, ox, oy } = dragRef.current;
      setDragOffsets((prev) => {
        const next = [...prev];
        next[id] = { x: ox + e.clientX - startX, y: oy + e.clientY - startY };
        return next;
      });
    };
    const onMouseUp = () => {
      dragRef.current = null;
      setActiveId(null);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <section
      className="hero min-h-[calc(100vh-4rem)] bg-base-200 relative overflow-hidden"
      aria-label="Apresentação"
    >
      {STICKERS.map((sticker) => {
        const drag = dragOffsets[sticker.id];
        const isActive = activeId === sticker.id;
        return (
          <div
            key={sticker.id}
            onMouseDown={(e) => onMouseDown(e, sticker.id)}
            style={{
              position: "absolute",
              [sticker.edge]: sticker.edgeVal,
              top: sticker.top,
              width: sticker.size,
              height: sticker.size,
              transform: `translate(${drag.x}px, ${drag.y - scrollY * sticker.depth}px)`,
              transition: isActive
                ? "none"
                : "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              cursor: isActive ? "grabbing" : "grab",
              zIndex: isActive ? 10 : 1,
              userSelect: "none",
            }}
            className={`${sticker.color} rounded-xl shadow-sm backdrop-blur-sm`}
            aria-hidden="true"
          />
        );
      })}

      <div className="hero-content text-center max-w-2xl py-16 relative z-10">
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-mono text-primary text-sm uppercase tracking-widest mb-3">
              Olá, eu sou
            </p>
            <h1 className="text-4xl font-bold md:text-6xl leading-tight">
              Samantha Medeiros
            </h1>
            <p className="text-xl font-mono text-base-content/70 mt-3 md:text-2xl">
              Dev &amp; Ilustradora
            </p>
          </div>
          <p className="text-base-content/60 text-lg max-w-lg mx-auto">
            Desenvolvo interfaces com cuidado técnico e expresso criatividade
            através da ilustração digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2">
            <Link href="/dev" className="btn btn-primary gap-2">
              <ArrowDownIcon size={18} weight="duotone" aria-hidden="true" />
              Ver projetos
            </Link>
            <a
              href="/cv.pdf"
              download
              className="btn btn-outline gap-2"
              aria-label="Download CV"
            >
              <DownloadSimpleIcon size={18} weight="duotone" aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
