// Tugas Praktikum Javascript 1
function tambahteks(){
    var tambah = document.getElementById("tambah-teks");
    tambah.innerHTML = "<h3>Teks ini ditambahkan menggunakan innerHTML dengan javascript external</h3>";
    console.log("Teks berhasil ditambahkan ke dalam div dengan id tambah-teks")
}

//Tugas Praktikum Javascript 2
function cekbilangan(){
    var bil1 = parseInt(prompt("Masukkan bilangan pertama", ))
    var bil2 = parseInt(prompt("Masukkan bilangan kedua", ))

    if (bil1 == bil2) {
        alert("Bilangan yang anda masukkan sama")
    } else if (bil1 <= bil2){
        alert("Bilangan pertama lebih kecil dari bilangan kedua")
    } else {
        alert("Bilangan pertama lebih besar dari bilangan kedua")
    }
}

function datadiri(){
    var e = document.getElementById("table-data");
    if(e.style.display == 'block'){
        e.style.display = 'none';
    } else {
        var konfirmasi = confirm("Apakah Anda praktikan PPW 1?")
        
        if (konfirmasi) {
            var nama = prompt("Masukkan nama", )
            var nim = prompt("Masukkan NIM", );
            var angkatan = prompt("Masukkan angkatan", )
            
            var tbnama = document.getElementById("nama");
            var tbnim = document.getElementById("nim");
            var tbangkt = document.getElementById("angkatan");
            
            tbnama.innerHTML = nama;
            tbnim.innerHTML = nim;
            tbangkt.innerHTML = angkatan;

            e.style.display = 'block';
        } else {
            alert("Anda bukan praktikan PPW 1")
        }
    }
}

function kalkulator(){
    var e = document.getElementById("kalkulator");
        if(e.style.display == 'block')
           e.style.display = 'none';
        else
           e.style.display = 'block';
}

function number(num){
    rec = document.getElementById("hasil-kalkulator").innerHTML;
    if (rec == '0') {
        rec = num;
    } else {
        rec = rec + num;
    }
    document.getElementById("hasil-kalkulator").innerHTML = rec;
}

function tambah() {
    rec = document.getElementById("hasil-kalkulator").innerHTML;
    rec = rec + "+";
    document.getElementById("hasil-kalkulator").innerHTML = rec;
}

function kurang() {
    rec = document.getElementById("hasil-kalkulator").innerHTML;
    rec = rec + "-";
    document.getElementById("hasil-kalkulator").innerHTML = rec;
}

function kali() {
    rec = document.getElementById("hasil-kalkulator").innerHTML;
    rec = rec + "x";
    document.getElementById("hasil-kalkulator").innerHTML = rec;
}

function bagi() {
    rec = document.getElementById("hasil-kalkulator").innerHTML;
    rec = rec + "/";
    document.getElementById("hasil-kalkulator").innerHTML = rec;
}

function hapus(){
    rec = document.getElementById("hasil-kalkulator").innerHTML;
    rec = 0;
    document.getElementById("hasil-kalkulator").innerHTML = rec;
}

function hasil(){
    operasi = document.getElementById("hasil-kalkulator").innerHTML;
    var operator = ['+', '-', '/', 'x'];
    var result = [];
    var temp = "";

    for (var i = 0; i < operasi.length; i++) {
        if (operator.includes(operasi[i])) {
            if (temp !== "") {
            result.push(temp);
            temp = "";
            }
            result.push(operasi[i]);
        } else {
            temp += operasi[i];
        }
    }

    if (temp !== "") {
        result.push(temp);
    }

    var sum = parseInt(result[0]);
    for (var i = 0; i < result.length - 1; i++){
        if (result[i] == '+'){ sum = sum + parseInt(result[i+1]) }
        if (result[i] == '-'){ sum = sum - parseInt(result[i+1]) }
        if (result[i] == 'x'){ sum = sum * parseInt(result[i+1]) }
        if (result[i] == '/'){ sum = sum / parseInt(result[i+1]) }
    }

    document.getElementById("hasil-kalkulator").innerHTML = sum;
}