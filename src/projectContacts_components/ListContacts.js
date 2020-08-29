import React, { useState, useEffect } from "react";
import { doApiGet, doApiPost } from "../services/apiService";
import ItemList from "./ItemList";
import * as ReactbootStrap from "react-bootstrap";

const ListContacts = (props) => {
  let [arr_list, setArr_list] = useState([]);
  let [loading, setloading] = useState(true);

  useEffect(() => {
    let url = "https://ideodigitalcontactproject.herokuapp.com/contacts";
    if (props.match.params.qS) {
      url = `https://ideodigitalcontactproject.herokuapp.com/contacts/searchContact/?q=${props.match.params.qS}`;
    }
    let timer = setTimeout(() => {
      doApiGet(url).then((data) => {
        setArr_list(data);
        setloading(false);
      });
    }, 200);
    setloading(true);
    return () => clearTimeout(timer);
  }, [props.match]);

  const removeContact = (_contactId) => {
    doApiPost(
      "https://ideodigitalcontactproject.herokuapp.com/contacts/removeContact",
      _contactId
    ).then((data) => {
      if (data.message == "deleted")
        doApiGet(
          "https://ideodigitalcontactproject.herokuapp.com/contacts"
        ).then((data) => {
          setArr_list(data);
        });
    });
  };

  return (
    <div className="container-fluid pt-2">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {loading ? (
            <div>
              <div style={{ height: "100px" }}></div>
              <ReactbootStrap.Spinner animation="border" />
            </div>
          ) : (
            <table class="table my-2 border rounded mx-5">
              <thead className="bg-warning">
                <tr className="text-center">
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>

              {arr_list.map((item) => {
                return (
                  <ItemList
                    key={item._id}
                    item={item}
                    removeContact={removeContact}
                  />
                );
              })}
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListContacts;
