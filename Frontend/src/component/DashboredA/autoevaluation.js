import React, { useState, useEffect , useMemo } from "react";
import "../Style/dashbored/Demande.css";
import SideNavE from "../sideNav/SideNavE.js";




const DemandeE = () => {
  return (
    
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <SideNavE  user={JSON.parse(window.localStorage.getItem("user"))} />
          <div class="col py-3">
            <div className="container-profil">
              <header className="titleD">Autoévaluation</header>
              <form className="form1">
              </form>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
};

export default DemandeE ;