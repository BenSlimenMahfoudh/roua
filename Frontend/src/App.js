import './App.css';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProfilA from './component/DashboredA/ProfilA';
import Eval from './component/DashboredA/evaluation';
import Ajout from './component/DashboredA/ajoutC';
import InboxA from './component/DashboredA/InboxA';

import ProfilRh from './component/DashboredRh/ProfilRh';
import DemandeRh from './component/DashboredRh/evaluation';
import MesDemandesRh from './component/DashboredRh/MesDemandesRh';
import InboxRh from './component/DashboredRh/InboxRh';

import ProfilG from './component/DashboredG/ProfilG';
import Evalu from './component/DashboredG/evaluations';
import Autoevalu from './component/DashboredG/autoevaluations';
import InboxG from './component/DashboredG/InboxG';

import InboxCo from './component/DashboredCo/InboxCo';
import ProfilCo from './component/DashboredCo/ProfilCo';
import Autoeva from './component/DashboredCo/autoevaluation';
import Evalt from './component/DashboredCo/evaluation';
import QuizReact from "./component/Quiz/QuizReact";
import QuizSymfony from "./component/Quiz/QuizSymfony";




 

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/Signup' element={<Signup/>} />
          {/*link for Aministrateur*/}
          <Route path="/Profil-Administrateur" element={<ProfilA />} />
          <Route path="/Evaluation" element={<Eval />} />
          <Route path="/Ajouter Collaborateur" element={<Ajout />} />
          <Route path="/Boite-de-reception-admin" element={<InboxA />} />



        
          {/*link for RH*/}
          <Route path="/Profil-RH" element={<ProfilRh />} />
          <Route path="/Demande-RH" element={<DemandeRh />} />
          <Route path="/MesDemandes-RH" element={<MesDemandesRh />} />
          <Route path="/Boite-de-reception-RH" element={<InboxRh />} />




          {/*link for Gestionnaire*/}
          <Route path="/Profil-gest" element={<ProfilG />} />
          <Route path="/autoevaluations" element={<Autoevalu />} />
          <Route path="/evaluations" element={<Evalu />} />
          <Route path="/Boite-de-reception-gest" element={<InboxG />} />




          {/*link for Collaborateur*/}
          <Route path="/Profil-collab" element={<ProfilCo />} />
          <Route path="/eval" element={<Evalt />} />
          <Route path="/autoeval" element={<Autoeva />} />
          <Route path="/Boite-de-reception-collab" element={<InboxCo />} />

         <Route path='/Quiz-React' element = {<QuizReact />} />
         <Route path='/Quiz-Symfony' element = {<QuizSymfony />} />
         {/*<Route path='/Quiz-Bi' element = {<QuizBI />} />
         <Route path='/Quiz-Devops' element = {<QuizDevops />} />*/}




          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
