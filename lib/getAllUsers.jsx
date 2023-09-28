

export default async function getAllUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`,{cache:'force-cache'});
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
