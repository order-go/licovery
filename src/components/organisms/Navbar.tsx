// Navbar.tsx

import {useState} from 'react';
import CartSidebar from './CartSideBar';
import {useCart} from '../../hooks/useCart';
import IconBotle from '../atoms/IconBotle';
import Title from '../atoms/common/Title';
import MenuNavbar from '../molecules/NavbarMenu';

const Navbar=() => {
  const [isCartOpen,setIsCartOpen]=useState(false);
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const {cartItems}=useCart();

  const handleIconBotleClick: () => void=(): void => {
    console.log(isCartOpen);
    setIsCartOpen(!isCartOpen);
  };

  const handleNavbarMenuClick: () => void=(): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='z-50 top-0 fixed h-10 w-full flex flex-row-reverse justify-between items-center px-4 pt-2 bg-primary box-shadow text-black text-lg'>
        <div className='flex flex-row gap-2'>
          <Title color='text-tertiary' title={'LICOVERY'} />
          <IconBotle
            onClick={handleIconBotleClick}
            productCount={cartItems.length}
          />
        </div>
        <MenuNavbar onClick={handleNavbarMenuClick} />
      </div>
      <CartSidebar
        isOpen={isCartOpen}
        onClose={(): void => setIsCartOpen(false)}
      />
    </>
  );
};

export default Navbar;
