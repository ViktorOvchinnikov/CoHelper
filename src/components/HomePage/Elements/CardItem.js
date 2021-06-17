import React from "react";
import { Button } from "../../Button.js";
import firebase from "firebase";

function CardItem(props) {
  const db = firebase.firestore();
  const userToken = localStorage.getItem("token");
  async function handleClick() {
    const userFrom = await db.collection("order").where("from","==",userToken).get()
    let isNotExist=true;
    userFrom.forEach((doc)=>{
      if (doc.data().to===props.id){
        isNotExist=false;
      }
    });
    if(isNotExist){
      const userTo = await db.collection("order").where("to","==",userToken).get()
      let notConfirm=true;
      userTo.forEach((doc)=>{if (doc.data().from===props.id){
        db.collection("order").add({
          from: userToken,
          status: 1,
          to: props.id,
        });
        //if 1 to both user
        // db.collection("order").doc(props.id).set({
        //   status:1
        // });
        notConfirm=false;
      }});
      if(notConfirm){
        db.collection("order").add({
          from: userToken,
          status: 0,
          to: props.id,
        });
      }
    }
  }

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
              <a
                href={`mailto:${props.email}?subject=%D0%A1%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE%20CoHelper`}
              >
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
              onClick={handleClick}
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
