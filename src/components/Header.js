import '../App.css';
import profil from '../img/Profil.png';
import ajouter from '../img/Ajouter.png';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src={profil} className="App-icon" alt="profil" />
          </a>
          <a className="navbar-brand" href="#">
          <img src={ajouter} className="App-icon" alt="Ajouter" />
          </a>
        </div>
      </nav>
      <div>
          <h1> TOTAL :</h1>
          <h2></h2>
        </div>
    </header>
  );
};

export default Header;