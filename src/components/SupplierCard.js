const SupplierCard = ( { supplier, suppliers, setSuppliers } ) => {

  // delete existing supplier
  const deleteSupplier = (idSupplierToDelete) => {
    console.log("We wanna delete ID: ", idSupplierToDelete)

    // delete item by filtering it out!
    const suppliersKeep = suppliers.filter( supplier => supplier._id !== idSupplierToDelete)

    // overwrite list of suppliers with those we wanna keep / without deleted
    setSuppliers( suppliersKeep )
  }
  

  return (
    <div key={supplier._id}>
      <form>
        <div className="supplier-card">
          <div>
            <label>Company</label>
            <input type="text" defaultValue={supplier.company} />
          </div>
          <div>
            <label>Contact</label>
            <input type="text" defaultValue={supplier.contact} />
          </div>
          <div className="actions">
            <button type="button" onClick={() => deleteSupplier(supplier._id)}>
              X
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SupplierCard;
