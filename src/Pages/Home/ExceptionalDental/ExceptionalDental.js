import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import img from '../../../images/treatment.png';

const ExceptionalDental = () => {
    return (

        <Grid container spacing={2} sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>

            <Grid item xs={12} md={4}>
                <img src={img} alt="" style={{ height: '450px', margin: '0 auto' }} />
            </Grid>
            <Grid item xs={12} md={5}>
                <Box sx={{ textAlign: 'left', margin: '0 auto' }}>
                    <Typography variant="h4" gutterBottom component="div">
                        Exceptional Dental Care, on Your Terms
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 5, fontSize: '14px' }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nesciunt, quia placeat sed iure unde autem exercitationem necessitatibus! Quibusdam debitis ducimus doloremque deserunt rerum blanditiis fugit vitae non. Doloremque porro deleniti, totam earum corporis saepe nam soluta asperiores illum labore necessitatibus debitis libero sequi? Dolores explicabo nulla cum aliquid voluptatem!
                    </Typography>
                    <Button variant="contained">Learn More</Button>
                </Box>
            </Grid>

        </Grid>
    );
};

export default ExceptionalDental;