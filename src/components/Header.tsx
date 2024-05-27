import "../app/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faNewspaper,
  faStarHalfStroke,
  faFileInvoice,
  faPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="input-header">
            <input
              type="text"
              placeholder=" Anime, Manga, comics ... Anime, Manga, comics ..."
            />

            <button>
              <i>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
            </button>
          </div>

          <div className="menu">
            <nav className="navbar">
              <ul>
                {" "}
                <li className="nav-item">
                  <a className="active" href="#">
                    {" "}
                    <i> </i>Noticias
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    <i> </i>Reseñas
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="text-menu-select">
                    <i></i>Árticulos
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    <i></i> Más
                  </a>
                </li>
              </ul>
              <div className="icon-menu" id="icon-menu">
                <i>
                  <FontAwesomeIcon icon={faBars} />
                </i>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
