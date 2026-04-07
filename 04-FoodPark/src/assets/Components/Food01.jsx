
function Food01() {
  return (
    <div className=" m-2">
      <header>
        <h1 className="text-2xl font-bold">Churrascaria do Gaúcho</h1>
      </header>
      <br />
      <section>
        <div>
          <p>
            Do Gildo Teixeira Fagundes Filho (carinhosamente chamado de Seu Gildāo pelos amigos e de “ô Gaúcho” pelos clientes).
            O filho do Gildo, Gildo Teixeira Fagundes Neto (mais conhecido pelo nome comercial: Fagundes Neto), 
            enche a Kombi de polar no fim do ano e passa o verão veraneando nos ingleses e vendendo polar pra gaúcho saudosista. 
            No fim do verão, enche a Kombi de pureza e volta pro RS .
          </p>
        </div>
        <br />
        <div>
          <label htmlFor="" className="font-bold">Cardápio:</label>
          <ul className="list-disc px-5">
            <li>Costela no fogo de chão</li>
          </ul>
          <br />
          <label htmlFor="" className="font-bold">Bebidas:</label>
          <ul className="list-disc px-5">
            <li>Pepsi</li>
            <li>Polar</li>
          </ul>
        </div>    
      </section>

      <section className="grid place-items-center">
        <img src="/images/CristianoChurrasco.jpeg" alt="" />
      </section>
    </div>
  )
}

export default Food01
