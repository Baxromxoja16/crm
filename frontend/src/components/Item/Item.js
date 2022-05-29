import axios from "axios";
import React, { useState } from "react";

export default function Item({
  barchaMalumotlar,
  setBarchaMalumotlar,
  setCurrentId,
}) {
  const deleteHandler = async (id) => {
    const { data } = await axios.delete(`/api/price/delete/${id}`);
    const yangiBarchaMalumot = barchaMalumotlar.filter(
      (elem) => elem._id !== id
    );
    setBarchaMalumotlar(yangiBarchaMalumot);
  };

  const editHandler = (id) => {
    setCurrentId(id);
    const price = barchaMalumotlar.find((b) => b._id === id);
    const oldPrice = document.getElementById("oldPrice");
    const endPrice = document.getElementById("endPrice");

    oldPrice.value = price.oldPrice;
    endPrice.value = price.endPrice;
  };
  return (
    <div
      className="col-lg-6 d-flex flex-column-reverse overflow-auto"
      style={{ height: "500px" }}
    >
      {barchaMalumotlar.length ? (
        barchaMalumotlar.map((element, index) => (
          <div className="card m-3" key={index}>
            <div className="card-body">
              <div className="justify-content-between d-flex">
                {" "}
                <strong>Sotib olgan narx</strong> <p>{element.oldPrice} so'm</p>
              </div>
              <div className="justify-content-between d-flex">
                {" "}
                <strong>Sotilgan narx</strong> <p>{element.endPrice} so'm</p>
              </div>
              <div className="justify-content-between d-flex">
                {" "}
                <strong>Foyda</strong> <p>{element.natija} so'm</p>
              </div>
              <div className="justify-content-between d-flex">
                {" "}
                <p>Qo'shilgan vaqti</p> <p>{element.dataAdd} </p>
              </div>
            </div>
            <div className="buttons">
              <button
                className="btn btn-danger"
                onClick={() => deleteHandler(element._id)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary"
                onClick={() => editHandler(element._id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2>Mahsulot qo'shilmagan</h2>
      )}
    </div>
  );
}
