import "./pages.css";

export default function Home() {
    return(
        <>
            <div className="relative">
                <img src="https://res.cloudinary.com/drhmcuxiy/image/upload/v1786989984/jillwellington-summer-783347_1920_ty7m2p.jpg" alt="Banner" className="w-full max-h-100 md:max-h-150 object-cover" />
                <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
                <h1 className="lg:text-6xl md:text-4xl sm:text-2xl absolute inset-30 md:inset-50 text-zinc-300 Ananda">
                    Aprenda a cuidar de seu jardim
                    <br />
                    folha por folha
                </h1>
            </div>
            <br />
            <br />
            <h1 className="space1 lg:text-5xl md:text-3xl sm:text-2xl font-bold text-green-800 Ananda">Artigos em destaque</h1>
            <br />
        </>
    )
}