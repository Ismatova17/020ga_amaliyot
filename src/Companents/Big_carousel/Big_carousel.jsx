import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Carousel from "react-multi-carousel";

export default function Big_carousel() {
    const [massiv, setMassiv] = useState([])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        Axios.get('https://api.npoint.io/f9fe43fa3c86e6215083')
            .then(ress => {
                // console.log(ress.data);
                setMassiv(ress.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <div className="container">
        <Carousel responsive={responsive} autoPlaySpeed={1000} swipeable={true} draggable={true} showDots={false} infinite={true} >
            {
                (massiv.length > 0) ? massiv.map((item, index) => {
                    return (
                        <div key={index} className='car_img'>
                            <img className='Big_carousel_img' height={550} src={item.head_image1} alt="Carousel_photo" />
                        </div>
                    )
                })
                    :
                    <>
                        Loading......
                    </>
            }
        </Carousel>
    </div>
    )
}
