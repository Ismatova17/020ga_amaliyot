import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Circle_carousel() {
    const [BigMassiv, setBigMassiv] = useState([])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    useEffect(() => {
        Axios.get('https://api.npoint.io/1f822fe5bc64d29bf01e')
            .then(ress => {
                // console.log(ress.data);
                setBigMassiv(ress.data.concat(ress.data))
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    // console.log(BigMassiv, 'bu massiv');
    return (
        <div className="container">
            <Carousel responsive={responsive} autoPlaySpeed={1000} swipeable={true} draggable={true} showDots={false} infinite={true} >
                {
                    (BigMassiv.length > 0) ? BigMassiv.map((item, index) => {
                        return (
                            <div key={index} className='mb-5 mt-1'>
                                <img width={150} src={item.nav_image1} alt="Carousel_photo" />
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
