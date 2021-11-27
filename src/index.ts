import * as url from 'url';

console.log(url.fileURLToPath(import.meta.url));

const greet = (): void => {
  console.log('Hello world');
};

greet();
