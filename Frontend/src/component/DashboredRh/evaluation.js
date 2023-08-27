import React, { useState, useEffect } from "react";
import SideNavRH from "../sideNav/SideNavRH.js";
import "../Style/dashbored/Demande.css";
import {io} from "socket.io-client";
const socket =io.connect("http://localhost:3001")

const DemandeRh =() => {
  useEffect(()=>{
    socket.emit("connection")
  })

 const testclick=()=>{
  console.log("clcik")
 }
    const [dateD, setDateD] = useState("");
    const [dateF, setDateF] = useState("");
    const [file, setFile] = useState(null);
    // const [nombreDeJours, setNombreDeJours] = useState("");
    
    const userRH= JSON.parse(window.localStorage.getItem("user"))
    const userID = userRH.id

    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };

    const handleSubmit =() => {

      const conge = {
        dateDebut: dateD,
        dateFin: dateF,
        userId: userID,
        nbJours: calculateDays(dateD,dateF)+1 ||0,
        file: file,
      };
      console.log(conge)
      socket.emit('submitConge', conge);
      setDateD("")
      setDateF("")
      setFile(null)
    }
  
    // Function to calculate number of days between two dates
    const calculateDays = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDiff = Math.abs(end.getTime() - start.getTime());
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return days;
    };
  


  
    return (
      <div>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <SideNavRH rhuser={JSON.parse(window.localStorage.getItem("user"))}/>
            <div class="col py-3">
              <div className="container-profil">
                <header className="titleD">Evaluation</header>
                <div className="form1">
                                  <div className="fieldsP ">
                                      <div className="input-fieldP">
                                          <label>Date de debut</label>
                                          <input type="Date"  onChange={(e) => setDateD(e.target.value)} value={dateD}/>
                                      </div>
                                      <div className="input-fieldP">
                                          <label>Date de Fin</label>
                                          <input type="Date" onChange={(e) => setDateF(e.target.value)} value={dateF}/>
                                      </div>
  
                                      <div className="input-fieldP">

                                        <label>Nombre de jours</label>
                                        <input type="text" 
                                        
                                        value={(calculateDays(dateD, dateF)+1) || 0} />

                                      </div>                                 
                                  <div className="posBtn1">
  
                                      <button  className = "btn-warning" style={{position:"relative",right:"30px"}}>
                                          <i class = "fa fa-upload"></i> pièce jointe
                                          <input onClick={testclick} id="Filepdf" type="file" onChange={handleFileChange}/>
                                      </button>
                                      <button className="buttonD1" onClick={handleSubmit} >
                                          <span className="text">Valider</span>
                                      </button>
  
                                  </div>
                                  </div>
                              </div>
                      </div>
                  </div>
          </div>
          </div>
          </div>
      );
  };

export default DemandeRh;