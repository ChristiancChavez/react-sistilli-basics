
import './App.css';
import { Counter } from './Counter';
import { Employee } from './Employee.tsx';

function App() {
  const employees = [
    {firstName:'Christian'},
    {firstName:'Camilo'},
    {firstName:'Chris'},
  ];
  
  const renderingEmployees = () => {
    employees.map((employee, index) => {
      return (
        <Employee {...employee} key={`${employee.firstANme} ${index}`} />
      )
    })
  }

  return (
    <div className="App">
      <Counter />
      {renderingEmployees}
    </div>
  );
}

export default App;
