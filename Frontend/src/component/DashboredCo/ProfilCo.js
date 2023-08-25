import React from "react";
import "../Style/dashbored/Profil.css";
import SideNavCo from "../sideNav/SideNavCo";


const ProfilCo = () => {
  const collab =JSON.parse(window.localStorage.getItem("user"))


  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavCo collab={collab} />
        <div className="col py-3">
          <div className="container-profil">
            <header>Profile Collaborateur</header>
            <form className="form1" action="#">
              <div className="formP first">
                <div className="details personal">
                  <span className="title">Détails personnels</span>

                  <div className="fieldsP">
                    <div className="input-fieldP">
                      <label>Nom</label>
                      <input value={collab.f_name} id="f_name" type="text" />
                    </div>

                    <div className="input-fieldP">
                      <label>Numero Téléphone</label>
                      <input value={collab.numberPhone} id="numberPhone" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Email</label>
                      <input value={collab.email} id="email" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Prenom</label>
                      <input value={collab.l_name} id="l_name" type="text"/>
                    </div>

                    <div className="input-fieldP">
                      <label>Date de naissance</label>
                      <input value={collab.date} id="date" type="date"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Sexe</label>
                      <input value={collab.sexe} className="blockInput" id="sexe" type="text" />
                    </div>
                  </div>
                </div>
                <br />
                <div className="details ID">
                  <span className="title">Détails d'identité</span>

                  <div className="fieldsP">
                    <div className="input-fieldP">
                      <label>Matricule</label>
                      <input value={collab.matricule}t className="blockInput" id="matricule" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Poste</label>
                      <input value={collab.post} className="blockInput" id="post" type="text"  />
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

export default ProfilCo;
