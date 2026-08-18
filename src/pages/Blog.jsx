import { Link } from "react-router-dom";
import posts from "../data/post";

export default function Blog() {
    return (
        <main className="min-h-screen bg-green-50 px-6 py-12">
            
            <div className="mx-auto max-w-7xl">

                {/* Título */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-green-900">
                        Blog Leaf by Leaf
                    </h1>

                    <p className="mt-4 text-lg text-green-800">
                        Aprenda a cuidar do seu jardim folha por folha.
                    </p>
                </div>

                {/* Cards */}
                <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            {/* Imagem */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="h-56 w-full object-cover"
                            />

                            {/* Conteúdo */}
                            <div className="p-6">

                                <p className="mb-2 text-sm text-green-600">
                                    {post.date}
                                </p>

                                <h2 className="text-2xl font-bold text-green-900">
                                    {post.title}
                                </h2>

                                <p className="mt-3 text-gray-600">
                                    {post.description}
                                </p>

                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="mt-6 inline-block font-semibold text-green-700 transition hover:text-green-500"
                                >
                                    Ler artigo →
                                </Link>

                            </div>
                        </article>
                    ))}

                </section>
            </div>
        </main>
    );
}