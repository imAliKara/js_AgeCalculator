const inputDate = document.getElementById("date");
const btnCalculate = document.getElementById("calculate").addEventListener("click", CalculateAge);
const output = document.getElementById("output");

function CalculateAge() {
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1;
    let todayDay = today.getDate();

    let birthDate = new Date(inputDate.value);
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth() + 1;
    let birthDay = birthDate.getDate();

    let day3, month3, y3;

     y3 = todayYear - birthYear;

     if (birthMonth >= todayMonth) {
        month3 = todayMonth - birthMonth;
     } else {
        y3--;
        month3 = 12 + todayMonth - birthMonth;
     }

     if (todayDay >= birthDay) {
        day3 = todayDay - birthDay;
     } else {
        month3--;
        day3 = getDaysInMonth(birthYear, todayMonth) + todayDay - birthDay;
     }

     if (month3 < 0) {
        month3 = 11;
        y3--;
     }
     if (!inputDate.value) {
        alert("Please select a date!");
        location.reload();
     }
     output.innerHTML = "You are <span>" + y3 + "</span> years, <span>" + month3 + "</span> months and <span>" + day3 + "</span> days old.";
}
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}