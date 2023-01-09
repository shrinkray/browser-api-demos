const card = document.querySelector('.card');

const heading = document.createElement('h2');
heading.innerText = 'Greg is cool';
heading.setAttribute('class', 'card__heading');
card.appendChild(heading);

/**
 * ? Inner Text and Inner HTML
 * ? Inner Text -> Only text
 * ? Inner HTML -> HTML as a string (sanitize it)
 * 
 *  Inner html requires reparsing of text, much slower
 *  If making new elements, use createElement()
 *  If maniputlating text use innerText
 */

// Append vs Append Child
card.append(heading, 'hello ', 'world');
/**
 * ? Append -> Nodes, string, does not return anything, multiple arguments
 * ? Append Child -> Nodes, returns node, only one argument
 */

// card.remove()
/**
 * Remove -> Removes node from DOM
 * Remove Child -> Removes a child node from DOM
 */

 card.removeChild(heading)

 const wrapper = document.createElement("ul");
 let fam = ["Greg", "Jennie", "Cody", "Bearta", "Bearta Jr"];

 fam.forEach(member => {
  const li = document.createElement("li");
  li.innerText = member;
  wrapper.appendChild(li);
 });
 card.appendChild(wrapper);