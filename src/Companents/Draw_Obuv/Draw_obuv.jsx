import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { CgAdidas } from 'react-icons/cg'
import './Draw_Obuv.scss'

export default function Draw_obuv() {

  const [massiv, setMassiv] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    Axios.get('https://api.npoint.io/09f380758dc525dc73d7')
      .then(ress => {
        console.log(ress);
        setMassiv(ress.data)
      })
      .catch(err => {
        console.log(err);
      })
    dispatch({ type: 'draw', payload: { mass: massiv } })
  }, [])



  const select = useSelector(state => state)
  console.log(massiv, 'bu obuv');

  return (
    <div className='container'>
      <h3 className='obuv_h3'>Oбуви</h3>
      <div className="obuv">
        {
          (massiv) && massiv.map((item, index) => {
            return (
              <div key={index} >
                {/* <div> */}
                <div className='obuv_card'>
                  <img width="100%" style={{objectFit: 'cover'}} src={item.img} alt={item.name} />
                  <div className='Card_footer'>
                    <div className='footer_end'>
                      <p className='item_narxi'>{item.price} $</p>
                      <p className='Item_nomi'>{item.name}</p>
                    </div>
                    <span className='adidas_icon'><CgAdidas /></span>
                  </div>
                </div>
                <button type='button' className='dobavit_btn'>Добавлять</button>
                {/* </div> */}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
