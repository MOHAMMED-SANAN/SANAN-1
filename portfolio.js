// window.addEventListener("scroll",function(){

//     const header =document.querySelector("header")
//     header.classList.toggle("sticky",window.scrollY>0);
// });

// function click(){
//     document.getElementById("nav-bar")
// }

// function sendMail(){
//     var parms ={
//         name:document.getElementById("name").value,
//        email:document.getElementById("mail").value,
//        message:document.getElementById("message").value
//     }
// }
// const serviceID="service_9lpwi79";
// const templateID="template_hosarrh";

// emailjs.send(serviceID,templateID)
// .then(
//     res =>{
//         document.getElementById("name").value ="";
//         document.getElementById("email").value ="";
//         document.getElementById("message").value ="";
//         console.log(res);
//         alert("your message sent successfully");
//     })
// .catch(err=>console.log(er))
// Sticky Header on Scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Navbar Toggle Function (optional usage)
function toggleNav() {
    document.getElementById("nav-bar").classList.toggle("active");
}

// Send Email Function
function sendMail() {
    var parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("mail").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_9lpwi79";
    const templateID = "template_hosarrh";

    emailjs.send(serviceID, templateID, parms)
        .then((res) => {
            // Clear input fields
            document.getElementById("name").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.log(err);
            alert("Failed to send the message. Please try again.");
        });
}
