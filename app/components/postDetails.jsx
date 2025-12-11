export default async function PostDetails({ postId }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );

  const post = await response.json();

  return (
    <div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "80%",
            marginTop: "25px",
            background: "white",
            borderRadius: "10px",
            color: "black",
            padding: "10px",
          }}
        >
          <h2>{post.title}</h2>
          <hr style={{ margin: "4px" }} />
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
}
