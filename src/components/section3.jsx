import React from "react";

import image from "../images/torre.jpg"

export default function Section3(){
    return(
        <section id="three" class="main style1 special">
            <div class="container">
                <header class="major">
                    <h2>Este es un titulo </h2>
                </header>
                <p>este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo .</p>
                <div class="row 150%">
                    <div data-aos="zoom-in" class="4u 12u$(medium)">
                        <span class="image fit"><img src={image} alt="" /></span>
                        <h3>Este es un titulo </h3>
                        <p>
                            este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo 
                            este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo 
                        </p>
                    </div>
                    <div data-aos="zoom-in" class="4u 12u$(medium)">
                        <span class="image fit"><img src={image}  alt="" /></span>
                        <h3>Este es un titulo </h3>
                        <p>
                            este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo 
                            este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo 
                        </p>
                    </div>
                    <div data-aos="zoom-in" class="4u$ 12u$(medium)">
                        <span class="image fit"><img src={image} alt="" /></span>
                        <h3>Este es un titulo </h3>
                        <p>
                            este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo 
                            este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}