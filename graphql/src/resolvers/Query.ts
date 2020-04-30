function movies(root: any, args: any, context: any) {
  return context.prisma.movies.findMany({first: 200});
}

function actors(root: any, args: any, context: any) {
  return context.prisma.actors.findMany({first: 200});
}

function cast(root: any, args: any, context: any) {
  return context.prisma.cast.findMany({first: 200});
}

const Query = {
  movies,
  actors,
  cast
};

export default Query;
