import "./App.css";
import { useQuery } from "@tanstack/react-query";
function App() {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return fetch("https://dummyjson.com/products").then((res) => res.json());
    },
  });
  if (isLoading) {
    return <div> loading...</div>;
  }
  if (isError) {
    return <div>Error:{JSON.stringify(error)}</div>;
  }

  return (
    <>
      {data.products.map((p) => (
        <div key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
