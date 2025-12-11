export const metadata = {
  title: "Articles Page",
};
export default async function ({ children }) {
  return (
    <div>
      <h1>Articles layout </h1>
      <div
        style={{
          marginTop: "50px",
          background: "blue",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
