import "./style.css"
import foodyacontactus from "../acc/foodyacontactus.png"
import { useEffect, useState } from "react"
function Contactus() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    org: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,  
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
     fetch('http://localhost:8000/api/foodyacontactus/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response)=> {
       console.log(response)
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  return (
    <>
      <div className="container py-md-2 mb-md-5">
        <div className="row">
          <div className="col-md-7">
            <div className="contact_us_desc">
              <h1 className="my-md-5 my-3">Looking for Corporate Luncheons?</h1>
              <h3 className="my-md-4 my-2">Get in Touch for our <span>Custom Meal Packages</span> for Offices  Occasions.</h3>
              <div className="contact_us_btn my-md-4 my-2">
                Contact us
              </div>
            </div>
            <div className="contact_us_form py-md-0 py-2">
              <form action="" method="POST" className="py-md-3">
                <input  required type="text" placeholder="*name" name="name" value={data.name} onChange={handleChange} />
                <small></small>
                <input required type="email" placeholder="*email" name="email" value={data.email} onChange={handleChange} />
                <small></small>
                <input required type="text" placeholder="*phone" name="phone" value={data.phone} onChange={handleChange} />
                <input type="text" placeholder="org" name="org" value={data.org} onChange={handleChange} />
                <div className="d-flex w-100 submit_class justify-content-center">
                  <input type="submit" className="submit_btn w-25 my-md-3" value="Submit" onClick={handleSubmit} />
                </div>
              </form>
            </div>
            <p>"Good Food is not privilege...</p>
            <h5 className="fst-italic">IT’S YOUR RIGHT.”</h5>
          </div>

          <div className="col-md-5">
            <div className="contactus_img">
              <img src={foodyacontactus} alt="foodyacontactus img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus