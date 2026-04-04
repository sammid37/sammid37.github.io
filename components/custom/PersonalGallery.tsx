import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

interface GalleryImage {
    src: string;
    alt: string;
}

interface PersonalGalleryProps {
    images?: GalleryImage[];
}

export default function PersonalGallery({ images = [] }: PersonalGalleryProps) {
    if (images.length === 0) return null;

    return (
        <section
        className="py-16 px-6 bg-base-200"
        aria-label="Galeria pessoal"
        >
            <div className="max-w-4xl mx-auto">
                <SectionHeader title="Um pouco sobre mim" />
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {images.map((img, i) => (
                    <div
                    key={i}
                    className="relative aspect-square rounded-lg overflow-hidden bg-base-300"
                    >
                    <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        loading="lazy"
                    />
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
