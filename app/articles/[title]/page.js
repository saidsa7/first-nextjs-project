export default async function ShowArticlePage(props) {
  const title = await props.params;
  // console.log(title);
  return (
    <div>
      <h1>Show Article </h1>
      <h1>{title.title}</h1>
    </div>
  );
}
