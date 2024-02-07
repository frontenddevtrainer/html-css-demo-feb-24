function abc(message) {
  return message + " - " + new Date().toISOString();
}

// one argument
const def = (message, message2) =>
  `${message} - ${message2} 
  : ${new Date().toDateString()}
  : ${new Date().toISOString()}`;

console.log(abc("Hello World"));

console.log(def("Hello World", "Hi World!!!"));
