import React, { useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import "../Style/sideNav/sideNav.css";

const SideNavRH = (rhuser) => {
	const [profilePicture, setProfilePicture] = useState(null);
	rhuser=rhuser.rhuser
	const navigate=useNavigate()
	function handleProfilePictureChange(e) {
		const file = e.target.files[0];
		const reader = new FileReader();
	
		reader.onload = () => {
		  setProfilePicture(reader.result);
		};
	
		reader.readAsDataURL(file);
	  }



	  async function logout(){
		
		const authToken = window.localStorage.getItem("token")
		await axios.post("http://localhost:3001/logout", {
			headers: {
			  Authorization: `Bearer ${authToken}`
			}
		  })
			.then(response => {
			  console.log(response.data)
			  window.localStorage.removeItem("token")
			  window.localStorage.removeItem("user")
			  navigate("/")
			})
			.catch(error => {
			  
			  console.error('Logout failed:', error);
			});
	}

    return(
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 "style={{ backgroundImage: `url(./icons/Untitled.svg)`} }>
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
					<div  className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none ">
						</div>
						<img className='logo' src='./icons/logo.png' />
						<div>
							<label htmlFor="profile-picture" className="profile-picture-label">
        					<img
          						className="profile-picture"
          						src={profilePicture || './icons/login.png' }
         						alt="Profile"
        					/>
        					<br />
        					<input
          					type="file"
          					id="profile-picture"
          					accept="image/*"
          					onChange={handleProfilePictureChange}
        					/>
      						</label>
						</div>
						<h3 className='name'>{rhuser.l_name} {rhuser.f_name}</h3>
						<p className='poste'>Poste: RH</p>
						<ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
							<li className="nav-item ">
								<Link to="/Profil-RH" className="nav-link align-middle px-0 naviL ">
								<i className="fa-regular fa-user "></i> <span className="ms-1 d-none d-sm-inline ">Profile</span>
								</Link>
							</li>

							<li>
								<Link to="/Demande-RH" data-bs-toggle="collapse" className="nav-link px-0 align-middle naviL">
								<i className="fa-solid fa-medal "></i> <span className="ms-1 d-none d-sm-inline ">Evaluation</span> </Link>
							</li>

							<li className="nav-item ">
								<Link to="/MesDemandes-RH" className="nav-link px-0 align-middle naviL">
								<i className="fa-solid fa-inbox "></i> <span className="ms-1 d-none d-sm-inline "> Mes demandes</span></Link>
							</li>


                            <li className="nav-item ">
								<Link to="/Boite-de-reception-RH" className="nav-link px-0 align-middle naviL">
								<i class="fa-solid fa-box-archive"></i> <span className="ms-1 d-none d-sm-inline "> boîte de réception</span></Link>
							</li>

							<li className="nav-item ">
							<button onClick={logout} className="nav-link px-0 align-middle logout" >
								<i className="fa-solid fa-arrow-right-from-bracket"></i> <span className="ms-1 d-none d-sm-inline ">Quiter</span></button>
							</li>
                        
							
						</ul>
						<hr/>

						<div class="dropdown pb-4 ">

						</div>
					</div>
				</div>

    );
};

export default SideNavRH ;