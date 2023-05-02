import React from 'react'
import "../Hero/Hero.css";


const Hero = () => {
    return (
        <>
            <div className="container d-flex">
                <div className="row">
                    <div className="col-md-6 mt-3 d-flex align-items-center">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, praesentium. Officia, consectetur? Voluptatem, nam impedit? Facere distinctio consequatur est sint!</p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 mt-4">
                        <img className='hero_img' src='https://sonaltadigibiz.co.in/wp-content/uploads/2021/04/hero-11.png' alt='hero'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
