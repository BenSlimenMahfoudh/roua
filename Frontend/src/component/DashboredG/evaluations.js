import React, { useState, useEffect } from "react";
import "../Style/dashbored/Demande.css";
import SideNavG from "../sideNav/SideNavG.js";

const Evalu =() => {

  
    return (
      <div>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <SideNavG gest={JSON.parse(window.localStorage.getItem("user"))} />
            <div class="col py-3">
              <div className="container-profil">
                <header className="titleD">Evaluation</header>
                <form className="form1">
                              </form>
                      </div>
                  </div>
          </div>
          </div>
          </div>
      );
  };

export default Evalu;