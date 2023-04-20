import React from "react";
import Popup from "reactjs-popup";

import "./index.css";

const Sample = () => (
  <Popup trigger={<button className="button"> Open Modal </button>} modal>
    {(close) => (
      <div className="modal bg-slate-200 w-4/6">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Email </div>
        <div className="content">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
          nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
          quibusdam voluptates delectus doloremque, explicabo tempore dicta
          adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
          alias. Vitae?
        </div>
      </div>
    )}
  </Popup>
);

export default Sample;
