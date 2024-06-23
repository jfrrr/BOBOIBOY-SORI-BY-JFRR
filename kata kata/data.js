const nama = "Maulana Jafar Sidiq"; //NILAI YG TIDAK AKAN BERUBAH
let usia = 30; //NILAI YG DAPAT DIRUBAH (CONTOH YG ADA DI IF)

let biodata = document.getElementById('biodata')

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) { 
        generasi = "generasi remaja"
    }
     else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa"
    }
    else if (usia >= 30) {
        generasi = "generasi tua"
    }
    else if (usia > 2 && usia < 10) {
        generasi = "generasi balita"
    }
    else {
        generasi = "generasi balita"
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();