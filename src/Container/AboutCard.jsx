import React from "react";

const AboutCard = () => {
  return (
    <div>
      <div className="aboutcontainer w-100 p-4" style={{backgroundColor: '#024465'}}>
        <div className="card mb-3 w-100 border-0">
          <div className="row g-0">
            <div className="col-md-4">
            <img src="/src/assets/Gym.jpg" className="rounded float-start h-100 w-75" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body text-white p-5">
                <h5 className="card-title fs-4" style={{color: "#FB8500"}}>About Us</h5>
                <h2 className="card-title fs-4 py-2">What we have done</h2>
                <p className="card-text py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. aliquip ex ea commodo
                  consequat sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor.
                </p>
                <div className="py-3">
                    <p>Body Building</p>
                    <div
                  className="progress"
                  role="progressbar"
                  aria-label="Info example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning text-dark bold"
                    style={{width: "80%"}}
                  >
                    80%
                  </div>
                  </div>
                </div>
                <div className="py-3">
                    <p>Training</p>
                    <div
                  className="progress"
                  role="progressbar"
                  aria-label="Info example"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{width: "90%"}}
                  >
                    90%
                  </div>
                  </div>
                </div>
                <div className="py-3">
                    <p>Fitness</p>
                     <div
                  className="progress"
                  role="progressbar"
                  aria-label="Info example"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{width: "70%"}}
                  >
                    70%
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
