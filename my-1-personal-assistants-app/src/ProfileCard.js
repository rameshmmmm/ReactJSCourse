/* eslint-disable react/prop-types */
import React from "react";
// import { ReactDOM } from 'react-dom/client';

export default function ProfileCard({ image, title, handle, description }) {
  const imageSrc = image.src;
  const imageAlt = image.alt;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imageSrc} alt={imageAlt} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
      <div className="content">{description}</div>
    </div>
  );
}
