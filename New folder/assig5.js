
const user = [

    {id : 1,
     name:'rakib',
     Location:'Dhaka',
     taka:1000,
    },
    {id : 1,
     name:'rakib',
     Location:'Dhaka',
     taka:1000,
    },
    {id : 1,
     name:'rakib',
     Location:'Dhaka',
     taka:1000,
    },
    {id : 1,
     name:'rakib',
     Location:'Dhaka',
     taka:1000,
    },
    
];

user.forEach(data =>{
    let rakib = data.taka;
   function devs () {

    if(rakib == 1000 ){
        return`Congration You are Go`
    }else if (rakib == 700){
        return`Congration your `
    }


   }
   console.log(`
    ID       : ${data.id}
    Name     : ${data.name}
    Location : ${data.Location}
    Taka     : ${data.taka}
    SMS     : ${devs()}

   `);

});