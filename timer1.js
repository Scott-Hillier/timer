const array = process.argv.slice(2);

for (element of array) {
  element *= 1000;
  if (element >= 0) {
  setTimeout(() => {process.stdout.write('\x07')}, element);
  }
};
