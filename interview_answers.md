# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
A JWT [JSON Web Token] is a standardized way for securely transfering information between several parties at once by use of a JSON object.

2. What steps can you take in your web apps to keep your data secure?
- Use validated cookies to store API tokens.
- Use JWT with React Router to redirect the component and create a secured route for data.
- JWT tokens DO NOT BELONG IN localStorage. 
- Calls should be made on the server side rather than the client side.
- create tests 

3. Describe how web servers work.
A web server stores the web server software and website's component files such as, html, css, JS files etc. These Web Servers work directly with the client side to update and render data being requested by the client.

-------------REQUEST ----------->>>
Client                           Server
<<<<---------RESPONSE ---------------


4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
- Create -> put, post
- Read -> get
- Update -> put
- Delete -> delete