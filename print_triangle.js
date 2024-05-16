function printTriangle(height) {
  let triangle = "";
  for (let i = 1; i <= height; i++) {
    // Add spaces before each row
    for (let j = 1; j <= height - i; j++) {
      triangle += " ";
    }
    // Add '*' for the current row
    for (let k = 1; k <= 2 * i - 1; k++) {
      triangle += "*";
    }
    // Add a new line after each row
    triangle += "\n";
  }
  console.log(triangle);
}

// Call the function with the desired height of the triangle
printTriangle(3); // Change the height as needed
