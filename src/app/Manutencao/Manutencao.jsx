import Navbar from './NavbarManutencao/navbarManutencao';
import './Manutencao.css';

function Manutencao(props) {



    
  return <div className=''>
    <Navbar />
    <div className='titulolaboratorio container-fluid'>
      <h1 className='texttitulo '>MANUTENÇÃO</h1>
    </div>
    <br/>
      <br/>
      <br/>
<div className='align-items-center'>
    <br/>
  
      </div>


    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" height="10" width="10" >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../Images/LAB92.jpeg" class="d-block w-100" alt="1000" height="860" width="1000" />
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/LAB47.jpeg" class="d-block w-100" alt="2px" height="860" />
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/LAB79.jpeg" class="d-block w-100" alt="..." height="860" />
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/LAB60.jpeg" class="d-block w-100" alt="..." height="860" />
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/LAB50.jpeg" class="d-block w-100" alt="..." height="860" />
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

export default Manutencao;