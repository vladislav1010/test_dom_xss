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

// https://portswigger.net/web-security/cross-site-scripting/stored#:~:text=To%20comprehensively%20identify%20links%20between%20entry%20and%20exit%20points%20would%20involve%20testing%20each%20permutation%20separately%2C%20submitting%20a%20specific%20value%20into%20the%20entry%20point%2C%20navigating%20directly%20to%20the%20exit%20point%2C%20and%20determining%20whether%20the%20value%20appears%20there.

// https://portswigger.net/web-security/cross-site-scripting/stored#:~:text=Instead%2C%20a%20more%20realistic%20approach%20is%20to%20work%20systematically%20through%20the%20data%20entry%20points%2C%20submitting%20a%20specific%20value%20into%20each%20one%2C%20and%20monitoring%20the%20application%27s%20responses%20to%20detect%20cases%20where%20the%20submitted%20value%20appears.%20Particular%20attention%20can%20be%20paid%20to%20relevant%20application%20functions
