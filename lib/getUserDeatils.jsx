

export default async function getUser(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{cache:'force-cache'});
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch user");
    }
  
    return res.json();
  }
  