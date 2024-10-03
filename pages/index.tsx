import type { NextPage } from 'next'
import LandingPage from '../container/Home'
import LayoutContainer from '../layout' 

const Home: NextPage = () => {
  return (
    <LayoutContainer>
      <LandingPage />
    </LayoutContainer>
  )
}

export default Home
