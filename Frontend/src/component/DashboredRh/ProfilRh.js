import React from "react";
import "../Style/dashbored/Profil.css";
import { useState, useEffect } from "react";
import SideNavRH from "../sideNav/SideNavRH.js";

const ProfilRh =() => {
  const rhFind =JSON.parse(window.localStorage.getItem("user"))

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavRH rhuser={rhFind} />
        <div className="col py-3">
          <div className="container-profil">
            <header>Profile</header>
            <form className="form1" action="#">
              <div className="formP first">
                <div className="details personal">
                  <span className="title">Détails personnels</span>

                  <div className="fieldsP">
                    <div className="input-fieldP">
                      <label>Nom</label>
                      <input value={rhFind.f_name} id="f_name" type="text" />
                    </div>

                    <div className="input-fieldP">
                      <label>Numero Téléphone</label>
                      <input value={rhFind.numberPhone} id="numberPhone" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Email</label>
                      <input value={rhFind.email} id="email" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Prenom</label>
                      <input value={rhFind.l_name} id="l_name" type="text"/>
                    </div>

                    <div className="input-fieldP">
                      <label>Date de naissance</label>
                      <input value={rhFind.date} id="date" type="date"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Sexe</label>
                      <input value={rhFind.sexe} className="blockInput" id="sexe" type="text" />
                    </div>
                  </div>
                </div>
                <br />
                <div className="details ID">
                  <span className="title">Détails d'identité</span>

                  <div className="fieldsP">
                    <div className="input-fieldP">
                      <label>Matricule</label>
                      <input value={rhFind.matricule}t className="blockInput" id="matricule" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Poste</label>
                      <input value={rhFind.post} className="blockInput" id="post" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilRh;
