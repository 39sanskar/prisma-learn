import express from "express";
import { prisma } from "./db";

const app = express();
app.use(express.json());

app.get("/users", async (_, res) => {
  const users = await prisma.user.findMany({
    where: { 
      nationality: {
        in: ["Indian", "American", "Pakistani"],
      },
    },
  });
  res.json(users);
});


app.put("/users", async(_, res) => {
  const updatedUser = await prisma.user.update({
    where: { email: "aman@example.com" },
    data: {
      age: 22,
      isMarried: true, 
    },
  });
  res.json(updatedUser);
});

app.delete("/users", async (_, res) => {
  const deletedUsers = await prisma.user.deleteMany({
    where: { age: { gt: 33 }}
  });
  res.json(deletedUsers);
});

app.listen(4000, () => {
  console.log(`Server running on port 4000`)
})

