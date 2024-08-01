import React from 'react'

function Card(props) {
  
  return (
    <>
    {/* Heading */}
    <div className="heading text-3xl flex font-bold text-center mt-5 p-2">
          <img
            src={props.employeeData.image}
            alt="img"
            className="max-w-[7rem] rounded-full max-h-[7rem]"
          />
          <h1 className="ml-5 p-2">Our Testimonials</h1>
        </div>

        {/* description */}
        <div className="main-content mt-2">
             <div className="name p-2 m-1 text-center">{props.employeeData.name}</div>
             <div className="job-role p-2 m-1 text-center"><p>{props.employeeData.job}</p></div>
             <div className="profile-desc p-1 m-1"><p>
              {props.employeeData.text}
              </p></div>
        </div>

        {/* buttons */}

        <div className="btn-lists flex gap-5">
          <button onClick={()=>{props.onLeftClick(props.index)}}><i className="fa-solid fa-less-than"></i></button>
          <button onClick={()=>{props.onRightClick(props.index)}}><i className="fa-solid fa-greater-than"></i></button>
        </div>
        <div className="btn mb-2">
          <button onClick={()=>{props.onSurpriseClick(props.index)}} className="bg-blue-700 text-white rounded-lg cursor-pointer p-2">Surprise me</button>
        </div>
    </>
  )
}

export default Card