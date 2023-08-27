import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="footer"
        style={{ width: "100%", height: "80px", backgroundColor: "#131416ac" }}
      >
        <div className="footerData">
          <p className="footerText text-left pt-2">
            Copyright © 2023 McDonalds Egypt - Designed by{" "}
            <span className="text-danger h6">Mina Nady</span>
          </p>
          <p className="text-light">
            <span>
              <a
                href="https://github.com/Dr-developer-mina"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/mina-nady-523506151/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
