// const form = document.querySelector('#form');
const button = document.querySelector('#btn');


document.addEventListener('DOMContentLoaded', () => {
  // const title = document.createElement('h1');
  // title.innerText = 'Chatroom';
  // document.querySelector('body').appendChild(title);
  // create a const to reference messages UL
  const unorderedList = document.querySelector('ul');
  const body = document.querySelector("body");
  body.scrollTop = body.scrollHeight;
  // make AJAX call here....

  // use fetch Api to make get request of chat json
  // https://curriculum-api.codesmith.io/messages
  
  fetch('https://curriculum-api.codesmith.io/messages')
    .then(data => data.json())
    .then(data => {
      // console.log(data)
      // iterate over data in reverse
      // for each item in data
      for (let i = 10; i >= 0; i--) {
        // create a new li each iteration of the loop
        const listItem = document.createElement('li');
        const userName = document.createElement('h5');
        const message = document.createElement('p');
        userName.classList.add('subtitle');
        userName.innerText = data[i].created_by;
        message.innerText = data[i].message;
        
        listItem.appendChild(userName);
        listItem.appendChild(message);
        // console.log(userName, message);
        unorderedList.appendChild(listItem);
      }
    });
});

// create an event listener that listens for submission of form
button.addEventListener('click', (e) => {
  e.preventDefault();
  // access text field from dom
  const input = document.querySelector('#input');
  // create a const to store input value from text input
  const values = input.value;
  console.log(values);
  // use date object to create timestamp and store to new variable
  const newDate = new Date().toDateString();
  // create object with properties of created_at, created_by, message
  const data = {
    message: values,
    created_at: newDate,
    created_by: 'follow me @rauburnin'
  }
  // clear text field

  fetch('https://curriculum-api.codesmith.io/messages', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': 'https://curriculum-api.codesmith.io/messages'
    }
  })
    .then(data => data.json())
    .then(data => {
      console.log(data)
    });
})