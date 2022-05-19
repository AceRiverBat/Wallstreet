import '../App.css';
import ajouter from '../img/Ajouter.png';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h4>Bonjour <strong>{localStorage.getItem('user')}</strong> </h4>
          <Link className="nav-link" to="/Ajouter"><img src={ajouter} className="App-icon" alt="Ajouter" /></Link>
        </div>
      </nav>
      <div>
        <h1> TOTAL :</h1>
        <h2> <strong>{localStorage.getItem('solde.value')}</strong> </h2>
      </div>
      <div className="center-items">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to="/"><p>Tous</p></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Solde"><p>Entrer un nouveau solde</p></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
      
    </header>
  );
};

export default Header;