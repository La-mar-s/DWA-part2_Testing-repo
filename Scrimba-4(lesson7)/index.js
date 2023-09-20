// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

const h1Element = document.createElement('h1');
h1Element.textContent = 'Hello Bitches';
h1Element.className = 'header';
const rootElement = document.getElementById('root');
rootElement.appendChild(h1Element);

/* ez'er way(but still more work than line 1)

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

*/