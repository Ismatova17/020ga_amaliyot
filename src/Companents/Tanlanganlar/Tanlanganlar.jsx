import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiTwotoneDelete } from 'react-icons/ai'
import './Tanlanganlar.scss'

export default function Tanlanganlar() {
    const [massiv, setMassiv] = useState([])
    useEffect(() => {
        axios.get('https://api.npoint.io/09f380758dc525dc73d7')
            .then(ress => {
                console.log(ress.data);
                setMassiv(ress.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(massiv, 'massiv');
    return (
        <div>
            <h1 className='hamma_narx'>Все цены :  301.5$</h1>
            {
                (massiv) && massiv.map((item, index) => {
                    return (
                        <div key={index} className='blokk'>
                            <img width={200} style={{ objectFit: 'cover' }} src={item.img} alt="photo" />
                            <div className='narx'>
                                <h4 className='price'>{item.price}</h4>
                                <h3 className='category'>{item.category}</h3>
                                <div className='group-btn'>
                                    <button className='btn btn-success'>-</button>
                                    <p className='soni'>0</p>
                                    <button className='btn btn-success'>+</button>
                                </div>
                            </div>
                            <span className='del_btn'><AiTwotoneDelete /></span>
                        </div>
                    )
                })
            }
        </div>
    )
}
