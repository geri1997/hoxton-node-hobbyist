import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const users = [
    {
      
       fullName: 'Nicolas',
       photo: 'sdfg',
       email: 'nicolas@email.com'
    },
    {
       
       fullName: 'Rinor',
       photo: 'sdfge',
       email: 'rinor@email.com',
    },
    {
      
       fullName: 'Arita',
       photo: 'ewrywry',
       email: 'arita@email.com',
    },
 ];
 
 const hobbies = [
     {
        image: 'nicolas@email.com',
        name: 'Nicolas',
        active: 0,
     },
     {
        image: 'rinor@email.com',
        name: 'Rinor',
        active: 1,
     },
     {
        image: 'arita@email.com',
        name: 'Arita',
        active: 1,
     },
  ];
  
  const hobbyUser = [
     
     {
        hobbyId: 1,
        userId:2
     },{
         hobbyId: 3,
         userId:2
      },{
         hobbyId: 1,
         userId:3
      },{
         hobbyId: 1,
         userId:1
      },{
         hobbyId: 3,
         userId:1
      },{
         hobbyId: 2,
         userId:2
      },{
         hobbyId: 2,
         userId:1
      }
  ];
  const posts = [
    {
      title: 'My first post',
      content: 'Welcome to my first post',
      userId: 1
    },
    {
      title: 'My second post',
      content: 'Welcome to my second post',
      userId: 1
    },
    {
      title: 'This is cool',
      content: 'My first post, too!',
      userId: 2
    }
  ]
  



  
  async function createStuff(){
    for (const user of users) {
        await prisma.user.create({data:user})
      }
      for (const hobby of hobbies) {
         await prisma.hobby.create({data:hobby})
       }
       for (const hbu of hobbyUser) {
        await prisma.userHobby.create({data:hbu})
      }
      
 }

 createStuff()