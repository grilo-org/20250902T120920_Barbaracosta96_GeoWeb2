import Navbar from '../../Laboratorio/NavbarLaboratorio/navbarlaboratorio';
import React from 'react';
import '../Ensaios/teoragua.css';
import { Link } from 'react-router-dom';
import { useState,useEffect} from 'react';




function TeorDeAgua() {

  
  const [massaumida1, setMassaumida1] = useState()
  const [massaumida2, setMassaumida2] = useState()
  const [massaumida3, setMassaumida3] = useState()
  const [massaumida4, setMassaumida4] = useState()


  const [massaseca1, setMassaSeca1] = useState()
  const [massaseca2, setMassaSeca2] = useState()
  const [massaseca3, setMassaSeca3] = useState()
  const [massaseca4, setMassaSeca4] = useState()


  const [massacapsula1, setMassaCapsula1] = useState()
  const [massacapsula2, setMassaCapsula2] = useState()
  const [massacapsula3, setMassaCapsula3] = useState()
  const [massacapsula4, setMassaCapsula4] = useState()


  const [massaagua1, setMassaagua1] = useState()
  const [massaagua2, setMassaagua2] = useState()
  const [massaagua3, setMassaagua3] = useState()
  const [massaagua4, setMassaagua4] = useState()

  
  const [massasoloseca1, setMassaSoloSeca1] = useState()
  const [massasoloseca2, setMassaSoloSeca2] = useState()
  const [massasoloseca3, setMassaSoloSeca3] = useState()
  const [massasoloseca4, setMassaSoloSeca4] = useState()

  const [teoragua1, setTeorAgua1] = useState()

 
 
  const [Media ,setMedia] = useState()
  const ateoragua1 = (massaagua1 / massasoloseca1 * 100)
  const ateoragua2 = (massaagua2 / massasoloseca2 * 100)
  const ateoragua3 = (massaagua3 / massasoloseca3 * 100)
  const ateoragua4 = (massaagua4 / massasoloseca4 * 100)

  // const media = ((ateoragua1 + ateoragua2 + ateoragua3 + ateoragua4) / 4)


  
  const desviorelativo1 = (ateoragua1 - Media)
  const desviorelativo2 = (ateoragua2 - Media)
  const desviorelativo3 = (ateoragua3 - Media)
  const desviorelativo4 = (ateoragua4 - Media)

 
  const media =() =>
  {
  
     return ((ateoragua1 + ateoragua2 ) / 2)
  }
    const media2 =() =>
  {
  
     return(ateoragua1 + ateoragua2 + ateoragua3) / 3
  }
  
  
  
  
    useEffect(() => {
  
      if (   desviorelativo1 !== "" && desviorelativo2 !== "" && desviorelativo3 ===""  && desviorelativo4 === ""  )
      
      {
  
     setMedia (media())  }
  
  
      else if ( desviorelativo4 === "" && desviorelativo1 !== "" && desviorelativo2 !== "" &&  desviorelativo3 !== "" ) {
  
       setMedia (media2())

        
        }
  
    
   
      console.log(Media)
    })
//   const media =() =>
// {
//   return ((ateoragua1 + ateoragua2 ) / 2)
  
// }


// const media2 =() =>
// {
//   return ((ateoragua1 + ateoragua2 + ateoragua3) / 3)
  
// }





// useEffect(() => {

//   const media =() =>
// {
//   return ((ateoragua1 + ateoragua2 ) / 2)}
  
 
 
 
//   const media2 =() =>{

//   return ((ateoragua1 + ateoragua2 + ateoragua3) / 3)




  const atmassaaguasub1 = (novoValorSub1) => {
    setMassaumida1(novoValorSub1)

  }
  const attmassaaguasub = (novoValorSub) => {

    setMassaSeca1(novoValorSub);
    setMassaagua1(massaumida1 - novoValorSub);

  }




  const atmassaaguasub2 = (novoValorSub1) => {
    setMassaumida2(novoValorSub1)

  }
  const attmassaaguasub1 = (novoValorSub) => {

    setMassaSeca2(novoValorSub);
    setMassaagua2(massaumida2 - novoValorSub);

  }



  const atmassaaguasub3 = (novoValorSub1) => {
    setMassaumida3(novoValorSub1)

  }
  const attmassaaguasub2 = (novoValorSub) => {

    setMassaSeca3(novoValorSub);
    setMassaagua3(massaumida3 - novoValorSub);

  }



  const atmassaaguasub4 = (novoValorSub1) => {
    setMassaumida4(novoValorSub1)

  }
  const attmassaaguasub3 = (novoValorSub) => {

    setMassaSeca4(novoValorSub);
    setMassaagua4(massaumida4 - novoValorSub);

  }
 const atualizarValorSub1 = (novoValorSub1) => {
    setMassaSeca1(novoValorSub1)

  }
  const attualizarValorSub = (novoValorSub) => {

    setMassaCapsula1(novoValorSub);
    setMassaSoloSeca1(massaseca1 - novoValorSub);
  }




  const atualizarValorSub2 = (novoValorSub1) => {
    setMassaSeca2(novoValorSub1)

  }
  const attualizarValorSub1 = (novoValorSub) => {

    setMassaCapsula2(novoValorSub);
    setMassaSoloSeca2(massaseca2 - novoValorSub);
  }





  const atualizarValorSub3 = (novoValorSub1) => {
    setMassaSeca3(novoValorSub1)

  }
  const attualizarValorSub2 = (novoValorSub) => {

    setMassaCapsula3(novoValorSub);
    setMassaSoloSeca3(massaseca3 - novoValorSub);
  }






  const atualizarValorSub4 = (novoValorSub1) => {
    setMassaSeca4(novoValorSub1)

  }
  const attualizarValorSub3 = (novoValorSub) => {

    setMassaCapsula4(novoValorSub);
    setMassaSoloSeca4(massaseca4 - novoValorSub);
  }


  return <div className='container'>
    <Navbar />
    <h1 className='titulo1'>DETERMINAÇÃO DO TEOR DE ÁGUA</h1>

    <br /> <br />

    <div className=''>



      <form className="d-flex" role="search">


        <input className=" mar  me-2 " type="search" placeholder=" Amostra" aria-label="Search">
        </input>
        <input className=" mar me-2 " type="search" placeholder="Numero do Ensaio" aria-label="Search">
        </input>
        <button className="btn btn-outline-success" type="submit">Pesquisar</button>


      </form>

      <br /> <br /> <br /><br />





      <div className=''>

        <strong><p>CADASTRO DE EQUIPAMENTO  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  NORMA DE ENSAIO <input type="text" className="form-control-sm"  ></input> </p> </strong>


      </div>

      <div className='m-3' >
        <label for="Balanca"><strong>Balança</strong>  &nbsp; : </label>

        <select name="Balanca" id="Balanca">
          <option value="" select></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3" >3</option>
          <option value="4" >4</option>
        </select>


        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <label
        ><strong>METODOLOGIA DE REPARTIÇÃO DA AMOSTRA <br /><input type="text" className="tminput"  ></input> </strong> </label>


        <br />


        <br />
        <label for="Estufa"> <strong>Estufa</strong>  &nbsp; &nbsp;    : </label>

        <select name="Estufa" id="Estufa">
          <option value="" select></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3" >3</option>
          <option value="4" >4</option>
        </select>



        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;   <label
        ><strong>Laboratorio : <input type="text" className="form-control-sm "   ></input> </strong> </label>


        <br /><br />

      </div>





      <table className=" table-bordered">
        <tbody className="table">

          <tr>
            <th scope="row">CÁPSULA (N): </th>
            <th scope="col"> <input type="number" className="form-control-sm"  ></input></th>
            <th scope="col"> <input type="Number" className="form-control-sm"  ></input></th>
            <th scope="col"> <input type="Number" className="form-control-sm"  ></input></th>
            <th scope="col"> <input type="Number" className="form-control-sm"  ></input></th>

          </tr>


          <tr>
            <th scope="row">MASSA DA AMOSTRA ÚMIDA + CÁPSULA(g):</th>
            <th scope="col">   <input type="Number" className="form-control-sm" value={+(parseFloat(massaumida1).toFixed(2))} onChange={(e) => atmassaaguasub1(parseFloat(e.target.value.replace(",", ".")))} ></input></th>

            <th scope="col">   <input type="Number" className="form-control-sm" value={massaumida2} onChange={(e) => atmassaaguasub2(parseFloat(e.target.value.replace(",", ".")))} ></input></th>


            <th scope="col">   <input type="Number" className="form-control-sm" value={massaumida3} onChange={(e) => atmassaaguasub3(parseFloat(e.target.value.replace(",", ".")))} ></input></th>


            <th scope="col">   <input type="Number" className="form-control-sm" value={massaumida4} onChange={(e) => atmassaaguasub4(parseFloat(e.target.value.replace(",", ".")))} ></input></th>

          </tr>


          <tr>
            <th scope="row">MASSA DA AMOSTRA SECA + CÁPSULA(g):</th>
            <th scope="col">   <input type="Number" className="form-control-sm" value={massaseca1} onChange={(e) => attmassaaguasub(parseFloat(e.target.value.replace(",", ".")))} ></input></th>


            <th scope="col">   <input type="Number" className="form-control-sm" value={massaseca2} onChange={(e) => attmassaaguasub1(parseFloat(e.target.value.replace(",", ".")))} ></input></th>


            <th scope="col">   <input type="Number" className="form-control-sm" value={massaseca3} onChange={(e) => attmassaaguasub2(parseFloat(e.target.value.replace(",", ".")))} ></input></th>


            <th scope="col">   <input type="Number" className="form-control-sm" value={massaseca4} onChange={(e) => attmassaaguasub3(parseFloat(e.target.value.replace(",", ".")))} ></input></th>

          </tr>


          <tr>
            <th scope="row">MASSA DA CÁPSULA(g):</th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={massacapsula1} onChange={(e) => attualizarValorSub(parseFloat(e.target.value))}  ></input></th>

            <th scope="col"> <input type="Number" className="form-control-sm" value={massacapsula2} onChange={(e) => attualizarValorSub1(parseFloat(e.target.value))}  ></input></th>

            <th scope="col"> <input type="Number" className="form-control-sm" value={massacapsula3} onChange={(e) => attualizarValorSub2(parseFloat(e.target.value))}  ></input></th>

            <th scope="col"> <input type="Number" className="form-control-sm" value={massacapsula4} onChange={(e) => attualizarValorSub3(parseFloat(e.target.value))}  ></input></th>

          </tr>


          <tr>
            <th scope="row">MASSA DA ÁGUA(g):</th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={+(parseFloat(massaagua1).toFixed(2))} onRateChange={(e) => setMassaagua1(parseFloat(e.target.value))} ></input></th>

            <th scope="col"> <input type="Number" className="form-control-sm" value={+(parseFloat(massaagua2).toFixed(2))} onRateChange={(e) => setMassaagua2 (parseFloat(e.target.value))} ></input></th>

            <th scope="col"> <input type="Number" className="form-control-sm" value={+(parseFloat(massaagua3).toFixed(2))} onRateChange={(e) => setMassaagua3(parseFloat(e.target.value))} ></input></th>

            <th scope="col"> <input type="Number" className="form-control-sm" value={+(parseFloat(massaagua4).toFixed(2))} onRateChange={(e) => setMassaagua4(parseFloat(e.target.value))} ></input></th>

          </tr>
          <tr>
            <th scope="row">MASSA DO SOLO SECO (g):</th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={massasoloseca1} ></input></th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={massasoloseca2} ></input></th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={massasoloseca3} ></input></th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={massasoloseca4} ></input></th>

          </tr>
          <tr>
            <th scope="row">TEOR DE ÁGUA (%):</th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={ateoragua1.toFixed(2)} ></input></th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={ateoragua2.toFixed(2)} ></input></th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={ateoragua3.toFixed(2)} ></input></th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={ateoragua4.toFixed(2)} ></input></th>
          </tr>
          <tr>
            <th scope="row">DESVIO RELATIVO Á MEDIDA(%):</th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={desviorelativo1.toFixed(2)} >
              
              </input></th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={desviorelativo2.toFixed(2)} >
              
              </input></th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={desviorelativo3.toFixed(2)} >
              
              </input></th>
            <th scope="col"> <input type="Number" className="form-control-sm" value={desviorelativo4.toFixed(2)} ></input></th>

          </tr>
          <tr>
            <th scope="row">TEOR DE ÁGUA MÉDIO(%):</th>
            {/* <th > <input type='Number' id='TeorM' className=" fomr form-control-sm" value={Media.toFixed(2)} ></input></th> */}
            <th > <input type='Number' className=" fomr form-control-sm" value={+(parseFloat(Media,).toFixed(2))}  aria-describedby="inputGroup-sizing-lg"></input></th>
          </tr>

        </tbody>
      </table>
      <br /><br /><br /><br />
      <label ><strong> Observações:</strong> </label>



      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <label > Ensaio Verificado <input type='date' className=" fomr form-control-sm"></input> <br /><label ><strong> Executado por:</strong> <input type="text" className="tminput2 "   ></input>  </label>
      </label>

      <br /><br /><br />  <br /><br /><br />  <br /><br /><br />




    </div>
  </div>





}

export default TeorDeAgua;