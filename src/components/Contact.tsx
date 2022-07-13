import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import '../styles/contact.scss'

function Contact() {

  const [form, setform] = useState({
    name: "",
    email: "",
    message: ""
  })

  return (
    <>
      <ul className="social-media-links">
        <li className="social-media-link">
          <FaLinkedin  />
        </li>
      </ul>
      <form onSubmit={() => {

      }}>
        <input 
          type='text'
          name="name"
          placeholder="Name"
          value={form.name}
        />
      </form>
    </>
  )

}

export default Contact;