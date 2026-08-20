import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo_leafbyleaf.png";
import "./NavBar.css"

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="border-b-4 border-green-500 bg-white shadow-xl relative" >
                <nav className=" flex items-center justify-between" style={{ marginInline: "40px" }}>

                    {/* Logo */}
                    <a href="/">
                        <img src={logo} alt="Leaf by Leaf" className="w-38 md:w-52" />
                    </a>

                    {/* Menu Desktop */}
                    <ul className="hidden md:flex items-center gap-10 font-medium lg:text-md text-green-900">
                        <li>
                            <a
                                href="/"
                                className="transition-colors duration-300 hover:text-green-500 link-animado"
                            >
                                Início
                            </a>
                        </li>

                        <li>
                            <a
                                href="/blog"
                                className="transition-colors duration-300 hover:text-green-500 link-animado"
                            >
                                Blog
                            </a>
                        </li>

                        <li>
                            <a
                                href="/about"
                                className="transition-colors duration-300 hover:text-green-500 link-animado"
                            >
                                Sobre
                            </a>
                        </li>

                    </ul>

                    {/* Botão Mobile */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-green-900"
                    >
                        <Menu size={32} />
                    </button>
                </nav>
            </header>

            {/* Fundo escuro */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            {/* Menu lateral */}
            <aside
                className={`fixed top-0 right-0 h-screen w-72 z-50 bg-white shadow-2xl transform transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end">
                    <button onClick={() => setMenuOpen(false)} className="text-green-900" style={{paddingInline: "46px", paddingTop: "23px", paddingBottom: "15px"}}>
                        <X size={32} />
                    </button>
                </div>

                <hr />

                <ul className="flex flex-col gap-8 px-8 text-xl font-medium text-green-900 underline" style={{ marginLeft: "15px", paddingTop: "20px"}}>
                    <li>
                        <a href="/" onClick={() => setMenuOpen(false)}>
                            Início
                        </a>
                    </li>

                    <li>
                        <a href="/blog" onClick={() => setMenuOpen(false)}>
                            Blog
                        </a>
                    </li>

                    <li>
                        <a href="/about" onClick={() => setMenuOpen(false)}>
                            Sobre
                        </a>
                    </li>

                    <li>
                        <a href="/contact" onClick={() => setMenuOpen(false)}>
                            Contato
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}
