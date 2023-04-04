import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './Kategoriya.scss'
import Box from '../Utilits/Categoriya_box/Box'

export default function Kategoriya() {
  const[mass1, setMass1] = useState([])
  const[mass2, setMass2] = useState([])

  useEffect(() => {
    Axios.get('https://api.npoint.io/c1830eec748179f22d81')
      .then(ress => {
        // console.log(ress.data);
        setMass1(ress.data.slice(0,6))
        setMass2(ress.data.slice(6,12))

      })
      .catch(err => {
        console.log(err);
      })
    }, []);
      
      // console.log(mass1, 'bu categoriya');
      // console.log(mass2, 'bu categoriya2');
  return (
    <div className='container'>
      <h1 className='categ_name'>Категории</h1>
      <div className='categoriya'>
        {
          (mass1.length > 0) ? mass1.map((item, index) => {
            return (
                <Box img={item.img} name={item.name}/>
            )
          })
            :
            <></>
        }
        {
          (mass2.length > 0) ? mass2.map((item, index) => {
            return (
               <Box img={item.img2} name={item.name}/>
            )
          })
            :
            <></>
        }
        {
          (mass1.length > 0) ? mass1.map((item, index) => {
            return (
                 <Box img={item.img} name={item.name}/>
            )
          })
            :
            <></>
        }
      
      </div>
    </div>
  )
}
