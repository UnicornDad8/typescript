// Generic Interfaces

// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<Product>("http://mywebsite.com/users");
console.log(result.data?.title);
