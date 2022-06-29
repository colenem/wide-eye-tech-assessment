import 'bootstrap';
/**
 * Primary JS entry.
 */
console.log('Hello World!');

/**
 * Sample fetch.
 */
fetch("https://mockend.com/Wide-Eye-Creative/technical-test-2022/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));