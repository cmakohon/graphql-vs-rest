import * as bodyParser from "body-parser";
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.get("/movies", async (req: any, res: any) => {
  const movies = await prisma.movies.findMany({ first: 50 });
  res.json(movies);
});

app.get("/movies/:mid", async (req: any, res: any) => {
  const movie = await prisma.movies.findOne({
    where: { mid: +req.params.mid },
  });
  res.json(movie);
});

app.get("/movies/:mid/cast", async (req: any, res: any) => {
  const cast = await prisma.movies.findOne({
    where: { mid: +req.params.mid },
  }).cast({
    include: {
      actor: true
    }
  });
  res.json(cast);
});

app.get("/movies/:mid/reviews", async (req: any, res: any) => {
  const cast = await prisma.movies.findOne({
    where: { mid: +req.params.mid },
  }).reviews();
  res.json(cast);
});

app.post("/movies/:mid/reviews", async (req: any, res: any) => {
  const review = await prisma.reviews.create({
    data: {
      text: req.body.text,
      movie: {
        connect: {
          mid: +req.params.mid
        }
      }
    }
  })
  res.json(review);
});

app.put("/movies/:mid/reviews/:rid", async (req: any, res: any) => {
  const review = await prisma.reviews.update({
    where: {
      id: +req.params.rid
    },
    data: {
      text: req.body.text
    }
  })
  res.json(review);
});

app.get("/actors", async (req: any, res: any) => {
  const actors = await prisma.actors.findMany({ first: 50 });
  res.json(actors);
});

app.get("/actors/:aid", async (req: any, res: any) => {
  const actors = await prisma.actors.findOne({
    where: { aid: +req.params.aid },
  });
  res.json(actors);
});

app.get("/actors/:aid/roles", async (req: any, res: any) => {
  const roles = await prisma.actors
    .findOne({
      where: { aid: +req.params.aid },
    })
    .cast();
  res.json(roles);
});

app.get("/actors/:aid/movies", async (req: any, res: any) => {
  const movies = await prisma.actors
    .findOne({
      where: { aid: +req.params.aid },
    })
    .cast({
      include: {
        movies: true,
      },
    });
  res.json(movies);
});

app.get("/cast", async (req: any, res: any) => {
  const cast = await prisma.cast.findMany({ first: 50 });
  res.json(cast);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
