// Throws SyntaxError

export function logger(target, key, descriptor) {
  console.log(`Logging ${key} function`);
  return descriptor
}

class Example {
  @logger
  greet() {
    console.log('Hello, world');
  }
}

const example = new Example();
example.greet();