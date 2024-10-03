import type { NextPage } from 'next'
import ProductsPage from '../container/Products'
import LayoutContainer from '../layout'

const Procducts: NextPage = () => {
  return (
    <LayoutContainer type="light">
      <ProductsPage />
    </LayoutContainer>
  )
}

export default Procducts
