import React from "react";
import "./Menu.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import data from "../../Assets/Data/Data.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const catagories = ["breakfast", "lunch", "dinner"];
  const [currentCategory, setCurrentCategory] = useState("breakfast");
  const [currentCategoryData, setCurrentCategoryData] = useState([]);

  useEffect(() => {
    const categorydata = data.filter((obj) => obj.category === currentCategory);
    // console.log(categorydata);
    setCurrentCategoryData(categorydata);
  }, [currentCategory]);
  // console.log(currentCategoryData);

  const handleCategory = (categoryName) => {
    setCurrentCategory(categoryName);
  };
  console.log(currentCategory);

  return (
    <div className="menu">
      <Container>
        <Row>
          <Col>
            <div className="categories">
              <ul>
                {catagories.map((name) => (
                  <li
                    className={
                      currentCategory === name
                        ? "active_category"
                        : "rest_category"
                    }
                    onClick={() => handleCategory(name)}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          {currentCategoryData.map((obj) => (
            <Col xs={12} sm={6} md={4} lg={4}>
              <Link to={`/item/${obj.id}`} style={{ textDecoration: "none" }}>
                <div className="item">
                  <img style={{ width: "100%" }} src={obj.image} alt="" />
                  <div className="details">
                    <p className="name">{obj.name}</p>
                    <p className="title">{obj.title}</p>
                    <p className="price">{obj.price}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
