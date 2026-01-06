import React from 'react'
import MyNavBar from '../component/MyNavBar.jsx'
import HomeInside from '../component/HomeInside.jsx'
import Footer from '../component/Footer.jsx'

function Home() {
  return (
    <div>
      <MyNavBar/>
      <br></br>
      <HomeInside/>
      <br></br>
      <Footer/>
    </div>
  )
}

export default Home