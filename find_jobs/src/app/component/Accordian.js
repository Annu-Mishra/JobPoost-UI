import React from 'react';
import { StyledAccordion, StyledAccordionSummary, StyledAccordionDetails } from './styleWrapper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

const Accordion = ({ expanded, onChange, title, details }) => {
  return (
    <StyledAccordion expanded={expanded} onChange={onChange}>
      <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <Typography>{details}</Typography>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};

export default Accordion;
