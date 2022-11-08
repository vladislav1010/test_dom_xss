import prisma from "../../lib/prisma";
import CreateUser from "./create-user";

async function getUsers() {
  return prisma.user.findMany();
}

export default async function Page() {
  const users = await getUsers();

  return (
    <div>
      {users.map((u) => (
        <div key={u.id} dangerouslySetInnerHTML={{ __html: u.email }} />
      ))}
      <CreateUser />
    </div>
  );
}
