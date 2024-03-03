import React, { useState } from 'react';
import NavBar from './NavBar';
import styles from './Application.module.css'; // Import your CSS module for styling

export default function SignUP({userdata}) {
    const [name,setName]=useState('');
    const [pass,setPass]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    
    function handleSubmit(e){
        e.preventDefault();
        alert(`Welcome ${name} Your Application is submitted`);
        console.log([name, pass, email, phone]);
    }
    
    function handleChange(e){
      const { id, value } = e.target;
      if(id === 'user'){
        setName(value);
      } else if(id === 'pass'){
        setPass(value);
      } else if(id === 'emailId'){
        setEmail(value);
      } else if(id === 'phone'){
        setPhone(value);
      }
    }
    
    return (
        < >
        
            <NavBar />
            <div className={styles.signup}>
                <h1>Sign Up Form</h1>
                <form className={styles.sign} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="user">Username:</label>
                        <input type="text" placeholder="Enter username" id="user" value={name} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="pass">Password:</label>
                        <input type="password" placeholder="Enter password" id="pass" value={pass} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone No:</label>
                        <input type="text" placeholder="Enter phone number" id="phone" value={phone} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="emailId">Email:</label>
                        <input type="email" placeholder="Enter email address" id="emailId" value={email} onChange={handleChange} />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
}




