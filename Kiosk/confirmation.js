const services = {
    "Consultation": {
        title: "Consultation",
        description: "Consultation is for patients who want to see a doctor. This includes patients with OPD cards and ongoing consultations.",
        icon: "img/CONSULTATION BUTTON.svg",
        color: "#8fd3e8"
    },
    "OPD Card": {
        title: "OPD Card",
        description: "The OPD Card service is for patients who will claim their OPD Card.",
        icon: "",
        color: "#b9f5c4"
    },
    "Refill Prescription": {
        title: "Refill Prescription",
        description: "Refill Prescription is for patients who need more of their medicines based on the doctor’s prescription.",
        icon: "", //ito ung sa picture nya sa gilid
        color: "#8be15a"
    } //di ko pa kinumpleto in case di pa final yung design
};

const params = new URLSearchParams(window.location.search);
const serviceKey = params.get("service");

const service = services[serviceKey];

if (!service) {
    window.location.href = "kiosk.html";
}

    document.getElementById("title").textContent = service.title;
    document.getElementById("description").textContent = service.description;
    document.getElementById("icon").src = service.icon;
    document.getElementById("cardHeader").style.backgroundColor = service.color;

document.getElementById("continueBtn").addEventListener("click", () => {
    window.location.href = `printing.html?service=${encodeURIComponent(serviceKey)}`;
});
