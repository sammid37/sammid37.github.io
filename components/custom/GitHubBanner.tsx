import { GithubLogo, ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";

const GITHUB_URL = "https://github.com/sammid37";

export default function GitHubBanner() {
    return (
        <div className="mt-12 rounded-2xl bg-base-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <GithubLogo size={40} weight="duotone" aria-hidden="true" className="text-base-content/60" />
                <div>
                    <p className="font-bold text-lg">Ver mais no GitHub</p>
                    <p className="text-sm text-base-content/60">
                        Confira todos os repositórios e projetos.
                    </p>
                </div>
            </div>
            <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2 shrink-0"
                aria-label="Ir para o perfil GitHub de sammid37"
            >
                github.com/sammid37
                <ArrowSquareOutIcon size={16} weight="duotone" aria-hidden="true" />
            </a>
        </div>
    );
}
