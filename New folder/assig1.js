const devs = [
    {
        id       : 1,
        name     :'Abu Sayeed',
        age      :26,
        skill    :'Laravel',
        location :'comilla',
        gender   :'Male',
        selary   :1500,   
    },
    {
        id       : 2,
        name     :'Md Mamun',
        age      :21,
        skill    :' Django',
        location :'Dhaka',
        gender   :'Male',
        selary   :2000,   
    },
    {
        id       : 3,
        name     :'Nur Amin',
        age      :22,
        skill    :'Golan',
        location :'Banani',
        gender   :'Male',
        selary   :1700,   
    },
    {
        id       : 4,
        name     :'Abu Sufian',
        age      :26,
        skill    :'WordPress',
        location :'Mirpur',
        gender   :'Male',
        selary   :2000,   
    },
    {
        id       : 5,
        name     :'Anamul Haq',
        age      :24,
        skill    :'java',
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