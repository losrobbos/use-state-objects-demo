import { useState } from 'react';
import './App.css';

function App() {

  const supplierDefault = {
    company: "",
    contact: "",
    phone: ""
  }

  const [supplierNew, setSupplierNew] = useState( supplierDefault )

  const [suppliers, setSuppliers] = useState([
    { _id: "s1", company: "Supply Unlimited GmbH", contact: "Humberto", phone: "+4912345"  },
    { _id: "s2", company: "Supply you as we can ltd", contact: "Rob", phone: "+496789"  },
  ])

  // add new suppliers
  const addSupplier = (e) => {
    e.preventDefault() // prevent that page is reloaded
    console.log( "New supplier to add:", supplierNew )

    // create copy of OLD entries and merge with NEW entry
    const suppliersNew = [...suppliers, supplierNew] 
    setSuppliers( suppliersNew )
    setSupplierNew({...supplierDefault})
  }

  // update existing supplier
  const updateSupplier = () => {

  }

  // delete existing supplier
  const deleteSupploer = () => {

  }

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
        <div style={{ padding: '10px' }}>
          {/* ADD new supplier form */}
          <form onSubmit={ addSupplier } >
            <label>New Supplier: </label>
            <input type="text" placeholder="Company..." 
              onChange={ (e) => setSupplierNew({ ...supplierNew, company: e.target.value }) } value={ supplierNew.company } />
            <input type="text" placeholder="Contact..."  
              onChange={ (e) => setSupplierNew({ ...supplierNew, contact: e.target.value }) } value={ supplierNew.contact} />
            <input type="text" placeholder="Phone..." 
              onChange={ (e) => setSupplierNew({ ...supplierNew, phone: e.target.value }) } value={ supplierNew.phone} />
            <button type="submit">Add</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
