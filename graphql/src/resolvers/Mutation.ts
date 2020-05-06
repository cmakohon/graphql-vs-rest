async function addReview(parent: any, args: any, context: any) {
  const review = await context.prisma.reviews.create({
    data: {
      text: args.text,
      movie: {
        connect: {
          mid: +args.mid
        }
      }
    }
  })
  return review;
}

async function updateReview(parent: any, args: any, context: any) {
  const review = await context.prisma.reviews.update({
    where: {
      id: +args.rid
    },
    data: {
      text: args.text
    }
  })
  return review;
}

const Mutation = {
  addReview,
  updateReview
};

export default Mutation;
