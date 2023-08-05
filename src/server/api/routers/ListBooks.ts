// import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

export const ListBooks = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  listBooks: publicProcedure.input(z.string()).query(({ input, ctx }) => {
    console.log("hello world, function called. ");
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=dune&max_results=5"
    );
    return input;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
