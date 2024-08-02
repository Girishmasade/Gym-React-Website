import React, { useContext } from "react";
import Bg3 from ".././assets/Bg3.jpg";
import "./PagesCss/About.css";
import { TrainerContext } from "../context";
import { DATA } from '../Utils/Data'
import AboutCard from "../Container/AboutCard";

const About = () => {
  const { TRAINERS, HIGHLIGHT } = useContext(TrainerContext);

  return (
    <div>
      
      <div className="card text-bg-dark">
        <img src={Bg3} className="cardimg" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title position-absolute top-50 start-50 translate-middle fs-1">
            #About
          </h5>
        </div>
      </div>
      <div>
  <div className="row w-100 px-4 py-4">
   {DATA.map((item) => {
    return <div className="col-md-3" key={item.id}>
      <div className="card text-center bg-transparent text-white border-0" style={{width: '20rem'}}>
  <img src={item.icon} className="card-img-top w-25 px-2 py-2 my-2 rounded-circle border border-primary-subtle rounded mx-auto d-block" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.desc}</p>
    <a href="#" className="btn btn-outline-warning text-white">Get Now</a>
  </div>
</div>
    </div>
   })}
  </div>
 </div>
  <div className="">
        <AboutCard/>
      </div>
      <div className="my-3 p-5">
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
     
      <div className="my-4 px-4 p-5 main">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {HIGHLIGHT.map((e) => {
          return(
            <div key={e.identity} className="col">
            <div className="card border-0" style={{width: "100%"}}>
              <img src={e.img} className="card-img-top imagecard rounded-circle border border-primary-subtle " alt="..." />
              <div className="card-body position-absolute cardposition">
                <h5 className="card-title text-white">{e.title}</h5>
              </div>
            </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default About;
