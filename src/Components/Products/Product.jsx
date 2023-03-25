import React from "react";
import cl from "../../styles/Product.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/user/userSlice";

const SIZES = [4, 4.5, 5];

const Product = (item) => {
  const dispatch = useDispatch();
  const { title, images, price, description } = item;

  const [currentImage, setCurrentImage] = React.useState();
  const [currentSize, setCurrentSize] = React.useState();

  React.useEffect(() => {
    if (!images.length) return;
    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };
  return (
    <section className={cl.product}>
      <div className={cl.images}>
        <div
          className={cl.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={cl["images-list"]}>
          {images.map((image, i) => {
            return (
              <div
                key={i}
                className={cl.image}
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => setCurrentImage(image)}
              />
            );
          })}
        </div>
      </div>
      <div className={cl.info}>
        <h1 className={cl.title}>{title}</h1>
        <div className={cl.price}>{price}$</div>
        <div className={cl.color}>
          <span>Color:</span> Green
        </div>
        <div className={cl.sizes}>
          <span>Sizes:</span>
          <div className={cl.list}>
            {SIZES.map((size) => {
              return (
                <div
                  key={size}
                  onClick={() => setCurrentSize(size)}
                  className={`${cl.size} ${
                    currentSize === size ? cl.active : ""
                  }`}
                >
                  {size}
                </div>
              );
            })}
          </div>
        </div>
        <p className={cl.description}>{description}</p>
        <div className={cl.actions}>
          <button
            disabled={!currentSize}
            onClick={addToCart}
            className={cl.add}
          >
            Add to cart
          </button>
          <button className={cl.favourite}>Add to favourites</button>
        </div>
        <div className={cl.bottom}>
          <div className={cl.purchase}>19 people purchased</div>
          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
