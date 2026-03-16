// Adding some initial data to our table 

import { prisma } from "./db";

async function seed() {

  // remove existing users
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: [
      {
        name: "Aman",
        email: "aman@example.com",
        age: 23,
        isMarried: false,
        nationality: "Indian",
      },
      {
        name: "Rahul",
        email: "rahul@example.com",
        age: 29,
        isMarried: true,
        nationality: "Indian",
      },
      {
        name: "Ajay",
        email: "ajay@mohammad.com",
        age: 29,
        isMarried: true,
        nationality: "Pakistani",
      },
      {
        name: "Emily",
        email: "emily@example.com",
        age: 27,
        isMarried: false,
        nationality: "American",
      },
      {
        name: "Daniel",
        email: "daniel@example.com",
        age: 34,
        isMarried: true,
        nationality: "British",
      },
      {
        name: "Sofia",
        email: "sofia@example.com",
        age: 25,
        isMarried: false,
        nationality: "Mexican",
      },
      {
        name: "Arjun",
        email: "arjun@example.com",
        age: 31,
        isMarried: true,
        nationality: "Indian",
      },
      {
        name: "Mia",
        email: "mia@example.com",
        age: 24,
        isMarried: false,
        nationality: "Australian",
      },
      {
        name: "Ethan",
        email: "ethan@example.com",
        age: 33,
        isMarried: true,
        nationality: "Canadian",
      },
      {
        name: "Ava",
        email: "ava@example.com",
        age: 26,
        isMarried: false,
        nationality: "French",
      },
      {
        name: "Lucas",
        email: "lucas2@example.com",
        age: 28,
        isMarried: true,
        nationality: "Brazilian",
      },
    ],
    skipDuplicates: true,
  });

  console.log("Database seeded successfully!");
}

seed()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

