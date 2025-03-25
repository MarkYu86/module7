import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  var cors_api_url = 'http://localhost:8080/https://fakestoreapi.com/products';

  function doCORSRequest(options, printResult) {
    var x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function() {
      printResult(
        options.method + ' ' + options.url + '\n' +
        x.status + ' ' + x.statusText + '\n\n' +
        (x.responseText || '')
      );
    };
    if (/^POST/i.test(options.method)) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    x.send(options.data);
  }

  useEffect(() => {
    var urlField = document.getElementById('url');
    var dataField = document.getElementById('data');
    var outputField = document.getElementById('output');
    document.getElementById('get').onclick =
    document.getElementById('post').onclick = function(e) {
      e.preventDefault();
      doCORSRequest({
        method: this.id === 'post' ? 'POST' : 'GET',
        url: urlField.value,
        data: dataField.value
      }, function printResult(result) {
        outputField.value = result;
      });
    };

    if (typeof console === 'object') {
      console.log('// To test a local CORS Anywhere server, set cors_api_url. For example:');
      console.log('cors_api_url = "http://localhost:8080/"');
    }
  }, []);

  return (
    <>
      <div id="top">
        CORS Anywhere demo &bull; <a href="https://github.com/Rob--W/cors-anywhere/">Github</a> &bull; <a href="http://cors-anywhere.herokuapp.com">Live server</a>.
        <label>
          Url to be fetched (example: <a href="//robwu.nl/dump.php">robwu.nl/dump.php</a>)        </label>
          <input type="url" id="url" value=""/>

        <label>
          If using POST, enter the data:         </label>
          <input type="text" id="data"/>
        <label>
          <button id="get">GET</button><button id="post">POST</button>
        </label>
      </div>
      <div id="bottom">
        <textarea id="output"></textarea>
      </div>
    </>
  )
}

export default App