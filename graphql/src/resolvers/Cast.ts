function actor(parent: any, args: any, context: any) {
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
