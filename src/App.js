import { useState } from 'react';
import './App.css';

function App() {

  const [suppliers, setSuppliers] = useState([
    { _id: "s1", company: "Supply Unlimited GmbH", contact: "Humberto", phone: "+4912345"  },
    { _id: "s2", company: "Supply you as we can ltd", contact: "Rob", phone: "+496789"  },
  ])

  const jsxSuppliers = suppliers.map((supplier) => (
    <div key={ supplier._id }>
      <form>
        <div>
          <label>Company: </label><input type="text" name="company" value={ supplier.company } />
          <label>Contact: </label><input type="text" name="contact" value={ supplier.contact } />
        </div>
      </form>
    </div>
  ))

  return (
    <div className="App">
      <header className="App-header">
        <h2>UseState mit Objects</h2>
        { jsxSuppliers }
      </header>
    </div>
  );
}

export default App;
