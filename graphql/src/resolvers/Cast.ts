function actor(parent: any, args: any, context: any) {
  return context.prisma.cast
    .findOne({
      where: {
        mid_billing_aid: {
          mid: parent.mid,
          billing: parent.billing,
          aid: parent.aid,
        },
      },
    })
    .actor();
}

function movie(parent: any, args: any, context: any) {
  return context.prisma.cast
    .findOne({
      where: {
        mid_billing_aid: {
          mid: parent.mid,
          billing: parent.billing,
          aid: parent.aid,
        },
      },
    })
    .movie();
}

const Cast = {
  actor,
  movie,
};

export default Cast;
