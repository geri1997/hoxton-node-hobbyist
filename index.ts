import express from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/users', async (req, res) => {
   const users = await prisma.user.findMany({
      include: { hobbies: { select:{ id:true,hobby: true } } },
   });
   res.send(users);
});
app.get('/users/:id', async (req, res) => {
   const user = await prisma.user.findFirst({
      where: { id: +req.params.id },
      include: { hobbies: { select:{ id:true,hobby: true } } },
   });
   res.send(user);
});

app.get('/hobbies', async (req, res) => {
   const hobbies = await prisma.hobby.findMany({
      include: { users: { select:{ id:true,user: true } } },
   });
   res.send(hobbies);
});

app.get('/hobbies/:id', async (req, res) => {
   const hobby = await prisma.hobby.findFirst({
      where: { id: +req.params.id },
      include: { users: { select:{ id:true,user: true } } },
   });
   res.send(hobby);
});

app.post('/users', async (req, res) => {
   const { fullName, photo, email } = req.body;

   res.send(await prisma.user.create({ data: { fullName, photo, email } }));
});

app.post('/hobbies', async (req, res) => {
   const { fullName, photo, email } = req.body;

   res.send(await prisma.user.create({ data: { fullName, photo, email } }));
});

app.listen(3009, () => {
   console.log(`Server started at http://localhost:3009`);
});
