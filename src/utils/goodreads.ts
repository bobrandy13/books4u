// this is the backend api that fetches data. 
export default async function fetchData() {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=dune&max_results=5"
  );
  const movies = await response.json();
  console.log(movies);
}

void fetchData();
