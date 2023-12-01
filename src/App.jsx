
import BuildTable from './components/build-table'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const settingsObject = {
    headers: ['Name', 'Age', 'Email'] 
  };

  const data = [
    { Name: 'John', Age: 25, Email: 'john@example.com' },
    { Name: 'Alice', Age: 30, Email: 'alice@example.com' },
    
  ];

  return (
    <div className="container">
      <h1>Table Builder App</h1>
      <BuildTable settings={settingsObject} data={data} />
    </div>
  );
}

export default App;