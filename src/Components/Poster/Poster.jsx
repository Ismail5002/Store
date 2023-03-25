import React from "react";
import cl from "../../styles/Home.module.css";
import BG from "../../images/computer.png";

const Poster = () => {
  return (
    <section className={cl.home}>
      <div className={cl.title}>BIG SALE 20%</div>
      <div className={cl.product}>
        <div className={cl.text}>
          <div className={cl.subtitle}>the bestseller of 2022</div>
          <h1 className={cl.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
          <button className={cl.button}>Shop Now</button>
        </div>
        <div className={cl.image}>
          <img src={BG} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
