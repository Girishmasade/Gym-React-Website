import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GymProductData } from '../Utils/Data';

const GymProducts = () => {
  const [gymProducts, setGymProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGymProducts = async () => {
      try {
        setLoading(true);
        setError(false);
        const apiResponse = await axios.get(GymProductData); // Replace with the correct API endpoint
        setGymProducts(apiResponse.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGymProducts();
  }, []);

  return (
    <div className="container mt-5 ">
    {/* Loading State */}
    {loading && (
      <div className="text-center text-white">
        <h1>LOADING....</h1>
      </div>
    )}

    {/* Error State */}
    {error && (
      <div className="text-center text-danger">
        <h1>Something Went Wrong</h1>
      </div>
    )}

    {/* Product Grid */}
    <div className="pt-xxl-5 pb-xl-3">
    <div className="row justify-content-center g-4">
      {GymProductData.map((item) => (
        <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center ">
          <div className="card border-0 shadow p-3 bg-body-secondary" style={{ width: '20rem' }}>
            <img
              src={item.image}
              className="card-img-top img-fluid rounded"
              alt={item.title}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="text-center">
              <h5 className="card-title text-dark">{item.title}</h5>
              <p className="card-text text-secondary">
                {item.description.slice(0, 82)}...
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  </div>
  );
};

export default GymProducts;
