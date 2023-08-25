const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String ,
        required: false

    }
,
    password : {
        type : String ,
        required : true
    }
    ,
    f_name: {
        type: String ,
        required: false

    },
    date: {
        type: String ,
        required: false

    }
    ,
    l_name: {
        type: String ,
        required: false

    },
    sexe: {
        type: String ,
        required: false

    },
    numberPhone: {
        type: String ,
        required: false

    },
    post: {
        type: String ,
        required: false

    }

    ,
    matricule: {
        type: String ,
        required: false

    }
    
});

module.exports = mongoose.model('users' , User) ;
