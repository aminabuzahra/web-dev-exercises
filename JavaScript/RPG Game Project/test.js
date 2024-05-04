function countEveryCharInString(string) {
  const charCountsObject = {};
  const lowerString = string.toLowerCase();
  for (let i = 0; i < lowerString.length; i++) {
    let char = lowerString[i];
    if (char !== " ") {
      charCountsObject[char] =
        charCountsObject[char] === undefined ? 1 : charCountsObject[char] + 1;
    }
  }
  return charCountsObject;
}

console.log(countEveryCharInString("Hello World!"));
