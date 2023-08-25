import React, { useState, useEffect } from 'react';
import SideNavE from '../sideNav/SideNavE';

import '../Style/dashbored/MesDemandes.css';

const MesDemandesE = () => {
 

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavE user={JSON.parse(window.localStorage.getItem("user"))} />
        <div className="col py-3">
          <div className="container-profil">
            <header className="titleD">Evaluation</header>
            <form className="form1" >
                  
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesDemandesE;
