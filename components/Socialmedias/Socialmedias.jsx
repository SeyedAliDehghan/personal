import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Socialmedias({ place }) {
  if (place === "contact") {
    return (
      <div className={`my-10 w-2/3 mx-auto flex space-x-6 justify-between`}>
        <FontAwesomeIcon
          icon={faLinkedinIn}
          style={{ width: "20px" }}
          className="socialIcons"
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          style={{ width: "20px" }}
          className="socialIcons"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ width: "20px" }}
          className="socialIcons"
        />
        <FontAwesomeIcon
          icon={faWhatsapp}
          style={{ width: "20px" }}
          className="socialIcons"
        />
      </div>
    );
  } else if (place === "hero") {
    return (
      <div className={`my-7 w-full md:w-2/3  flex space-x-6 justify-between`}>
        <FontAwesomeIcon
          icon={faLinkedinIn}
          style={{ width: "20px" }}
          className="socialIcons"
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          style={{ width: "20px" }}
          className="socialIcons"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ width: "20px" }}
          className="socialIcons"
        />
        <FontAwesomeIcon
          icon={faWhatsapp}
          style={{ width: "20px" }}
          className="socialIcons"
        />
      </div>
    );
  }
}
