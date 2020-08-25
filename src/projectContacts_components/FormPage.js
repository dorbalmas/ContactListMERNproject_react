import React, { useState, useEffect } from "react";
import { doApiGet } from "../services/apiService";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBInputGroup,
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
const FormPage = () => {
  let [areaCode_ar, setareaCode] = useState([]);

  useEffect(() => {
    let url = "https://restcountries.eu/rest/v2";
    doApiGet(url).then((data) => {
      setareaCode(data);
    });
  }, []);

  let sendForm = (event) => {
    //  מונע מהטופס לשגר את עצמו שזה הברירת מחדל
    event.preventDefault();
    //event.target = הטופס עצמו ואז ניתן לדבר עם האיי די של הילדים שלו האינפוטים והסלקבוקסים
    let bodyData = {
      first_name: event.target.firstNameInput.value,
      last_name: event.target.lastNameInput.value,
      email: event.target.emailInput.value,
      area_code: event.target.areaCodeInput.value,
      phone_number: event.target.phoneNumberInput.value,
    };
    console.log(event.target.phoneNumberInput.value);
    console.log(bodyData);
    // console.log(bodyData);
    //http://localhost:3000/prods/add

    // let url = "http://localhost:3000/prods/add";

    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(bodyData),
    //   headers: { "content-type": "application/json" },
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data) {
    //       console.log(data);
    //       alert("product added!");
    //       history.push("/admin/table");
    //     } else {
    //       alert("There is already prod in this name");
    //     }
    //   });
  };

  return (
    <MDBContainer>
      <MDBRow className="d-flex align-items-center justify-content-center mt-4">
        <MDBCol md="5">
          <form onSubmit={sendForm}>
            <div className="grey-text">
              <MDBInputGroup
                material
                containerClassName="m-0"
                inputs={
                  <>
                    <MDBInput
                      id="firstNameInput"
                      className="text-center"
                      noTag
                      type="text"
                      hint="First Name"
                    />
                    <MDBInput
                      id="lastNameInput"
                      className="text-center"
                      noTag
                      icon="user"
                      type="text"
                      hint="Last Name"
                    />
                  </>
                }
              />
              <MDBInput
                id="emailInput"
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <div className="row">
                <select
                  id="areaCodeInput"
                  className="browser-default custom-select col-lg-3"
                >
                  <option defaultValue="+972">+972</option>
                  {areaCode_ar.map((item) => {
                    return (
                      <option value={"+" + item.callingCodes[0]}>
                        +{item.callingCodes[0]}
                      </option>
                    );
                  })}
                </select>
                <input
                  id="phoneNumberInput"
                  className="col-lg-9 form-control"
                  placeholder="Phone Number.."
                  type="text"
                />
              </div>
            </div>
            {/* <i className="israel flag"></i> */}

            <div className="text-center mt-3">
              <button className="btn btn-info">
                Add Contact
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
