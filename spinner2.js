let outPuts = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r/   ', '\r-   ', '\r|   '];
const j = 500;

for (let i = 0; i < outPuts.length; i++) {
  setTimeout(() => {
    process.stdout.write(outPuts[i]);
  }, i * j);
}