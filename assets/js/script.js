function showModal(){
    var element = getElementById("modal");
    element.classList.add("show-modal");
}

const BUTTON = document.getElementById("button");

BUTTON.addEventListener("click", showModal);

date = new Date();
year = date.getFullYear();
document.getElementById("assinatura").innerHTML = "L U C A S &ensp; G O M E S © &ensp;" + year;