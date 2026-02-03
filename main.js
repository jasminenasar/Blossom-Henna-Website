
  const images = [
    "Assets/arabic.jpg",
    "Assets/arabic2.jpg",
    "Assets/fullhand.jpg",
    "Assets/maternity2.jpg",
    "Assets/bridal.jpg",
    "Assets/mat_angle.jpg",
    
  ];

  let index = 0;
  const galleryImage = document.getElementById("galleryImage");

  document.querySelector(".left").onclick = () => {
    index = (index - 1 + images.length) % images.length;
   galleryImage.src = images[index];
  };

  document.querySelector(".right").onclick = () => {
    index = (index + 1) % images.length;
    galleryImage.src = images[index];
  };

//Appointment

function Booking() {
    window.location.href = "appointment.html";
}
//form
const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop auto submit

    const inputs = form.querySelectorAll("input");

    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("Please fill out all fields!");
            input.focus();
            return;
        }
    }

    alert("Appointment booked successfully! 🌸");
    form.reset(); // clear form
});

