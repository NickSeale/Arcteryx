//  import productsArray from "../../data/store.json"
import "../ProductCard/ProductCard.scss";
function ProductCard({ filteredProducts }) {
  return (
    <section className="cards">
      {filteredProducts.map((product) => {
        return (
          <article className="card" key={product.model}>
            <img className="card__image" src={product.image} alt="" />
            <p className="card__title">
              {" "}
              {product.item && product.item.toUpperCase()}
            </p>
            {/* <p className="card__oneliner"></p> */}
            <p className="card__price">${product.price}</p>
            <button className="card__button">
              <img
                className="header__icon--cart"
                src="https://images.arcteryx.com/foundation-ui/svgs/Cart_Icon_White.svg"
                alt="Cart"
              />
              <span> ADD TO CART</span>{" "}
            </button>
          </article>
        );
      })}
    </section>
  );
}

export default ProductCard;
