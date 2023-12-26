import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent'; //default epxort
import {sayBye,sayHi} from './components/MyComponent'; //named export
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Products from './components/Products';
import Form from './components/Form';
import Multipleinputform from './components/Multipleinputform';

function App() {
  return (
    <div className="App">
   {/* <MyComponent />
   <UserProfile name ='Manohar' age='26' company='Capgemini'/> */}
   {/* <Counter /> */}
   {/* <Products /> */}
   <Form />
   {/* <Multipleinputform /> */}
    </div>
  );
}

export default App;
