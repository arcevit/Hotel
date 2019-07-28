import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../Components/RoomsContainer'


const Rooms = () => {
    return (
        <>
       <Hero hero="roomsHero">
           <Banner title="Our Rooms">
            <Link to="/" className="btn-primary">Go Home Page</Link>
           </Banner>
       </Hero>
       <RoomsContainer/>
       
       </>
    )
}

export default Rooms;
