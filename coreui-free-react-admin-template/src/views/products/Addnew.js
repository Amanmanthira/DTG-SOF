import { useState } from "react"
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Title } from 'chart.js';
const AddNew = () => {
  const [jobNumber, setJobNumber] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/api/products/addnewitem', {
      jobNumber: jobNumber,
      brand: brand,
      type:type,
      description: description,
      customerName: customerName,
      contactNumber:contactNumber,

    })
    .then(res => {
      console.log(res.data)
      navigate("/Itemlist")
    })
    .catch((err) =>console.error(err))  
  };
  
  return (
   <form className="container mt-5 p-4 bg-light shadow rounded" onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
   <h2 className="text-center mb-4">Add New Entry</h2>
   <div className="mb-3">
     <label htmlFor="jobNumber" className="form-label">Job Number</label>
     <input
       type="text"
       className="form-control"
       id="jobNumber"
       placeholder="Enter job number"
       onChange={(e) => setJobNumber(e.target.value)}
     />
   </div>
   <div className="mb-3">
     <label htmlFor="brand" className="form-label">Brand</label>
     <input
       type="text"
       className="form-control"
       id="brand"
       placeholder="Enter brand"
       onChange={(e) => setBrand(e.target.value)}

     />
   </div>
   <div className="mb-3">
     <label htmlFor="type" className="form-label">Type</label>
     <input
       type="text"
       className="form-control"
       id="type"
       placeholder="Enter type"
       onChange={(e) => setType(e.target.value)}

     />
   </div>
   <div className="mb-3">
     <label htmlFor="description" className="form-label">description</label>
     <textarea
       className="form-control"
       id="description"
       rows="4"
       placeholder="Enter details"
       onChange={(e) => setDescription(e.target.value)}

     ></textarea>
   </div>
   <div className="mb-3">
     <label htmlFor="customerName" className="form-label">Customer Name</label>
     <input
       type="text"
       className="form-control"
       id="customerName"
       placeholder="Enter customer name"
       onChange={(e) => setCustomerName(e.target.value)}

     />
   </div>
   <div className="mb-3">
     <label htmlFor="customerContact" className="form-label">Customer Contact Number</label>
     <input
       type="text"
       className="form-control"
       id="customerContact"
       placeholder="Enter customer contact number"
       onChange={(e) => setContactNumber(e.target.value)}

     />
   </div>
   <button type="submit" className="btn btn-primary w-100">Submit</button>
 </form>
  );
};

export default AddNew;
