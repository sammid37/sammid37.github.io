import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutFull() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto" aria-label="Sobre mim — completo">
            <SectionHeader 
                title="Olá, eu sou Samantha" 
                subtitle="[Página em construção] Eu sou a desenvolvedora e artista por trás disso tudo." 
                level={1} />
            <div className="grid gap-10 md:grid-cols-[1fr_auto]">
                <div className="prose prose-base text-base-content/80 space-y-4 max-w-none text-justify">
                <p>
                    Sou desenvolvedora de software e ilustradora digital natural de Caicó-RN. 
                    Minha jornada começa no curso técnico integrado em Informática no IFRN Campus Caicó, 
                    onde tive o prazer de conviver com professores e colegas incríveis e me incentivaram a buscar mais. 
                    Foi então que cursei Ciência da Computação na UFPB e entrei para o PET Computação. 
                    Na UFPB tive minhas primeiras experiências opotunidades profissionais, deixei minha marca no PET Computação 
                    criando o mascote Petrúcio e aprendi muito mais do que podia imaginar.  
                </p>
                <p>
                    Atualmente estou desenvolvendo minhas habilidades com minha stack de confiança, o bom e velho Java (mas com Spring Boot)
                    e algum framework de JavaScript/TypeScript (muita das vezes React com Next.js). 
                    Estou sempre buscando aprender e minha prateleira está aos poucos sendo preenchida com mais livros técnicos
                    junto aos meus cadernos de desenho e livros sobre arte.  
                </p>
                <p>
                    Paralelamente, cultivo uma prática artística em ilustração há anos. 
                    Acredito que o pensamento criativo e o pensamento técnico
                    não são opostos, são complementares. Quando programo, penso em
                    como a experiência vai se sentir para o usuário. Quando ilustro,
                    penso em estrutura, composição e lógica visual.
                </p>
                <p>
                    Muitos dos meus trabalhos acompanham muitos pássaros, rabiscos do meu cachorro Dudu e muitos outros
                    personagens adoráveis. Quando posso, desenvolvo um pouco as histórias que um dia almejo contar. 
                </p>
                <p>
                    Estou sempre aberta a novos projetos, seja no universo do
                    desenvolvimento de software ou da ilustração. Se quiser conversar
                    sobre uma colaboração, projeto ou só trocar ideias, é só entrar em
                    contato.
                </p>
                </div>
                <div className="flex justify-center md:justify-start card card-sm bg-base-200 max-w-95 shadow">
                    <figure className="hover-gallery">
                        <img src="/profile/sammid_profile_pixel.png" className="w-95 h-92 object-cover" />
                        <img src="/profile/sammid_dudu_zoiudinho.jpg" className="w-95 h-92 object-cover" />
                        <img src="/profile/sammid_dudu_happy.jpg" className="w-95 h-92 object-cover" />
                        <img src="/profile/sammid_dudu_blurred.jpg" className="w-95 h-92 object-cover" />
                        <img src="/profile/sammid_doodle.png" className="w-95 h-92 object-cover" />

                    </figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between" style={{fontFamily: "var(--font-space-mono)"}}>
                            <i>
                                Samantha <br/>
                                <small className="text-xs text-neutral/50">
                                    Sam, Sá, Sassá
                                </small>
                            </i>
                        <span className="flex flex-wrap gap-2">
                            <div className="badge badge-outline">
                                ISFJ
                            </div>
                            {/*<div className="badge badge-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zodiac-virgo-icon lucide-zodiac-virgo"><path d="M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5"/><path d="M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5"/><path d="M6 19V6a3 3 0 0 0-3-3h0"/><path d="M6 5.5a1 1 0 0 1 5 0V19"/></svg>
                            </div>*/}
                        </span>
                        </h2>
                        <p style={{fontFamily: "var(--font-space-mono)"}}>Em breve uma descrição legal aqui. Mas eu tenho um cachorro idoso chamado Dudu e amo meus 12 dinossauros.</p>
                    </div>
                    </div>
                </div>
        </section>
    );
}
