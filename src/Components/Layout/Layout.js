import React from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Container } from './LayoutStyle'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}

export default Layout;