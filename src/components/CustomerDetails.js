import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CustomerDetails = () => {
    const { state } = useLocation();
    const cart = state?.cart || [];
    const [customerDetails, setCustomerDetails] = useState({ name: '', email: '', phone: '' ,address:''});
    const navigate=useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerDetails({ ...customerDetails, [name]: value });
    };

   
    const [error, setError] = useState('');
    const handleCheckout = () => {
        if (!customerDetails.name || !customerDetails.email || !customerDetails.phone) {
            setError('All customer details fields are required.');
            return;
        }
        if (!cart ||cart.length === 0) {
            setError('Your cart is empty.');
            return;
        }
        else{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Order submitted for ${customerDetails.name}!`,
                showConfirmButton: false,
                timer: 2500
              });
            navigate("/");
        }
    };
  return (
    <section className="customer-details">
                    <h2>Customer Details</h2>
                    <form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={customerDetails.name} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={customerDetails.email} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone:</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={customerDetails.phone} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Address:</label>
                            <textarea
                                type="address" 
                                id="address" 
                                name="address" 
                                value={customerDetails.address} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="button" onClick={handleCheckout}>
                            Submit Order
                        </button>
                    </form>
                </section>
  )
}

export default CustomerDetails
