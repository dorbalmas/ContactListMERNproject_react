import React, { useEffect, useState } from 'react';
import { doApiGet } from '../services/apiService';

function LifeC(props) {
  let [users_ar, setUsersArr] = useState([]);
  let [whoShow, setWhoShow] = useState("workers")
 
  // useEffect -> מחליף את כל הלייף סייקל
  // componentDidMount , componentDidUpatem , componentdidUnMount

  // מצב דומה ל
  // componentDidMount בגלל המערך הריק
  // בנוסף יתפקד גם כ
  // componentDidUpdate מכיוון שבעמרך
  // יש משתנה של סטייט שברגע שהוא מתעדכן הוא מפעיל את ה
  //USEEFFECT שוב
  useEffect(() => {
    console.log("comp mount with use effect")
    let url = "https://randomuser.me/api/?results=10&seed="+whoShow;
    doApiGet(url).
      then(data => {
        console.log(data)
        setUsersArr(data.results)
      
      })
      // המשתנים שמופיעים במערך ברגע שיהיה בהם שינוי
      //  יפעילו את הפונקציה שוב
  }, [whoShow])



  return (
    <div className="container">
      <nav>
      <button onClick={() => {setWhoShow("workers")}}>Workers</button>
      <button onClick={() => {setWhoShow("manager")}}>Manager</button>
      </nav>
      <div className="row">
        {users_ar.map(item => {
          return (
            <div key={item.login.uuid} className="col-lg-4 border">
              <img src={item.picture.medium} className="float-left mr-2" />
              <h2>{item.name.first} {item.name.last}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LifeC