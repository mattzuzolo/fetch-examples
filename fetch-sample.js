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
{
  var url = "https://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages"
  var body = {message:{
    "real_name": "MattZ",
    "message":"test test test test #3"
  }

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
     return fetch(url, postConfig)
   }

   createMessage(url, body);
}



//DELETE request
//Add id of element to delete to URL
{
  let url = "http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages"
  let id = "374"
  let url_with_id = url + "/" + id

  fetch(url_with_id, {
      method: 'delete',
      headers: {
        "Content-type": "application/json"
      }
    });
}
