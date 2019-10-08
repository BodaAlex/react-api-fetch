# React Exercise - Boda Alexandru Florin

In this README file I wanted to include what versions and libraries I used to complete the tasks

## Running the project live on a local port

To do this, simply open the terminal and go to the project's folder route

The first thing to do is to install _node modules_. To do so write:

```
npm install
```

The next step is to start a live server on your machine, so in the command line:

```
npm start
```

This will open a local host in your default browser

### React and ReactDOM

Both use version 16.8.6.
If the project wont work, maybe the versions dont match  
To install these open the terminal and use the following comands:

```
npm install --save react@<version>
npm install --save react-dom@<version>
```

## Reflux JS

A simple library for unidirectional dataflow architecture  
To install it, use the following command:

```
npm install reflux
```

### Why Reflux ?

For this project, I needed to _manage state_ and _pass_ it down to components who had to use it.  
So, instead of using props and passing them from component to component, I used Reflux.

### How does it work ?

In Reflux JS, you can create _Stores_ and _Actions_. Stores keep data(our state) and listen to Actions. Actions are called in the component, they send a callback to the store and updates it. Then, the store updates our component. To acces the state, import the store to the desired component, and simply extend _Reflux.Component_ instead of _React.Component_ when creating the class. Our store will add its own state to the component's

### Note

As said above, Reflux is a unidirectional dataflow architecture. What does that mean is you can not break the cycle. For example, you can not update the state directly from o component using setState(). The flow should be: **Action -> Store -> Component -> Action** and so on

## Axios

Axios is a Javascript library used to make HTTP requests from node.js  
I used it to fetch the 20 users data.  
To install it, use the following command:

```
npm install axios
```

To achieve the fetch request, we need to invoke **axios.get()**

### Why Axios ?

The same thing could be acomplished by using _.fetch()_. But the thing is that, when using it, you also need to call the .json() method on the response in order to receive the actual data object

### How does it work ?

When invoking it, we make a request to a server's _end-point_. There are four methods, but for the example, I'm going to mention only **GET**. The GET method(wich was used in the project) sends the request for the data and waits for the server response. There are three states: **pending**, wich can _transition_ to **fulfilled** or **rejected**. The server will return a promise(the eventual completion or failure of the operation)
