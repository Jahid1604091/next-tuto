import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata = {
  title: "Users",
};

export default async function Users() {
  const users = getAllUsers();
  const data = await users;
  return (
    <ol>
      {data.map((user) => (
        <li>
          <Link href={`users/${user.id}`} className="text-2xl underline">
            {user.name}
          </Link>{" "}
          - {user.email}
        </li>
      ))}
    </ol>
  );
}
