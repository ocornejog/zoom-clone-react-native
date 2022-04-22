const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

var users= []
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

const addUser = (userName, roomId) => {
    users.push({
        userName: userName,
        roomId: roomId
    })
};
const getRoomUsers = (roomId) => {
    return users.filter(user => (user.roomId == roomId))
};
const userLeave = (userName) => {
    users = users.filter(user => user.userName != userName)
};

io.on("connection", socket => {
    console.log("Someone is connected");
    socket.on("join-room", ({ roomId, userName}) => {
        console.log('User has joined to the room');
        console.log(`Room ID is: ${roomId}`);
        console.log(`Username is: ${userName}`);
        socket.join(roomId);
        addUser(userName, roomId);
        socket.to(roomId).emit("user-connected", userName); //emits when someone gets connected to the specific room

        io.to(roomId).emit("all-users", getRoomUsers(roomId)); //emits to all users the users in the meeting
        
        socket.on('disconnect', () => {
            console.log("Disconnected");
            socket.leave(roomId);
            userLeave(userName);
            io.to(roomId).emit("all-users", getRoomUsers(roomId));
        })
    })
})

server.listen(port, () => {
    console.log(`Zoom clone API listening on port: ${port}`);
})