import React from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { useDispatch } from "react-redux";
import { filterByPrice } from "../../features/Products/ProductsSlice";

const Home = () => {
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!list.length) return;
    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);
  return (
    <>
      <Poster />

      <Products products={list} amount={5} title="Trending" />
      <Categories products={list} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filtered} amount={5} title="Less than 100$" />
    </>
  );
};

export default Home;
