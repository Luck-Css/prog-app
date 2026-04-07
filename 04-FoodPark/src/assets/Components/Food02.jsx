

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
      


    </div>
  )
}

export default Food02
