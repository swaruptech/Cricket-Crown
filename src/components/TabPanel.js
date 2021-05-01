import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Score from '../components/Score';
import { getMatches } from '../services/cricket-api';


function FullWidthTabs() {
  const [value, setValue] = useState(0);


  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches().then(data => {
      setMatches(data.matches);
    }).catch(error => console.log(error));
  }, []);


  const handleChange = (e, val) => {
    setValue(val);
  };

  function getData() {
    return (
      matches.map(match => (
        <React.Fragment>
          { (match.type === '') ?
            <Box justifyContent="center" alignItems="center" display="flex">
              <Score match={match} key={match.unique_id} />
            </Box> : ''
          }
        </React.Fragment>
      ))
    )
  };

  function getData(Tests) {
    return (
      matches.map(match => (
        <React.Fragment>
          { (match.type === Tests) ?
            <Box justifyContent="center" alignItems="center" display="flex">
              <Score match={match} key={match.unique_id} />
            </Box> : ''
          }
        </React.Fragment>
      ))
    )
  };


  function getData(Twenty20) {
    return (
      matches.map(match => (
        <React.Fragment>
          { (match.type === Twenty20) ?
            <Box justifyContent="center" alignItems="center" display="flex">
              <Score match={match} key={match.unique_id} />
            </Box> : ''
          }
        </React.Fragment>
      ))
    )
  };

  function TabPanel(props) {
    return (
      <div role="tabpanel">
        {props.value === props.index && (
          <Box p={3}>
            <Typography>{props.children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <React.Fragment>
      <Tabs value={value} onChange={handleChange} indicatorColor="secondary" centered style={{color: 'red'}} >
        <Tab style={{fontWeight:'bold'}} label="One Day " />
        <Tab style={{fontWeight:'bold'}} label="Twenty20 " />
        <Tab style={{fontWeight:'bold'}} label="Test " />
      </Tabs>
      
      
    
      <TabPanel value={value} index={0}>
        {getData('Twenty20')}

      </TabPanel>
      <TabPanel value={value} index={1}>
        {getData('')}

      </TabPanel>
      <TabPanel value={value} index={2}>
      {getData('Tests')}

      </TabPanel>
    </React.Fragment>
  );
}

export default FullWidthTabs;