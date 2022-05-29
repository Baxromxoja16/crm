import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form/Form";
import Item from "./components/Item/Item";

function App() {
  const [barchaMalumotlar, setBarchaMalumotlar] = useState([
    {
      _id: "",
      endPrice: "",
      natija: "",
      oldPrice: "",
      dataAdd: "",
    },
  ]);
  const [currentId, setCurrentId] = useState();
  const [oldPrice, setOldPrice] = useState("");
  const [endPrice, setEndPrice] = useState("");
  
  const [umumiyOne, setUmumiyOne] = useState("");

  useEffect(() => {
    fetch("/api/price")
      .then((response) => response.json())
      .then((data) => {
        setUmumiyOne(data.umumiy);
        setBarchaMalumotlar(data.data);
      });
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (currentId) {
      const { data } = await axios.put(`/api/price/edit/${currentId}`, {
        oldPrice,
        endPrice,
      });
      setBarchaMalumotlar([...barchaMalumotlar, data]);
    } else {
      const { data } = await axios.post("/api/price/add", {
        oldPrice,
        endPrice,
      });
      setBarchaMalumotlar(data.data);
    }
  };

  return (
    <div className="App" onSubmit={submitHandler}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4">
            <Form setOldPrice={setOldPrice} setEndPrice={setEndPrice} />
          </div>

          <Item
            setBarchaMalumotlar={setBarchaMalumotlar}
            barchaMalumotlar={barchaMalumotlar}
            setCurrentId={setCurrentId}
          />
          <div className="justify-content-between d-flex align-content-center border border-primary col-3 fs-4 ">
            {" "}
            <p>Umumiy foyda:</p> <p>{umumiyOne}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
