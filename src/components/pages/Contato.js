import ItemFormulario from "./ItemFormulario"

function Contato() {
    return (
        <div>
            <h2>Contato</h2>
            <p><b>Entre em contato:</b></p>
            <ItemFormulario name="nome" label="Nome" tipo="text" ph="Digite seu Nome"/>
            <ItemFormulario name="email" label="E-mail" tipo="text" ph="Digite seu e-mail"/>
            <ItemFormulario name="assunto" label="Assunto" tipo="textarea" ph="Digite o assunto"/>
            <ItemFormulario name="mensagem" label="Mensagem" tipo="textarea" ph="Digite sua mensagem"/>
            <button>Enviar</button>
        </div>

    )
}

export default Contato