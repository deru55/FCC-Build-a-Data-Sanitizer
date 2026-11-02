Build a Data Sanitizer
======================

Install your project dependencies by entering npm i from the build-a-data-sanitizer/ folder in the terminal.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1.  You should create a middleware.js file that exports an inputCleaner middleware function and an inputValidator middleware function.
    
2.  inputCleaner should convert req.body.username to lowercase if it exists, strip HTML tags from req.body.comment if it exists, then call next().
    
3.  inputValidator should call next() if req.body.username is at least 3 characters long. Otherwise, it should redirect to /form?error=Username must be at least 3 characters. without calling next().
    
4.  You should have an HTTP server listening on port 3000.
    
5.  A GET request to / should redirect to /form.
    
6.  A GET request to /form should serve the static HTML form from the public directory.
    
7.  A POST request to /submit should apply inputCleaner then inputValidator as route-level middleware, before a final handler that responds with the sanitised username and comment.
    

**NOTE:** The server must be running for the tests to work.
