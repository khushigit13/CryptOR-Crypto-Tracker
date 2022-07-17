import React from "react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "black",
          paddingTop: "20px",
        }}>
        <div class="content">
          <div
            class="top"
            style={{
              textAlign: "center",
              marginBottom: "15px",
            }}>
            <div class="media-icons">
              <a
                style={{ color: "white", padding: "5px" }}
                className="youtube social"
                target="_blank"
                href="https://github.com/khushigit13"
                rel="noreferrer">
                <i class="">
                  {" "}
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </i>
              </a>
              <a
                style={{ color: "purple", padding: "5px" }}
                class="instagram social"
                target="_blank"
                href="https://www.instagram.com/khushi_sahu13/"
                rel="noreferrer">
                <i class="">
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </i>
              </a>
              <a
                style={{ color: "blue", padding: "5px" }}
                class="Linkedin social"
                target="_blank"
                href="https://www.linkedin.com/in/khushi-sahu-01680a1b2/"
                rel="noreferrer">
                <i class="">
                  {" "}
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </i>
              </a>
            </div>
          </div>
          <h3
            style={{
              textAlign: "center",
            }}>
            Made with ❤️ by{" "}
            <a href="https://www.linkedin.com/in/khushi-sahu-01680a1b2/">
              Khushi Sahu👩‍💻
            </a>
          </h3>
          <h4
            style={{
              textAlign: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize: "10px",
              color: "#BFBCBC",
            }}>
            &copy;CryptOR
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
