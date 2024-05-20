function reject(message: string): never {
  throw new Error(message);
}

// The never type
function processEvents(): never {
  while (true) {
    // Read message from a queue
  }
}

// processEvents();
reject("...");

// this line is unreachable because the process never return
// because there is a while infinite loop
console.log("hello world");
