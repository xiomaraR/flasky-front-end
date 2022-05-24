# Flasky Front End Live Code

In this livecode, we will be working with state & events in React.  Then we will use the `useEffect` hook to update state from an API and persist state to an API with events.

## Learning Goals

The goals of this live code are to:

- Gain an ability to use State in a React component and pass information to other components via props
- Use the `useEffect` hook to update state after the component first mounts
- Use `axios` to make API calls to update state
- Write controlled form components

## Wave 01: Components and Props

## Wave 02:  Lifting State Up

## Wave 03:  useEffect And Axios

### API EndPoints:

The API is active on Heroku at [`https://ada-flasky.herokuapp.com`](https://ada-flasky.herokuapp.com).

| Verb  | Path  | Body of Request | What it does  |
|---|---|---|---|
| `GET`  | `/dogs`  | None | Retrieves a list of all dogs  |
| `PATCH`  | `/dogs/<dog_id>/add_chip`  | None  | Adds a randomly generated chip string to dog   |
| `POST`  | `/dogs`  | `{ name: dogName, age: dogAge, breed: dogBreed }`  | Creates a new Dog  |
| `DELETE`  | `/dogs/<dog_id>`  | None  | Deletes a dog |

### Make Axios requests in `App.js`

We will:

- use the `useEffect` hook to make an API call to get the list of tasks initially.
- update the callback functions to allow us to delete or update tasks.

## Wave 04: Adding a Form

In this lesson we will add a new component to our App.  `DogForm`.  In this component users will be able to add a new dog, persisting the data to the API.
