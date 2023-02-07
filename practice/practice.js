//CHALLENGES

//CHALLENGE 1


//Test Data 1
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92
const johnHeight = 1.95

//Test Data 2

const markWeight2 = 95;
const markHeight2 = 1.88;

const johnWeight2 = 85;
const johnHeight2 = 1.76;


// BMI calculation

const markBMI = markWeight / (markHeight * markHeight);
console.log(markBMI);


const johnBMI = johnWeight / johnHeight ** 2
console.log(johnBMI);

//Check for mark having higher bmi


// CHALLENGE 2


const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI ${johnBMI}) is higher than Mark's (${markBMI})!`);
}



// CHALLENGE 3

// Dolphins

const dolphinsScore = (96 + 108 + 89) / 3;

console.log(dolphinsScore);

// Koalas

const koalasScore = (88 + 91 + 110) / 3;

console.log(koalasScore);

if (dolphinsScore > koalasScore) {
    console.log(`Dolphins Won! ${dolphinsScore}`)
} else if (dolphinsScore === koalasScore) {
    console.log("It was a draw")
} else {
    console.log(`Koalas Won! ${koalasScore}`)
}

const bonusDolphin1 = (97+ 112 + 101) / 3;
console.log(bonusDolphin1);

const bonusKoala1 = (109 + 95 + 123) / 3;
console.log(bonusKoala1);

if (bonusDolphin1 > bonusKoala1 && bonusDolphin1 >= 100) {
    console.log(`Dolphins Won! ${bonusDolphin1}`)
} else if (bonusKoala1 > bonusDolphin1 && bonusKoala1 >= 100) {
    console.log(`Koalas Won! ${bonusKoala1}`)
} else {
    console.log("It was a draw")
}

const bonusDolphin2 = (97 + 112 + 101) / 3;
console.log(bonusDolphin2);

const bonusKoala2 = (109 + 95 + 106) / 3;
console.log(bonusKoala2);

if (bonusDolphin2 > bonusKoala2 && bonusDolphin2 >= 100) {
    console.log(`Dolphins Won! ${bonusDolphin2}`)
} else if (bonusKoala2 > bonusDolphin2 && bonusKoala2 >= 100) {
    console.log(`Koalas Won! ${bonusKoala2}`)
} else if (bonusDolphin2 === bonusKoala2 && bonusKoala2 >= 100 && bonusDolphin2 >= 100) {
    console.log("It was a draw!")
}

// TEST 4


const bill1 = 275;
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.20;
console.log(`The bill was ${bill1}, the tip was ${tip1} so the final value was ${bill1 + tip1}`);

const bill2 = 40;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.20;
console.log(`The bill was ${bill2}, the tip was ${tip2} so the final value was ${bill2 + tip2}`);

const bill3 = 430;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.20;
console.log(`The bill was ${bill3}, the tip was ${tip3} so the final value was ${bill3 + tip3}`);




const dogMath = function(dogsAge) {
    return dogsAge * 7;
}

const dogAge = function(dogAge1, dogAge2) {
    const dog1 = dogMath(dogAge1)
    const dog2 = dogMath(dogAge2)
    const dogAges = `The first dog's age is ${dog1} and the second dog's age is ${dog2}`
    return dogAges
}

console.log(dogAge(10, 3))





/* CODING CHALLENGE */


//Test Data 1


const calcAverage = (score1, score2, score3) => {
   const average = (score1 + score2 + score3) / 3
   return average
}


const dolphAvg = calcAverage(44, 23, 71)
const koalaAvg = calcAverage(65, 54, 9)

console.log(dolphAvg)
console.log(koalaAvg)

const checkWinner = function(avgDolph, avgKoala) {
    if (avgDolph >= 2 * avgKoala) {
        console.log(`Dolphins win (${avgDolph} to ${avgKoala})`)
    } else if (avgKoala >= 2 * avgDolph) {
        console.log(`Koalas win (${avgKoala} to ${avgDolph})`)
    } else {
        console.log("No team wins")
    }
}

checkWinner(dolphAvg, koalaAvg)


//Test Data 2


const avg1 = calcAverage(85, 54, 41)
const avg2 = calcAverage(23, 34, 27)

console.log(avg1)
console.log(avg2)

checkWinner(avg1, avg2)




/**
 * 
 * 
 * 
 */


const friends = ["Michael", "Steven", "Peter"]



const years = new Array(1991, 1992, 2000, 20023)

console.log(friends, years.length)
console.log(friends[friends.length - 1])

friends.push("Andrew")
console.log(friends, years.length)
friends.unshift("Patrick")
console.log(friends, years.length)

friends.pop()
console.log(friends, years.length)

friends.shift()
console.log(friends, years.length)

const person = {
    name: String,
    birthYear: 2000,

    calcAge: function () {
        this.name = "Bob"
        return 2023 - this.birthYear
    }
}

console.log(person)


console.log(person.name, person.birthYear)
console.log(person)


console.log(person.calcAge())
console.log(person.name)




/* CODING CHALLENGE */



const mark = {
    name: "Mark",
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.weight / (this.height * 2)
        return this.bmi
    }
}

const john = {
    name: "John",
    weight: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2
        return this.bmi
    }
}


john.calcBMI()
mark.calcBMI()

const whoHasHigher = mark.bmi > john.bmi ? console.log(`${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s BMI (${john.bmi})`) 
: console.log(`${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s BMI (${mark.bmi})`)


console.log(whoHasHigher)


/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */



const arr = [
    'Hello',
    'NUMBER IS NEXT',
    22,
    "HEY",
    true,
    ["Hey", "Hello"]
]


for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') continue;
    console.log(arr[i])
}

for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') break;
    console.log(arr[i])
}


const yrs = [1999, 2000, 2002, 1989, 2005]

const ags = []

for (i = 0; i < yrs.length; i++) {
    ags.push(2023 - yrs[i])
}

console.log(ags)


/* BACKWARDS LOOP */

for (i = arr.length - 1; i > -1; i--) {
    console.log(arr[i])
}


for (i = 1; i <= 3; i++) {
    console.log(`STARTING EXERCISE ${i}`)
    for (j = 1; j <= 5; j++) {
        console.log(`REP ${j}`)
    }
}



let rep = 1;

while (rep <= 10) {
    console.log("HEY")
    rep++;
    
}



/* CODING CHALLENGE */


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []

const totals = []



// bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.20;

const calcTips = (theBill) => {
    return theBill >= 50 && theBill <= 300 ? theBill * 0.15 : theBill * 0.20
}

for (i = 0; i < bills.length; i++) {
    const theTip = calcTips(bills[i])
    tips.push(theTip)
    totals.push(theTip + bills[i])
}

console.log(tips)



console.log(totals)


const calcAv = function(arr) {
    let sum = 0

    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

   sum = sum / arr.length

    console.log(sum)
}

calcAv(totals)
