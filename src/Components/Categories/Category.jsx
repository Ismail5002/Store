import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import cl from "../../styles/Category.module.css";
import Products from "../Products/Products";
import { useSelector } from "react-redux";

const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };

  const defaultParams = {
    categoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  };
  const handleReset = () => {
    setValues(defaultValues);
    setParams(defaultParams);
    setIsEnd(false);
  };
  const [isEnd, setIsEnd] = React.useState(false);
  const [params, setParams] = React.useState(defaultParams);
  const { data, isLoading, isSuccess } = useGetProductsQuery(params);
  const [values, setValues] = React.useState(defaultValues);
  const [cat, setCat] = React.useState(null);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    if (isLoading) return;
    if (!data.length) return setIsEnd(true);

    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  React.useEffect(() => {
    if (!id) return;
    setValues(defaultValues);
    setItems([]);
    setIsEnd(false);
    setParams({ ...defaultParams, categoryId: id });
  }, [
    id,
    defaultValues.price_max,
    ,
    defaultValues.price_min,
    ,
    defaultValues.title,
  ]);

  React.useEffect(() => {
    if (!id || !list.length) return;
    const categoty = list.find((item) => item.id === id * 1);

    setCat(categoty);
  }, [list, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([]);
    setIsEnd(false);
    setParams({ ...defaultParams, ...values });
  };

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <section className={cl.wrapper}>
      <h2 className={cl.title}>{cat?.name}</h2>
      <form className={cl.filters} onSubmit={handleSubmit}>
        <div className={cl.filter}>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            placeholder="Product name"
            value={values.title}
          />
        </div>
        <div className={cl.filter}>
          <input
            type="number"
            onChange={handleChange}
            name="price_min"
            placeholder="price_min"
            value={values.price_min}
          />
          <span>price from</span>
        </div>
        <div className={cl.filter}>
          <input
            type="number"
            onChange={handleChange}
            name="price_max"
            placeholder="price_max"
            value={values.price_max}
          />
          <span>price to</span>
        </div>
        <button type="submit" hidden />
        <button onSubmit={handleSubmit}>Filter</button>
      </form>
      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || !items.length ? (
        <div className={cl.back}>
          <span>No results</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <Products
          title=""
          products={items}
          style={{ padding: 0 }}
          amount={items.length}
        />
      )}
      {!isEnd && (
        <div className={cl.more}>
          <button
            onClick={() =>
              setParams({ ...params, offset: params.offset + params.limit })
            }
          >
            See more
          </button>
        </div>
      )}
    </section>
  );
};

export default Category;
