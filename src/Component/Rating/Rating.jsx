/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import star from "../../assets/star.svg"
const Rating = ({value}) => {
    const ratings=Array(value).fill(star)
  return (
   <>
   {
    ratings.map((rating, index)=>( 
        <img 
        key={index} src={star} alt="star" width="14" height="14" />
    ))
   }
   </>
  )
}

export default Rating