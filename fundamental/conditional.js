// if...else

// let  angka = 3
//     if (angka === 1){
//     console.log("angka 1"); }
//     else {
//         console.log("angka selain 1");
//     }

//======================

//if .... else & else if

// let angka = 3;

// if(angka < 2) {
//     console.log("angka dibawah 2");
// }  else if(angka > 2){
//     console.log("angkar diatas 2");
// }else {
//     console.log("angka 2");
    
// }
    
//=========================

// let umur = 18;

// if(umur >= 17) {
//     console.log("Bisa bikin KTP");
// }else{
//     console.log("Belum bisa bikin KTP");
//     }
    
//=============================

//SWITCH...CASE//

// let minuman = "kopi";
// switch(minuman){
//     case 'kopi' : console.log("kamu pilih kopi");
//     break;
//     case 'teh':
//     console.log("kamu pilih teh");
//     break;
// }


//=================================

//IF...DIDALAM IF//

// let umur = 15
// let tinggi = 140

// if (umur < 17){
// if (tinggi < 150){
//     console.log('tidak boleh masuk');
// }else{
//     console.log('boleh masuk');
    
// }
//    } 

//==========================================================
// CONDITIONAL

/**
 * * Study Case 1
 *
 * Cek apakah sebuah bilangan genap atau ganjil
 * Tentukan algoritma pseudocode dan coding
 * 
 * 1.buat variable number
 * 2.cek apakah number tersebut habis dibagi 2
 *  2.1 jika habis makan bilangan genap
 *  2.2 jika tidak habis maka bilangan ganjil
 * 3.cetak hasil
 * 
 */

// let angka = 7;
// if (angka %2 === 0){
//     console.log("bilangan geap");
// }else{
//     console.log("bilangan ganjil");
    
// }


/**
 *  Study Case 2
 * 
    Sebuah vending machine dapat menginput sebuah string dan memberikan sebuah minuman, berikut
    list nya:
    a. "Sweet Tea"
    b. "Plain Tea"
    c. "Boba"
    d. "Milk Coffee"
    e. "Choco Ice"
    Jika pembeli memilih "Sweet Tea", maka result : "You choose Sweet Tea, thanks". (gunakan switch case)

   PSEUDOCODE

    BEGIN
        STORE drinks WITH ANY STRING

        IF drinks EQUAL "Sweet Tea" THEN
            PRINT "You choose Sweet Tea, thanks"
        ELSE IF drinks EQUAL "Plain Tea" THEN
            PRINT "You choose Plain Tea, thanks"
        ELSE IF drinks EQUAL "Boba" THEN
            PRINT "You choose Boba, thanks"
        ELSE IF drinks EQUAL "Milk Coffee" THEN
            PRINT "You choose Milk Coffee, thanks"
        ELSE IF drinks EQUAL "Choco Ice" THEN
            PRINT "You choose Choco Ice, thanks"

        END IF
    END

 */

// CODING

// let drinks = "Sweet Tea";

// switch (drinks) {
//   case "Sweet Tea":
//     console.log("You choose " + drinks + ", thanks");
//     break;
//   case "Plain Tea":
//     console.log("You choose " + drinks + ", thanks");
//     break;
//   case "Boba":
//     console.log("You choose " + drinks + ", thanks");
//     break;
//   case "Milk Coffee":
//     console.log("You choose " + drinks + ", thanks");
//     break;
//   case "Choco Ice":
//     console.log("You choose " + drinks + ", thanks");
//     break;
// }

/**
 * 
 * Study Case 3
 * 
    Klasifikasi level untuk karakter dalam sebuah game terdiri dari detail berikut:
    
    Interval            Status
    --------------------------
    lebih dari 100      Expert
    antara 70 dan 100   Pro
    antara 50 dan 70    Normal
    antara 30 dan 50    Basic
    kurang dari 30      Beginner
    
    Proses klasifikasi tersebut adalah jika Power dari sebauh karakter 75 maka result nya : "Character is Pro"

PSEUDOCODE

    BEGIN
        STORE power WITH ANY NUMBER

        IF power GREATER THAN 100 THEN
            PRINT "Character is Expert"
        ELSE IF power GREATER THAN 70 AND power LESS THAN EQUAL 100 THEN
            PRINT "Character is Pro"
        ELSE IF power GREATER THAN 50 AND power LESS THAN EQUAL 70 THEN
            PRINT "Character is Normal"
        ELSE IF power GREATER THAN 30 AND power LESS THAN EQUAL 50 THEN
            PRINT "Character is Basic"
        ELSE IF power LESS THAN EQUAL 30 THEN
            PRINT "Character is Beginner"
        END IF
    END
    
 */
// CODING

// let power = 90;

// if (power > 100) {
//   console.log("Character is Expert");
// } else if (power > 70 && power <= 100) {
//   console.log("Character is Pro");
// } else if (power > 50 && power <= 70) {
//   console.log("Character is Normal");
// } else if (power > 30 && power <= 50) {
//   console.log("Character is Basic");
// } else if (power >= 30) {
//   console.log("Character is Beginner");
// }


/* Study Case 4
 *
 * Ada 3 jenis access : Public, Protected, Private.
 * Jika access kosong, maka tampilkan "Input access"
 *
 * Access public, jika level di bawah 5 maka tampilkan "Public di bawah 5"
 * Access public, jika level di atas 5 maka tampilkan "Public di atas 5"
 * Access public, jika level sama dengan 5 maka tampilkan "Public five"
 *
 * Access private, jika level di bawah 5 maka tampilkan "Private di bawah 5"
 * Access private, jika level di atas 5 maka tampilkan "Private di atas 5"
 * Access private, jika level sama dengan 5 maka tampilkan "Private five"
 *
 * Access protected, jika level di bawah 5 maka tampilkan "Protected di bawah 5"
 * Access protected, jika level di atas 5 maka tampilkan "Protected di atas 5"
 * Access protected, jika level sama dengan 5 maka tampilkan "Protected five"
 *
 * Jika access salah, tampilkan "Access is not defined"
 *
 * BUAT CODING menggunakan Nested Conditional : Switch case dan if else
 */

// Pseudocode
/**
 * STORE access WITH ANY STRING
 * STORE level WITH ANY NUMBER
 *
 * IF access EMPTY STRING THEN
 *  DISPLAY "Input Access"
 * ELSE IF access EQUAL "Public" THEN
 *  IF level LESS THAN 5 THEN
 *      DISPLAY "Public di bawah 5"
 *  ELSE IF level MORE THEN 5 THEN
 *      DISPLAY "Public di atas 5"
 *  ELSE
 *      DISPLAY "Public five"
 *  ENDIF
 * ELSE IF access EQUAL "Protected" THEN
 *  IF level LESS THAN 5 THEN
 *      DISPLAY "Protected di bawah 5"
 *  ELSE IF level MORE THEN 5 THEN
 *      DISPLAY "Protected di atas 5"
 *  ELSE
 *      DISPLAY "Protected five"
 *  ENDIF
 * ELSE IF access EQUAL "Private" THEN
 *  IF level LESS THAN 5 THEN
 *      DISPLAY "Private di bawah 5"
 *  ELSE IF level MORE THEN 5 THEN
 *      DISPLAY "Private di atas 5"
 *  ELSE
 *      DISPLAY "Private five"
 *  ENDIF
 * ELSE
 *  DISPLAY "Access is not defined"
 * ENDIF
 */

// Coding
// var access = "Public";
// var level = 5;

// switch (access) {
//     case "Public":
//         if (level < 5) {
//             console.log(access + " di bawah 5");
//         } else if (level > 5) {
//             console.log(access + " di atas 5");
//         } else {
//             console.log(access + " five");
//         }
//         break;
//     case "Private":
//         if (level < 5) {
//             console.log(access + " di bawah 5");
//         } else if (level > 5) {
//             console.log(access + " di atas 5");
//         } else {
//             console.log(access + " five");
//         }
//         break;
//     case "Protected":
//         if (level < 5) {
//             console.log(access + " di bawah 5");
//         } else if (level > 5) {
//             console.log(access + " di atas 5");
//         } else {
//             console.log(access + " five");
//         }
//         break;
//     default:
//         if(access === ""){
//             console.log("Input access")
//         }else {
//             console.log("Input is not defined")
//         }
//         break;
// }


/**
 *  * Study Case 5
 *
 * * Sebuah Lembaga layanan IT Services yang bergerak di bidang perbaikan laptop dan gadget memberikan layanan khusus berdasarkan dr status pembeli.
 *
 * Pembeli merupakan penduduk WNA, dan memiliki ketentuan berikut:
 *	Lama tinggal di Indonesia 3 tahun kurang, maka Tidak Dapat Diskon
 *	Lama tinggal di Indonesia 3 hingga 5 tahun, maka dapat Diskon. Jika memiliki syarat:
 *		Usia di Bawah 21 tahun, maka diskon 10%
 *		Usia di Atas 21 tahun, maka diskon 5%
 *	Lama tinggal di Indonesia di atas 5 tahun. Jika memiliki syarat:
 *		Usia di Bawah 21 tahun, maka diskon 5%
 *		Usia di Atas 21 tahun, maka diskon 2.5%
 * Pembeli merupakan penduduk WNI, dan memiliki ketentuan berikut:
 * 	WNI tinggal di daerah Barat Indonesia, mendapakan diskon 10%,
 *	   WNI tinggal di daerah Tengah Indonesia, mendapatkan diskon 15%,
 * 	WNI tinggal di daerah Timur Indonesia, mendapatkan diskon 17.5%
 *
 * Contoh perhitungan:
 * Warga merupakan WNA, lama tinggal 3 tahun dan umur 27 tahun. Total pembelian : Rp. 100.000
 * Maka mendapatkan diskon 5%, sehingga total yang di bayar adalah Rp. 95.000
 *
 * PSEUDOCODE*
 *
 * BEGIN
 *  STORE status WITH ANY STRING
 *  STORE period WITH ANY NUMBER
 *  STORE age WITH ANY NUMBER
 *  STORE location WITH ANY STRING
 *  STORE price WITH ANY NUMBER
 *
 * IF status EQUAL "WNA" THEN
 *      IF period LESS THAN 3 THEN
 *          price EQUAL price
 *      ELSE IF period GREATER THAN  5 THEN
 *          IF age LESS THAN 21 THEN
 *              price EQUAL price MUL 0.95
 *          ELSE IF age GREATER THAN EQUAL 21 THEN
 *              price EQUAL price MUL 0.975
 *          END IF
 *      ELSE IF period GREATER THAN EQUAL 3 AND period LESS THAN EQUAL 5 THEN
 *          IF age LESS THAN 21 THEN
 *              price EQUAL price MUL 0.9
 *          ELSE IF age GREATER THAN EQUAL 21 THEN
 *              price EQUAL price MUL 0.95
 *          END IF
 *      END IF
 * ELSE IF status EQUAL "WNI" THEN
 *      IF location EQUAL "barat" THEN
 *          price EQUAL price MUL 0.9
 *      ELSE IF location EQUAL "tengah" THEN
 *          price EQUAL price MUL 0.85
 *      ELSE IF location EQUAL "timur" THEN
 *          price EQUAL price MUL 0.825
 *      END IF
 * END IF
 *
 * END
 */

// CODING

// let status = "WNI";
// let period = 3;
// let discount = 0;
// let age = 25;
// let location = "barat";
// let price = 100000;

// switch (status) {
//   case "WNA":
//     if (period < 3) {
//       price = price;
//     } else if (period >= 3 && period <= 5) {
//       if (age < 21) {
//         price = price * 0.9;
//       } else if (age >= 21) {
//         price = price * 0.95;
//       }
//     } else if (period < 5) {
//       if (age < 21) {
//         price = price * 0.95;
//       } else if (age >= 21) {
//         price = price * 0.97;
//       }
//     }
//     break;
//   case "WNI":
//     if (location === "barat") {
//       price = price * 0.9;
//     } else if (location === "tengah") {
//       price = price * 0.85;
//     } else if (location === "timur") {
//       price = price * 0.825;
//     }
//     break;
// }
// console.log(price);


