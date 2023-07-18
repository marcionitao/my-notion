
export default function App() {

  return (
    <div className={`min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100`}>
      <div className={`bg-white w-[1100px] mx-auto rounded-xl min-h-[600px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]`}>
        <aside className={`bg-zinc-50 border-r border-r-zinc-100 p-4`}>
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full group-hover:bg-red-400 bg-zinc-300" />
            <button className="w-3 h-3 rounded-full group-hover:bg-yellow-400 bg-zinc-300" />
            <button className="w-3 h-3 rounded-full group-hover:bg-green-400 bg-zinc-300" />
          </div>
        </aside>
        <main className={`p-4`}>
          <div className='max-w-[700px] mx-auto pt-16 prose prose-violet'>
            <h1>Vantagens e Desvantagens do Tailwind CSS em Projetos React</h1>
            <h2>Vantagens</h2>
            <p><strong>1. Produtividade:</strong></p>
            <p>O Tailwind CSS é uma biblioteca de utilitários CSS que permite criar interfaces de forma rápida e eficiente. Com uma ampla variedade de classes pré-definidas, você pode estilizar componentes facilmente, sem precisar escrever CSS personalizado do zero.</p>
            <p><strong>2. Flexibilidade:</strong></p>
            <p>O Tailwind CSS fornece uma abordagem de design "utilities-first", onde você combina classes para criar estilos personalizados. Isso oferece uma flexibilidade enorme para personalizar o visual dos componentes, permitindo criar designs exclusivos sem se limitar a um conjunto fixo de estilos pré-definidos.</p>
            <p><strong>3. Responsividade:</strong></p>
            <p>O Tailwind CSS possui classes responsivas embutidas que facilitam a criação de layouts responsivos para diferentes tamanhos de tela. Com classes como <code>sm</code>, <code>md</code>, <code>lg</code> e <code>xl</code>, você pode ajustar a aparência dos componentes em dispositivos móveis, tablets e desktops.</p>
            <h2>Desvantagens</h2>
            <p><strong>1. Tamanho do bundle:</strong></p>
            <p>Uma desvantagem do Tailwind CSS é que ele pode aumentar o tamanho do bundle final do seu aplicativo. Como o Tailwind CSS possui muitas classes utilitárias, todas essas classes precisam ser incluídas no arquivo CSS final, o que pode resultar em um arquivo maior do que o necessário.</p>
            <p><strong>2. Curva de aprendizado inicial:</strong></p>
            <p>Embora o Tailwind CSS seja poderoso, pode haver uma curva de aprendizado inicial para entender como usar efetivamente as classes utilitárias e combinar os estilos corretamente. Isso pode ser especialmente verdadeiro se você não estiver familiarizado com a abordagem "utilities-first" ou se estiver acostumado a escrever CSS personalizado.</p>
            <p><strong>3. Personalização limitada:</strong></p>
            <p>Embora o Tailwind CSS seja flexível, há casos em que você pode precisar de estilos mais personalizados que não são facilmente alcançados apenas com as classes utilitárias. Nesses casos, pode ser necessário escrever CSS personalizado adicional ou usar classes do Tailwind CSS em conjunto com estilos personalizados.</p>
          </div>
        </main>
      </div>
    </div >
  )
}
