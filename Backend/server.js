const app = require("./app");
const { PORT, DB_URL } = require("./utils/config");
const { connect } = require("./services/mongodb");



const {createComment, getAllComments} =require("./models/comment.model")

const http = require("http")
const {Server}= require("socket.io")
const serveur= http.createServer(app)

const io = new Server(serveur, {
    cors:{
        origin:"http://localhost:3000/Boite-de-reception-admin",
        methods:[
            "GET",
            "POST"
        ]
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
  
    socket.on('newComment', async (commentText) => {
      const newComment = createComment(commentText)
      await newComment.save();
      io.emit('newComment', newComment);
    });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  app.listen(PORT);

  console.log(`listening on : localhost:${PORT}...`);
}

start();
