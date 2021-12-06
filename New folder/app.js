

// const food =[ 'alu','potol', 'lau', 'kodom', 'beli', 'joba', 'champa', 'dolon'];

// const food2 =food.slice(2, 4); 
// const food3 =food.splice(2, 3); 

// console.log(food.includes(''));
// console.log(food2);
// console.log(food3);



// const food = ['alu','potol', 'lau', 'kodom', 'beli', 'joba', 'champa', 'dolon'];

// const adu = ['poti', 'katol', 'boyal'];
// const food2 = ['coding'];
// // const food2= food.splice(2, 3);
// console.log(food.concat(adu, food2).sort().reverse())

// const student = [
//     [01, 'rakib adnan', 30, 'feni'],
//     [02, 'adnan', 20, 'chittgong'],
//     [03, 'rakib', 30, 'feni'],
//     [04, 'rakib adnan', 10, 'feni']
// ];

// for(let i = 0; i < student.length; i++){
//     console.log(student[i][2]);
    
// }

// const student = {
//     roll      : 1,
//     name      : 'Rakib Adnan',
//     age       : 22,
//      location  : 'Barishal'
// };

// console.log(student.Roll);


// const student = [

//     { 
//         id          : 1,
//         name        :'Abu Sayed',
//         age         : 26,
//         location    :'Comilla',
//         gender      :'Male'

//      },
//     { 
//         id          : 2,
//         name        :'Nur Amin',
//         age         : 28,
//         location    :'Nowakhli',
//         gender      :'Male'

//      },
//     { 
//         id          : 3,
//         name        :'Anamul Haq',
//         age         : 25,
//         location    :'Dhaka',
//         gender      :'Male'

//      },
//     { 
//         id          : 4,
//         name        :'Abu Sufian',
//         age         : 30,
//         location    :'Foridpur',
//         gender      :'Male'

//      },
//     { 
//         id          : 5,
//         name        :'Mamun Khan',
//         age         : 24,
//         location    :'Savar',
//         gender      :'Male'

//      },
//      {
//          id         :6,
//          name       :'Alim Khan',
//          age        :23,
//          location   :'Comilla',
//          gender     :'Male'
//      }

// ];

// // for(let i = 0; i < student.length; i++){
// //     console.log(`
// //      Id       : ${student[i].id}
// //      Name     : ${student[i].name}
// //      Age      : ${student[i].age}
// //      Location : ${student[i].location}
// //      Gender   : ${student[i].gender}
    
// //     `); 
// // }

// // student.map( data => {
// //    if(data.name == 'Abu Sayed'){
// //        console.log(`
// //     Id   :${data.id}
// //     Name :${data.name}
// //     Age  :${data.age}
// //     Loca :${data.location}
// //     Gend :${data.gender}
    
// //     `);
// //    }
// // });

// for( adnan in student){
//     console.log(student[adnan].name);
// }

const devs = [
    {
        id       : 1,
        name     :'Abu Sayeed',
        age      :26,
        skill    :'Java',
        location :'comilla',
        gender   :'Male',
        selary   :1500,   
    },
    {
        id       : 2,
        name     :'Md Mamun',
        age      :21,
        skill    :'PHP',
        location :'Dhaka',
        gender   :'Male',
        selary   :2000,   
    },
    {
        id       : 3,
        name     :'Nur Amin',
        age      :22,
        skill    :'Python',
        location :'Banani',
        gender   :'Male',
        selary   :1700,   
    },
    {
        id       : 4,
        name     :'Abu Sufian',
        age      :26,
        skill    :'Laravel',
        location :'Mirpur',
        gender   :'Male',
        selary   :2000,   
    },
    {
        id       : 5,
        name     :'Anamul Haq',
        age      :24,
        skill    :'Python',
        location :'Savar',
        gender   :'Male',
        selary   :2500,   
    },
    
];
 
let total = 0;
devs.map(data => {

console.log(`
    Name    :${data.name}
    Stack   :${data.skill}
    Age     :${data.age}
    Location:${data.location}
    Gender  :${data.gender}
    ID      :${data.id}
    Selary  :${data.selary}
`);
total = total + data.selary;
});
console.log(`Total Income :${total}`);