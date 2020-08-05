import React from "react";

function Footer(props) {
  return (
    <div className="bg-dark">
      <p className="text-white text-center my-2">
        current date: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

export default Footer;
