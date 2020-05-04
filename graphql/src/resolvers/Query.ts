async function movie(root: any, args: any, context: any) {
  const movie = await context.prisma.movies.findOne({where: { mid: +args.mid }});

  if (!movie) {
    throw new Error(`Movie with ID ${args.mid} not found.`)
  }
  return movie;
}

async function actor(root: any, args: any, context: any) {
  const actor = await context.prisma.actors.findOne({where: { aid: +args.aid }});

  if (!actor) {
    throw new Error(`Actor with ID ${args.aid} not found.`)
  }
  return actor;
}

function movies(root: any, args: any, context: any) {
  return context.prisma.movies.findMany({first: 50});
}

function actors(root: any, args: any, context: any) {
  return context.prisma.actors.findMany({first: 50});
}

function cast(root: any, args: any, context: any) {
  return context.prisma.cast.findMany({first: 50});
}

const Query = {
  movie,
  movies,
  actor,
  actors,
  cast
};

export default Query;
