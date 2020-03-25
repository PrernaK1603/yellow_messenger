const express = require("express");
const socket = require("socket.io");
//const cors=require('cors');
const mongoose = require("mongoose");
const date = require("date-and-time");

var Detail = require("./models/order_detail");
const database = require("./database-connect");

const app = express();

app.use(express.static("public"));

const server = app.listen(3000, function(req, res) {
  console.log("SERVER STARTED");
});

const io = socket(server);

// io.on('connection',function(socket){
//     console.log('successfully connected with socket id is: '+socket.id);
//     socket.on('chat-message',function(data){
//         io.sockets.emit('chat-message',data);
//     })
// })

var db = mongoose.connection;

var name;
var hours;
var min;

io.on("connection", function(socket) {
  console.log("a user connected");
  
  socket.on("submit-click", function(detail) {
      var total;
    console.log(detail.id);
    console.log(parseInt(detail.quantity));
    console.log(detail.size);
    console.log(parseInt(detail.phone));
    console.log(detail.address);
    if (
      detail.size == "R" ||
      detail.size == "Regular" ||
      detail.size == "r" ||
      detail.size == "regular"
    ) {
      db.collection("small").findOne({ id: detail.id }, function(
        error,
        result
      ) {
        if (result) {
          //pizza_price = result.price;
          total = parseInt(detail.quantity) * parseInt(result.price);
          var now = new Date();
           hours = now.getHours();
           min = now.getMinutes();
          var temp = new Detail({
            name: name,
            p_name:detail.pname,
            quantity: detail.quantity,
            size: detail.size,
            phone: detail.phone,
            address: detail.address,
            amount: total,
            hrs: hours,
            mint: min
          });
          temp.save(function(error, result) {
            if (error) {
              console.log("not able to save");
            } else {
                socket.emit("after-submit-click", {
                    pname:result.p_name,
                    amount:result.amount,
                    quantity:result.quantity,
                    size:result.size,
                    phone:result.phone,
                    address:result.address
                });
              console.log("save successfully");
            }
          });
        } else {
          console.log("not found id");
        }
      });
    }
  });

  socket.on("username", function(data) {
    console.log(data.username);
    name = data.username;
    socket.emit("fetch-user", data);
    socket.on("type-msg", function(msg) {
      console.log(msg.message);
      socket.emit("send-msg", msg);
      socket.emit('confirm',{
        hr:hours,
        min:min
    });
    });
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});
