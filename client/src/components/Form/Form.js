import React from "react";

export default function Form({ setEndPrice, setOldPrice }) {
  return (
    <form className=" ">
      <label className="input-group-text" htmlFor="oldPrice">
        Oldingi narx
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
        <input
          type="number"
          name="oldPrice"
          id="oldPrice"
          min={0}
          onChange={(e) => setOldPrice(e.target.value)}
        />
      </div>
      <br />
      <label className="input-group-text" htmlFor="endPrice">
        Keyingi narx
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
        <input
          type="number"
          name="endPrice"
          id="endPrice"
          min={0}
          onChange={(e) => setEndPrice(e.target.value)}
        />
      </div>
      <br />
      <br />
      <button className="btn btn-primary" type="submit">
        Hisoblash
      </button>
    </form>
  );
}
