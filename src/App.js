import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data));
    return setVisible(3);
  }, []);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  return (
    <div className="App">
      <h1>Load Data/Pagination</h1>
      <div className="container">
        {data.slice(0, visible).map((item) => {
          return (
            <div className="card">
              <div className="id">
                <span>{item.id}</span>
              </div>
              <p>{item.body}</p>
            </div>
          );
        })}
        <button onClick={showMore}>Load More</button>
      </div>
    </div>
  );
}
