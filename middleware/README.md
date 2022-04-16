# Middleware
Middleware sits in between request and response.      
Middleware is a function that has access to the `request`, `response` and `next` function. `next` is a function
in the Express router which, when invoked, executes the middleware succeeding the current middleware.  
`req => middleware => res`  

If we want to use same middleware for all the routes, we can achieve it by using app.use() function. 
We have to pass middleware function to this app.use() function and it will apply this middleware to all 
the routes declared after the app.use() is written.  

# Multiple middlewares
Multiple middleware executes in order they passed to the array in `app.use()`
```
app.user([authorize, logger])
```

Note:  
If we have a middleware for authorization, this `authorize` middleware should execute before the request processes.
