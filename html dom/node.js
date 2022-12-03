// accessing text from 'innerHTML'
// document.getElementById('para').innerHTML = document.getElementById('h1').innerHTML;

document.getElementById('para').firstChild.nodeValue = document.getElementById('h1').firstChild.nodeValue;

document.getElementById('para').innerHTML = document.getElementById('h1').childNodes[0].nodeValue; // nodeValue getting the actual content


document.getElementById('para').innerHTML = document.getElementById('h1').nodeName; // accessing node type


// adding a new element using js

// createdElement
const para = document.createElement('p');

// adding text
const text = document.createTextNode("This is new Paragraph DOM");

// put text inside the Paragraph
para.appendChild(text);


// appending the node in existing node
const existingElement = document.getElementById('myDiv');
existingElement.appendChild(para);
