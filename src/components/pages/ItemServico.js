import PropTypes from 'prop-types';

function ItemServico(props) {
    return (
        <div>
            <h4>{props.servico}</h4>
            <img src={props.foto} alt={props.alternativo} />
            <p>Descrição:</p>
            <p>{props.descricao}</p>
            <p>Preço: {props.preco}</p>
        </div>
    )
}

export default ItemServico