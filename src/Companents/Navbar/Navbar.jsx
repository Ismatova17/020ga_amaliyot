import React from 'react'
import './Navbar.scss'
import { BsChevronDown, BsCart3 } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'



export default function Navbar() {
    return (
        <div className='container'>
            <div className="row navbar_category">
                <div className="col-4 select_col">
                    <select className='nav_select form-control'>
                        <option selected value="Katigori">Категории</option>
                        <option value="Katigori">Категории</option>
                        <option value="Katigori">Категории</option>
                        <option value="Katigori">Категории</option>
                    </select>
                    <span className='Categ_icon'><BsChevronDown /></span>
                </div>
                <div className="col-3 nav_input">
                    <input type="number" className='summa_input' placeholder='start' />
                    <input type="number" className='summa_input' placeholder='end' />
                </div>
            </div>
            <div className="row position-relative">
                <div className="col-12 search">
                    <span className='search_icon'> <AiOutlineMenu /> </span>
                    <input type="text" className='form-control search_input' placeholder='Пoиск' />
                    <button type="button" className="korzinka position-relative">
                        < BsCart3 />
                        <span class="position-absolute top-0 start-100 translate-middle badge fs-6 rounded-pill bg-danger">
                            0
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
