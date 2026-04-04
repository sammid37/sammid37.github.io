"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { XIcon, ArrowSquareOutIcon  } from "@phosphor-icons/react";
import type { ArtWork } from "@/lib/data/artworks";

interface ArtModalProps {
    artwork: ArtWork;
    onClose: () => void;
}

export default function ArtModal({ artwork, onClose }: ArtModalProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const titleId = `modal-title-${artwork.id}`;

    // Focus close button on open
    useEffect(() => {
        closeButtonRef.current?.focus();
    }, []);

    // ESC key to close
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
            onClose();
        }
        // Focus trap: Tab / Shift+Tab
        if (e.key === "Tab") {
            const modal = document.getElementById("art-modal-dialog");
            if (!modal) return;
            const focusable = modal.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last?.focus();
            }
            } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first?.focus();
            }
            }
        }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div
        className="modal modal-open"
        onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}
        aria-hidden="false"
        >
            <div
                id="art-modal-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="modal-box max-w-2xl w-full relative"
            >
                {/* Close button */}
                <button
                ref={closeButtonRef}
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={onClose}
                aria-label="Fechar modal"
                >
                <XIcon size={18} weight="duotone" aria-hidden="true" />
                </button>

                {/* Image */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-base-200 mb-4">
                    <Image
                        src={artwork.src}
                        alt={artwork.description}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 672px"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                    />
                </div>

                {/* Content */}
                <h2 id={titleId} className="text-xl font-bold">
                {artwork.title}
                </h2>
                <p className="text-sm text-base-content/70 mt-2">{artwork.description}</p>

                {artwork.externalUrl && (
                <div className="modal-action">
                    <a
                    href={artwork.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary gap-2"
                    aria-label={`Ver ${artwork.title} no portfólio externo`}
                    >
                    Ver projeto completo
                    <ArrowSquareOutIcon size={16} weight="duotone" aria-hidden="true" />
                    </a>
                </div>
                )}
            </div>
        </div>
    );
}
