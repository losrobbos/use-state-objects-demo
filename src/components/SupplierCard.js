import { useEffect, useState } from "react";

const SupplierCard = ({ supplier, suppliers, setSuppliers }) => {

  // state for storing temporary edits
  const [supplierEdit, setSupplierEdit] = useState({...supplier})

  // SNEAK OUT ON SOME STATE => watch all the changes!

  // useEffect(() => {
  //   console.log({ supplierEdit })
  //   console.log( {suppliers} )
  // }, [supplierEdit])

  // delete existing supplier
  const deleteSupplier = () => {
    console.log('We wanna delete ID: ', supplier._id);

    // delete item by filtering it out!
    const suppliersKeep = suppliers.filter((sup) => sup._id !== supplier._id);

    // overwrite list of suppliers with those we wanna keep / without deleted
    setSuppliers(suppliersKeep);
  };

  // update existing supplier
  const updateSupplier = () => {
    console.log( "Updating supplier...", supplierEdit )

    // take supplierEdit object => find entry in supplier list => and replace / update values
    // suppliers => []
    // supplierEdit => {}

    // UPDATE METHOD 1)
    // findElement 
    // upate element
    // splice old thing with new thing

    // UPDATE METHOD 2)
    // filter() => old item weg
    // updated => push()
    // overwrite

    // UPDATE METHOD 3)
    // map()

    // loop over all items, return all items, but with some item modified...
    const suppliersUpdated = suppliers.map(supplier =>  {
      return supplier._id !== supplierEdit._id ? supplier : {...supplierEdit} 
    })

    setSuppliers( suppliersUpdated )
  };

  return (
    <div key={supplier._id}>
      <form>
        <div className="supplier-card">
          <div>
            <label>Company</label>
            <input type="text" 
              value={ supplierEdit.company } 
              onChange={ (e) => setSupplierEdit({ ...supplierEdit, company: e.target.value}) }
            />
          </div>
          <div>
            <label>Contact</label>
            <input type="text" 
              defaultValue={supplierEdit.contact}
              onChange={ (e) => setSupplierEdit({ ...supplierEdit, contact: e.target.value } )} 
            />
          </div>
          <div className="actions">
            <button type="button" onClick={ updateSupplier }>
              Save
            </button>
            <button type="button" onClick={ deleteSupplier}>
              X
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SupplierCard;
