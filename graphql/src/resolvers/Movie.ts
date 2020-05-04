function cast(parent: any, args: any, context: any) {
  return context.prisma.movies.findOne({ where: {mid: parent.mid}}).cast();
}

function reviews(parent: any, args: any, context: any) {
  return context.prisma.movies.findOne({ where: {mid: parent.mid}}).reviews();
}

const Movie = {
  cast,
  reviews
}

export default Movie;