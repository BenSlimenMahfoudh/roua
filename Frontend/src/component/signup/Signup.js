import React from "react";
import "../Style/Signup/Signup.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => { 
  // pour change la pge inscrit vers page login
  const navigate = useNavigate();
  //verifier que tous les champs ne sont pas vides
  function verifInputs(){
    var nbVide=0;
    const Inputs= document.querySelectorAll("input")
    for(let i=0;i<Inputs.length;i++){
      if(Inputs[i].value===""){Inputs[i].style.border="2px solid red";nbVide++}
      else Inputs[i].style.border="1px solid #aaa"
    }

    if(nbVide!==0) return false
    return true
  }
  // verifier la validation de email
  function verifEmail(e){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(e);
  }
  // envoyer les donner en nodejs
  const sendFromSign=()=>{
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const passConf=document.getElementById("passConf").value
    const nom=document.getElementById("nom").value
    const date=document.getElementById("date").value
    const prenom=document.getElementById("prenom").value
    const post=document.getElementById("post").value
    const mat=document.getElementById("mat").value
    const number=document.getElementById("numberPhone").value
    const sex=document.getElementById("sex").value

    const userSend={
      f_name:nom,
      l_name:prenom, 
      email:email,
      password:password,
      numberPhone:number,
      sexe:sex,
      post:post,
      matricule:mat,
      date:date
    }
    if(!verifInputs()) setErrSign("Remplire tous les champs... !!")
    else if(!verifEmail(email)) {setErrSign("verifier votre @email... !!");document.getElementById('email').style.border="2px solid red"}
    else if(password!== passConf) {setErrSign("Confermez votre mot de passe... !!!");document.getElementById("passConf").style.border='2px solid red'}
    else{
    axios
        .post('http://localhost:3001/signup', userSend)
        .then(response => {
          console.log(response.data.message); // Data received successfully
          alert(response.data.message);
          navigate("/")
        })
        .catch(error => {
          console.error('Error sending data:', error);
          console.log(error.message)
        });
    }
  
  }
// focntion de errr 

function setErrSign(msg){
    document.getElementById("errSign").innerHTML=msg
    document.getElementById("errSign").classList.add("actSignErr")
}
  return (
    <div className="container-fluid-inscit">
      <div className="row flex-nowrap">
        <div className="col py-3">
          <div className="container-inscit">
            <header>S'inscrire</header>
            <form className="form1" action="#">
              <div className="formP first">
                <div className="details personal">
                  <span className="title">Détails personnels</span>

                  <div className="fieldsP">
                    <div className="input-fieldP">
                      <label>Nom</label>
                      <input id="nom" type="text" />
                    </div>

                    <div className="input-fieldP">
                      <label>Numero Téléphone</label>
                      <input id="numberPhone" type="number"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Email</label>
                      <input id="email" type="email"  />
                    </div>
                    
                    <div className="input-fieldP">
                      <label>Prenom</label>
                      <input id="prenom" type="text"/>
                    </div>

                    <div className="input-fieldP">
                      <label>Date de naissance</label>
                      <input id="date" type="date"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Sexe</label>
                      <select id="sex">
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="password">
                  <span className="title">Mot de Passe</span>
                      <div className="fieldsP">
                          <div className="input-fieldP">
                                <label>Password</label>
                                <input id="password" type="password"  />
                          </div>
                          <div className="input-fieldP">
                            <label>Confirmer password</label>
                            <input id="passConf" type="password"/>
                          </div>
                          <div className="input-fieldP"></div>
                      </div>
                </div>
                
                <div className="details ID">
                  <span className="title">Détails d'identité</span>

                  <div className="fieldsP">
                    <div className="input-fieldP">
                      <label>Matricule</label>
                      <input id="mat" type="text"  />
                    </div>

                    <div className="input-fieldP">
                      <label>Poste</label>
                      
                      <select id="post">
                        <option value="Administrateur">Administrateur</option>
                        <option value="RH">RH</option>
                        <option value="Gestionnaire">Gestionnaire</option>
                        <option value="Collaborateur">Collaborateur</option>
                      </select>
                    </div>
                    <div className="input-fieldP"></div>
                  </div>
                </div>
                <h6 className="errSign" id="errSign">eeeeeee</h6>
                <div>
                  <button onClick={sendFromSign} className="btn-sign">
                    s'inscrir
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Signup;
