import React from 'react'

const Itemlist = () => {
  return (
    <div>
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Jobnumber</th>
      <th scope="col">Brand</th>
      <th scope="col">Type</th>
      <th scope="col">Details</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Status</th>
      <th scope="col">Price</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {products.map(product => (
                        <tr key={products._id}>
                            <td>{products.date}</td>
                            <td>{products.jobNumber}</td>
                            <td>{products.brand}</td>
                            <td>{products.type}</td>
                            <td>{products.description}</td>
                            <td>{products.customerName}</td>
                            <td>{products.contactNumber}</td>
                            <td>
                                <button
                                    className='btn btn-danger mr-2'
                                    onClick={() => handleDelete(products._id)}
                                >
                                    Delete
                                </button>
                                <Link to={`/updateCustomer/${customer._id}`} className="btn btn-success">Update</Link>
                            </td>
                        </tr>
                    ))}
    
  </tbody>
</table>

    </div>
  )
}

export default Itemlist
