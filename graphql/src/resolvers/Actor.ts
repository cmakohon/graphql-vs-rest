function cast(parent: any, args: any, context: any) {
  return context.prisma.actors.findOne({ where: {aid: parent.aid}}).cast();
}

const Actor = {
  cast
}

export default Actor;