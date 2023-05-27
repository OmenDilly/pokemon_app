import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { FC } from 'react'
import PokemonLogo from '../../assets/pokemon_logo.png'

const Navbar: FC = () => {
  return (
    <Header 
      style={{
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        width: '100%',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img 
        alt="Pokemon app logo"
        src={PokemonLogo} 
        height={'70%'}
        style={{
          padding: '0 1rem'
        }}
      />
      {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(1).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      /> */}
    </Header>
  )
}

export default Navbar