import React from "react";
import "../../MainPage/Styles/Cards.css";
import CardItem from "./CardItem.js";

function Cards() {
  return (
    <div id="news" className="cards">
      <h1> Найдите партнера для коллаборации! </h1>{" "}
      <div className="cards_container_auth">
        <div>
          <ul className="items_cards">
            <CardItem
              name="Арбуз и Дыня"
              activity="Гостинично-ресторанный бизнес туризм"
              email="1@rus.kus"
              city="Миллерово"
              findFor="поставщиков"
              
              //   href='https://adindex.ru/news/adyummy/2021/03/17/292040.phtml'
            />
            <CardItem
             name="Арбуз и Дыня"
             activity="Гостинично-ресторанный бизнес туризм"
             email="1@rus.kus"
             city="Миллерово"
             findFor="поставщиков"
              //   href='https://pro.rbc.ru/demo/5d7123979a7947144f459107'
            />
            <CardItem
             name="Арбуз и Дыня"
             activity="Гостинично-ресторанный бизнес туризм"
             email="1@rus.kus"
             city="Миллерово"
             findFor="поставщиков"
              //   href='https://www.forbes.ru/karera-i-svoy-biznes/384611-kak-dve-sestry-pridumali-odezhdu-za-kotoruyu-ne-stydno-i-teper'
            />
            <CardItem
              name="Арбуз и Дыня"
              activity="Гостинично-ресторанный бизнес туризм"
              email="1@rus.kus"
              city="Миллерово"
              findFor="поставщиков"
              //   href='https://supa.ru/blog/posts/top-5-pravil-effiektivnoi-kollaboratsii-briendov'
            />
            <CardItem
              name="Арбуз и Дыня"
              activity="Гостинично-ресторанный бизнес туризм"
              email="1@rus.kus"
              city="Миллерово"
              findFor="поставщиков"
              //   href='https://planfact.io/blog/posts/trendy-prodazh-v-2021-godu'
            />
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Cards;
