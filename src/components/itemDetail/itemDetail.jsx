import "./itemDetailStyle.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../App";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrowImage.svg";
import fullStar from "../../assets/fullStar.svg";
import halfStar from "../../assets/halfStar.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import linkedInIcon from "../../assets/linkedinIcon.svg";
import { IoMdHeartEmpty } from "react-icons/io";
import "./itemDetailStyle.css";

const ItemDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    const product = items[productId];
    setProduct(product);
  }, [productId]);

  return (
    <section>
      <div className="breadcrumbs">
        <Link to="/" className="link-style">
          Home
        </Link>
        <img src={arrow} alt="arrow" />
        <Link className="link-style">Shop</Link>
        <img src={arrow} alt="arrow" />
        <div className="divider" />
        <p className="product-name">{product.title}</p>
      </div>
      <section className="item-detail-container">
        <div className="item-small-photos">
          <img src={product.imageUrl} alt="smallPhotos" />
          <img src={product.imageUrl} alt="smallPhotos" />
          <img src={product.imageUrl} alt="smallPhotos" />
          <img src={product.imageUrl} alt="smallPhotos" />
        </div>
        <aside className="item-main">
          <img className="item-image" src={product.imageUrl} alt="Item" />
        </aside>
        <aside className="item-info">
          <h2 className="product-title">{product.title}</h2>
          <span className="price-row">
            <h4 className="product-price">{product.price}</h4>
            <IoMdHeartEmpty color="red" size={25} />
          </span>
          <span className="rating-container">
            <img src={fullStar} alt="star" />
            <img src={fullStar} alt="star" />
            <img src={fullStar} alt="star" />
            <img src={fullStar} alt="star" />
            <img src={halfStar} alt="star" />
            <div className="divider" />
            <h5 className="product-review">5 Customer Review</h5>
          </span>
          <p className="content">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <h5>Size</h5>
          <div className="size-choise">
            <p
              className={`size ${selectedSize === "XS" ? "selected" : ""}`}
              onClick={() => handleSizeClick("XS")}
            >
              XS
            </p>
            <p
              className={`size ${selectedSize === "L" ? "selected" : ""}`}
              onClick={() => handleSizeClick("L")}
            >
              L
            </p>
            <p
              className={`size ${selectedSize === "XL" ? "selected" : ""}`}
              onClick={() => handleSizeClick("XL")}
            >
              XL
            </p>
          </div>
          <h5>Color</h5>
          <div className="color-selector">
            <div
              className={`color-circle ${
                selectedColor === "#816DFA" ? "colorSelected" : ""
              }`}
              style={{ backgroundColor: "#816DFA" }}
              onClick={() => handleColorClick("#816DFA")}
            ></div>
            <div
              className={`color-circle ${
                selectedColor === "black" ? "colorSelected" : ""
              }`}
              style={{ backgroundColor: "black" }}
              onClick={() => handleColorClick("black")}
            ></div>
            <div
              className={`color-circle ${
                selectedColor === "#CDBA7B" ? "colorSelected" : ""
              }`}
              style={{ backgroundColor: "#CDBA7B" }}
              onClick={() => handleColorClick("#CDBA7B")}
            ></div>
          </div>
          <div className="cart">
            <div className="item-count">
              <p onClick={handleDecrement}> - </p>
              <p>{count}</p>
              <p onClick={handleIncrement}> + </p>
            </div>
            <button className="button">Add to Cart</button>
          </div>
          <div className="horizontal-divider" />
          <div className="item-sku">
            <div className="item-sku-categories">
              <p className="sku-text">SKU</p>
              <p className="sku-text">Category</p>
              <p className="sku-text">Tags</p>
              <p className="sku-text">Share</p>
            </div>
            <div className="item-two-dot">
              {Array(4).fill(<p className="sku-text">:</p>)}
            </div>
            <div className="item-sku-data">
              <p className="sku-text">SS001</p>
              <p className="sku-text">Sofas</p>
              <p className="sku-text">Sofa, Chair, Home, Shop</p>
              <div className="social-media">
                <img src={facebookIcon} alt="socialIcon" />
                <img src={linkedInIcon} alt="socialIcon" />
                <img src={twitterIcon} alt="socialIcon" />
              </div>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default ItemDetail;
