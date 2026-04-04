"use client";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="hero min-h-[calc(100vh-4rem)]">
            <div className="hero-content text-center flex-col gap-6">
                <p className="font-mono text-error text-sm uppercase tracking-widest">
                Erro inesperado
                </p>
                <h2 className="text-4xl font-bold">Algo deu errado</h2>
                <p className="text-base-content/60 max-w-sm">
                Ocorreu um problema ao carregar esta página. Tente novamente.
                </p>
                <button className="btn btn-primary" onClick={reset}>
                Tentar novamente
                </button>
            </div>
        </div>
    );
}
