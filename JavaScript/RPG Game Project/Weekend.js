function accum(s) {
  // Split the string into characters
  const characters = s.split("");

  // Process each character
  const result = characters.map((char, index) => {
    // Repeat character 'index + 1' times, capitalize the first character, lowercase the rest
    return char.toUpperCase() + char.toLowerCase().repeat(index);
  });

  // Join the processed characters with a hyphen
  return result.join("-");
}

// Example usage:
console.log(accum("abcd")); // Output: "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // Output: "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // Output: "C-Ww-Aaa-Tttt"
