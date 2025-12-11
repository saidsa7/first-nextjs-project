import Todo from "../components/todo";
import Link from "next/link";
export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  });
  const data = await response.json();
  // console.log("this is response : ", response);

  // console.log(typeof data);

  const allPosts = data.map((el) => {
    return (
      <Link
        href={`/posts/${el.id}`}
        style={{
          width: "80%",
          marginTop: "25px",
          background: "white",
          borderRadius: "10px",
          color: "black",
          padding: "6px",
        }}
      >
        <h2>{el.title}</h2>
        <p>{el.body}</p>
      </Link>
    );
  });
  return (
    <div>
      <h1>Posts Page</h1>
      <h2
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {allPosts}
      </h2>

      <Todo />
    </div>
  );
}
