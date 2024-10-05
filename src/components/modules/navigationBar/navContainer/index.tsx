import React from 'react';
import NavItem from '../navItem';
import { NAV_LINKS, AUTH_LINKS } from '@/src/utils/constants/app_constants';

function NavContainer() {
  return (
    <nav className="navbar flex justify-between items-center w-full bg-base-300 px-24">
      <div className="flex items-center gap-2">
        <h1 className="text-heading-1 font-bold font-linkbeam inline-flex">LinkBeam</h1>
      </div>
      <div className="flex items-center gap-12 justify-center">
        {NAV_LINKS.map((link) => (
          <NavItem key={link.name} title={link.name} href={link.href} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        {AUTH_LINKS.map((link) => (
          <NavItem key={link.name} title={link.name} href={link.href} isAuth isRegister={link.href === '/sign-in'} />
        ))}
      </div>
    </nav>
  );
}

export default NavContainer;
