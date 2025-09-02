import React from 'react';
import'./footer.css'
function Footer(){
  var ano = new Date().getFullYear(); 

    return <section id="footer">    
      <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="/#"><i class='fab fa-facebook fa-spin fa-2x'></i></a></li>
             
                <li className="list-inline-item"><a href="/#"><i class='fab fa-instagram fa-spin fa-2x'></i></a></li>						
                <li className="list-inline-item"><a href="/#" target="_blank"><i class='fas fa-envelope fa-spin fa-2x'></i></a></li>
            </ul>
	    </div>
      <a href="https://shcompanytechnology.com/">https://shcompanytechnology.com/</a>
      <p>Desenvolvido por SH Company-2023</p>

    </section>;
  }

export default Footer;