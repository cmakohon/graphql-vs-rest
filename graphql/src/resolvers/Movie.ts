function cast(parent: any, args: any, context: any) {
  return context.prisma.movies.findOne({ where: {mid: parent.mid}}).cast();
}

const Movie = {
  cast
}

export default Movie;