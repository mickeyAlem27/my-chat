import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connect } from "http2";
//import { Server } from "socket.io";
import { connectDB } from "./lib/db.js";
// import messageRouter from "./routes/messageRoutes.js";
// import userRoutes from './routes/userRoutes.js';
//  import userRouter from "./routes/userRoutes.js";



// Create express app and HTTP server
const app = express();
const server = http.createServer(app) // Renamed to avoid conflict

/* Initialize socket.io
const io = new Server(httpServer, {
    cors: { origin: "*" }
});
*/


/* Store online users
export const userSocketMap = {};
 */

/* Socket.io connection handler
io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    console.log("User connected", userId);
    
    if (userId) {
        userSocketMap[userId] = socket.id;
    }

    
// emit online user to all connected clients
    io.emit("getOnline-users", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("User disconnected", userId);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
});
export { io };
*/

// Middleware
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// Routes setup
app.use("/api/status", (req, res) => {
    res.send("Server is live");
});

/*
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);
*/


// Connect to MongoDB and start server

 await connectDB();


  const PORT = process.env.PORT || 5000;
        server.listen(PORT, () => 
            console.log("Server is running on port:" + PORT)
        ); 
/*const startServer = async () => {
    try {
       
       
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer()*/