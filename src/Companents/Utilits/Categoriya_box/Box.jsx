import React from 'react'

export default function Box(props) {
    const {img, name} = props
  // console.log(img, name, 't54tf');
  return (
    <div className='box'>
     <img src={img} alt="img" />
     <p className='box_name'>{name}</p>
    </div>
  )
}
