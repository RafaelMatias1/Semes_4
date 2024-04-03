
export default function CardProduto(props) {
 return (
   <div>
        <h2>{props.nome}</h2>
        <p>valor: R${props.valor}</p>
   </div>
 );
}