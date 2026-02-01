const services = {
    "Consultation": {
        title: "Consultation",
    },
    "OPD Card": {
        title: "OPD Card",
    },
    "Refill Prescription": {
        title: "Refill Prescription",
    }
};

const params = new URLSearchParams(window.location.search);
const service = params.get("service");

if (!service) {
    window.location.href = "kiosk.html";
}

document.getElementById("title").textContent = `${service}`;
document.getElementById("number").textContent = "code ni patient"; //need pa ng database
document.getElementById("date").textContent = new Date().toLocaleString();

window.onload = () => {
  window.print();

  setTimeout(() => {
    window.location.href = "kiosk.html";
  }, 3000);
};

//di pa final tong printing kuno nito



