import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
// import fetchData from "~/utils/goodreads";
import { api } from "~/utils/api";
import useDebounceValue from "~/utils/useDebounceValue";
import * as Collapsible from "@radix-ui/react-collapsible";

interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: [];
    description: string;
  };
}
interface IResponseData {
  items: [individualItem: IBook[]];
}

function SideBar() {
  const [bookName, setBookName] = useState("atomic habits");
  const [bookData, setBookData] = useState<IResponseData | []>();
  const [isOK, setOK] = useState(false);

  const debounceQuery = useDebounceValue(bookName);
  const { data, refetch } = api.books.listBooks.useQuery(bookName, {
    enabled: false,
  });
  // const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {};

  useEffect(() => {
    void (async () => {
      if (!debounceQuery) {
        setBookData([]);
        return;
      }
      console.log(debounceQuery);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${debounceQuery}&max_results=5`
      );
      const data: IResponseData | undefined = await response.json();
      setBookData(data);
      setOK(true);
      console.log(data);
    })();
  }, [debounceQuery]);
  return (
    <div className="min-w-screen grid min-h-screen grid-cols-3 bg-white">
      <div className="min-w-md h-full w-full bg-slate-200 p-10">
        <Input
          type="text"
          placeholder="Search books. "
          className="m-4 w-72 rounded p-4"
          onChange={(e) => {
            setBookName(e.target.value);
            onChange(e);
          }}
          value={bookName}
        />
        {isOK &&
          bookData?.items?.map((value: IBook, index) => {
            console.log(value.volumeInfo.title);
            return (
              <div
                key={index}
                className="m-2 h-40 w-full rounded bg-slate-100 p-4"
              >
                <h1 className="font-bold">{value.volumeInfo.title}</h1>
                <p>{value.volumeInfo.subtitle}</p>
                <button
                  type="button"
                  className="float-right m-2 mb-2 mr-2 rounded bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to Reading List
                </button>
              </div>
            );
          })}
      </div>
      <div className=""></div>
    </div>
  );
}

export default SideBar;
