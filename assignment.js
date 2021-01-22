function kilometerToMeter(meter) {
    var kilometer = meter * 1000;
    return kilometer;
}
var result = kilometerToMeter(5);
console.log(result);


function budgetCalculator(watch, mobile, laptop) {
    var total = watch * 50 + mobile * 100 + laptop * 500;
    return total;
}
var result = budgetCalculator(3, 5, 7);
console.log(result);



function hotelCost(hotelVara) {
    var Koros = 0;
    if (hotelVara <= 10) {
        Koros = hotelVara * 100;
    }
    else if (hotelVara <= 20) {
        var firstDay = 10 * 100;
        var remaining = hotelVara - 10;
        var secondDay = remaining * 80;
        Koros = firstDay + secondDay;
    }
    else {
        var firstDay = 10 * 100;
        var secondDay = 10 * 80;
        var remaining = hotelVara - 20;
        var thirdDay = remaining * 50;
        Koros = firstDay + secondDay + thirdDay;
    }
    return Koros;
}
var korosHoilo = hotelCost(22);
console.log(korosHoilo);



function megaFriend(mega) {

    mega = arguments[0]
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i].length > mega.length) {
            mega = arguments[i];
        }
    }
    return mega;
}
var result = megaFriend("Ahmed", "Babrul", "Jakaria", "mamun");
console.log(result);


