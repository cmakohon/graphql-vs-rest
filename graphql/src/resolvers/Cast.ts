function actor(parent: any, args: any, context: any) {
  //NOTE: There is currently an issue with Prisma that sometimes
  //errors out when resolving a lot of actors on Cast.  You will
  //need to restart your server if you encounter this error.
  return context.prisma.actors.findOne({ where: {aid: parent.aid}});
}

function movie(parent: any, args: any, context: any) {
  return context.prisma.movies.findOne({ where: {mid: parent.mid}});
}

const Cast = {
  actor,
  movie,
};

export default Cast;
