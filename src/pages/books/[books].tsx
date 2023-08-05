import { useRouter } from "next/router";
import * as React from "react";
import { Component } from "react";

function Books() {
  const books = useRouter();
  return <h1>Hello {books.query.books}</h1>;
}

export default Books;
