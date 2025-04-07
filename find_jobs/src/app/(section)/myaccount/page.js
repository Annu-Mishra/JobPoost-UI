'use client'
import React, { useState } from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { StyledTextField3, StyledButton } from '@/app/component/styleWrapper'; // Adjust the import path
import SignInSection from '@/app/component/SignIn';
import Top from '@/app/component/top';
import axios from 'axios';
// import PaperSection from ; // Adjust the import path

const SignInForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email_id: '',
    password: '',
    phone: '',
    image:null,
});

const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] }); // Store image file
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
};

const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email_id", formData.email_id);
    formDataObj.append("password", formData.password);
    formDataObj.append("phone", formData.phone);
    if (formData.image) {
      formDataObj.append("image", formData.image); // Append image file
    }


    try {
      const response = await fetch("http://localhost:5000/signup", {  // <-- Make sure this matches backend route
          method: "POST",
          // headers: { "Content-Type": "application/json" },
          body: formDataObj,
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
          alert("Registration successful!");
      } else {
          alert(`Registration failed: ${data.error}`);
      }
  } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
  }

  
};
  return (

    <>

      <Top title='MyAccount' />

      <Box display="flex" justifyContent="center" marginTop="115px" marginBottom="115px">
        <Box display="flex" flexDirection="column" alignItems="center" >
          <SignInSection title="Sign In" footerLinkText="CREATE AN ACCOUNT" footerLinkHref="#">
          <form onSubmit={handleSubmit}>
            <Box sx={{ width:'100%', }}>
              <Typography textAlign={'left'}>Username</Typography>
              <StyledTextField3 name='name' placeholder="Enter User Name"  onChange={handleChange} />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography textAlign={'left'}>Email</Typography>
              <StyledTextField3 name='email_id' placeholder="Enter Email"  onChange={handleChange} />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography textAlign={'left'}>Password</Typography>
              <StyledTextField3 type='password' name='password' placeholder="Enter Password"  onChange={handleChange} />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography textAlign={'left'}>Phone</Typography>
              <StyledTextField3 name='phone' placeholder="Enter Phone no." onChange={handleChange} />
            </Box>
            <Box sx={{ width: '100%',my:3 }}>
                <Typography textAlign={'left'}>Upload Image</Typography>
                <input type="file" name="image" accept="image/*" onChange={handleChange} />
              </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
              <Button type='submit'>SignIn</Button>
              {/* <Button textTransform='none'> */}
              <Link href="#" color="#0859F7">
                Forgot Password?
              </Link>
            
            </Box>
            </form>
          </SignInSection>
         
        </Box>
      </Box>

    </>
  );
};

export default SignInForm;
