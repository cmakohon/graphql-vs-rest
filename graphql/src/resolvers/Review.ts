function movie(parent: any, args: any, context: any) {
  return context.prisma.reviews.findOne({ where: {mid: parent.mid}}).movie();
}

const Review = {
  movie
}

export default Review;