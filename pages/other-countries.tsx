import type { NextPage } from 'next'
import CountriesPage from '../container/Countries'
import LayoutContainer from '../layout'

const Countries: NextPage = () => {
  return (
    <LayoutContainer type="light">
      <CountriesPage />
    </LayoutContainer>
  )
}

export default Countries
