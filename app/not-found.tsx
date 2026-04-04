import Link from "next/link";

export default function NotFound() {
    return (
        <div className="hero min-h-[calc(100vh-4rem)]">
            <div className="hero-content text-center flex-col gap-6">
                <p className="font-mono text-primary text-sm uppercase tracking-widest">
                Erro 404
                </p>
                <h1 className="text-5xl font-bold">Página não encontrada</h1>
                <p className="text-base-content/60 max-w-sm">
                A página que você está procurando não existe ou foi movida.
                </p>
                <Link href="/" className="btn btn-primary">
                Voltar para a Home
                </Link>
            </div>
        </div>
    );
}
