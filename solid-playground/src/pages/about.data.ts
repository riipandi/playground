import { createResource } from "solid-js";

function wait<T>(ms: number, data: T): Promise<T> {
  return new Promise((resolve) => setTimeout(resolve, ms, data));
}

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fetchName(): Promise<string> {
  return wait(random(500, 1000), "Solid");
}

// FIXME
function AboutData({ params, location }: any) {
  const [data] = createResource(fetchName);

  console.log("PRELOADED - PARAMS", params);
  console.log("PRELOADED - LOCATION", location);

  return data;
}

export default AboutData;
