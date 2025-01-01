import logo from './logo.svg';
import './App.css';

const onNaverLogin = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/naver";
}

const onGoogleLogin = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/google";
}

const getData = () => {
  
  fetch("http://localhost:8080/my", { 
    method: "GET",
    credentials: 'include'
  })
  .then((res) => res.text())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error("ERROR")
    console.error(error)
  });
}

function App() {
  return (
    <div className="App">
        <button onClick={onNaverLogin}>LAVER LOGIN</button>
        <button onClick={onGoogleLogin}>GOOGLE LOGIN</button>

        <button onClick={getData}>GET DATA</button>
    </div>
  );
}

export default App;
