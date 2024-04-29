interface ISquare {
  a: number
  b?: number
}

const square: Required<ISquare> = {
  a: 10,
  b: 20,
}

const readonlySquare: Readonly<ISquare> = {
  a: 15,
}

// readonlySquare.a = 20;

const squareWithOtherSides: Record<'a' | 'b', number> = {
  a: 20,
  b: 50,
}
