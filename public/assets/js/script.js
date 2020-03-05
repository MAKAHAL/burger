$(document).ready(function() {
    

    // //const app = {
    //   devourBurger: function (id) {
    //     $.ajax({
    //         url: `/api/burger/${id}`,
    //         type: "PUT",
    //         success: function () {
    //             window.location.reload();
    //         }
    //     })
    // },
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).children(".burger_id").val();
      console.log(burger_id);
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      }).then(function(data) {
        // $("#addBurger").on("click", function (e) {
        //   e.preventDefault();
        //   const data = {
        //       name: $("#burgerName").val()
        //   };
        
        location.reload();
      });
  
    });
  });
  //$(document).ready(function() {
  //   app.init();
  // });