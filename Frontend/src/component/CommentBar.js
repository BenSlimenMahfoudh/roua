import React  from 'react';
import "./Style/commentStyle.css"
const CommentBar = (infocomment)=>{ 
  const PHDP = document.getElementById("PHDP")
  var claasNameImageComment="PHDPR "
  infocomment=infocomment.infocomment
  let UserSendName=infocomment.byUser
  const userAdmin= JSON.parse(window.localStorage.getItem("user")) 
  const idUser=(userAdmin.id)
  if(infocomment.UserID === idUser) UserSendName="Moi"
  if(infocomment.postUser ==="Administrateur") claasNameImageComment=claasNameImageComment+"userAdmin"
  if(infocomment.postUser ==="RH") claasNameImageComment=claasNameImageComment+"userRh"
  if(infocomment.postUser ==="Collaborateur") claasNameImageComment=claasNameImageComment+"userCollab"
  if(infocomment.postUser ==="Gestionnaire") claasNameImageComment=claasNameImageComment+"userGest"

  return(
      <div className='boxcomment'>
        <div className='partcomment headBoxCmnt'>
            <div className='leftPartBox'>
							<img className={claasNameImageComment} id='PHDP' src='./icons/user.png' alt=''
               />
            </div>
            <div className='RightPartBox'>
                <h3 className='byUser'>{UserSendName}</h3>
                <h6 className='postUser'>{infocomment.postUser}  <span>{infocomment.dateComment}-{infocomment.timeComment}</span></h6>
            </div>
        </div>
        <div className="partcomment footBoxCmnt">
            <div className='leftPartBox'>

            </div>
            <div className='RightPartBox'>
                <h6  className="txtComment"><span>Commentaire :</span> {infocomment.comment} </h6>
                </div>
        </div>
      </div>
  );


}

export default CommentBar;