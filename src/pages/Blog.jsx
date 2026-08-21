import BlogCard from "../Components/BlogCard";
import posts from "../data/post.js";
import { Leaf } from "lucide-react";

export default function Blog() {
    return (
        <main className="min-h-screen bg-green-50">
            <br />
            {/* Título do Blog */}
            <section className="text-center">
                <h1 className="text-8xl text-green-700 Birthstone">
                    Blog
                </h1>
            </section>
            

            {/* hr Personalizado */}
            <div class="flex items-center max-w-7xl mx-auto py-6">
                <div class="grow border-t border-green-500"></div>

                {/* Ícone de Divisão */}
                <span class="flex- mx-4 flex text-green-500">
                    <Leaf size={25} />
                </span>
                <div class="grow border-t border-green-500"></div>
            </div>

            {/* Lista de posts */}
            <section className="px-6 pb-20 flex justify-center">
                <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                        />
                    ))}
                </div>
            </section>
            <br />
            <br />
        </main>
    );
}