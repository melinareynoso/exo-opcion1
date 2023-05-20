import React, {useEffect} from "react";

import Aos from "aos";
import 'aos/dist/aos.css';

import logo from "../images/logo.png"

export default function Header(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
    },[]);
    
    return( 
        <section id="header">
            <div class="inner">
                <a href="/#"><img src={logo} alt="" width="350" height="350"/></a>
                <h1 data-aos="zoom-in" >Hola! <strong>bienvenidos</strong>, esta es una muestra<br />
                    del diseño web promocional. Opci&oacute;n 1.</h1>
                <p data-aos="zoom-in" >
                    La web incluye el contenido que vemos en este ejemplo<br />
                    No tiene men&uacute; ni formulario de contacto. <br/>
                    Incluye hasta 6 imagenes y enlaces a redes sociales. 
                </p>
                <ul class="actions">
                    <li data-aos="fade-up"
                        data-aos-duration="2000" ><a href="#one" class="button scrolly">Sección1</a></li>
                        <li data-aos="fade-up"
                        data-aos-duration="2000" ><a href="#two" class="button scrolly">Sección2</a></li>
                        <li data-aos="fade-up"
                        data-aos-duration="2000" ><a href="#three" class="button scrolly">Sección3</a></li>
                        <li data-aos="fade-up"
                        data-aos-duration="2000" ><a href="#four" class="button scrolly">Sección4</a></li>
                </ul>
            </div>
        </section>
    )
}