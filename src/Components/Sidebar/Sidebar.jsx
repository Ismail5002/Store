import React from "react";
import cl from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={cl.sidebar}>
      <div className={cl.title}>CATEGORIES</div>
      <nav>
        <ul className={cl.menu}>
          {list.map(({ id, name }) => {
            return (
              <li key={id}>
                <NavLink
                  className={({ isActive }) =>
                    `${cl.link} ${isActive ? cl.active : ""}`
                  }
                  to={`/categories/${id}`}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={cl.footer}>
        <a href="/help" className={cl.link} target="_blank">
          Help
        </a>
        <a
          href="/terms"
          className={cl.link}
          style={{ textDecoration: "underline" }}
          target="_blank"
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
