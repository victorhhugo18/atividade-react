import ItemServico from "./ItemServico"

function Servicos() {
    return (
        <div>
            <h2>Contrate nossos serviços:</h2>
            <br />
            <ItemServico foto="https://inventotecnologia.com.br/wp-content/uploads/2019/05/Por-que-voce%CC%82-deveria-investir-em-uma-consultoria-da-Tecnologia-da-Informac%CC%A7a%CC%83o-hoje-mesmo-.jpg" alternativo="Serviço 1" descricao="Oferecer orientaçao especializada sobre implementação de tecnologia." servico="Serviço 1: Consultoria em Tecnologia" preco="R$200,00" />
            <br /><br />
            <ItemServico foto="https://avozdaindustria.com.br/sites/avozdaindustria.com/files/uploads/2018/08/analise-dados-industria4.0.jpg" alternativo="Serviço 2" descricao="Coletar, analisar e interpretar dados para ajudar empresas a tomar decisões informadas." servico="Serviço 2: Análise de Dados" preco="R$500,00" />
            <br /><br />
            <ItemServico foto="https://neilpatel.com/wp-content/uploads/2018/01/word-image-265.jpeg" alternativo="Serviço 3" descricao="Oferecer serviços de hospedagem e manutenção para websites." servico="Serviço 3: Hospedagem e Manutenção de Websites" preco="R$400,00" />
            <br /><br />
        </div>
    )
}

export default Servicos