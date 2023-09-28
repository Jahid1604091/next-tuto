

export default async function getUserPosts(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`,{cache:'force-cache'});
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch post");
    }
  
    return res.json();
  }
  