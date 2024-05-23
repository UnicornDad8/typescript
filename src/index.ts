// The "keyof" operator
interface Product {
  name: string;
  price: number;
}

// if T is Product, keyof T is:
// T => "name" | "price"
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();

store.add({ name: "apple", price: 1 });

console.log(store.find("name", "apple"));
console.log(store.find("price", 1));

// uncomment below to see the typescript error
// console.log(store.find("nonExistingProperty", 1));
