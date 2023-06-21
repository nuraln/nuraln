function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("contact-nisa", "template_t6pm5pp", params).then(function(res){
        alert("Your Email Succesfully sent!")
    })
}