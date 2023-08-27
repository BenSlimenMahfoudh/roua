const app = require("./app");
const { PORT, DB_URL } = require("./utils/config");
const { connect } = require("./services/mongodb");

const {createComment, getAllComments} =require("./models/comment.model")

const serveur=   app.listen(PORT,()=>{
  console.log("connection...")
});

const io = require("socket.io")(serveur, {
    cors:{
        origin:"http://localhost:3000",    
    }
})

async function start() {
  await connect(DB_URL);
  io.on('connection', async (socket) => {
    console.log('A user connected'+socket.id);
  
    try {
      const comments = await getAllComments();
      socket.emit('initialComments', comments);
    } catch (error) {
      console.error('Error fetching initial comments:', error);
    }
  
    socket.on('newComment', async (comment) => {
      console.log(comment)
      const newComment = await createComment(comment)
      io.emit('newComment', newComment);
    });
  
    socket.on('disconnect', () =>  {
      console.log('A user disconnected');
    });

    socket.on("submitConge",(file)=>{
      console.log(file)
    })
  });


  console.log(`listening on : localhost:${PORT}...`);
}

start();
