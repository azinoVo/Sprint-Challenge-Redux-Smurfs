1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

A: Object.assign() is used to create a new object while the array methods: Array.concat(), Array.map(), and Array.filter() are used to create new arrays.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A: The store is the single source of truth because it is where all of the application state is stored and maintained. The store uses reducers that take in an action to change the state using immutable practices.  Actions are created from action creators. They contain a type of action and a payload with information to change the state. The reducer takes that action with the payload and compares that action to a case. If the case matches, the reducer will perform a change on the state which may or may not involve the payload. The state within the store is copied and then altered.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

A: Application state usually refers to the state within the store while component state is the state within individual components. Application state can be made available to every component via redux/connect() while component state usually stays within that component and passed around via props. Application state is great for instances where many components require the same state like a Boolean or array of information. Component state is more specific and usually refers to state involving a form or other input.

4.  What is middleware?

A: Middleware is a piece of software that intercepts the flow of certain processes. We use software to stop actions with certain data/payloads before it reaches the reducers. We usually want to manipulate that data before it is dispatched into the reducers to change the state.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A: Redux-Thunk is a middleware that allows for us to perform asynchronous operations within our action creations before dispatching to our reducers. This allows us to grab data from external API which usually involves an asynchronous process.

6.  Which `react-redux` method links up our `components` with our `redux store`?

A: The connect() method connects our components to the redux store usually located within our reducer.
