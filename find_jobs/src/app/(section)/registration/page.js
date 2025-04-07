'use client'
import React, { useState } from 'react';
import {
  FormContainer,
  SectionDivider,
  FormGroup,
  FormField,
  FormLabel,
  StyledSelect,
  StyledTextField2,
  FileButton,
  SubmitButton,
  OuterBox,
  StyledTextField3
} from '@/app/component/styleWrapper'; // Adjust the import path
import { FormControl, MenuItem, Typography, Checkbox, FormControlLabel, Box, Button, Input } from '@mui/material';
import Top from '@/app/component/top';
import SignInSection from '@/app/component/SignIn';
import Link from 'next/link';

const UserInfoForm = ({ userType, handleUserTypeChange, packageType, handlePackageTypeChange }) => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
   return (

    <>

      <Top title='MyAccount' />

      <Box display="flex" justifyContent="center" marginTop="115px" marginBottom="115px">
        <Box display="flex" flexDirection="column" alignItems="center" width={{ xs: '85vw', sm: '60vw' }}>
          <SignInSection title="Log In" footerLinkText="CREATE AN ACCOUNT" footerLinkHref="#">
          <form
          //  onSubmit={handleSubmit}
          >
           
            <Box sx={{ width: '100%' }}>
              <Typography textAlign={'left'}>Email</Typography>
              <StyledTextField3 name='email_id' placeholder="Enter Email" fullWidth onChange={handleChange} />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography textAlign={'left'}>Password</Typography>
              <StyledTextField3 type='password' name='password' placeholder="Enter Password" fullWidth onChange={handleChange} />
            </Box>
         
          
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button type='submit'>Log In</Button> 
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
  // return (
  //   <>
  //     <Top title='Registration' />
  //     <OuterBox px={'10px'}>
  //       <FormContainer my='100px'>
  //         {/* User Info Section */}
  //         <Typography variant="h6" fontWeight="bold">
  //           User Info
  //         </Typography>
  //         <SectionDivider />
  //         <FormGroup>
  //           <FormField>
  //             <FormLabel>User Type</FormLabel>
  //             <FormControl fullWidth variant="outlined">
  //               <StyledSelect value={userType} onChange={handleUserTypeChange}>
  //                 <MenuItem value="candidate">I'm a candidate</MenuItem>
  //                 <MenuItem value="employee">I'm an employee</MenuItem>
  //               </StyledSelect>
  //             </FormControl>
  //           </FormField>
  //           <FormField>
  //             <FormLabel>User Name</FormLabel>
  //             <StyledTextField2 fullWidth placeholder="Enter User Name" />
  //           </FormField>
  //           <FormField>
  //             <FormLabel>Email Address</FormLabel>
  //             <StyledTextField2 fullWidth placeholder="Enter Email Address" />
  //           </FormField>
  //           <FormField>
  //             <FormLabel>Profile Image</FormLabel>

  //     <Input
  //       type="file"
  //       onChange={handleFileChange}
  //       sx={{ mt: 2 }}
  //     />
            
  //           </FormField>
  //         </FormGroup>

  //         {/* Payment Info Section */}
  //         <Typography variant="h6" fontWeight="bold" sx={{ mt: 4 }}>
  //           Payment Info
  //         </Typography>
  //         <SectionDivider />
  //         <FormGroup>
  //           <FormField>
  //             <FormLabel>Package Name</FormLabel>
  //             <FormControl fullWidth variant="outlined">
  //               <StyledSelect value={packageType} onChange={handlePackageTypeChange}>
  //                 <MenuItem value="platinum">Platinum Package</MenuItem>
  //                 <MenuItem value="gold">Gold Package</MenuItem>
  //                 <MenuItem value="silver">Silver Package</MenuItem>
  //               </StyledSelect>
  //             </FormControl>
  //           </FormField>
  //           <FormField>
  //             <FormLabel>Amount</FormLabel>
  //             <Box>
  //               <Typography>69 USD</Typography>
  //               <FormControlLabel
  //                 control={<Checkbox />}
  //                 label="I have read & accept the Terms & Conditions"
  //               />
  //               <Button variant="contained" width='100%'>
  //                 Submit
  //               </Button>
  //             </Box>
  //           </FormField>
  //         </FormGroup>
  //       </FormContainer>
  //     </OuterBox>
  //   </>
  // );
};

export default UserInfoForm;
