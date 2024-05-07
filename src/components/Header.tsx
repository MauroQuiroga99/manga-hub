import "../css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faNewspaper,faStarHalfStroke, faFileInvoice, faPlus} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="logo">
            <h1>
              Manga<b>Hub</b>
            </h1>
          </div>

          <div className="menu">
            <nav>
              <ul >
                <li className="nav-item">
                  <a href="#"> <i> <FontAwesomeIcon icon={faNewspaper} /></i>Noticias</a>
                </li>
                <li className="nav-item">
                  <a href="#"><i> <FontAwesomeIcon icon={faStarHalfStroke} /></i>Reseñas</a>
                </li>
                <li className="menu-select">
                  <a href="#" className="text-menu-select">
                     <i><FontAwesomeIcon icon={faFileInvoice } /></i>Árticulos
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#"><i><FontAwesomeIcon icon={faPlus } /></i> Más</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="icon-menu" id="icon-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </>
  );
}
export default Header;
