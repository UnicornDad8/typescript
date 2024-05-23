// Type mapping
interface Product {
  name: string;
  price: number;
}
// Index signature
// keyof
// this way we can make all keys of Product readonly in one go
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: ReadOnly<Product> = {
  name: "Mosh",
  price: 100,
};

// we can't reassign a value to price because is a readonly propperty
// product.price = 5;
