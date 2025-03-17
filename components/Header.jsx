import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header>
      <FontAwesomeIcon
        icon={faGlobe}
        style={{ color: "#ffffff" }}
        className="icon"
      />
      <p>My Travel Journal</p>
    </header>
  );
}
