import { React, useEffect, useState, useContext } from "react";
import "./Item.css";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import data from "../../Assets/Data/Data";
import { UserContext } from "./../../App";

const Item = () => {
  const { menuId } = useParams();
  const [itemData, setItemData] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);

  const { cart } = useContext(UserContext);
  const [cartData, setCartData] = cart;

  useEffect(() => {
    const item = data.find((obj) => obj.id === menuId);
    setItemData(item);
  }, [menuId]);

  const handleIncreaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };
  const handleDecreaseQuantity = () => {
    itemQuantity > 0 && setItemQuantity(itemQuantity - 1);
  };

  const addToCart = () => {
    const similarItem = cartData.find((obj) => obj.id === itemData.id);
    console.log(similarItem);

    if (similarItem) {
      let updatedCart = cartData.filter((obj) => obj.id !== itemData.id);
      console.log(updatedCart);
      similarItem.quantity = itemQuantity;
      setCartData([similarItem, ...updatedCart]);
    } else if (itemQuantity === 0) {
      alert("Please add atleast one item");
    } else {
      const data = { ...itemData };
      data.quantity = itemQuantity;
      setCartData([data, ...cartData]);
    }
  };

  // console.log(itemData);

  return (
    <Container>
      <Row>
        <Col lg={10} className="mx-auto my-5">
          <Row>
            <Col sx={12} sm={6} md={6} lg={6}>
              <div className="item_details">
                <p className="item_name">{itemData.name}</p>
                <p className="item_title">{itemData.title}</p>
                <p className="item_detail">{itemData.details}</p>
                <p className="item_price">{itemData.price}</p>
                <p className="item_quantity">
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={handleDecreaseQuantity}
                    className="button"
                  >
                    -
                  </button>
                  &nbsp; <span className="quantity">{itemQuantity}</span> &nbsp;{" "}
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={handleIncreaseQuantity}
                    className="button"
                  >
                    +
                  </button>
                </p>
                <br />
                <button onClick={addToCart} className="btn add_to_cart">
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col sx={12} sm={6} md={6} lg={6}>
              <div className="item_image">
                <img style={{ width: "100%" }} src={itemData.image} alt="" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
