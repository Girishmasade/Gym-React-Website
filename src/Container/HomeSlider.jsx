import React, { useContext, useEffect } from "react";
import { TrainerContext } from "../context";

function HomeSlider() {
  const { TRAINERS } = useContext(TrainerContext);

  useEffect(() => {
    console.log(`trainers: `, TRAINERS);
  }, [TRAINERS]);

  return (
    <>
      <div className="container">
        <div className="cardslider">
          {TRAINERS.map((item) => {
            <div key={item.id} className="card" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top w-25" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  );
}

export default HomeSlider;
