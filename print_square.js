function print_horizontal_line(length) {
  /**
   * For each side length, we print the square pattern.
   */
  let stars = "";
  for (let i = 0; i < length; i++) {
    // Print the stars for each length
    stars += "* ";
  }
  console.log(stars);
}
function print_space_horizontal_line(length) {
  const spaces = length - 2; // Calculate the number of spaces needed

  let stars = "*";
  for (let x = 0; x < spaces; x++) {
    stars += "  "; // Append two spaces to the stars string
  }
  stars += " *"; // Append a space followed by a star to the stars string
  console.log(stars);
}

function print_line(length) {
  print_horizontal_line(length);
  for (let i = 0; i < length - 2; i++) {
    print_space_horizontal_line(length);
  }
  print_horizontal_line(length);
}

print_line(10);
