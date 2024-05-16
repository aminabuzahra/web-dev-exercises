// 2. Select Selecting a Specific List Item:
const myLi = document.querySelector("li.start-here");

// 3. Changing Text Content:
myLi.textContent = "main title";

// 4. Adding a new Subtitle:
const myLiNextSibling = myLi.nextElementSibling;
const myUl = myLiNextSibling.firstElementChild;
const newSubTitle = document.createElement("li");
const subTitleText = document.createTextNode("sub title 4");
newSubTitle.appendChild(subTitleText);
myUl.appendChild(newSubTitle);

// 5. Removing the Last Title:
var myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();

// 6. Updating the Document's Title:
const head = document.head;
const title = head.querySelector("title");
title.textContent = "DOM Master";

// 7. Updating Paragraph Content:
const myLiParent = myLi.parentElement;
const div = myLiParent.nextElementSibling;
const p = div.firstElementChild;
p.textContent = "Now I know how to traverse the DOM :D";
