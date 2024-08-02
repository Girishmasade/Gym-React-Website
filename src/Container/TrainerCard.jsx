import React, { useContext } from "react";
import { TrainerContext } from "../context";

const TrainerCard = () => {
  const { TRAINERS, HIGHLIGHT } = useContext(TrainerContext);
  return (
    <>
      <div>
        <div
          className="card text-white mx-5 border-0 py-2 row-cols-1 my-2"
          style={{ paddingTop: "3rem", paddingBottom: "0" }}
        >
          <h2>Our Team</h2>
          <h3>TRAIN WITH EXPERTS</h3>
        </div>
        <div className="my-1 px-5 ">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {TRAINERS.map((item) => {
              return (
                <div key={item.id} className="col">
                  <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body position-absolute bottom-0 start-50 translate-middle-x w-100 bg-black text-white">
                      <h5 className="position-absolute bottom-0 start-50 translate-middle-x">
                        {item.title}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="my-4 px-4 p-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {HIGHLIGHT.map((e) => {
            return (
              <div key={e.identity} className="col">
                <div className="card border-0" style={{ width: "100%" }}>
                  <img
                    src={e.img}
                    className="card-img-top imagecard rounded-circle border border-primary-subtle "
                    alt="..."
                  />
                  <div className="card-body position-absolute cardposition">
                    <h5 className="card-title text-white">{e.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrainerCard;
