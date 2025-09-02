import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/navbar';
import './home.css';

function Home() {

  return <div>
    <Navbar />
    <div className="container-fluid titulo">

    </div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" height="10" width="10" >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../Images/imagem_5e42b3fd7dda0.jpg" class="d-block w-100" alt="1000" height="860" width="1000" />
        </div>
        <div class="carousel-item">
          <img src="../Images/PremioSamarco.jpg" class="d-block w-100" alt="2px" height="860" />
        </div>
        <div class="carousel-item">
          <img src="../Images/backoffice_600b1467cbe4d.jpg" class="d-block w-100" alt="..." height="860" />
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

export default Home;