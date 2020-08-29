import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function Td({ children, to }) {
  const ContentTag = to ? Link : "div";
  return (
    <td>
      <ContentTag className="form-control-range " to={to}>
        {children}
      </ContentTag>
    </td>
  );
}

const ItemList = (props) => {
  let item = props.item;

  return (
    <tbody>
      <tr className="changeMeTr text-center">
        <Td to={`/singleContact/${item._id}`}>{item.first_name}</Td>
        <Td to={`/singleContact/${item._id}`}>{item.last_name}</Td>
        <Td to={`/singleContact/${item._id}`}>{item.email}</Td>
        <Td to={`/singleContact/${item._id}`}>
          {item.area_code}
          {item.phone_number}
        </Td>
        <Td>
          <button
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.value) {
                  Swal.fire({
                    icon: "success",
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                  props.removeContact(item);
                }
              });
            }}
            className="btn-dark rounded h5 text-light"
          >
            X
          </button>
        </Td>
      </tr>
    </tbody>
  );
};

export default ItemList;
