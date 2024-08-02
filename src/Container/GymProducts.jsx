import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GymProducts = () => {
    const [GymProducts, setGymProducts] = useState([])
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        (async() => {
           try {
            setloading(true)
            seterror(false)
             const api = await axios.get('https://fakestoreapi.com/products')
             console.log(api)
             setGymProducts(api.data)
             setloading(false)
           } catch (error) {
            seterror(true)
            setloading(false)
           }
        }) ()
    }, [])
    

// if(error){
//    return <h1>Something is wrong</h1>
// }

// if(loading){
//     return <h1>Loading....</h1>
// }

  return (
    <>
    {loading && (<h1 className='text-white text-center'>Loading.....</h1>)}
    {error && (<h1>Some thing Went Wrong</h1>)}
    <div className='row w-100 p-4'>
        {GymProducts.map((item) => {
          return(
           
              <div className="col-md-3">
                <div key={item.id} className="card" style={{width: '18rem'}}>
                <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title text-white">{item.title}</h5>
                  <p className="card-text text-white">{item.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </div>
             
          )
        })}
    </div>
    </>
    
  )
}

export default GymProducts