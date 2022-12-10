import React from 'react'
import Header from './Header'

interface Props {
    children: React.ReactNode;
  }

const Layout: React.FC<Props> = (props) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
        </>
    )
}

export default Layout;