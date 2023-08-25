import React, { useState, useEffect } from "react";
import "../Style/dashbored/Demande.css";
import SideNavCo from "../sideNav/SideNavCo";

const Evalt =() => {
  
    return (
      <div>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <SideNavCo collab={JSON.parse(window.localStorage.getItem("user"))} />
            <div class="col py-3">
              <div className="container-profil">
                <header className="titleD">Evaluation</header>
                <form className="form1" >
                  
                </form>
                      </div>
                  </div>
          </div>
          </div>
          </div>
      );
  };

export default Evalt;