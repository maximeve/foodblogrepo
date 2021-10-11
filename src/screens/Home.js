import React from 'react';
import Hero from '../components/Hero';
import Posts from '../components/Posts';
import Container from '@mui/material/Container';

function Home() {
    return (
        <main>
            <Container maxWidth="xl">
            <Hero/>
            <Posts />
            </Container>
        </main>
    )
}

export default Home
