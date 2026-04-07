

function Food02() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-8 text-center">
        <h1 className="font-black text-2xl text-green-900">Bem-vindo à Taberna Periódica.</h1>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <p className="text-stone-800 leading-relaxed">
          No limite entre cozinha e laboratório, a Taberna Periódica é comandada por
          Valtério Branco, um homem calmo, calculista e perigosamente perfeccionista.
          Ex-professor de química, ele transformou frascos em copos, fórmulas em receitas
          e a tabela periódica em cardápio. Cada prato segue uma “reação controlada”,
          cada bebida chega com precisão quase científica.

          Dizem que Valtério começou pequeno, cozinhando para poucos clientes… até que
          a fama se espalhou. Hoje, viajantes, figuras suspeitas e curiosos se reúnem
          ali para provar sabores “puros”, preparados com método rigoroso. Na Taberna
          Periódica, nada é improvisado. Tudo é medido. Tudo é… quase perfeito.
        </p>

        <div>
          <img src="/images/ValterioBranco.jpeg"
            alt="Valterio Branco"
            className="w-full h-100 object-cover rounded-xl shadow-lg"
          />
          <p className="text-sm italic text-green-900">
            “Eu não estou servindo comida. Eu sou o cozinheiro.”
          </p>
        </div>
      </section>
      <br />
      <section className="text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-8">
          Cardápio da Taberna
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto text-center">

          <div>
            <h3 className="text-xl font-bold text-green-900 mb-3">
              Entradas
            </h3>
            <ul className="space-y-2 text-stone-800">
              <li>Cristais Azuis</li>
              <li>Nachos Los Pollos</li>
              <li>Batatas Heisen</li>
            </ul>
          </div> 

          <div>
            <h3 className="text-xl font-bold text-green-900 mb-3">
              Pratos Principais
            </h3>
            <ul className="space-y-2 text-stone-800">
              <li>Hambúrguer Heisenberg</li>
              <li>Costelas Albuquerque</li>
              <li>Frango do Laboratório</li>
              <li>Chili do Deserto</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-900 mb-3">
              Bebidas
            </h3>
            <ul className="space-y-2 text-stone-800">
              <li>Blue Sky Drink</li>
              <li>Pink Bear Lemonade</li>
              <li>Café Galeão</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-900 mb-3">
              Sobremesas
            </h3>
            <ul className="space-y-2 text-stone-800">
              <li>Cheesecake Jane</li>
              <li>Brownie Breaking</li>
              <li>Pudim Azul Metilado</li>
            </ul>
          </div>

        </div>
      </section>


    </div>
  )
}

export default Food02
