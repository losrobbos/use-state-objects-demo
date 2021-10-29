import { useEffect, useState } from 'react';
import './App.css';
import SupplierCard from './components/SupplierCard';

function App() {

  const supplierDefault = {
    company: "",
    contact: "",
    phone: ""
  }

  const [supplierNew, setSupplierNew] = useState( supplierDefault )

  // default dummy suppliers
  const [suppliers, setSuppliers] = useState([
    { _id: "s1", company: "Supply Unlimited GmbH", contact: "Humberto", phone: "+4912345" },
    { _id: "s2", company: "Supply you as we can ltd", contact: "Rob", phone: "+496789"  }
  ])

  // load initial suppliers data from API
  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/suppliers")
        const suppliersApi = await res.json() // parse JSON data from response into JS object
        setSuppliers( suppliersApi ) // store suppliers from API in our local state
      }
      catch(err) {
        console.log( err )
      }
    }
    fetchData()

  }, [])

  // add new suppliers
  const addSupplier = (e) => {
    e.preventDefault() // prevent that page is reloaded
    console.log( "New supplier to add:", supplierNew )

    // create copy of OLD entries and merge with NEW entry
    const suppliersNew = [...suppliers, { ...supplierNew, _id: Date.now().toString() }] 

    // update supplier list and trigger re-render
    setSuppliers( suppliersNew )
    setSupplierNew( supplierDefault ) // clear supplier add form
  }


  // RENDER LIST of suppliers
  const jsxSuppliers = suppliers.map((supplier) => (
    <SupplierCard 
      suppliers={ suppliers }
      supplier={supplier} 
      setSuppliers={ setSuppliers }
      key={ supplier._id } 
    />
  ))

  return (
    <div className="App">
      <header className="App-header">
        <h2>UseState mit Objects</h2>
        { jsxSuppliers }
        <div>
          {/* ADD new supplier form */}
          <form className="frmAdd" onSubmit={ addSupplier } >
            <label>New Supplier: </label>
            <div>
              <input type="text" placeholder="Company..." 
                onChange={ (e) => setSupplierNew({ ...supplierNew, company: e.target.value }) } 
                value={ supplierNew.company } />
            </div>
            <div>
              <input type="text" placeholder="Contact..."  
                onChange={ (e) => setSupplierNew({ ...supplierNew, contact: e.target.value }) } 
                value={ supplierNew.contact} />
            </div>
            <div>
              <input type="text" placeholder="Phone..." 
                onChange={ (e) => setSupplierNew({ ...supplierNew, phone: e.target.value }) } 
                value={ supplierNew.phone} />
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
