//Put these into Chrome console to test

//Basic GET request
{
  fetch("http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages")
  .then(response=>response.json()) //getting response from fetch() and using json method to turn it into JSON
  .then(json=>console.log(json)); //passing in JSON to be handled by this function
}
//"response.json()" is an example of a mixin
//FETCH API includes mixins that transform body of a request or response
//response.json() gives programmer body parsed as json
//More mixins available here (under methods section): https://developer.mozilla.org/en-US/docs/Web/API/Body




//Basic GET request with OAuth2 authentication:
//You'll get a 401 (Unauthorized) response without the token
{
  const token = 'YOUR_TOKEN_HERE'
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}




//Basic POST request:
const postData = {
  "real_name": "Matt",
  "message": "Testing"
};

fetch('http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages', {
  method: 'POST',
  headers: {
       "Content-type": "application/json"
     },
  body: JSON.stringify(postData),
}).then(res => console.log(res));






var url = "http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages"
var body = {
  "real_name": "Matt",
  "message":"test test test test"
}

function createMessage(url,body) {
   const postConfig = {
     Accept: "application/json",
     method: "POST",
     headers: {
       "Content-type": "application/json"
     },
     body: JSON.stringify(body)
   };
   return fetch(url, body)
 }

 createMessage(url, body);


{
    fetch("http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages", {
      method: "POST",
      body: JSON.stringify({
        real_name: "Matt",
        message: "Test test test test"
      })
    });
}


fetch('https://davidwalsh.name/submit-json', {
	method: 'post',
	body: JSON.stringify({
		email: "email@email.com",
		answer: "answer here"
	})
});




let myPost = {
  real_name: "Matt",
  message: "test test test test"
}

fetch("http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages", {
  method: 'POST',
  body: JSON.stringify(myPost)
  })
  .then(function(response) {
    return response.json()
  })
  .then(function(data){
    console.log("post request response data", data)
  })
