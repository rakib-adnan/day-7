const student = [
    {
        id : 1,
        name:'Rakib Adnan',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 2,
        name:'Adnan',
        age : 12,
        location: 'Uttara'
    },
    {
        id : 3,
        name:'Rajib',
        age : 20,
        location: 'Barishal'
    },
    {
        id : 4,
        name:'Tijul',
        age : 14,
        location: 'Banani'
    },
    {
        id : 5,
        name:'Mohon',
        age : 22,
        location: 'Feni'
    },
    {
        id : 6,
        name:'Abu Sale',
        age : 23,
        location: 'Banani'
    },
    {
        id : 7,
        name:'Hridoy',
        age : 33,
        location: 'Banani'
    },
    {
        id : 8,
        name:'Kiuum',
        age : 33,
        location: 'Mirpur'
    },
    {
        id : 9,
        name:'Rayhan',
        age : 32,
        location: 'Chittagong'
    },
    {
        id : 10,
        name:'Shakil',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 11,
        name:'Sohag',
        age : 36,
        location: 'Mirpur'
    },
    {
        id : 12,
        name:'Mamun',
        age : 38,
        location: 'Uttara'
    },
    {
        id : 13,
        name:'Rakib Adna',
        age : 44,
        location: 'Mirpur'
    },
    {
        id : 14,
        name:'Kamal',
        age : 13,
        location: 'Banani'
    },
    {
        id : 15,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 16,
        name:'Rakib Adna',
        age : 30,
        location: 'Banani'
    },
    {
        id : 17,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 18,
        name:'Rakib Adna',
        age : 30,
        location: 'Banani'
    },
    {
        id : 19,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 20,
        name:'Rakib Adna',
        age : 30,
        location: 'Banani'
    },
    {
        id : 21,
        name:'Rakib Adna',
        age : 30,
        location: 'Banani'
    },
    {
        id : 22,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 23,
        name:'Rakib Adna',
        age : 30,
        location: 'LalBag'
    },
    {
        id : 24,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 25,
        name:'Rakib Adna',
        age : 30,
        location: 'LalBag'
    },
    {
        id : 26,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 27,
        name:'Rakib Adna',
        age : 30,
        location: 'LalBag'
    },
    {
        id : 28,
        name:'Rakib Adna',
        age : 30,
        location: 'Uttara'
    },
    {
        id : 29,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 30,
        name:'Rakib Adna',
        age : 30,
        location: 'Uttara'
    },
    {
        id : 31,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 32,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 33,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 34,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 35,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 36,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 37,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 38,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 39,
        name:'Rakib Adna',
        age : 30,
        location: 'Mirpur'
    },
    {
        id : 40,
        name:'Sajib',
        age : 21,
        location: 'Mirpur'
    },
    {
        id : 41,
        name:'Rakib',
        age : 22,
        location: 'Banani'
    },
    {
        id : 42,
        name:'Mesbha',
        age : 30,
        location: 'Kajirbag'
    },
    {
        id : 43,
        name:'Aminul',
        age : 18,
        location: 'Mirpur'
    },
    {
        id : 44,
        name:'Rafi',
        age : 20,
        location: 'Banani'
    },
    {
        id : 45,
        name:'Jhorul Islam',
        age : 30,
        location: 'Savar'
    },
    {
        id : 46,
        name:'Rabbi',
        age : 16,
        location: 'Mirpur'
    },
    {
        id : 47,
        name:'Sohag',
        age : 30,
        location: 'Banani'
    },
    {
        id : 48,
        name:'Kamal',
        age : 21,
        location: 'Uttara'
    },
    {
        id : 49,
        name:'Mahadi',
        age : 30,
        location: 'Gulshan'
    },
    {
        id : 50,
        name:'Kamrul',
        age : 24,
        location: 'Mirpur'
    },
    
];

    student.map( data => {

        if(data.location == 'Mirpur'){
            console.log(` 

            Name      : ${data.name}
            Id        : ${data.id}
            Age       : ${data.age}
            Location  : ${data.location}

            `);
        }


    });
    
