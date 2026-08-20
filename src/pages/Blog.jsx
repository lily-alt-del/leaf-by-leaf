import BlogCard from "../Components/BlogCard";
import posts from "../data/post.js";

export default function Blog() {
    return (
        <main className="min-h-screen bg-green-50">
            <br />
            {/* Título do Blog */}
            <section className="px-6 py-20 text-center">
                <h1 className="text-9xl font-bold text-green-700 md:text-5xl Birthstone underline">
                    Blog
                </h1>
            </section>
            <br />
            <br />

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