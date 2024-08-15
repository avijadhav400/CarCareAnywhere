import React from "react";
import "./ServiceCard.css";

function ServiceCard({ title, description, image }) {
  return (
    <>
      <div className="service-card m-3 shadow">
        <img className="service-card-img" src={image} alt="tire and wheels" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default ServiceCard;
