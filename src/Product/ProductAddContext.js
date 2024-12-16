import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'


export default function ProductAddContext() {

  //form data contain all of input items on screen.
  const [formData, setFormData] = useState({
    productName: '',
    price: 0
  });
  //contain error messsages relating all input items on screen.
  const [formErrors, setFormErrors] = useState({
    productName: '',
    price: ''
  });

  const location = useLocation();
  const navigate = useNavigate();
  const products = location.state?.products || [];


  //Event for field change
  function handleChange(e) {

    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
    //clear errors
    setFormErrors((prevState) => ({ productName: '', price: '' }));
    //check validation
    if (name == "productName" && value.length <= 0) {

      setFormErrors((...prevState) => ({
        ...prevState,
        productName: 'Product name is required'
      }));
    }
    if (name == "price" && value.length <= 0) {
      setFormErrors((...prevState) => ({
        ...prevState,
        price: 'Price is required'
      }));
    }
  }


  function onCancel() {
    navigate('/ProductApp', { state: products });
  }
  function handleSubmitForm(e) {

    e.preventDefault();
   
    // Final validation check
    const isFormValid = Object.values(formErrors).every((error) => error === '');

    if (isFormValid) {
      setFormData({ productName: '', price: 0 });
      setFormErrors({ productName: '', price: '' });

      const productsNew = [...products, {
        id: products.length + 1,
        text: formData.productName,
        price: formData.price,
        done: true
      }];
      navigate('/ProductApp', { state: productsNew });
    } else {
      console.log("There is errors on items on screen");
    }
  }


  return (
    <>
      <form name='myForm' onSubmit={handleSubmitForm}>
        <div className="form-container">

          <h1 className="form-title">PRODUCT REGISTER </h1>
          <div className="form-panel">
            <div className="form-row">
              <div className="form-item">
                <label>Product Name: </label>
              </div>
              <div className="form-item">
                <input type='text' name='productName' value={formData.productName} required onChange={handleChange} />

                {formErrors.productName && <p className='form-item-error'>{formErrors.productName}</p>}

              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <label>Product Price: </label>
              </div>
              <div className="form-item">
                <input type='number' required name='price' value={formData.price} onChange={handleChange} />
                {formErrors.price && <p className='form-item-error'>{formErrors.price}</p>}
              </div>
            </div>
            <div className="form-row button-row">
              <div>
                <button className='btn' type='submit'>Register</button>
                <button className='btn' onClick={onCancel}> Cancel</button>
              </div>
            </div>
          </div>
        </div>

      </form>
    </>
  );
}

