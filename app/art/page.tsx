
import SectionHeader from "@/components/ui/SectionHeader";
import ArtGallery from "@/components/custom/ArtGallery";

export const metadata = {
    title: "Arte — Samantha Medeiros",
    description: "Galeria de ilustrações e concept art de Samantha Medeiros.",
};

export default function ArtPage() {
    return (
        <section className="py-16 px-6 max-w-7xl mx-auto" aria-label="Galeria de arte">
            <SectionHeader
                title="Galeria de Arte"
                subtitle="[Página em construção] Uma seleção das minhas ilustrações, animações e desenhos favoritos."
                level={1}
            />
            <ArtGallery />
        </section>
    );
}
