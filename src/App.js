import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwOGNlNTZlNy00YmY0LTQ4ZTktOGRkMi05ZDk4ODdkMjMzOGIiLCJleHAiOjE1ODgxMTkzMzEsImlzcyI6ImNvbmVjdGFyLnJ1IiwiYXVkIjpbImNvbmVjdGFyLnJ1Iiwic3RhZ2luZy5jb25lY3Rhci5ydSIsInBheS5jb25lY3Rhci5ydSIsImNsYXNzcm9vbS1hcGkuY29uZWN0YXIucnUiXSwiY2xpZW50SWQiOiJjb25lY3Rhci5ydSIsImRldmVsb3BlcklkIjoibWF5b3dhIn0.zaeE6wja0j3xfZhZ7ONKqgGsvWfbuwIa8yQQK85gOWc`;

  axios.get(
    'http://localhost:8080/api/v1/wallets/08ce56e7-4bf4-48e9-8dd2-9d9887d2338b'
  ).then(resp => console.log(resp));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
