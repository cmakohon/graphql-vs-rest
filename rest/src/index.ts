import * as bodyParser from 'body-parser'
import express from 'express'
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(bodyParser.json())

app.get('/movies', async (req: any, res: any) => {
  const movies = await prisma.movies.findMany();
  res.json(movies);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))