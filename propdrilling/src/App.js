import logo from './logo.svg';
import './App.css';
import Family from './components/Family';
import FamilyContext from './components/context/FamilyContext';
import { Context } from './components/context/Context';
import Reference from './components/Reference';
import Form from './components/Form';
import Memo1 from './components/Memo1';

function App() {
  const familyDetails = {
    "name" : "Family Name",
    funcForParent:() =>{
        return "This is function for parent"
    },
    funcForGrandChildren : () =>{
        return "This is a function for grand children"
    }
}
  return (
    <div className="App">
      {/* <Context.Provider value={familyDetails}>
        <FamilyContext />
      </Context.Provider> */}
      {/* <Reference /> */}
      {/* <Form /> */}
      <Memo1 />
    </div>
  );
}

export default App;
