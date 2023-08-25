import React ,{useState, useEffect} from 'react';
import SideNavE from '../sideNav/SideNavE.js';
// import axios from 'axios';
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001/")
// const commentBar = (infocomment)=>{
//   console.log("hhhhh :"+infocomment)
//   return(
//       <div>
//         <h2>{infocomment}</h2>
//       </div>
//   );
// }
const InboxA = () => {
//   const allcomment=[]
//   const userAdmin= JSON.parse(window.localStorage.getItem("user")) 
  
//   axios.get("http://localhost:3001/allComment").then(res=>{
//     const ac=res.data.data
//     ac.forEach(comment => {
//      allcomment.push(comment)
//      console.log(allcomment)
//     });
//   }).catch(e=>{console.error("errr"+e)})
  
 

//   function sendCommentByAdmin(){
//         var dateActuelle = new Date();
//         // Obtenir la date au format texte
//         var date = dateActuelle.toDateString();
//         // Obtenir l'heure au format texte
//         var heure = dateActuelle.toLocaleTimeString();
        
//         const dataComment={
//           dateComment:date,
//           timeComment:heure,
//           byUser: userAdmin.l_name+' '+userAdmin.f_name,
//           postUser:userAdmin.post,
//           comment:document.getElementById("commentTextarea").value
//         }
//         const authToken=window.localStorage.getItem("token")
        
    
//         axios.post("http://localhost:3001/addComment", dataComment,  
//         {headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       })
//           .then(response => {
//             console.log("Réponse du serveur :", response.NComment);
//             allcomment.innerHTML=`${commentBar(response.NComment)}`+allcomment.innerHTML

            
//           })
//           .catch(error => {
//             console.error("Erreur :", error);
//           });
      
//   }
//   // pour afficvher tous les commentaires

  



















    const userAdmin= JSON.parse(window.localStorage.getItem("user")) 

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    console.log(socket)  
    useEffect(() => {
      socket.emit("connection")
      socket.on('newComment', (comment) => {
        setComments([...comments, comment]);
      });

      socket.on('initialComments', (initialComments) => {
        setComments(initialComments);
      });
      return () => {
        socket.off('newComment');
      };
    }, [comments]);

    const handleAddComment = () => {
      
      if (newComment.trim() !== '') {
        var dateActuelle = new Date();
        var date = dateActuelle.toDateString();
        var heure = dateActuelle.toLocaleTimeString();
        const dataComment={
          dateComment:date,
          timeComment:heure,
          byUser: userAdmin.l_name+' '+userAdmin.f_name,
          postUser:userAdmin.post,
          comment:newComment
        }
        console.log(dataComment)
        socket.emit('newComment', dataComment);
        setNewComment('');
      }
    };


  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavE  user={JSON.parse(window.localStorage.getItem("user"))} />
        <div className="col py-3">
          <div className="container-profil">
            <header className="titleD">Commentaire</header>
            <div>
             {/* **************************  test *******************************/}
             {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
            </div>
            <div className="form1">
              <div className="form-group">
                <label htmlFor="commentTextarea">Votre Commentaire :</label>
                <br /><br />
                <textarea
                  id="commentTextarea"
                  className="form-control"
                  placeholder="Ecrit votre commentaire ici..."
                  rows={4}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </div>
              < br />
              <button onClick={handleAddComment} className="btn btn-primary">
                Envoyer Commentaire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxA;
