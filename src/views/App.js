import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
/**
 * 2.component: class component / function component (function, arrow function)
 * JSX
 */


function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! Cùng tôi học react!
        </p>

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
