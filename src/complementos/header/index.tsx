import './style.css'
import { Link } from 'react-router-dom'

const Header = () => {

    return(
        <header className="Cabeçalho">
        <div className="GrupoCabeçalho">
            <Link to="/"><p>Home</p></Link>
            <Link to="/login"><p>Login</p></Link>
            <Link to='/cadastro'><p>Cadastro</p></Link>
        </div>
    </header>
    )
}

export default Header