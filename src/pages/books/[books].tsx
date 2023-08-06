import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { Component } from "react";

function Books({ data }) {
  const books = useRouter();
  console.log(data);
  return (
    <div>
      <div className="m-4 w-16 space-y-2 rounded bg-gray-600 p-4 shadow">
        <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
      </div>
      <h1>Hello {books.query.books}</h1>
      <Image alt="product image" src={data.imageLinks.smallThumbnail} />
      {data.id}
    </div>
  );
}

export default Books;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${query.books}`
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
};
