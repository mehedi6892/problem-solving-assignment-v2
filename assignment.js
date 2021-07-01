
//Kilometer To Meter Code 
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(2);
console.log(result);


// Budget Calculator code
function budgetCalculator(ghori, phone, laptop){
    const ghoriPrice = ghori * 50;
    const phonePrice = phone * 100;
    const laptopPrice = laptop * 500;
    totalPrice = ghoriPrice + phonePrice + laptopPrice;
    return totalPrice;
}

const result = budgetCalculator(2, 5, 2);
console.log(result);


// Hotel Cost Code 
function hotelCost(day){
    let payAmount;
    if(day <= 10){
        payAmount = day * 100;
    }
    else if( day <= 20){
        let firstCondition = 10 * 100;
        let remaining = day - 10;
        let secondCondition = remaining * 80;
        payAmount = firstCondition + secondCondition;
    }   
    else {
        let firstCondition = 10 * 100;
        let secondCondition = 10 * 80;
        let remaining = day - 20;
        let thirdCondtion = remaining * 50;
        payAmount = firstCondition + secondCondition + thirdCondtion;  
    }
    return  payAmount;
}

const totalHotelCost = hotelCost(21);
console.log(totalHotelCost)



//Mega Friend Name code
function megaFriend(frienArry){
    var namelength = 0;
    var largestName;

for (var i = 0; i < frienArry.length; i++) {
  if (frienArry[i].length > namelength) {
    var namelength = frienArry[i].length;
    largestName = frienArry[i];
  }
}
return largestName;
}

let largestFriendName = megaFriend(['nishat', 'mehedihasan', 'raka', 'santo']);
console.log(largestFriendName);
   
