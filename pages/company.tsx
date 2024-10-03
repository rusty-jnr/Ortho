import type { NextPage } from 'next'
import CompanyPage from '../container/Company'
import LayoutContainer from '../layout'

const Company: NextPage = () => {
  return (
    <LayoutContainer type="light">
      <CompanyPage />
    </LayoutContainer>
  )
}

export default Company
