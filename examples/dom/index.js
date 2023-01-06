/* In this first task we take on minor DOM manipulations.
  Inspecting html shows it has not changed but the rendered page has. */

const find_me = document.querySelector('#find_me');

// running a console.log() on the variable will show the element and it's children in the console

const find_by_id = document.getElementById('find_me');

const change_me = document.getElementById('change_me');

change_me.innerHTML = 'I have been changed';

const add_html = document.getElementById('add_html');

add_html.innerHTML = "<h3>Added with Javascript</h3>";

// No longer do we need to create an array and then loop through,
// The array is assumed and we can use forEach() to loop through 
// applying innerText to each item in the array.

const find_all = document.querySelectorAll(".change-all");

console.log("find_all", find_all);

find_all.forEach((item, index) => {
  item.innerText = "Added from forEach - " + index;
})