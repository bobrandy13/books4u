import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import * as React from "react";
import { Component } from "react";

function Books() {
  const books = useRouter();
  return (
    <div>
      <div className="m-4 w-16 space-y-2 rounded bg-gray-600 p-4 shadow">
        <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
      </div>
      <h1>Hello {books.query.books}</h1>;
    </div>
  );
}

export default Books;

export const getServerSideProps: GetServerSideProps = async () => {};
