import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
    return (
        <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Imagem */}
            <div className="relative overflow-hidden">
                <img
                    src={`${import.meta.env.BASE_URL}${post.image.replace(/^\//, "")}`}
                    alt={post.title}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Categoria */}
                <span className="absolute left-4 top-4 rounded-md bg-white/90 px-4 py-1 text-sm font-semibold text-green-800 shadow-sm backdrop-blur-sm" style={{padding: "5px"}}>
                    {post.category}
                </span>
            </div>

            {/* Conteúdo */}
            <div className="p-6">

                {/* Data */}
                <p className="text-sm text-green-600" style={{paddingLeft: "10px"}}>
                    {post.date}
                </p>

                {/* Título */}
                <h2 className="mt-2 text-4xl font-bold text-green-800 Birthstone underline" style={{paddingLeft: "10px"}}>
                    {post.title}
                </h2>

                {/* Descrição */}
                <p className="mt-3 line-clamp-3 text-gray-600" style={{padding: "10px"}}>
                    {post.description}
                </p>

                {/* Link */}
                <Link
                    to={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-green-800 transition-colors duration-300 hover:text-green-500"
                    style={{padding: "10px"}}
                >
                    Ler artigo
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </Link>

            </div>
        </article>
    );
}