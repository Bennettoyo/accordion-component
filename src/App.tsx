import './App.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <h2>Frequently Asked Questions</h2>
        {AccordionUsage()}
      </div>
    </div>
  );
}

function AccordionUsage() {
  // Array to hold the data for each accordion, ideally this would be passed as a parameter to this function
  const accordions = [
    { id: 1, heading: 'Accordion 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { id: 2, heading: 'Accordion 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { id: 3, heading: 'Accordion 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { id: 4, heading: 'Accordion 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { id: 5, heading: 'Accordion 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' }
  ];

  return (
    <div>
      {accordions.map(accordion => (
        <Accordion key={accordion.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${accordion.id}-content`}
            id={`panel${accordion.id}-header`}
          >
            {accordion.heading}
          </AccordionSummary>
          <AccordionDetails>
            {accordion.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default App;
