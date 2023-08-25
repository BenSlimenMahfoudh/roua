import React, { useState, useEffect , useMemo } from "react";
import "../Style/dashbored/Demande.css";
import SideNavG from "../sideNav/SideNavG";




const Autoevalu = () => {
  return (
    
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <SideNavG  gest={JSON.parse(window.localStorage.getItem("user"))} />
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

export default Autoevalu ;