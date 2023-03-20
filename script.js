$(document).ready(function() {
  // On form submit, perform validation
  $("#myForm").submit(function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Initialize validation flags and messages
    var isValid = true;
    var usernameValid = true;
    var emailValid = true;
    var positionValid = true;
    var employmentValid = true;
    var usernameFeedback = "";
    var emailFeedback = "";
    var positionFeedback = "";
    var employmentFeedback = "";

    // Validate username
    var username = $("#username").val();
    if (!username.match(/^[a-zA-Z0-9_]{6,10}$/)) {
      usernameValid = false;
      usernameFeedback = "Username should be  >=6 and <=10 ";
    }

    // Validate email
    var email = $("#email").val();
    if (!email.match(/^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_.]+$/) || email.indexOf("@") != email.lastIndexOf("@")) {
      emailValid = false;
      emailFeedback = "Not a valid e-mail address";
    }

    // Validate position
    var position = $("input[name='position']:checked").val();
    if (!position) {
      positionValid = false;
      positionFeedback = "You must select a position.";
    }

    // Validate employment
    var employment = $("input[name='employment']:checked").val();
    if (!employment) {
      employmentValid = false;
      employmentFeedback = "You must select a type";
    }

    // Set feedback messages and border colors based on validation
    if (!usernameValid) {
      $("#usernameFeedback").text(usernameFeedback);
      $("#username").css("border-color", "red");
      isValid = false;
    } else {
      $("#usernameFeedback").text("");
      $("#username").css("border-color", "green");
    }

    if (!emailValid) {
      $("#emailFeedback").text(emailFeedback);
      $("#email").css("border-color", "red");
      isValid = false;
    } else {
      $("#emailFeedback").text("");
      $("#email").css("border-color", "green");
    }

    if (!positionValid) {
      $("#positionFeedback").text(positionFeedback);
      $(".position-radio").css("border-color", "red");
      isValid = false;
    } else {
      $("#positionFeedback").text("");
      $(".position-radio").css("border-color", "green");
    }

    if (!employmentValid) {
      $("#employmentFeedback").text(employmentFeedback);
      $(".employment-radio").css("border-color", "red");
      isValid = false;
    } else {
      $("#employmentFeedback").text("");
      $(".employment-radio").css("border-color", "green");
    }

    // If form is valid, submit it
    if (isValid) {
      this.submit();
    }
  });
});

