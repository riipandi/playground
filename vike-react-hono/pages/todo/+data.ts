// https://vike.dev/data
import { db } from "../../database/db";
import { todoTable } from "../../database/schema";

export type Data = {
  todo: { text: string }[];
};

export default async function data(): Promise<Data> {
  const todo = db.select().from(todoTable).all();

  return { todo };
}
