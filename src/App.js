import React from "react"
import data from "./data"
import Loading from "./Components/Loading"
import Tour from "./Components/Tour"

export default function App()
{
  let [loading,setLoading] = React.useState(false)
  let [toursData,setToursData] = React.useState(data)
   
   let tours = toursData.map((tour)=>{
     return (
         <Tour key={tour.id} props={tour} removeTour={removeTour} />
     )
   })

   function removeTour(id)
   {
     let newTours = toursData.filter((tour)=> tour.id !== id)
     setToursData(newTours)
   }

   if(toursData.length == 0)
   {
    return (
      <main>
      <div className="container" style={{minHeight:"100vh",display:"flex"}}>
       <section className="box">
        <h1><center>No tours left</center> </h1>
        <div>
            <center><button className="refresh">Refresh</button></center> 
        </div>
       </section>
      </div>
    </main>
    )
   }

  if(loading)
  {
    return (
      <main>
      <div className="container" style={{minHeight:"100vh",display:"flex"}}>
       <section className="box">
        <Loading />
       </section>
      </div>
    </main>
    )
  }
  return (
    <main>
      <div className="container">
       <section className="box">
         <h1><center>Our Tours</center></h1>
        {tours}
       </section>
      </div>
    </main>
  )
}