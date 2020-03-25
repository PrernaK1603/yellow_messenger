const socket = io();
$(document).ready(function() {
  $("#myModal").modal("show");
  $("#close-btn").click(function() {
    socket.emit("username", {
      username: $("#user").val()
    });
  });

  var name;

  socket.on("fetch-user", function(data) {
    name = data.username;
    console.log(data.username);
    $("#message-box").append(
      '<div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div><div class="received_msg"><div class="received_withd_msg"><span id="user_name">So ' +
        data.username +
        ",You want to order the pizza?</span></div></div>"
    );
  });

  $("#msg-btn").click(function() {
    socket.emit("type-msg", {
      message: $("#msg").val()
    });
    
  });

  socket.on("send-msg", function(msg) {
    console.log(msg.message);
    if (
      msg.message == "Yes" ||
      msg.message == "yes" ||
      msg.message == "ofcourse" ||
      msg.message == "y" ||
      msg.message == "ya" ||
      msg.message == "Ya" ||
      msg.message == "Y"
    ) {
      $("#my-message").append(
        '<div class="sent_msg"><p>' + msg.message + "</p></div>"
      );
      $("#yes-answer").append([
        '<div class="incoming_msg_img id="corn-msg"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><p>Ok, i am going to show you the list of Veg and Non Veg Pizza.</p><div class="card" style="width:300px"><img class="card-img-top" src="https://www.crazymasalafood.com/wp-content/images/golden-1.jpg" alt="Card image" style="width:100%"><div class="card-body" id="corn"><h4 class="card-title">Golden Corn</h4><p class="card-text">Price-Rs79 (Regular)</p><button type="submit" class="btn btn-primary" id="corn-btn">Order</button></div></div></div>',
        '<div class="incoming_msg_img" ></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><div class="card" style="width:300px"><img class="card-img-top" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/jbpxj1qmyky3cdc8yvhd" alt="Card image" style="width:100%"><div class="card-body" id="onion"><h4 class="card-title">Onion and Capsicum</h4><p class="card-text">Price-Rs85 (Regular)</p><a href="#" class="btn btn-primary" id="onion-btn">Order</a></div></div></div>',
        '<div class="incoming_msg_img" ></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><div class="card" style="width:300px"><img class="card-img-top" src="https://5.imimg.com/data5/YE/VN/GLADMIN-9085915/paneer-pizza-500x500.png" alt="Card image" style="width:100%"><div class="card-body" id="paneer"><h4 class="card-title">Paneer</h4><p class="card-text">Price-Rs100 (Regular)</p><a href="#" class="btn btn-primary" id="paneer-btn">Order</a></div></div></div>',
        '<div class="incoming_msg_img" ></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><div class="card" style="width:300px"><img class="card-img-top" src="https://lh3.googleusercontent.com/proxy/xTk9-7oaVVxvl4xsUMBd9DoPu7yLZ70DJ8arknGxaoks9NMZ1zd2WelK5Xg4AN3IoeP5VjkpO2v8A8uDXgZgQavUaHU" alt="Card image" style="width:100%"><div class="card-body" id="vegi"><h4 class="card-title">Veggie Paradise</h4><p class="card-text">Price-Rs215 (Regular)</p><button type="submit" class="btn btn-primary" id="vegi-btn">Order</button></div></div></div>',
        '<div class="incoming_msg_img" ></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><div class="card" style="width:300px"><img class="card-img-top" src="https://lh3.googleusercontent.com/proxy/aNvuKLAA-We9B7IPp_rkfvTe5XB_5XJ9iJmZAY_gXQxsGjL85MP7XsBgD8UkjZuaJ4vqLjUKsLzSFBZZdqK290Nj9Txsy_lFrhYZpwc27SoY6mKqKLKW96WYDQr8VRcYrPQ9RCVCCuMkNx_H_VRJ" alt="Card image" style="width:100%"><div class="card-body" id="farm"><h4 class="card-title">Farm House</h4><p class="card-text">Price-Rs150 (Regular)</p><button type="submit" class="btn btn-primary" id="farm-btn">Order</button></div></div></div>',
        '<div class="incoming_msg_img" ></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><div class="card" style="width:300px"><img class="card-img-top" src="https://www.handi-foil.com/wp-content/uploads/2019/07/BBQ-Chicken-Pizza-16-of-19-2000x1333.jpg" alt="Card image" style="width:100%"><div class="card-body" id="chicken"><h4 class="card-title">Chicken Pizza</h4><p class="card-text">Price-Rs250 (Regular)</p><button type="submit" class="btn btn-primary" id="chicken-btn">Order</button></div></div></div>',
        '<div class="incoming_msg_img" ></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><div class="card" style="width:300px"><img class="card-img-top" src="https://previews.123rf.com/images/elenades/elenades1609/elenades160900186/62705721-pizza-with-mozzarella-cheese-chicken-sweet-corn-sweet-pepper-and-parsley-on-white-background-top-vie.jpg" alt="Card image" style="width:100%"><div class="card-body" id="corn-pizza"><h4 class="card-title">Chicken and Corn Pizza</h4><p class="card-text">Price-Rs275 (Regular)</p><button type="submit" class="btn btn-primary" id="chick-corn-btn">Order</button></div></div></div>',
        '<div class="incoming_msg_img" ></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><div class="card" style="width:300px"><img class="card-img-top" src="https://www.dominos.co.in//files/items/150135_Aha_Non_Veg_439x307-01.jpg" alt="Card image" style="width:100%"><div class="card-body" id="parcel"><h4 class="card-title">Chicken Zing Parcel</h4><p class="card-text">Price-Rs75 (Regular)</p><button type="submit" class="btn btn-primary" id="parcel-btn">Order</button></div></div></div>'
      ]);
    } else if (
      msg.message == "No" ||
      msg.message == "N" ||
      msg.message == "no" ||
      msg.message == "No" ||
      msg.message == "n"
    ) {
      $("#yes-answer").append(
        '<div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><p>Thanks for Visiting!</p></div></div>'
      );
    } else if (
      msg.message == "status?" ||
      msg.message == "STATUS?" ||
      msg.message == "what is status?" ||
      msg.message == "What is status?" ||
      msg.message == "status"||
      msg.message=="Status"
    ) {
      $("#confirm-order").append('<div class="sent_msg"><p>' + msg.message + '</p></div>');
      var d=new Date();
      var hour=d.getHours();
      var min=d.getMinutes();
      // socket.on('confirm',function(data){
      //    var hrs=data.hr;
      //   var hrDiff=(hour>hrs)?hour-hrs:hrs-hour;
      //    var mint=data.min;
      //    var minDiff=(min>mint)?min-mint:minnt-min;
      //    if(hrDiff==0){
      //     if(minDiff<30){
      //       $("#after_confirm_order").append('<div class="incoming_msg_img id="corn-msg"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><p>Your Order is in Progress</p></div></div>')
      //     }else{
      //       $("#after_confirm_order").append('<div class="incoming_msg_img id="corn-msg"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><p>Your Order is successfully Delievered</p></div></div>')
      //     }
      //   }else if(hoursDiff==1 && minDiff==0){
      //     $("#after_confirm_order").append('<div class="incoming_msg_img id="corn-msg"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><p>Your Order is successfully Delievered</p></div></div>')
      //   }else if(){}
      // });
    } else {
      $("#yes-answer").append(
        '<div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div><div class="received_msg" style="margin-bottom:20px;"><div class="received_withd_msg"><p>I did not get your answer</p></div></div>'
      );
    }
    $("#corn-btn").click(function() {
      console.log("click");
      $("#corn").append(
        '<div class="container"><div class="modal" id="myModal1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Name</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><div class="form-group"><label for="usr">Quantity:</label><input type="text" class="form-control" name="quantity" placeholder="Enter Quantity" id="quantity"/></div><div class="form-group"><label for="usr">Size- (R,M,L):</label><input type="text" class="form-control" name="size" placeholder="Enter Size" id="size"/></div><div class="form-group"><label for="usr">Phone No.:</label><input type="text" class="form-control" name="phone" placeholder="Enter Your Phone No." id="phone"/> </div><div class="form-group"> <label for="usr">Address:</label><input type="text" class="form-control" name="address" placeholder="Enter Your Address" id="address"/></div></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal" id="submit-btn">Submit</button></div></div></div></div></div>'
      );
      $("#myModal1").modal("show");

      $("#submit-btn").click(function() {
        console.log("submit click");
        socket.emit("submit-click", {
          id: "corn-btn",
          pname: "Golden Corn Pizza",
          amount: "79",
          quantity: $("#quantity").val(),
          size: $("#size").val(),
          phone: $("#phone").val(),
          address: $("#address").val()
        });
        socket.on("after-submit-click", function(data) {
          $("#order_detail").append(
            '<div class="sent_msg"><p><b>Quantity:</b>&nbsp ' +
              parseInt(data.quantity) +
              "</p><p><b>Size:</b>&nbsp " +
              data.size +
              "</p><p><b>Address:</b>&nbsp " +
              data.address +
              "</p></div>"
          );
          $("#after_order").append(
            '<div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div><div class="received_msg"><div class="received_withd_msg" style="background-color:#ebebeb;"><p><b>Name:</b> &nbsp' +
              name +
              "</p><p><b>Phone:</b>&nbsp " +
              data.phone +
              "</p><p><b>Address:</b>&nbsp " +
              data.address +
              "</p><p><b>Pizza Name:</b>&nbsp " +
              data.pname +
              "</p><p><b>Quantity:</b>&nbsp " +
              parseInt(data.quantity) +
              "</p><p><b>Size:</b>&nbsp " +
              data.size +
              "</p><p><b>Amount:</b>&nbsp Rs" +
              data.amount +
              "</p></div></div>"
          );
          $("#after_order").append(
            '<div class="incoming_msg_img"></div><div class="received_msg"><div class="received_withd_msg"><p>Thanks for Order ' +
              name +
              ". Your order will be delievered with in thirty minutes!</p></div></div>"
          );
        });
      });
    });
    $("#onion-btn").click(function() {
      console.log("click");
      $("#onion").append(
        '<div class="container"><div class="modal" id="myModal1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Name</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><div class="form-group"><label for="usr">Quantity:</label><input type="text" class="form-control" name="quantity" placeholder="Enter Quantity" id="quantity"/></div><div class="form-group"><label for="usr">Size- (R,M,L):</label><input type="text" class="form-control" name="size" placeholder="Enter Size" id="size"/></div><div class="form-group"><label for="usr">Phone No.:</label><input type="text" class="form-control" name="phone" placeholder="Enter Your Phone No." id="phone"/> </div><div class="form-group"> <label for="usr">Address:</label><input type="text" class="form-control" name="address" placeholder="Enter Your Address" id="address"/></div></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal" id="submit-btn">Submit</button></div></div></div></div></div>'
      );
      $("#myModal1").modal("show");

      $("#submit-btn").click(function() {
        console.log("submit click");
        socket.emit("submit-click", {
          quantity: $("#quantity").val(),
          size: $("#size").val(),
          phone: $("#phone").val(),
          address: $("#address").val()
        });
        socket.on("after-submit-click", function(data) {
          $("#order_detail").append(
            '<div class="sent_msg"><p><b>Quantity:</b>&nbsp ' +
              parseInt(data.quantity) +
              "</p><p><b>Size:</b>&nbsp " +
              data.size +
              "</p><p><b>Address:</b>&nbsp " +
              data.address +
              "</p></div>"
          );
          $("#after_order").append(
            '<div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div><div class="received_msg"><div class="received_withd_msg" style="background-color:#ebebeb;"><p><b>Name:</b> &nbsp' +
              name +
              "</p><p><b>Phone:</b>&nbsp " +
              parseInt(data.phone) +
              "</p><p><b>Address:</b>&nbsp " +
              data.address +
              "</p><p><b>Pizza Name:</b>&nbsp Onion and Capsicum</p><p><b>Quantity:</b>&nbsp " +
              parseInt(data.quantity) +
              "</p><p><b>Size:</b>&nbsp " +
              data.size +
              "</p><p><b>Amount:</b>&nbsp Rs170</p></div></div>"
          );
          $("#after_order").append(
            '<div class="incoming_msg_img"></div><div class="received_msg"><div class="received_withd_msg"><p>Thanks for Order ' +
              name +
              ". Your order will be delievered with in thirty minutes!</p></div></div>"
          );
        });
      });
    });
    $("#paneer-btn").click(function() {
      console.log("click");
      $("#paneer").append(
        '<div class="container"><div class="modal" id="myModal1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Name</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><div class="form-group"><label for="usr">Quantity:</label><input type="text" class="form-control" name="quantity" placeholder="Enter Quantity" id="quantity"/></div><div class="form-group"><label for="usr">Size- (R,M,L):</label><input type="text" class="form-control" name="size" placeholder="Enter Size" id="size"/></div><div class="form-group"><label for="usr">Phone No.:</label><input type="text" class="form-control" name="phone" placeholder="Enter Your Phone No." id="phone"/> </div><div class="form-group"> <label for="usr">Address:</label><input type="text" class="form-control" name="address" placeholder="Enter Your Address" id="address"/></div></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal" id="submit-btn">Submit</button></div></div></div></div></div>'
      );
      $("#myModal1").modal("show");

      $("#submit-btn").click(function() {
        console.log("submit click");
        socket.emit("submit-click", {
          quantity: $("#quantity").val(),
          size: $("#size").val(),
          phone: $("#phone").val(),
          address: $("#address").val()
        });
        socket.on("after-submit-click", function(data) {
          $("#order_detail").append(
            '<div class="sent_msg"><p><b>Quantity:</b>&nbsp ' +
              parseInt(data.quantity) +
              "</p><p><b>Size:</b>&nbsp " +
              data.size +
              "</p><p><b>Address:</b>&nbsp " +
              data.address +
              "</p></div>"
          );
          $("#after_order").append(
            '<div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div><div class="received_msg"><div class="received_withd_msg" style="background-color:#ebebeb;"><p><b>Name:</b> &nbsp' +
              name +
              "</p><p><b>Phone:</b>&nbsp " +
              parseInt(data.phone) +
              "</p><p><b>Address:</b>&nbsp " +
              data.address +
              "</p><p><b>Pizza Name:</b>&nbsp Paneer</p><p><b>Quantity:</b>&nbsp " +
              parseInt(data.quantity) +
              "</p><p><b>Size:</b>&nbsp " +
              data.size +
              "</p><p><b>Amount:</b>&nbsp Rs200</p></div></div>"
          );
          $("#after_order").append(
            '<div class="incoming_msg_img"></div><div class="received_msg"><div class="received_withd_msg"><p>Thanks for Order ' +
              name +
              ". Your order will be delievered with in thirty minutes!</p></div></div>"
          );
        });
      });
    });
    $("#vegi-btn").click(function() {
      console.log("click");
      $("#vegi").append(
        '<div class="container"><div class="modal" id="myModal1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Name</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><div class="form-group"><label for="usr">Quantity:</label><input type="text" class="form-control" name="quantity" placeholder="Enter Quantity" id="quantity"/></div><div class="form-group"><label for="usr">Size- (R,M,L):</label><input type="text" class="form-control" name="size" placeholder="Enter Size" id="size"/></div><div class="form-group"><label for="usr">Phone No.:</label><input type="text" class="form-control" name="phone" placeholder="Enter Your Phone No." id="phone"/> </div><div class="form-group"> <label for="usr">Address:</label><input type="text" class="form-control" name="address" placeholder="Enter Your Address" id="address"/></div></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal" id="submit-btn">Submit</button></div></div></div></div></div>'
      );
      $("#myModal1").modal("show");

      $("#submit-btn").click(function() {
        console.log("submit click");
        socket.emit("submit-click", {
          quantity: $("#quantity").val(),
          size: $("#size").val(),
          phone: $("#phone").val(),
          address: $("#address").val()
        });
        socket.on("after-submit-click", function(data) {
          $("#order_detail").append(
            '<div class="sent_msg"><p><b>Quantity:</b>&nbsp ' +
              parseInt(data.quantity) +
              "</p><p><b>Size:</b>&nbsp " +
              data.size +
              "</p><p><b>Address:</b>&nbsp " +
              data.address +
              "</p></div>"
          );
          $("#after_order").append(
            '<div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div><div class="received_msg"><div class="received_withd_msg" style="background-color:#ebebeb;"><p><b>Name:</b> &nbsp' +
              name +
              "</p><p><b>Phone:</b>&nbsp " +
              parseInt(data.phone) +
              "</p><p><b>Address:</b>&nbsp " +
              data.address +
              "</p><p><b>Pizza Name:</b>&nbsp Vegi Paradise</p><p><b>Quantity:</b>&nbsp " +
              parseInt(data.quantity) +
              "</p><p><b>Size:</b>&nbsp " +
              data.size +
              "</p><p><b>Amount:</b>&nbsp Rs430</p></div></div>"
          );
          $("#after_order").append(
            '<div class="incoming_msg_img"></div><div class="received_msg"><div class="received_withd_msg"><p>Thanks for Order ' +
              name +
              ". Your order will be delievered with in thirty minutes!</p></div></div>"
          );
        });
      });
    });
  });
});
