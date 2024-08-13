import { add } from "@scope/backend"

export function subtract(a: number, b: number): number {
  return add(a, b * -1)
}
