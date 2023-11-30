 var name = prompt("ism familyangizni  kiriting")
var age = +prompt("yoshingizni kiriting ")
console.log("mening ismim " + name + " maning yoshim " + age + "!!!");
var misol = +prompt("misolni yeching " + " 6+2=? ");
 console.log("sizning " + misol + " togri javob " + (6 + 2))
 alert("javoblarni korish uchun cansolga kiring!!!")
if (misol === 8) {
    alert("sizning javob togri");
}else{
    alert("jovobiz notogri " + misol +" togri javob esa " +(6+2));
}
let son = +prompt("son kiring ")
if (son % 2 == 0) {
    alert("bu son juft")
} else if(son % 2 == 1){
    alert("bu son toq")
}else{
    alert("bu son emas")
}
let yosh = +prompt("yoshingizni kiriting")
if (yosh <= 18) {
    alert("yoshsiz oqishinigiz kerak")
} else if (yosh <= 50) {
    alert("ishlashingiz kerak")
} else if (yosh <= 59) {
    alert("yaqinda pensiyaga chiqasiz")
}else if (yosh <= 150) {
    alert("pensianerga oxshaysiz agar tirik bolsangiz")
}else{
    alert("nmadur notori ketib qold")
}