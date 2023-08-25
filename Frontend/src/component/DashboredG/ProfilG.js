import React from "react";
import "../Style/dashbored/Profil.css";
import SideNavG from "../sideNav/SideNavG.js";


const ProfilG = () => {
  
  const gest =JSON.parse(window.localStorage.getItem("user"))

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavG gest={JSON.parse(window.localStorage.getItem("user"))} />
        <div className="col py-3">
          <div className="container-profil">
            <header>Profile Gestionnaire</header>
            <form className="form1" action="#">
              <div className="formP first">
                <div className="details personal">
                  <span className="title">Détails personnels</span>

                  <div className="fieldsP">
                    <div className="input-fieldP">
                      <label>Nom</label>
                      <input value={gest.f_name} id="f_name" type="text" />
                    </div>

                    <div className="input-fieldP">
                      <label>Numero Téléphone</label>
                      <input value={gest.numberPhone} id="numberPhone" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Email</label>
                      <input value={gest.email} id="email" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Prenom</label>
                      <input value={gest.l_name} id="l_name" type="text"/>
                    </div>

                    <div className="input-fieldP">
                      <label>Date de naissance</label>
                      <input value={gest.date} id="date" type="date"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Sexe</label>
                      <input value={gest.sexe} className="blockInput" id="sexe" type="text" />
                    </div>
                  </div>
                </div>
                <br />
                <div className="details ID">
                  <span className="title">Détails d'identité</span>

                  <div className="fieldsP">
                    <div className="input-fieldP">
                      <label>Matricule</label>
                      <input value={gest.matricule}t className="blockInput" id="matricule" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Poste</label>
                      <input value={gest.post} className="blockInput" id="post" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      
                    </div>
                  </div>
                </div>
                
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilG;
