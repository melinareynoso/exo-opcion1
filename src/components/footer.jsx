import React from "react";
import logo from "../images/logo.png"

export default function Footer(){

    const [button, setButton] = React.useState([])

    React.useEffect(() => {
        const buttonUp = document.getElementById('button-up')
        setButton(buttonUp)
    },[])

    function scrollUp(){
        var currentScroll = document.documentElement.scrollTop;
    
        if(currentScroll > 0){
            button.style.transform = "scale(0)"
          window.requestAnimationFrame(scrollUp)
          window.scrollTo(0, currentScroll - (currentScroll / 30))
        } 
      }
    
      
    
      window.onscroll = function(){
    
        var scroll = document.documentElement.scrollTop;
    
        if(scroll > 500){
    
            button.style.transform = "scale(1)"
        }else if (scroll < 500){
    
            button.style.transform = "scale(0)"
        }
    
      }

    return (
        <section  id="footer">
            <div onClick={scrollUp} id='button-up' >
            <i class="icon alt fa-arrow-up"></i>
            </div>
            <ul class="icons">
                <li><a href="/#" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="/#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
                <li><a href="/#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="/#" class="icon alt fa-whatsapp"><span class="label">Whatsapp</span></a></li>
                
            </ul>
            <ul class="copyright">
                <li>&copy; 2018 - Todos los derechos reservados.</li> <br/>
                <a href="/#"><img src={logo} alt="" width="120" height="120"/></a>
            </ul>
        </section>
    )
}