import './App.css'
import CardProduto from './componentes/CardProduto'

function App() {

  let produtos =[
    { id:1, nome:'Laranja', valor:'6.01'}
  ]

  return (
    <>
      {/*<CardProduto nome={"laranjinha"} valor={"5.77"} />
      <CardProduto nome={"Purezinha"} valor={"6.50"} />*/}

      {produtos.map((produto)=>(
        <CardProduto key={produto.id} nome={produto.nome} valor={produto.valor}/>
      ))}

    </> 
  )
}

export default App
