
// ================================
// VARIABEL
// ================================


// let nama = "Angga";
// const umur = 25;

// console.log("Nama saya:", nama);
// console.log("Umur saya:", umur);

// let nama = "Angga";
// let umur = 25;
// let sedangBelajar = true;

// let hobi = ["ngoding", "ngopi", "bacabuku"];

// let biodata = {
//     nama: nama,
//     umur: umur,
//     hobi: hobi
// };

// console.log("Tipe data nama:", typeof nama);
// console.log("Tipe data umur:", typeof umur);
// console.log("Tipe data sedangBelajar:", typeof sedangBelajar);
// console.log("Tipe data hobi:", typeof hobi);
// console.log("Tipe data biodata:", typeof biodata);
// console.log("Isi Biodata:", biodata);


// let alamat = "JL. Merdeka No.123, Jakarta";
// let tinggiBadan = 170;

// console.log("alamat saya:", alamat);
// console.log("tinggi badan saya:", tinggiBadan + " cm ");

// ================================
// Operator
// ================================



// let a = 10;
// let b = 3;

// console.log("Penjumlahan:", a + b);
// console.log("Pengurangan:", a - b);
// console.log("Perkalian:", a * b);
// console.log("Pembagian:", (a / b).toFixed(2));
// console.log("Sisa bagi:", a % b);

// let nilai = 85;

// console.log("lebihdari 75?", nilai > 75);
// console.log("sama dengan 100?", nilai === 100);
// console.log("antara 80 dan 90?", nilai >= 80 && nilai <= 90);

// =======================================
// if...ELSE
// =======================================

// let usia = 20;

// if (usia >= 17) {
//     console.log("kamu boleh membuat SIM");
// } else {
//     console.log("kamu belum cukup umur untuk membuat SIM");
// }

// let usia = 17;
// let sudahPunyaSIM = false;

// if (usia >= 17 && sudahPunyaSIM) {
//     console.log("kamu boleh mengendari motor");
// } else {
//     console.log("kamu belum boleh mengendari motor");
// }

// let nilaiUjian = 90;

// if (nilaiUjian >= 90) {
//     console.log("Nilai A (Sangat Baik)");
// }
// else if (nilaiUjian >= 80 && nilaiUjian < 90) {                  
//     console.log("Nilai B (Baik)");
// }   
// else if (nilaiUjian >= 70 && nilaiUjian < 80) {
//     console.log("Nilai C (Cukup)");
// }
// else {
//     console.log("Nilai D (Tidak Lulus)");
    
// }


// =====================================
// SWITCH //
// =====================================

// let hari = "senin";

// switch (hari) {
//     case "senin":
//         console.log("Hari Kerja");
//         break;
//     case "Sabtu":
//     case "Minggu":
//         console.log("Hari Libur");
//         break;
//     default:
//             console.log("Hari tidak valid");
// }
            
// =====================================================

// let nilaiHuruf = "B";

// switch (nilaiHuruf) {
//     case "A":
//         console.log("sangat baik");
//         break;
//     case "B":
//         console.log("baik");
//         break;
//     case "C":
//         console.log("cukup");
//         break;
//     case "D":
//         console.log("kurang");
//         break;
//     default:
//         console.log("nilai tidak valid");
//         break;
// }

// let minuman = "sweet tea";

// switch (minuman) {
//     case "sweet tea":
//         console.log("you choose sweet tea,thanks");
//         break;
//     case "plain tea":
//         console.log("you choose plain tea,thanks");
//         break;
//     case "boba":
//         console.log("you choose boba,thanks");
//         break;
//     case "milk coffe":
//         console.log("you choose milk coffe,thanks");
//         break;
//     case "choco ice":
//         console.log("you choose choco ice,thanks");
//         break;
//     default:
//         break;
// }

// let access = " ";
// let level = 5;

// switch (access) {
//     case "public":
//         if (level < 5) {
//             console.log(access + "dibawah 5");
//         } else if(level > 5) {
//             console.log(access + "di atas 5");
//         } else
//             {
//             console.log(access + "five" );  
//         }
//         break;
//     case "private":
//         if (level < 5) {
//             console.log(access + "dibawah 5");
//         } else if(level > 5) {
//             console.log(access + "di atas 5");
//         } else
//             {
//             console.log(access + "five" );  
//         }
//         break;
//     case "protected":
//         if (level < 5) {
//             console.log(access + "dibawah 5");
//         } else if(level > 5) {
//             console.log(access + "di atas 5");
//         } else
//             {
//             console.log(access + "five" );  
//         }
//         break;
//     default:
//         if (access === " ") {
//             console.log("input access");
//         } else {
//             console.log("access is not defined");
         
//         }
//         break;
// }