// const muslim = {
//     believe: `There is no good without Allah`,
//     myPurpose: `I am soldier of Allah`,
//     myMoney: 10000,
//     teacher: {
//         name: `Prophet Muhammad (Be upon for him)`,
//         bornDied: `570-633(approximate)`,
//         purpose: `Save people for jahannam`,
//         title: `Teacher of human and Last messenger for muslim`
//     },
//     bestBook: `Quran`,
//     mostCategoryBook: [`sira`, `All kinds of hadis book without bidad`, `Life style of Muhammad`],
//     myHero: function (myTeacher){
//         this.myPurpose = `${this.myPurpose}. ${this.believe} And ${myTeacher}`;
//         return this.myPurpose;
//     }
// }
// const result = muslim.myHero(`Prophet Muhammad (Be upon on him) my teacher and model.`);
// console.log(result);


const nur = {
    name: `Nur Hossain Farid`,
    age: 20,
    job: `student`,
    department: `Software Engineering`,
    income: 3000,
    bestFriends: [`Sabbir`, `Salman`, `Tareque`, `Sagor`, `Ebrahim`, `Rakib`],
    otherSkill: {
        programingLanguage: `JS`,
        learningCenter: `Programming Hero`,
        teacher: `Jhankar Mahmud`,
        nationality: `Bangladeshi`
    },
    totalBalance: function (expense, saving) {
        const totalAmount = this.income - expense - saving;
        return totalAmount;
    }
}
// console.log(student);
const result = nur.totalBalance(2500, 200);
// console.log(result);

/* declare template string */

/* arrow function  */
// 3.1
const withoutParameter = () => 89;
// console.log(withoutParameter());

// 3.2 
const singleParameter = number => number / 7;
// console.log(singleParameter(49));

// 3.3
const twoParameter = (num1, num2) => (num1 + num2) / 2;
// console.log(twoParameter(4,7));

// 3.4
const multipleParameter = (num1, num2) => {
    const first = num1 + 7;
    const second = num2 + 7;
    const sum = first + second;
    return sum;
}
console.log(multipleParameter(4, 7));


/* array */
const numbers = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
const divideSeven = numbers.map(x => x / 7);
console.log(divideSeven);

/* forEach() */
const nums = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
const division = nums.forEach(x => console.log(x / 7))

/* filler() */
const num = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
const divide = num.filter(x => (x / 7) > 4);
console.log(divide);

/* find() */
const number = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
const divides = number.find(x => (x / 7) > 4);
console.log(divides);


/* destructing */
// object destructing
const laptop = {
    name: `arous`,
    id: 35,
    color: `black`,
    ram: {
        name: `Random access memory`,
        capacity: `32GB`,
        present: `8GB`,
    },
    secondaryMemory: {
        categories: `HDD,SDD,M2`,
        highPerformance: `M2`,
        expensive: `M2`,
        present: `SDD 512GB`,
    }
}

const {
    name,
    color,
    id
} = laptop;
console.log(name, color, id);
const {
    categories,
    highPerformance,
    expensive,
    present
} = laptop.secondaryMemory;
console.log(categories, highPerformance, expensive, present);

// array destructing
const myFriends = [`sabbid`, `jihad`, `tareque`, `mehedi`, `ebrahim`, `rakib`];
const [s, j, t, m, e, r] = myFriends;
console.log(s, j, t, m, e, r);
const favoriteNumbers = [59, 29, 93, 38, {
    name: `Nur Hossain Farid`,
    studentId: `221-35-843`,
    job: `student`,
    subject: {
        bookName: `AOL, CF, IOSWE, Eng, CFL`,
        subjectId: `101, 111,113,101,111`,
        teacher: `Ejaj, KBB, Esraq, Afsana, KBB`,
    }
}]
const { studentId, job } = favoriteNumbers[4];
console.log(studentId, job);
const { bookName, subjectId, teacher } = favoriteNumbers[4].subject;
console.log(bookName, subjectId, teacher);