import React from "react";
import SideNavE from "../sideNav/SideNavE.js";
import "../Style/dashbored/Profil.css";


const ProfilE = () => {
  const userFind =JSON.parse(window.localStorage.getItem("user"))

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavE user={userFind}/>
        <div className="col py-3">
          <div className="container-profil">
            <header>Profile Administrateur</header>
            <form className="form1" action="#">
              <div className="formP first">
                <div className="details personal">
                  <span className="title">Détails personnels</span>

                  <div className="fieldsP">
                    <div className="input-fieldP">
                      <label>Nom</label>
                      <input value={userFind.f_name} id="f_name" type="text" />
                    </div>

                    <div className="input-fieldP">
                      <label>Numero Téléphone</label>
                      <input value={userFind.numberPhone} id="numberPhone" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Email</label>
                      <input value={userFind.email} id="email" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Prenom</label>
                      <input value={userFind.l_name} id="l_name" type="text"/>
                    </div>

                    <div className="input-fieldP">
                      <label>Date de naissance</label>
                      <input value={userFind.date} id="date" type="date"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Sexe</label>
                      <input value={userFind.sexe} className="blockInput" id="sexe" type="text" />
                    </div>
                  </div>
                </div>
                <br />
                <div className="details ID">
                  <span className="title">Détails d'identité</span>

                  <div className="fieldsP">
                    <div className="input-fieldP">
                      <label>Matricule</label>
                      <input value={userFind.matricule}t className="blockInput" id="matricule" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Poste</label>
                      <input value={userFind.post} className="blockInput" id="post" type="text"  />
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

export default ProfilE;
