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