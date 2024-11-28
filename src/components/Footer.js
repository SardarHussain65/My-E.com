import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container grid grid-two--cols">
        <div className="footerj-1--div">
          <div className="logo-brand">
            <a href="index.html" className="footer-subheading">
              Buy the things you desire.
            </a>
          </div>
          <p>
            May your journey be illuminated by the golden light of your
            aspirations, guiding you to boundless success and fulfillment
          </p>
        </div>

        <div className="social-footer--icons">
          <a
            href="https://www.tiktok.com/@raheeljeweller2"
            target="_blank"
            rel="noopener noreferrer"
            alt="my TikTok link"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a
            href="https://www.youtube.com/@RaheelJeweller"
            target="_blank"
            rel="noopener noreferrer"
            alt="my YouTube link"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/raheeljeweller/"
            target="_blank"
            rel="noopener noreferrer"
            alt="my Instagram link"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61567714959416"
            target="_blank"
            rel="noopener noreferrer"
            alt="my Facebook link"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
