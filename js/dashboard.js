// Toggle dashboard menu

const toggle = document.getElementById("dashboardToggle");
const menu = document.getElementById("dashboardMenu");

toggle.onclick = () => {

menu.style.display =
menu.style.display === "block" ? "none" : "block";

};


// show pages

function showPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.style.display="none";
});

document.getElementById(page).style.display="block";

}


// logout

function logout(){

window.location.href="login.html";

}


// date

document.getElementById("todayDate").innerText =
new Date().toDateString();


// finance chart

const ctx = document.getElementById("revenueChart");

if(ctx){

new Chart(ctx,{

type:"bar",

data:{
labels:["Rooms","Restaurant","Drinks"],
datasets:[{
label:"Revenue",
data:[1200,800,400]
}]
}

});

}
