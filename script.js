var sherbimet = document.getElementById("sherbimet");
var sherbimetH = document.getElementById("sherbimetH");
var ndryshoNgjyren = document.getElementById("ndryshoNgjyren");
var funksioniSherbimet;
var funksioniNdryshoNgjyren;
var navigimi = document.getElementById("navigimi");
var navigimiPermbajtja = document.getElementById("navigimiPermbajtja");
var menyt = document.getElementById("menyt");
var menyt2 = document.getElementById("menyt2");
var menyt3 = document.getElementById("menyt3");
var menyt4 = document.getElementById("menyt4");
var menyt5 = document.getElementById("menyt5");
var menyt6 = document.getElementById("menyt6");
var menyt7 = document.getElementById("menyt7");

//ndryshimi i HTML permbajtjes

funksioniSherbimet = () => {
    sherbimetH.innerHTML = "ALT NETWORK OFRON SHERBIMET ME TE SIGURTA NE RAJON";
}


sherbimet.addEventListener("click", funksioniSherbimet);

//ndryshimi i ngjyres se menus permes ngjarjeve

funksioniNdryshoNgjyren = () => {
    navigimi.style.background = "black";
    navigimiPermbajtja.style.color = "white";
    menyt.style.color = "white";
    menyt2.style.color = "white";
    menyt3.style.color = "white";
    menyt4.style.color = "white";
    menyt5.style.color = "white";
    menyt6.style.color = "white";
    menyt7.style.color = "white";
    
}

ndryshoNgjyren.addEventListener("click", funksioniNdryshoNgjyren);

// metoda alert dhe shqyrtimi se a jan te gjitha fushat e plotesuara

document.getElementById("apliko").onclick = function() {
    let allAreFilled = true;
    document.getElementById("aplikimi").querySelectorAll("[required]").forEach(function(i) {
       if (!allAreFilled) return;
       if (!i.value) allAreFilled = false;
       if (i.type === "radio") {
          let radioValueCheck = false;
          document.getElementById("aplikimi").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
             if (r.checked) radioValueCheck = true;
          })
          allAreFilled = radioValueCheck;
       }
    })
    if (!allAreFilled) {
       alert('Ju lutem plotesoni te gjitha fushat');
    }

    else {
        alert('Keni aplikuar me sukes');
    }
 };

 // koha aktuale

function kohaSot () {
    var sot = new Date();
    var data = sot.getFullYear()+'-'+(sot.getMonth()+1)+'-'+sot.getDate();
    var koha = sot.getHours() + ":" + sot.getMinutes() + ":" + sot.getSeconds();
    var dataKoha = data+' '+koha;
    document.getElementById("kohaReale").innerHTML=dataKoha;
}

setInterval(kohaSot, 1000);

//kalkulime 

var klient2019 = 23432;
var klient2020 = 53242;
var klient2021 = document.getElementById('klient2021');
klient2021 = 10742;
var klientKenaqur = document.getElementById('klientKenaqur');
klientKenaqur.innerHTML = klient2019 + klient2020 + klient2021;

//slideri

var slider = document.querySelector('.sherbimet-kolonat2');

var sliderGrabbed = false;



slider.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider.style.cursor = 'grab';
})

slider.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

slider.addEventListener('mousemove', (e) => {
    if(sliderGrabbed){
        slider.parentElement.scrollLeft -= e.movementX;
    }
})

slider.addEventListener('wheel', (e) =>{
    e.preventDefault()
    slider.parentElement.scrollLeft += e.deltaY;
})

