
function Home() {
  return (
    <div>
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <p>
          Food park de food truck Parque de Comidas. 
          Clichês, comidas, bebidas e pleonasmos.Está crescendo tanto que a administração está bolando um processo 
          de expansão para um Shopping Center invertido, onde a Praça de Alimentação terá um *shoppingzinho* 
          em volta dela com algumas lojas.Reune os melhores clichês da culinária como: 
          Pastelaria Casa de Pastel, lanchonete altas horas, Acarajessica, Batataria da Tábata, 
          Churrascaria do Gaúcho, Tio do Pavê e outros sucessos questionáveis
        </p>
        <img src="/images/Mony.jpeg" 
        alt="Mony.jpeg" 
        className="w-full h-100 object-cover rounded-xl shadow-lg"/>
      </section>

      <section>
        <img src="/images/food-park.png" 
        alt="food-park,png" 
        className="rounded-xl m-8"/>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <h1 className="text-center font-bold text-4xl">SHOW AO VIVO</h1>
        <p>Os shows ao vivo são parte central da experiência do Food Park. Ao longo da semana, 
          o espaço recebe bandas e artistas locais que trazem diferentes estilos musicais, 
          criando um ambiente dinâmico e acolhedor para todos os públicos. As apresentações 
          acontecem em um palco preparado para valorizar tanto performances acústicas quanto sets 
          mais animados, sempre mantendo o conforto de quem vem aproveitar a gastronomia.
          A proposta é unir boa música e boa comida em um só lugar. Enquanto o público circula entre os food trucks, 
          os artistas criam a trilha sonora da noite, transformando cada visita em uma experiência completa. 
          Dos clássicos do rock ao MPB, passando por pop, indie e autorais, cada show adiciona 
          uma nova atmosfera ao Food Park.</p>
        <img src="/images/KeyCobain.jpeg" 
        alt="KeyCobain.jpeg" 
        className="w-full h-180 object-cover rounded-xl shadow-lg"/>
        
        <img src="/images/Mad.jpeg" 
        alt="Mad.jpeg" 
        className="w-full h-180 object-cover rounded-xl shadow-lg"/>
      </section>
    </div>
  )
}

export default Home
