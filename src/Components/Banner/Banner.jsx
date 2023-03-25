import React from "react";
import cl from "../../styles/Home.module.css";
import bannerImg from "../../images/banner.png";

const Banner = () => {
  return (
    <section className={cl.banner}>
      <div className={cl.left}>
        <p className={cl.content}>
          NEW YEAR
          <span>SALE</span>
        </p>
        <button className={cl.more}></button>
      </div>
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className={cl.right}
      >
        <p className={cl.discount}>
          save up to <span>50%</span> off
        </p>
      </div>
    </section>
  );
};

export default Banner;
