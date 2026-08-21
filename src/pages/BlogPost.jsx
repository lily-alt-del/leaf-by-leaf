import { Link, useParams } from "react-router-dom";
import posts from "../data/post";

export default function BlogPost() {

    const { slug } = useParams();

    const post = posts.find(
        (post) => post.slug === slug
    );

    // Caso o artigo não exista
    if (!post) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-green-50 px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-green-900">
                        Artigo não encontrado 🌱
                    </h1>

                    <p className="mt-4 text-gray-600">
                        Parece que essa folha ainda não nasceu.
                    </p>

                    <Link
                        to="/blog"
                        className="mt-6 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
                    >
                        Voltar para o blog
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-green-50 px-6 py-12">

            <article className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-md md:p-10">

                {/* Data */}
                <p className="text-sm font-medium text-green-600">
                    {post.date}
                </p>

                {/* Título */}
                <h1 className="mt-3 text-4xl font-bold text-green-900 md:text-5xl">
                    {post.title}
                </h1>

                {/* Imagem */}
                <img
                    src={post.image}
                    alt={post.title}
                    className="mt-8 h-64 w-full rounded-xl object-cover md:h-96"
                />

                {/* Texto */}
                <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">

                    {post.content.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}

                </div>

                <p className="mt-6 text-sm text-gray-500">
                    {post.link && (
                        <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:underline"
                        >
                            Leia o artigo original
                        </a>
                    )}
                </p>

                {/* Voltar */}
                <div className="mt-10 border-t border-gray-200 pt-6">

                    <Link
                        to="/blog"
                        className="font-semibold text-green-700 transition hover:text-green-500"
                    >
                        ← Voltar para o Blog
                    </Link>

                </div>

            </article>

        </main>
    );
}