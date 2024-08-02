import React, {useContext} from "react";
import { TrainerContext } from "../context/Trainer_Context";
import './ContainerCss/PricingCard.css'

const PricingCard = () => {
    const {PRICING} = useContext(TrainerContext)
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-3 m-4">
        {PRICING.map((item) => {
            return(
                <div key={item.id} class="col text-center">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <h3 class="card-title">{item.price}</h3>
                    <p class="card-text">
                      {item.text}
                    </p>
                    <div className="">
                      <ul>
                          <li>{item.para1}</li>
                          <li>{item.para1}</li>
                          <li>{item.para1}</li>
                          <li>{item.para1}</li>
                          <li>{item.para1}</li>
                          <li>{item.para1}</li>
                      </ul>
                    </div>
                  </div>
                  <button type="button" class="btn btn-outline-warning">Check Out</button>
                   </div>
              </div>
            )
        })

        }
        
      </div>
    </div>
  );
};

export default PricingCard;
