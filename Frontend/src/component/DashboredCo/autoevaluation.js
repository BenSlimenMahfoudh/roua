import React, { useState, useEffect , useMemo } from "react";
import {Link} from "react-router-dom";

import "../Style/dashbored/Demande.css";
import SideNavCo from "../sideNav/SideNavCo";




const Autoeva = () => {

  return (
    
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <SideNavCo collab={JSON.parse(window.localStorage.getItem("user"))} />
          <div class="col py-3">
            <div className="container-profil">
              <header className="titleD">Autoévaluation</header>
              
                
                 
<br></br><br></br>
                 <div class="container-fluid offset-3" style={{height:"20vh",backgroundColor:"white"}}>
                <Link to ="/Quiz-React">
                <div class="col-6 btn btn-light" style={{boxShadow:"5px 10px rgba(0,0,0,0.6);"}}>
                  Quiz pour React  <i class="fa-brands fa-react"></i>
                  
                </div>
                </Link>
                <br></br><br></br>

                <Link to ="/Quiz-Symfony">
                <div class="col-6 btn btn-light" style={{boxShadow:"5px 10px rgba(0,0,0,0.6);"}}>
                  Quiz pour Symfony  <i class="fa-brands fa-symfony"></i> 
                </div>
                </Link>
                <br></br><br></br>

                <Link to ="/Quiz-React">
                <div class="col-6 btn btn-light" style={{boxShadow:"5px 10px rgba(0,0,0,0.6);"}}>
                  Quiz pour Business Intelegens  <i class="fa-solid fa-database"></i>
                </div>
                </Link>
                <br></br><br></br>

                <Link to ="/Quiz-React">
                <div class="col-6 btn btn-light" style={{boxShadow:"5px 10px rgba(0,0,0,0.6);"}}>
                  Quiz pour DevOps  <i class="fa-solid fa-gears"></i>
                </div>
                </Link>
              
                </div>
               
              
            </div>
          </div>
      </div>
    </div>
  </div>
  );
};

export default Autoeva ;