import React from "react";
import TrainerCard from "../Container/TrainerCard";
import "./PagesCss/Trainner.css";

const Trainner = () => {
  return (
    <div>
      <div className="">
        <img src="/src/assets/Bg3.jpg" alt="" className="trainnerimg" />
        <div className="card-img">
          <h5 className="card-title position-absolute top-50 start-50 bottom-0 translate-middle fs-1 text-white">
            #Trainner
          </h5>
        </div>
      </div>
      <TrainerCard />
    </div>
  );
};

export default Trainner;
