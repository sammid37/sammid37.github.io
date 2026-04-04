import Image from "next/image";

interface ArtworkCardProps {
    src: string;
    title: string;
    alt: string;
    onClick: () => void;
}

export default function ArtworkCard({
    src,
    title,
    alt,
    onClick,
}: ArtworkCardProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="group relative w-full h-full overflow-hidden rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Ver obra: ${title}`}
        >
            <figure className="relative w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                />
            </figure>
            <figcaption className="absolute bottom-0 right-0 px-2 py-1 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span
                    className="text-xs text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                >
                    {title}
                </span>
            </figcaption>
        </button>
    );
}
