import React , {useState}from "react";
import '../styles/Contactus.css'
const Contactus = () => {
    const [formData, setFormData] = useState({
        email: '',
        contactNumber: '',
        querySubject: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log(formData);
      };

    return (
        <div className="contactSection" id='contactsection' >
            <div className="desc">
                <h1>Have a querry?</h1>
                <p>Fill the details within the form below and our executives will reach out shortly.</p>
            </div>
            <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="error-message">Please enter a valid email address.</span>
        </div>
        <div className="form-field">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
          <span className="error-message">Please enter a valid 10-digit contact number.</span>
        </div>
        <div className="form-field">
          <label htmlFor="querySubject">Query Subject:</label>
          <input
            type="text"
            id="querySubject"
            name="querySubject"
            value={formData.querySubject}
            onChange={handleChange}
            required
          />
          <span className="error-message">This field is required.</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    )
}

export default Contactus;