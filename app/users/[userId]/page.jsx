import getUser from "@/lib/getUserDeatils";
import getUserPosts from "@/lib/getUserPosts";
import Link from "next/link";
import React, { Suspense } from "react";
import UserPosts from "./components/UserPosts";

export default async function UserDeatils({ params: { userId } }) {
  const user = getUser(userId);
  const postsData = getUserPosts(userId);
  //   const postsData = await posts;
  //   const data = await user;
  // const [userData,postsData] = await Promise.all([user,posts]); //this will make simultenous call
  const userData = await user;
  return (
    <div>
      <h1 className="text-xl underline">User Details of {userData.username}</h1>
      <div className="p-5">
        <h2>FullName : {userData.name}</h2>
      
        <h2> Email : {userData.email}</h2>

        <Suspense fallback={<div>Loading...</div>}>
          <UserPosts promise={postsData} />
        </Suspense>
      </div>
      <Link href="/users" className="btn bg-black text-white p-2">
        See All
      </Link>
    </div>
  );
}
