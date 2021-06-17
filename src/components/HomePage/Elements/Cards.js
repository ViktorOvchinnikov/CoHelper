import React, {useState} from "react";
import "../../MainPage/Styles/Cards.css";
import CardItem from "./CardItem.js";

function Cards({info, userToken}) {
  return (
    <div id="news" className="cards">
      <div className="cards_container_auth">
        <div>
          <ul className="items_cards">
          {info.map((user) => (
              <CardItem
              key={user.token}
              id={user.token}
              name={user.companyName}
              activity={user.activity}
              email={user.email}
              city={user.city}
              findFor={user.findFor}
              />
            ))}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Cards;
