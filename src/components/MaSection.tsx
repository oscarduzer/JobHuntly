import  { SetStateAction, useState } from 'react';
import { Grid, Box, List,ListItem, ListItemButton,Typography, ListItemText,Divider, Collapse, Checkbox,Avatar, FormControlLabel,ListItemAvatar, Button, NativeSelect, Card, CardContent, LinearProgress } from '@mui/material';
import { ExpandLess, ExpandMore,  ViewModule, ViewList } from '@mui/icons-material';


const MaSection = () => {
    const [openEmployment, setOpenEmployment] = useState(false);
    const [openCategorie, setOpenCategorie] = useState(false);
    const [openLevels, setOpenLevels] = useState(false);
    const [openSalary, setOpenSalary] = useState(false);
    
    const [tri, setTri] = useState('Most relevant');

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
      setTri(event.target.value);
    };

  const handleClickEmployment = () => {
    setOpenEmployment(!openEmployment);
  };

  const handleClickCategorie = () => {
    setOpenCategorie(!openCategorie);
  };

  const handleClickLevels = () => {
    setOpenLevels(!openLevels);
  };

  const handleClickSalary = () => {
    setOpenSalary(!openSalary);
  };

  

  return (
    <Grid container>
      
      <Grid item xs={2}>
        <Box p={2} sx={{ width: '200px' }}>
          <List>
            <ListItemButton onClick={handleClickEmployment}>
              <ListItemText primary={<b style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Type of Employment</b>} />
              {openEmployment ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openEmployment} timeout="auto" unmountOnExit>
              <List component="div" disablePadding style={{ marginLeft: '20px' }}>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Full-time (3)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Part-Time (5)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Remote (2)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Internship (24)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Contract (3)</span>} />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClickCategorie}>
            <ListItemText primary={<b style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Categories</b>} />
              {openCategorie ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCategorie} timeout="auto" unmountOnExit>
              <List component="div" disablePadding style={{ marginLeft: '20px' }}>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Design (24)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Sales (3)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Marketing (3)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Business (3)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Human Resource (6)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Finance (4)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Engineering (4)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Technology (5)</span>} />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClickLevels}>
              <ListItemText primary={<b style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Job Level
</b>} />
              {openLevels ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openLevels} timeout="auto" unmountOnExit>
              <List component="div" disablePadding style={{ marginLeft: '20px' }}>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Entry Level (57)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Mid Level (3)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Senior Level (5)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Director (12)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>VP or Above (8)</span>} />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClickSalary}>
              <ListItemText primary={<b style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Salary Range</b>} />
              {openSalary ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSalary} timeout="auto" unmountOnExit>
              <List component="div" disablePadding style={{ marginLeft: '20px' }}>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>$700 - $1000 (4)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>$100 - $1500 (6)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>$1500 - $2000 (10)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>$3000 or above (4)</span>} />
                </ListItemButton>
              </List>
            </Collapse>
            
          </List>
        </Box>
      </Grid>
      {/* Partie droite */}
      <Grid item xs={10}>
      <Box p={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{  fontWeight:'bold', ml:6 }}>All Jobs</Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" color="textSecondary" mr={1}>Sort by:</Typography>
          <NativeSelect value={tri} onChange={handleChange} disableUnderline>
            <option value="Most relevant">Most relevant</option>
            <option value="Latest">Latest</option>
        </NativeSelect>

          <Divider orientation="vertical" flexItem />
          <ViewModule color="primary" />
          <Box ml={1}>
            <ViewList color="primary" />
            </Box>

        </Box>
      </Box>
      <List>
  {/* Remplacez cette partie par votre liste d'emplois */}
  <Card variant="outlined" sx={{ mb: 2, ml: 6, border: '1px solid #ddd', width: '80%', height: 'fit-content', borderRadius: 0 }}>
    <CardContent sx={{ padding: '6px' }}>
      <ListItem alignItems="center">
        <ListItemAvatar sx={{ marginTop: '-50px' }}>
          <Avatar alt="Job Image" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography fontWeight="bold">Job Title</Typography>}
          secondary={
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop:-1 }}>
                <Typography variant="body2" sx={{ textTransform: 'none', opacity: 0.6 }}>Nomad</Typography>
                <Typography variant="body2" sx={{ fontSize: '2.5rem', opacity: 0.6, position: 'relative', top: '-0.3em' }}>.</Typography>
                <Typography variant="body2" sx={{ textTransform: 'none', opacity: 0.6 }}>Paris, France</Typography>
            </Box>
          }
        />
        <Box sx={{ width: '14%', mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button variant="contained" color="primary" sx={{ borderRadius: 0, backgroundColor: 'blue', color: 'white', mt: 2 }}>Apply</Button>
          <LinearProgress variant="determinate" value={50} color="secondary" sx={{ bgcolor: 'aliceblue', mt: 2, width: '100%' }} />
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2, fontSize: '0.75rem', whiteSpace: 'nowrap' }}>5 applied of 10 capacity</Typography>
        </Box>
      </ListItem>
    </CardContent>
  </Card>
</List>
    </Box>
      </Grid>
    </Grid>
  );
};

export default MaSection;