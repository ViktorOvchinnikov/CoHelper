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
            <h5 className="cards__item__text">Род деятельности: Бизнесовский бизнес</h5>
            <p>email@email.email</p>
            <p>Город: Мухосранск</p>
            <p>Ищет: всех кому не лень</p>
          </div>
          <Button
            className='btns'
            buttonStyle='btn--test'
            buttonSize='btn--large'
          >
            Сотрудничать
          </Button>
        </div>
      </li>
    </>
  );
}

export default CardItem;
