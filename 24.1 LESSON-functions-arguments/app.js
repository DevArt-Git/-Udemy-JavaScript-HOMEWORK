function foo(x) {
  console.log(x);
  console.log(arguments);

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

foo(11, "some string", [1, 2, 3])