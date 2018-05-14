import React from "react";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>Home</li>
      <hr />
      <li onClick={close}>Who we are</li>
      <hr />
      <li onClick={close}>What we do</li>
      <hr />
      <li onClick={close}>How we do</li>
      <hr />
      <li onClick={close}>Who trust us</li>
      <hr />
      <li onClick={close}>Vacancies</li>
      <hr />
      <li onClick={close}>Contacts</li>
      <hr />
    </ul>
  </div>
);
