import { Link } from "react-router-dom";
import './erro.css';

function Erro() {
    return(
        <div className="not-found"> 
            <h1>Erro 444</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/" >Veja todos os fimes!</Link>
        </div>
    )
}

export default Erro;