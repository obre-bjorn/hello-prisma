const {PrismaClient} = require(`@prisma/client`)



const prisma = new PrismaClient()
    

async function main(){

    const newUser = await prisma.user.create({
            data: {
                name: 'Alice',
                email:'alice@gmail.com'
            },
    })


    const allUsers = await prisma.user.findMany()

    const getAuthor = await prisma.user.findUnique({
        where: {
            id: "20",
        },
        include: {
            posts: true, // All posts where authorId == 20
        },
});
    console.log(allUsers)
}

main()