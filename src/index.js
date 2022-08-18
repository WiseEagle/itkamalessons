import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Vetal'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Mushket'},
    {id: 5, name: 'Muskin'},
    {id: 6, name: 'Nastish'},
    {id: 7, name: 'Nick K.'}
]

let messages = [
    {id: 1, message: "Hi, how your learning"},
    {id: 2, message: "Do you learn?"},
    {id: 3, message: "Ok, nice job!"}
]

let posts = [
    {id: 1, message: "Some mesage 1", likeCount: "3"},
    {id: 2, message: "Some mesage 2", likeCount: "6"},
    {id: 3, message: "Some mesage 3", likeCount: "1"},
    {id: 4, message: "Some mesage 4", likeCount: "0"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
