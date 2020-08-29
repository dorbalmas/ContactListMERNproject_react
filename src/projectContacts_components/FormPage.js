import React, { useState, useEffect } from "react";
import { doApiGet, doApiPost } from "../services/apiService";
import Swal from "sweetalert2";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBInputGroup,
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { useHistory } from "react-router-dom";
import { checkPhoneNumber } from "../services/usefulFunctions";
const FormPage = () => {
  let [areaCode_ar, setareaCode] = useState([]);
  let [DropdownValue, setDropdownValue] = useState(null);
  let history = useHistory();
  useEffect(() => {
    let url = "https://restcountries.eu/rest/v2";
    doApiGet(url).then((data) => {
      setareaCode(data);
    });
  }, []);
  let options = areaCode_ar.map((item) => {
    return {
      key: item.alpha2Code.toLowerCase(),
      value: `+${item.callingCodes[0]}`,
      flag: item.alpha2Code.toLowerCase(),
      text: `+${item.callingCodes[0]}`,
    };
  });
  const changed = (event, { value }) => {
    setDropdownValue(value);
  };
  const sendForm = (event) => {
    event.preventDefault();

    let PhoneString = event.target.phoneNumberInput.value;
    let newObj = {
      first_name: event.target.firstNameInput.value,
      last_name: event.target.lastNameInput.value,
      email: event.target.emailInput.value,
      area_code: DropdownValue,
      phone_number: checkPhoneNumber(PhoneString),
      date: new Date(),
    };
    console.log(newObj);
    doApiPost(
      "https://ideodigitalcontactproject.herokuapp.com/contacts/addContact",
      newObj
    ).then((data) => {
      if (data) {
        if (data.message == "Error!! This contact is already in the system!") {
          Swal.fire({
            icon: "error",
            title: "Error!!!",
            text:
              "This email address is already in the system, please enter a different one!",
          });
        } else if (data.message) {
          Swal.fire({
            icon: "error",
            title: "Error!!!",
            text: "Please fill in all the blanks correctly!",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Your contact has been saved",
            showConfirmButton: false,
            timer: 2000,
          });
          history.push("/list");
        }
      }
    });
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
                <Dropdown
                  className="col-lg-3 form-control"
                  placeholder="Area Code.."
                  search
                  options={options}
                  onChange={changed}
                />
                <input
                  id="phoneNumberInput"
                  className="col-lg-9 form-control"
                  placeholder="Phone Number.."
                  type="text"
                />
              </div>
            </div>

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
