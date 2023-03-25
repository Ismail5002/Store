import React from "react";
import cl from "../../styles/Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
  const { currentUser, cart } = useSelector(({ user }) => user);
  const [searchValue, setSearchValue] = React.useState("");
  const { data, isLoading } = useGetProductsQuery({ title: searchValue });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = React.useState({ name: "Guest", avatar: AVATAR });

  const handleClick = () => {
    if (!currentUser) {
      dispatch(toggleForm(true));
    } else navigate(ROUTES.PROFILE);
  };

  React.useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <div className={cl.header}>
      <div className={cl.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="" />
        </Link>
      </div>
      <div className={cl.info}>
        <div onClick={handleClick} className={cl.user}>
          <div
            className={cl.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={cl.username}>{values.name}</div>
        </div>
        <form className={cl.form}>
          <div className={cl.icon}>
            <svg>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={cl.input}>
            <input
              type="search"
              name="search"
              placeholder="Search something"
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>
          {searchValue && (
            <div className={cl.box}>
              {isLoading
                ? "Loading"
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className={cl.item}
                        to={`/products/${id}`}
                      >
                        <div
                          style={{ backgroundImage: `url(${images[0]})` }}
                          className={cl.image}
                        />
                        <div className={cl.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>
        <div className={cl.account}>
          <Link to={ROUTES.HOME} className={cl.favourites}>
            <svg className={cl["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={cl.card}>
            <svg className={cl["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            {cart.length && <span className={cl.count}>{cart.length}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
