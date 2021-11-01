import React, { useState } from 'react';
import Posts from '../components/Posts';
import Container from '@mui/material/Container';


function Home() {
    return(
        <main>
            <Container maxWidth="xl">
            <Posts />
            </Container>  
        </main>
    )
}

export default Home
