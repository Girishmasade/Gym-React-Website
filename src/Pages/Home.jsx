import React from 'react'
import Bg1 from '../assets/Bg1.jpeg'
import Bg2 from '../assets/Bg2.jpeg'
import { DATA } from '../Utils/Data'
import Hero from '../Container/Hero'
import HomeSlider from '../Container/HomeSlider'
import PricingCard from '../Container/PricingCard'
import './PagesCss/Home.css'

function Home() {
  return (
    <>
    <section className='w-100 h-100'>
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div className="carousel-inner h-100">
      <div className="carousel-item active">
        <img src={Bg1} className="d-block w-100" alt="..."/>
        <div className="carousel-caption position-absolute top-50 end-50 start-0 translate-middle-y w-0 color-black text-light ">
          <h5 className='fs-1'>Workout Daily</h5>
          <p className='fs-4 mx-lg-5 '>Some representative placeholder content for the first slide.</p>
          <button type="button" className="btn btn-outline-warning">Appointment</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Bg2} className="d-block w-100 h-50" alt="..."/>
        <div className="carousel-caption position-absolute top-50 end-0 start-50 translate-middle-y w-50 color-black text-body-secondary">
          <h5 className='fs-1'>Workout Daily</h5>
          <p className='fs-4 mx-lg-5 text-light'>Some representative placeholder content for the second slide.</p>
          <button type="button" className="btn btn-outline-dark">Appointment</button>
        </div>
      </div>                                  
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  </section>
 <section>
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
 </section>

 <section className='m-2 py-lg-5'>
  <Hero/>
 </section>

 <section>
  <PricingCard/>
 </section>

 <section className='m-2'>
  <HomeSlider/>
 </section>
  </>
  )
}

export default Home
