import React, { useState, useEffect } from 'react';
import SideNavRH from '../sideNav/SideNavRH.js';

import CommentBar from '../CommentBar.js';
// import axios from 'axios';
import {io} from "socket.io-client";
const socket =io.connect("http://localhost:3001")

const InboxRh = () => {
  const userAdmin= JSON.parse(window.localStorage.getItem("user")) 
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(''); 
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
        UserID:userAdmin.id,
        dateComment:date,
        timeComment:heure,
        byUser: userAdmin.l_name+' '+userAdmin.f_name,
        postUser:userAdmin.post,
        comment:newComment
      }
      console.log("data comment",dataComment)
      socket.emit('newComment',dataComment);
      setNewComment('');
    }
  
  };
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavRH rhuser={JSON.parse(window.localStorage.getItem("user"))} />
        <div className="col py-3 boxComment" >
          <div className="container-profil" >
            <header className="titleD">Commentaire</header>
            <div className='AllComment'>
            {comments.map((comment, index) => (
          <div key={index} className="comment">
            <CommentBar infocomment={comment}/>
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

export default InboxRh;
