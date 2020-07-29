import React, { useState } from "react";
import "./main.css";

export default function App() {
  const [catA, setCatA] = useState(0);
  const [catB, setCatB] = useState(0);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Choose your Cat!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h3>Cat 1</h3>
            <div className="row">
              <div className="image-container">
                <img
                  src="https://cataas.com/cat/kitten"
                  className="img-thumbnail"
                />
              </div>
            </div>
            <h2>Likes: {catA}</h2>
            <div
              className="btn btn-success"
              onClick={() => setCatA((cur) => cur + 1)}
            >
              Like!
            </div>
          </div>
          <div className="col-sm-6">
            <h3>Cat 1</h3>
            <div className="row">
              <div className="image-container">
                <img
                  src="https://cataas.com/cat/cute"
                  className="img-thumbnail"
                />
              </div>
            </div>
            <h2>Likes: {catB}</h2>
            <div
              className="btn btn-success"
              onClick={() => setCatB((cur) => cur + 1)}
            >
              Like!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
