import './InfPagamento.css';

function InfPagamento () {

  return (  
    <div>
      <div className="container">
        <div className='cima'>
          <div className='perfil'>

          </div>
        </div>
        <div className='meio'>
          <div className='local'>

            <div className='input'>

              <input placeholder='Nome Completo' className='input1'/><input placeholder='CEP' className='input2'/>
            </div>
            <div className='input'>

              <input placeholder='Estado' className='input3'/><input placeholder='Cidade' className='input4'/>

            </div>
            <div className='input'>

              <input placeholder='Bairro' className='input3'/><input placeholder='Numero da Rua' className='input4'/>

            </div>
            <div className='input'>

              <input placeholder='DDD' className='input5'/><input placeholder='Telefone' className='input6'/>

            </div>

          </div>
          <div className='historico'>
            <div className='compra'>
              <div className='produto'>

              </div>
              
            </div>
            <div className='botao_compra' >
              <div className='buton' /*onClick={alert("")}*/ name="signUp">
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default InfPagamento;