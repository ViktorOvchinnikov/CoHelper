import React, { useState, useEffect } from "react";
import Navbar from "./Elements/Navbar.js";
import Cards from "./Elements/Cards.js";
import firebase from "firebase";

function HomePage() {
  const userToken = localStorage.getItem("token");
  const db = firebase.firestore();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    async function getInfo() {
      const querySnapshot = await db
        .collection("users")
        .where("token", "!=", userToken)
        .get();
      querySnapshot.forEach((doc) => {
        let info_find=""
        let info_company=doc.data();
        if (info_company.findFor.advertising===true){
            info_find+="совместную рекламу; ";
        }
        if (info_company.findFor.clients===true){
            info_find+="заказчиков; ";
        }
        if (info_company.findFor.investors===true){
            info_find+="инвесторов; ";
        }
        if (info_company.findFor.providers===true){
            info_find+="рекламу; ";
        }
        info_company.findFor=info_find;
        info.push(info_company);
        setInfo([...info]);
      });
    }
    getInfo();
  }, []);

  return (
    <>
      <Navbar />
      <>
        <Cards info={info} />
      </>
    </>
  );
}

export default HomePage;
