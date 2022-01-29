import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-white mb-0 h3 contacts__footer">
      <div className="container-fluid p-4 pb-0 contacts__footer-icons_container">
        <section className="contacts__footer-icons">
          <button
            onClick={() =>
              window.open(`https://www.facebook.com/adrian.miranda.148/`)
            }
            className="btn btn-outline-light btn-floating m-1 rounded-circle contacts__footer-icons_border"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"> </i>{" "}
          </button>
          <button
            onClick={() => window.open(`https://twitter.com/Lov_Ito`)}
            className="btn btn-outline-light btn-floating m-1 rounded-circle contacts__footer-icons_border"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"> </i>{" "}
          </button>
          <button
            onClick={() =>
              window.open(`mailto:adrian.arturo.miranda@gmail.com`)
            }
            className="btn btn-outline-light btn-floating m-1 rounded-circle contacts__footer-icons_border"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"> </i>{" "}
          </button>
          <button
            onClick={() => window.open(`https://www.instagram.com/adrian.inr/`)}
            className="btn btn-outline-light btn-floating m-1 rounded-circle contacts__footer-icons_border"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"> </i>{" "}
          </button>
          <button
            onClick={() =>
              window.open(`https://www.linkedin.com/in/adrianmirandar/`)
            }
            className="btn btn-outline-light btn-floating m-1 rounded-circle contacts__footer-icons_border"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"> </i>{" "}
          </button>
          <button
            onClick={() => window.open(`https://github.com/EchoesHigh`)}
            className="btn btn-outline-light btn-floating m-1 rounded-circle contacts__footer-icons_border"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"> </i>{" "}
          </button>{" "}
        </section>{" "}
      </div>{" "}
      <div className="container-fluid">
        <div className="text-center p-3 contacts__footer-credits">
          {" "}
          Adrián Miranda - &copy; {new Date().getFullYear()}:{" "}
          <button
            onClick={() => window.open(`https://echoeshigh.com/`)}
            className="text-white contacts__footer-credits contacts__footer-credits"
            rel="noopener noreferrer"
          >
            EchoesHigh{" "}
          </button>{" "}
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
