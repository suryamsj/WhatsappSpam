/*
NAMA SCRIPT : WASPAM.js
DIBUAT PADA : 12 April 2020
DIBUAT OLEH : MUHAMMAD SURYA JAYADIPRANA / GITHUB : github.com/suryamsj
*/

var waktu = 0; //WAKTU DELAY
var pesan = prompt("Masukkan Pesan : "); //POPUP UNTUK MEMASUKKAN PESAN
setInterval(function () {
    window.InputEvent = window.Event || window.InputEvent;
    var event = new InputEvent('input', {
        bubbles: true
    });
    var kotakchat = $('div._2S1VP[data-tab="1"]'); //SELEKSI KOTAK CHAT, KARENA CLASS KOTAKCHAT MEMPUNYAI CLASS YANG SAMA HANYA BEDA DI DATA-TAB
    kotakchat.textContent = pesan; //MEMASUKKAN PESAN KE KOTAK CHAT
    kotakchat.dispatchEvent(event);
    $("button._35EW6").click(); //KLIK TOMBOL SEND
}, waktu * 1000); //WAKTU KIRIM CHAT, CONTOH : 5 x 1000 = 5000(5 DETIK)