import { Leaf } from "lucide-react";

export default function About() {
    return (
        <>
            <section className="justify-center items-center text-center py-10 bg-green-50">
                <h1 className="text-8xl Birthstone text-green-700">Sobre</h1>

                {/* hr Personalizado */}
                <div class="flex items-center max-w-3xl mx-auto mb-6">
                    <div class="grow border-t border-green-500"></div>

                    {/* Ícone de Divisão */}
                    <span class="flex- mx-4 flex text-green-500">
                        <Leaf size={25} />
                    </span>
                    <div class="grow border-t border-green-500"></div>
                </div>

                <article className="bg-white shadow-md rounded-2xl p-10 max-w-3xl justify-center items-center text-center mx-auto">
                    <p className="text-lg text-green-700">
                        Este é um projeto pessoal desenvolvido por Lily, com o objetivo de apresentar minhas habilidades e experiências na área de desenvolvimento web. O site foi construído utilizando React, Tailwind CSS e outras tecnologias modernas para criar uma experiência de usuário envolvente e responsiva.
                    </p>
                    <br />
                    <p className="text-lg text-green-700">
                        O site simula um blog de jardinagem, onde compartilho artigos e dicas sobre cuidados com plantas e jardins. Tendo botões interativos no cabeçalho que te levam para páginas diferentes, uma seção que simula um formulário de contato, artigos em destaque e um rodapé com informações de direitos autorais.
                    </p>
                    <br />
                    <p className="text-lg text-green-700">
                        Este projeto faz parte do meu portfólio pessoal, e estou sempre buscando aprimorar minhas habilidades e aprender novas tecnologias para oferecer soluções cada vez melhores.
                        Caso queira ver mais sobre meus projetos, considere visitar meu {""}
                        <a href="https://github.com/lily-alt-del" className="underline text-black hover:text-blue-900">
                            GitHub
                        </a>
                    </p>
                </article>
            </section>
        </>
    )
}