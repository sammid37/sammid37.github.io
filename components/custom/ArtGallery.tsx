"use client";

import { useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { artworks, type ArtWork } from "@/lib/data/artworks";
import ArtworkCard from "@/components/ui/ArtworkCard";
import { PaintBrushIcon } from "@phosphor-icons/react";

const ArtModal = dynamic(() => import("./ArtModal"), { ssr: false });

export default function ArtGallery() {
    const [selected, setSelected] = useState<ArtWork | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const containerRefs = useRef<Map<string, HTMLDivElement>>(new Map());

    const getContainerRef = useCallback(
        (id: string) => (el: HTMLDivElement | null) => {
        if (el) {
            containerRefs.current.set(id, el);
        } else {
            containerRefs.current.delete(id);
        }
        },
        []
    );

    function handleCardClick(artwork: ArtWork) {
        const container = containerRefs.current.get(artwork.id);
        const btn = container?.querySelector("button") ?? null;
        triggerRef.current = btn;
        setSelected(artwork);
    }

    function handleClose() {
        setSelected(null);
        triggerRef.current?.focus();
        triggerRef.current = null;
    }

    return (
        <>
            <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
                aria-label="Grade de obras de arte"
            >
                {artworks.map((artwork) => (
                <div
                    key={artwork.id}
                    ref={getContainerRef(artwork.id)}
                    style={{
                    gridColumn: artwork.span?.col
                        ? `span ${artwork.span.col}`
                        : undefined,
                    gridRow: artwork.span?.row
                        ? `span ${artwork.span.row}`
                        : undefined,
                    }}
                >
                    <ArtworkCard
                    src={artwork.src}
                    title={artwork.title}
                    alt={artwork.description}
                    onClick={() => handleCardClick(artwork)}
                    />
                </div>
                ))}
            </div>
            {selected && <ArtModal artwork={selected} onClose={handleClose} />}

            <div className="py-5"></div>

            <div role="alert" className="alert alert-error" style={{fontFamily: "var(--font-space-mono)"}}>
                <PaintBrushIcon size={32} weight="duotone" />
                <span>
                    <b>É importante ressaltar que nenhum desses desenhos foi feito com Inteligência Artificial Generativa.</b>
                    <p className="mt-2">Todas as imagens exibidas aqui (e no restante do portfolio) foram todas feitas por mim em tanto mídia tradicional (aquarela, lápis de cor e etc) quanto em mídia digital (utilizando softwares de ilustração e mesa digitalizadora).</p>
                    <p className="mt-0.5">Espero que respeite e aprecie todo o meu trabalho e dedicação.</p>
                </span>
            </div>
        </>
    );
}
