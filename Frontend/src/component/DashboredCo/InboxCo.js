import React, { useState, useEffect } from 'react';
import SideNavCo from '../sideNav/SideNavCo.js';

const InboxCo = () => {
  const [comment, setComment] = useState('');

  // Handle textarea change
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Handle form submission (you can customize this function based on your needs)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the comment, e.g., submit it to the server
    console.log('Submitted comment:', comment);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavCo collab={JSON.parse(window.localStorage.getItem("user"))} />
        <div className="col py-3">
          <div className="container-profil">
            <header className="titleD">Commentaire</header>
            <form className="form1" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="commentTextarea">Votre Commentaire :</label>
                <br /><br />
                <textarea
                  id="commentTextarea"
                  className="form-control"
                  value={comment}
                  onChange={handleCommentChange}
                  placeholder="Ecrit votre commentaire ici..."
                  rows={4}
                />
              </div>
              < br />
              <button type="submit" className="btn btn-primary">
                Envoyer Commentaire
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxCo;
