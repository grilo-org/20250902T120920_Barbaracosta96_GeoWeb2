import Navbar from './NavbarSondagem/navbarSondagem';
import './NavbarSondagem/navbarSondagem.css';

function Tela_Sondagem(props) {
    
  return <div>
    <Navbar />
    <div className='titulolaboratorio'>
      <h1 className='texttitulo'>SONDAGEM</h1>
    </div>
<br/>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" height="10" width="10" >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../Images/Sondagem1.webp" class="d-block w-100" alt="..."height="860" />
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/Sondagem2.jpg" class="d-block w-100" alt="2px" height="860" />
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/Sondagem3.jpeg" class="d-block w-100" alt="..." height="860" />
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/Sondagem4.jpeg" class="d-block w-100" alt="..." height="860" />
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/Sondagem5.jpeg" class="d-block w-100" alt="..." height="860" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
  </div>

}
export default Tela_Sondagem;