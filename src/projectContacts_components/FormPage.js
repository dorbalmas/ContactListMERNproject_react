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

  return (
    <MDBContainer>
      <MDBRow className="d-flex align-items-center justify-content-center mt-4">
        <MDBCol md="5">
          <form>
            <div className="grey-text">
              <MDBInputGroup
                material
                containerClassName="m-0"
                inputs={
                  <>
                    <MDBInput
                      className="text-center"
                      noTag
                      type="text"
                      hint="First Name"
                    />
                    <MDBInput
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
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <div className="row">
                <select className="browser-default custom-select col-lg-3">
                  <option defaultValue="+972">+972</option>
                  {areaCode_ar.map((item) => {
                    return (
                      <option value='{"+" + item.callingCodes[0]}'>
                        +{item.callingCodes[0]}
                      </option>
                    );
                  })}
                </select>
                <input
                  className="col-lg-9 form-control"
                  placeholder="Phone Number.."
                  type="text"
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <MDBBtn outline color="secondary">
                Add Contact
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
