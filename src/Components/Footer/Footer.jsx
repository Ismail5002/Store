import React from "react";
import cl from "../../styles/Footer.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";

const Footer = () => {
  return (
    <section className={cl.footer}>
      <div className={cl.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="" />
        </Link>
      </div>
      <div className={cl.rights}>
        Deveoped by
        <a href="/" target="_blank" rel="noreferrer">
          ISMO
        </a>
      </div>
      <div className={cl.socials}>
        <a href="/" target="_blank" rel="noreferrer">
          <svg className={cl["icon-fav"]}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <svg className={cl["icon-fav"]}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <svg className={cl["icon-fav"]}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
