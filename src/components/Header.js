import '../App.css';
import ajouter from '../img/Ajouter.png';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h4>Bonjour <strong>{localStorage.getItem('user')}</strong> </h4>
          <a className="navbar-brand" href="#">
            <img src={ajouter} className="App-icon" alt="Ajouter" />
          </a>
        </div>
      </nav>
      <div>
        <h1> TOTAL :</h1>
        <h2></h2>
      </div>
      <div className="center-items">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Tous</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Dépenses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Ajouts</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Header;