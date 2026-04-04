import Link from "next/link";
import { DotsThreeIcon  } from "@phosphor-icons/react/dist/ssr";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutSection() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto" aria-label="Sobre mim">
            <SectionHeader
                title="Sobre mim"
                subtitle=""
            />
            <div className="prose prose-base max-w-none text-base-content/80 space-y-4">
                <p>
                    <b>
                        Sou desenvolvedora de software e ilustradora natural de Caicó-RN, 
                        com formação em Ciência da Computação pela UFPB. 
                    </b>
                </p>
                <p>
                    No desenvolvimento, minha stack de confiança envolve Java (Spring Boot) 
                    e JavaScript/TypeScript (React e Next.js) e busoc evoluir continuamente em meus conhecimentos e técnicas.
                </p>
                <p>
                    Acredito que os pensamentos lógico e criativo são complementares, como por exemplo a aplicoção de 
                    lógica visual em minhas ilustrações e foco nas necessidades e experiência para 
                    o usuário quando estou desenvolvendo software.
                </p>
            </div>
            <div className="mt-6">
                <Link
                href="/sobre"
                className="btn bg-base-100 btn-ghost gap-2 text-primary"
                aria-label="Ler mais sobre mim na página Sobre"
                >
                Saiba mais sobre mim
                <DotsThreeIcon size={18} weight="duotone" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}
