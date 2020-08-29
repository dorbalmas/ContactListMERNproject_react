import React, { useEffect, useState } from "react";
import { doApiGet, doApiPost } from "../services/apiService";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Swal from "sweetalert2";
import { checkPhoneNumber, calcDays } from "../services/usefulFunctions";
import { useHistory } from "react-router-dom";

const EditSingleContact = (props) => {
  let chosenContactId = props.match.params.id;
  let [itemData, setItemData] = useState({});
  let [areaCode_ar, setareaCode] = useState([]);
  let [DropdownValue, setDropdownValue] = useState(null);
  let history = useHistory();
  useEffect(() => {
    let url = `https://ideodigitalcontactproject.herokuapp.com/contacts/singleContact/${chosenContactId}`;
    doApiGet(url).then((data) => {
      setItemData(data);
    });
  }, []);
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

  const editContact = (event) => {
    event.preventDefault();

    let PhoneString = event.target.phoneNumberInput.value;

    let newObj = {
      _id: itemData._id,
      first_name: event.target.firstNameInput.value,
      last_name: event.target.lastNameInput.value,
      email: event.target.emailInput.value,
      area_code: DropdownValue == null ? itemData.area_code : DropdownValue,
      phone_number: checkPhoneNumber(PhoneString),
      date: itemData.date,
    };
    console.log(newObj);
    doApiPost(
      "https://ideodigitalcontactproject.herokuapp.com/contacts/updateContact",
      newObj
    ).then((data) => {
      if (data) {
        if (data.message == "Error!! id is not found") {
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
    <div className="container-fluid pt-3">
      <div className="container w-75">
        <div className="border rounded text-center text-white bg-light row align-items-center justify-content-center">
          <div className="text-center pt-2 h2">Contact Editor</div>
          <form
            className="row align-items-center justify-content-center"
            onSubmit={editContact}
          >
            <input
              autoFocus
              id="firstNameInput"
              type="text"
              className="form-control w-75"
              defaultValue={itemData.first_name}
            />
            <input
              id="lastNameInput"
              type="text"
              className="form-control w-75"
              defaultValue={itemData.last_name}
            />
            <input
              id="emailInput"
              type="text"
              className="form-control w-75"
              defaultValue={itemData.email}
            />
            <div className="row w-75">
              <Dropdown
                className="col-lg-3 form-control"
                placeholder={itemData.area_code}
                search
                options={options}
                onChange={changed}
              />
              <input
                id="phoneNumberInput"
                type="text"
                className="col-lg-9 form-control"
                defaultValue={itemData.phone_number}
              />
            </div>
            <div className="h5 pt-2 text-dark form-control-range">
              <i className="fa fa-clock">
                {itemData.date != null ? calcDays(itemData.date) : <div></div>}
              </i>
            </div>
            <button className="btn btn-warning">Edit Here</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSingleContact;
