
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="container-footer">
      <footer>
        <div className="logo-footer">
          <img src="src/assets/logo-png.png" alt="" />
        </div>
        <div className="redes-footer">
          <a href="#">
            <i className="icon-fa">
              <FontAwesomeIcon icon={faFacebook} />
            </i>
          </a>
          <a href="#">
            {" "}
            <i className="icon-ins">
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
          <a href="#">
            {" "}
            <i className="icon-dis">
              <FontAwesomeIcon icon={faDiscord} />
            </i>
          </a>
        </div>
        <hr />
        <h4>© 2024 MangaHub. Todos los derechos reservados</h4>
      </footer>
    </div>
  );
}

export default Footer;
