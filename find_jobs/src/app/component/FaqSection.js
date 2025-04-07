'use client'
import React, { useState } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

// Custom Styles
const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: '105px 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  margin: 'auto',
  padding: theme.spacing(2.5),
  width: '100%',
  backgroundColor: '#EFF2F6',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(10),
  },
  [theme.breakpoints.up('md')]: {
    width: '78vw',
  },
  [theme.breakpoints.up('lg')]: {
    width: '64vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '50vw',
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
//   backgroundColor: 'black',
}));

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  width: '100%',
}));

// FAQ Component
const FAQSection = ({ faqs }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        {faqs.map((faq, index) => (
          <StyledAccordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq.summary}</Typography>
            </StyledAccordionSummary>
            <AccordionDetails>
              <Typography>{faq.details}</Typography>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </StyledContainer>
    </StyledWrapper>
  );
};

export default FAQSection;
