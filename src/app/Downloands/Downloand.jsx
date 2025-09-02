import React, { useState } from 'react';
import Navbar from '../Components/Navbar/navbar';
import './Downloand.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


function Downloand(props) {
  const urlToDownload = ("http://34.138.14.62/ApiReact/uploads/63da725761e9a");
  const [download, setDownload] = useState("");
  const [count, setCount] = useState(0);
  

  return <div className="back">

    <Navbar />
    <div className="titulo2">
      <h1>Central de Downloands</h1>
    </div>
    <div className="titulo3">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Aplicativo GeoMobile
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">  <p>
              <img class="imageIcon" src="/Images/favicon.ico" />
              <i class="objnome">Aplicativo GeoMobile</i>
              <button type="button" class="btnDownload"
                onClick={() => {
                  setDownload(urlToDownload);
                  setCount((old) => old + 1);
                  console.log(urlToDownload)
                }}
              >
                Download
                <img class="imageDown" src="/Images/icons8-download-96.png" />
              </button>

            </p>
              {download && (
                <iframe
                  src={download + "?c=" + count}
                  style={{ display: "none" }}
                ></iframe>
              )}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Objeto</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Objeto</div>
          </div>
        </div>
      </div>
    </div>

  </div>
}

export default Downloand;
