import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../Style/login/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate(); // Utilisez useNavigate ici
  function signup(){
    navigate("/Signup")
  }
  async function LoginTest(email, password) {
    if (email.length !== 0 && password.length !== 0){
     await axios
        .post('http://localhost:3001/login', { email, password })
        .then(response => {
          console.log(response.data.message); // Data received successfully
          const post = response.data.user.post;
          window.localStorage.setItem("user",JSON.stringify(response.data.user))
          window.localStorage.setItem("token",response.data.token)
          if (post === "Administrateur") navigate("Profil-Administrateur"); // Utilisez navigate ici
          else if (post === "RH") navigate("Profil-RH");
          else if (post === "Gestionnaire") navigate("Profil-gest");
          else if (post === "Collaborateur") navigate("Profil-collab");
        })
        .catch(error => {
          console.log(error)
          setErrLogin("Verifiez Vos cordonnées... !!")
        });
    }
  }

  function SendLogin() {
    const email = document.getElementById("email-login");
    const password = document.getElementById("pass-login");
    LoginTest(email.value, password.value);
  }

  function setErrLogin(msg){
    document.getElementById("errLogin").innerHTML=msg
    document.getElementById("errLogin").classList.add("actLoginErr")
  }
  return (
    <div style={{ backgroundImage: `url(./icons/back4.svg)` }} className="back">
      
      <img src="./icons/login.png" className="mt-5 p-4 mx-auto d-block pos" alt="user" />

      <Row className="bx">
        <Col lg={5} md={6} sm={12} className="p-4 m-auto ">
          

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            
          >
            <div className="mb-3">
              <Form.Item
                name="matricule"
                rules={[
                  {
                    required: true,
                    message: "Veuillez saisir votre e-mail s'il vous plait!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  style={{ padding: '7px' }}
                  id="email-login" 
                  // onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>
            </div>

            <div className="mb-3">
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Veuillez saisir votre mot de passe s'il vous plait!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Mot de passe"
                  style={{ padding: '7px' }}
                  id="pass-login" 
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
            </div>
            <h6 className='errLogin' id='errLogin'>
              errrrrrrrrrrrrrrr
            </h6>
              <div className="d-grid log">
                <Form.Item>
                  <button onClick={SendLogin} className="button">Connecter</button>
                  <button onClick={signup} className="button">S'inscrir</button>
                  
                </Form.Item>
              </div>
            
          </Form>
        </Col>
      </Row>
      <h6 className="mt-3 p-5 text-center text-secondary " style={{ position: 'relative', bottom: '26px' }}>
        © All right reserved to <span className='logoo'><img className='logoà' src='./icons/logo.png'  alt=""/> </span> 
      </h6>
    </div>
  );
};

export default Login;
