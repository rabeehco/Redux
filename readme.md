# Things We Have Done Here
- Create a Redux store with configureStore
  - `configureStore` accepts a `reducer` function as a named argument
  - `configureStore` automatically sets up the store with good default settings
- Provide the Redux store to the React application components
  - Put a React Redux `<Provider>` component around your `<App />`
  - Pass the Redux store as `<Provider store={store}>`
- Create a Redux "slice" reducer with `createSlice`
  - Call `createSlice` with a string name, an initial state, and named reducer functions
  - Reducer functions may "mutate" the state using Immer
  - Export the generated slice reducer and action creators
- Use the React Redux `useSelector/useDispatch` hooks in React components
  - Read data from the store with the `useSelector` hook
  - Get the `dispatch` function with the `useDispatch` hook, and dispatch actions as needed
</br>
Here are the main parts of React Redux:

##### Store: 
The store is a JavaScript object that holds the application state. It is created using the createStore() function provided by the Redux library. The store is the single source of truth for the entire application state, and all state changes must go through the store.

##### Actions:
Actions are plain JavaScript objects that describe the changes that need to be made to the application state. They typically have a type property that describes the action type, as well as any additional data needed to make the state change.

##### Reducers: 
Reducers are pure functions that take the current state and an action as input, and return a new state object that reflects the changes described by the action. Reducers are responsible for updating the store's state.

##### Selectors:
Selectors are functions that compute derived data from the application state. They are used to extract specific pieces of state from the store, and can also be used to perform complex calculations based on the state.

##### Middleware:
Middleware are functions that intercept and modify actions before they reach the reducers. They can be used for a variety of purposes, such as logging, asynchronous API calls, and routing.

##### Provider:
The Provider is a higher-order component that allows the Redux store to be passed down to all the components in the application. It is typically used at the top level of the component tree to ensure that all components have access to the store.

These parts work together to enable a predictable and efficient way to manage the state of React applications, allowing developers to create complex and dynamic user interfaces with ease.
