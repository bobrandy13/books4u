import React, { useState } from "react";
import { Input } from "@/components/ui/input";
// import fetchData from "~/utils/goodreads";
import { api } from "~/utils/api";

export default function Home() {
  // const books = api.books.listBooks.useQuery("potato");
  const [bookName, setBookName] = useState("atomic habits");
  const { data, refetch } = api.books.listBooks.useQuery(bookName, {
    enabled: true,
  });
  const onChange = (e: React.ChangeEvent) => {
    setBookName(e.target.value);
    void refetch();
    console.log(data);
    console.log(e);
  };

  return (
    <div className="min-w-screen grid min-h-screen grid-cols-4 bg-white">
      <div className="min-w-md flex h-full w-full justify-center bg-slate-200">
        <Input
          type="text"
          placeholder="Search books. "
          className="m-4 w-72 rounded p-4"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="col-span-3 bg-slate-400"></div>
      {data}
    </div>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
