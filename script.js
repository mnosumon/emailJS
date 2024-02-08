function handleSubmit() {
    var params = {
        name: document.getElementById("fullNme").value,
        email: document.getElementById("email_id").value,
        message: document.getElementById("areaField").value,
    }
    const serviceID = "service_b4s6ixg"
    const templateID = "template_1541ek9"
    
    emailjs.send(serviceID, templateID, params)
    .then(
        alert("Your message sent successfully!!")
    )
}

// .then(res=>{
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("message").value = "";
//     console.log(res);
//     alert("Your message sent successfully!!")

// })
// .catch(err=>console.log(err));
