// 1.গ্রেড মেক িং এর বাক অিংশটু ু গ্রর মেলগ্রে হগ্রব কিগ্রে কিগ্রে

const gradeMarking = (mark) =>{
    if (mark >= 90 && mark <= 100) {
        console.log(`${mark} : is A+`);
    } else if (mark >= 80 && mark < 90) {
        console.log(`${mark} : is A`);
    }else if (mark >= 70 && mark < 80) {
        console.log(`${mark} : is B+`);
    }else if (mark >= 60 && mark < 70) {
        console.log(`${mark} : is B`);
    }else if (mark >= 50 && mark < 60) {
        console.log(`${mark} : is C+`);
    }else if (mark >= 40 && mark < 50) {
        console.log(`${mark} : is C`);
    }else if (mark >= 0 && mark < 40) {
        console.log(`${mark} : is F`);
    }else{
        console.log(`${mark} is not a valid number!!`);
    }
}
gradeMarking(39);

// ২. এেি এ টা মরাোে কলগ্র া মে াগ্রি এ টা িম্বর ইিপুট রগ্রল িগ্র াল এ বগ্রল কিগ্রব মে এইটা মোর িাক কবগ্রোড়

const oddEven = (number)=> {
    if (number % 2 == 0) {
        return `${number} is EVEN.`;
    }else{
        return `${number} is ODD.`;
    }
}

console.log(oddEven(3));


// 3 . এ টা এগ্রর থা গ্রব এগ্রর এর েগ্রযে ১-২০ পে যন্ত িম্বর গুলা এগ্রলাগ্রেগ্রলা
// থা গ্রব আপিার াে হগ্রব মরাে অিু াগ্রর াোগ্রিা

const asc_sort = (array) =>{
    array.sort(function(a, b){return a - b});
    return array;
}
let array = [5,1,9,8,3,6,4,7,2,11,10,13,12,15,14,20,19,18,17];

console.log(asc_sort(array));


// 4 .এেি এ টা মরাোে কলগ্র া মে াগ্রি িম্বর ইিপুট রগ্রল বগ্রল এইটা কলপ
// ইয়ার ক িা ?

const leapYear = (year) =>{
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 4 == 0)) {
        return ` ${year} is a Leap Year.`
    }
    else
    {
        return ` ${year} is NOT a Leap Year.`
    }
}
console.log(leapYear(2024));

// 5. ১-৫০ এর েগ্রযে ৩ এবিং ৫ কিগ্রয় কবভােে িং ো গুলা মবর গ্ররা

const divisorBy_3_5 = () =>{
    let numbers = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(divisorBy_3_5());

// 6 .পপগ্রর এর এগ্রর মথগ্র মে াগ্রি ৫ টা মেন্ড এর িাে এর েগ্রযে বগ্রড়া িাে
// ম াি মেন্ড এর ুুঁগ্রে মবর রা

const bigNameFriend = (friends) =>{
    let bigName = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if(friends[i].length > bigName.length)
            {
                bigName = friends[i];
            }
    }
    return bigName;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
console.log(bigNameFriend(friends));

// 7 . পগ্রবর পগ্ররর এগ্রর মথগ্র ডুকিগ্র ট িম্বর গুলা বাি কিগ্রয় পকি িম্বর গুলা
// মবর রগ্রে হগ্রব |

const removeDuplicate = (numbers) =>{
    return numbers.filter((item, index) => numbers.indexOf(item) === index);
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log(removeDuplicate(numbers));

const monthlySavings = (allPayments, livingCost) =>{
    let totalSavings = 0;
    if (!Array.isArray(allPayments) || isNaN(livingCost)) {
        return 'Invalid input!';
    }
    else
    {
        allPayments.forEach(element => {
            if (element >= 3000) {
                totalSavings += element * 0.80;
            }
            else
            {
                totalSavings += element;
            }
        });

    }
    if ((totalSavings - livingCost) >= 0) {
        return (totalSavings - livingCost);
    }
    else
    {
        return 'earn more';
    }
}
const allPayments = [1000,2000,2500];
const livingCost = 5000;
console.log(monthlySavings(allPayments, livingCost));

