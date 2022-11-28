import React from "react";
import { useState } from "react";
import styles from "./index.css";
const urlPic =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=en tropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE4MjMwfQ";

const Card = () => {
  const [detailsClick, setDetailsClick] = useState(false);
  const detailsClickHandler = () => {
    setDetailsClick(!detailsClick);
  };

  //button

  const [buttonClick, setButtonClick] = useState(false);
  const buttonHandler = () => {
    setButtonClick(!buttonClick);
  };

  return (
    <div style={styles.card} className="card">
      <div>
        <img className="img" src={urlPic} alt="..." />
      </div>
      {detailsClick && (
        <div className="modal_div">
          <div
            className="x"
            role="button"
            onClick={() => setDetailsClick(!detailsClick)}
          >
            x
          </div>{" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas et qui
          dicta laudantium vitae facere iste?{" "}
        </div>
      )}
      <div className="details">
        <div className="price">
          <p>
            <b>Nike Sneaker</b>
          </p>
          <p>
            <b>$120</b>
          </p>
        </div>
        <div className="btn_d">
          <button className="btn_details" onClick={() => detailsClickHandler()}>
            Детали
          </button>
        </div>
      </div>

      <div className="text">Идеальные кроссы </div>

      <div className="btn">
        <button
          disabled={buttonClick}
          className="btn_bay"
          onClick={() => buttonHandler()}
        >
          {buttonClick ? "Товар уже в корзине" : "Добавить в корзину"}
        </button >
        {buttonClick && (
          <div
            className="deleteBascket"
            role="button"
            onClick={() => setButtonClick(!buttonClick)}
          >
            Удалить из корзины
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
