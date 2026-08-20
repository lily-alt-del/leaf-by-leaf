//import { Link } from "react-router-dom";
import "./pages.css";
import posts from "../data/post";
import BlogCard from "../Components/BlogCard";
import { Leaf } from "lucide-react";

export default function Home() {
    const featuredPosts = posts.slice(0, 3);

    return (
        <>
            <div className="relative">
                {/* Banner */}
                <img
                    src="https://res.cloudinary.com/drhmcuxiy/image/upload/v1786989984/jillwellington-summer-783347_1920_ty7m2p.jpg"
                    alt="Banner"
                    className="w-full max-h-100 md:max-h-150 object-cover"
                />

                {/* Overlay para escurecer a imagem */}
                <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

                {/* Texto do Banner */}
                <h1 className="text-4xl md:text-7xl absolute inset-30 md:inset-50 text-zinc-300 Birthstone">
                    Aprenda a cuidar de seu jardim
                    <br />
                    folha por folha
                </h1>
            </div>
            <br />

            {/* Artigos em destaque */}
            <section className="px-6 py-10">
                <h2 className="text-4xl md:text-6xl font-bold text-green-800 Birthstone underline mx-auto max-w-7xl">
                    Artigos em destaque
                </h2>

                {/* Cards dos Artigos */}
                <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3 place-self-center">
                    {featuredPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </section>
            
            {/* hr Personalizado */}
            <div class="flex items-center w-full">
                <div class="grow border-t border-green-500"></div>

                {/* Ícone de Divisão */}
                <span class="flex- mx-4 flex text-green-500">
                    <Leaf size={25} />
                </span>
                <div class="grow border-t border-green-500"></div>
            </div>
            <br />

            {/* Entrar em contato */}
            <section>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-green-800 w-full px-6 py-12">

                    {/* Texto */}
                    <div className="text-white text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl Birthstone underline">
                            Quer nos Acompanhar?
                        </h1>
                        <p className="mt-2">Receba emails de novos posts antecipadamente</p>
                    </div>

                    {/* Email + botão */}
                    <div className="flex items-end gap-8">

                        {/* Email */}
                        <div className="flex flex-col items-center">
                            <h1 className="text-white text-center">Email *</h1>
                            <input
                                type="email"
                                className="mt-2 w-64 outline-none border border-white rounded-4xl text-white px-3 py-2"
                            />
                        </div>

                        {/* Botão */}
                        <button
                            type="submit"
                            className="border border-white text-white rounded-4xl cursor-pointer transition-all duration-300 hover:bg-white hover:text-green-800 px-5 py-2"
                        >
                            Assinar
                        </button>
                    </div>
                </div>
            </section>
            <br />
            {/* hr Personalizado */}
            <div class="flex items-center w-full">
                <div class="grow border-t border-green-500"></div>

                {/* Ícone de Divisão */}
                <span class="flex- mx-4 flex text-green-500">
                    <Leaf size={25} />
                </span>
                <div class="grow border-t border-green-500"></div>
            </div>
            <br />
            
            {/* Curso de Botânica e Fitoterapia + Parallax */}
            <section className="relative">

                {/* Fundo */}
                <div className="paralax"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

                {/* Conteúdo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <p className="text-zinc-100">
                        Curso on-line
                    </p>
                    <h2 className="mt-2 text-4xl md:text-5xl Birthstone underline text-zinc-100">
                        Intensivo de Botânica e Fitoterapia
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-2xl text-zinc-100">
                        Conheça o fascinante mundo das plantas, aprendendo sobre suas
                        características, propriedades e diferentes formas de utilização.
                        Uma jornada para aprofundar seus conhecimentos sobre a natureza e
                        descobrir o potencial das plantas.
                    </p>
                    <button
                        type="submit"
                        className="mt-6 rounded-4xl border-2 border-white px-6 py-2 text-white transition-all duration-300 hover:bg-white hover:text-yellow-800"
                    >
                        Inscreva-se
                    </button>
                </div>
            </section>
        </>
    );
}
