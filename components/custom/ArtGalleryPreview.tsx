import Link from "next/link";
import Image from "next/image";
import { ArrowCircleRightIcon } from "@phosphor-icons/react/dist/ssr";
import { artworks } from "@/lib/data/artworks";
import SectionHeader from "@/components/ui/SectionHeader";

const PREVIEW_COUNT = 4;

export default function ArtGalleryPreview() {
    const preview = artworks.slice(0, PREVIEW_COUNT);

    return (
        <section
        className="py-16 px-6 bg-base-200"
        aria-label="Galeria de arte — prévia"
        >
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                title="Arte"
                subtitle="Uma seleção das minhas ilustrações, animações e desenhos favoritos."
                />
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {preview.map((artwork) => (
                    <Link
                    key={artwork.id}
                    href="/art"
                    className="card card-bordered overflow-hidden hover:ring-2 hover:ring-primary transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                    aria-label={`Ver galeria — obra: ${artwork.title}`}
                    >
                    <figure className="relative aspect-square w-full bg-base-300">
                        <Image
                        src={artwork.src}
                        alt={artwork.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 25vw"
                        loading="lazy"
                        />
                    </figure>
                    </Link>
                ))}
                </div>
                <div className="mt-8 text-center">
                <Link
                    href="/art"
                    className="btn btn-soft bg-base-200 border-neutral/30 gap-2 hover:border-primary"
                    aria-label="Ver galeria completa de arte"
                >
                    Ver galeria completa
                    <ArrowCircleRightIcon size={18} weight="duotone" aria-hidden="true" />
                </Link>
                </div>
            </div>
        </section>
    );
}
