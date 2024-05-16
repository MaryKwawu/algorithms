// for(let i = 0; i < 5; i++){
//     let stars  = "";
//     for (let j = 1; j <= i + 1; j++){
//         stars += "* ";
//     }
//     console.log(`\t j= ${j}, j <= i + 1 = ${i+1} = ${j <= i + 1}`);
// }

// function stars() {
//   let pattern = "";
//   for (let i = 0; i < 5; i++) {
//     for (let j = 1; j <= i + 1; j++) {
//       pattern += "* ";
//     }
//     pattern += "\n\n";
//   }
//   console.log(pattern);
// }

// stars();

//

//*
//**
//***

//current nn
// let stars = ""; // "*****\n"
//  for(let i = 5; i > 0; i--){

//      for (let j = 1; j <= i; j++){
//           stars = stars + "*";
//     }
//      stars += '\n';
//   }
//   console.log(stars)

//1 <= 5 = true

// let stars = ""; // "*****\n"
// for(let i = 0; i < 5; i++){
//         let stars  = "";
//         for (let j = 1; j <= i + 1; j++){
//             stars += "* ";
//         }
//     }
// console.log(star)

// console.log("\n")

//  for(let i = 5; i > 0; i--){

//      for (let j = 1; j <= i; j++){
//           stars = stars + "*";
//     }
//      stars += '\n';
//   }
//   console.log(stars)

// i = 0
// stars = "* \n ****"
// j = 2
// for (let i = 0; i < 5; i++) {
//   let stars = "";
//   for (let j = 1; j <= i + 1; j++) {
//     stars += "* ";
//   }
//   stars += "\n";

//   // i = 5
//   // j = 2
//   for (let i = 5; i > 0; i--) {
//     for (let j = 1; j <= i; j++) {
//       stars = stars + "*";
//     }
//     stars += "\n";vadd to the
//   }
//   console.log(stars);
// }

// function complete() {
//   let top = "";
//   for (let i = 0; i < 5; i++) {
//     for (let j = 1; j <= i + 1; j++) {
//       top += "*";
//     }
//     top += "\n\n";
//   }

//   let bottom = "";
//   for (let i = 4; i > 0; i--) {
//     for (let j = 1; j <= i; j++) {
//       bottom = bottom + "*";
//     }
//     bottom += "\n\n";
//   }
//   console.log(top + bottom);
// }
// complete();

// let top = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 1; j <= i + 1; j++) {
//     top += "*";
//   }
//   top += "\n\n";
// }

// let bottom = "";
// for (let i = 4; i > 0; i--) {
//   for (let j = 1; j <= i; j++) {
//     bottom = bottom + "*";
//   }
//   bottom += "\n\n";
// }

// let complete = top + bottom;
// console.log(complete);

// function pattern() {
//   let square = "";
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 7; j++) {
//       square += "* ";
//     }
//     square += "\n";
//   }

//   console.log(square);
// }
// pattern();

// ********
// *      *
// *      *
// ********
//
//

//loop through the columns

// Function to print stars
// function duplicate_stars_n_times(times: number): void {
//   let stars = "*";
//   for (let i = 0; i < times; i++) {
//     console.log(stars);
//   }
// }

// // Call the function to print the stars pattern
//print_vertical_lines(3);

// Function to loop through the columns
//function print_vertical_lines(columns: number): void {
// For each column, we print the number of stars
//for (let i = 1; i <= columns; i++) {
// Print the stars
// duplicate_stars_n_times(i);
// }
//}

// // Function to loop through the rows
// function print_horizontal_lines(times) {
//   //for each row, we print the number of stars
//   for (let i = 1; i < times; i++) {
//     console.log(row);
//   }
// }
// // Call the function to print the stars pattern
// print_horizontal_lines(3);

// // Function to loop through the columns
// function print_vertical_lines(columns) {
//   // For each column, we print the number of stars
//   for (let i = 1; i <= columns; i++) {
//     // Print the stars
//     duplicate_stars_n_times(i);
//   }
// }
// // Call the function to print the stars pattern
// print_vertical_lines(3);

// //Function to print stars
// function duplicate_stars_n_times(times) {
//   let stars = "*"; // Initialize stars to a single star
//   for (let i = 0; i < times; i++) {
//     console.log(stars);
//   }
// }

// function print_horizontal_line(row) {
//   /**
//    * For each side length, we print the square pattern.
//    */
//   let stars = ""; //// Initialize an empty string for stars
//   for (let i = 0; i < row; i++) {
//     // Print the stars for each row
//     stars += "* ";
//   }
//   console.log(stars); //// Output the current value of stars
// }

// function print_space_horizontal_line(length) {
//   const spaces = length - 2;

//   let stars = "*";
//   for (let x = 0; x < spaces; x++) {
//     stars += "  ";
//   }
//   stars += " *";
//   console.log(stars);
// }
// print_horizontal_line(10);
// print_space_horizontal_line(10);
// print_space_horizontal_line(10);
// print_space_horizontal_line(10);
// print_space_horizontal_line(10);
// print_space_horizontal_line(10);
// print_horizontal_line(10);

// // function print_horizontal_line() {
// //   //for each length, we print the square pattern
// //   let stars = "";
// //   for
// // }

// function print_pattern(rows) {
//   for (let i = 0; i < rows; i++) {
//     if (i === 0 || i === rows - 1) {
//       // Print horizontal line for the first and last rows
//       let stars = "";
//       for (let j = 0; j < rows; j++) {
//         ``;
//         stars += "* ";
//       }
//       console.log(stars);
//     } else {
//       // Print space horizontal lines for other rows
//       let line = "*";
//       for (let j = 0; j < rows - 2; j++) {
//         line += "  ";
//       }
//       line += " *";
//       console.log(line);
//     }
//   }
// }

// print_pattern(10);

// // Function to print stars
// function duplicate_stars_n_times(times) {
//   let stars = "*";
//   for (let i = 0; i < times; i++) {
//     console.log(stars); //Output the current value of stars
//   }
// }

// function print_horizontal_line(row) {
//   /**
//    * For each side length, we print the square pattern.
//    */
//   let stars = "";
//   for (let i = 0; i < row; i++) {
//     // Print the stars for each row
//     stars += "* ";
//   }
//   console.log(stars);
// }

// function print_space_horizontal_line(length) {
//   const spaces = length - 2; // Calculate the number of spaces needed

//   let stars = "*";
//   for (let x = 0; x < spaces; x++) {
//     stars += "  "; // Append two spaces to the stars string
//   }
//   stars += " *"; // Append a space followed by a star to the stars string
//   console.log(stars);
// }
// print_horizontal_line(10);
// print_space_horizontal_line(10);
// print_space_horizontal_line(10);
// print_space_horizontal_line(10);
// print_space_horizontal_line(10);
// print_space_horizontal_line(10);
// print_horizontal_line(10);

// // Function to print stars
// function duplicate_stars_n_times(times) {
//   let stars = "*";
//   for (let i = 0; i < times; i++) {
//     console.log(stars); //Output the current value of stars
//   }
// }

// function print_horizontal_line(length) {
//   /**
//    * For each side length, we print the square pattern.
//    */
//   let stars = "";
//   for (let i = 0; i < length; i++) {
//     // Print the stars for each length
//     stars += "* ";
//   }
//   console.log(stars);
// }
// function print_space_horizontal_line(length) {
//   const spaces = length - 2; // Calculate the number of spaces needed

//   let stars = "*";
//   for (let x = 0; x < spaces; x++) {
//     stars += "  "; // Append two spaces to the stars string
//   }
//   stars += " *"; // Append a space followed by a star to the stars string
//   console.log(stars);
// }

//function print_line(length) {
//     print_horizontal_line(length);
//     for (let i = 0; i < length - 2; i++) {
//       print_space_horizontal_line(length);
//     }
//     print_horizontal_line(length);
//   }

//   print_line(10);
