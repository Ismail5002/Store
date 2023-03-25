import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import Product from "./Product";
import { ROUTES } from "../../utils/routes";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedProducts } from "../../features/Products/ProductsSlice";

const SingleProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { related, list } = useSelector(({ products }) => products);

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isSuccess, isFetching, navigate]);

  React.useEffect(() => {
    if (!data || !list.length) return;

    dispatch(getRelatedProducts(data.category.id));
  }, [data, dispatch, list.length]);

  return (
    <>
      {!data ? (
        <section className="preloader">Loading...</section>
      ) : (
        <>
          <Product {...data} />
          <Products products={related} amount={5} title="Related products" />
        </>
      )}
    </>
  );
};

export default SingleProduct;
