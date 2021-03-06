import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import {Element} from 'react-scroll';
import Features from './components/Features'
import About from './components/About'
import data from '../../services/featuresData.json'
import CTA from './components/CTA';
const Landing = () => {
return (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        
<Header />
<Container>

    <Hero  />
<Element name="section2">
    <Features features={data}/>
    </Element> 
    <Element name="roadmap">
    <About />
        </Element>      
    <CTA />


</Container>
<Footer />
    </Box>
)
}

export default Landing