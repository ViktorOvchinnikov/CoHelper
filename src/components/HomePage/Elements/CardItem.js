import React from "react";
import { Button } from "../../Button.js";
function CardItem(props) {
  return (
    <>
      <li className="card-form">
        <div className="cards__item__link">
          <figure className="company_name">
            <div>
              <p>{props.name}</p>
            </div>
          </figure>

          <div className="cards__item__info">
            <h5 className="activity">Род деятельности: {props.activity}</h5>
            <p className="email">
              <a href={`mailto:${props.email}?subject=%D0%A1%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE%20CoHelper`}>
                {props.email}
              </a>
            </p>
            <p className="city">Город: {props.city}</p>
            <p className="findFor">Ищет: {props.findFor}</p>
          </div>
          <div className="conf_btn">
            <Button
              className="btns"
              buttonStyle="btn--test"
              buttonSize="btn--large"
            >
              Сотрудничать
            </Button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
