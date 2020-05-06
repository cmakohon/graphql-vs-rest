function movie(parent: any, args: any, context: any) {
  return context.prisma.movies.findOne({ where: {mid: parent.mid}});
}

const Review = {
  movie
}

export default Review;