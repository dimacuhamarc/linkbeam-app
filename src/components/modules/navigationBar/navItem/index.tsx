import React from 'react';
import Link from 'next/link';

function NavItem({
  isAuth,
  isRegister,
  title,
  href,
}: {
  title: string;
  href: string;
  isAuth?: boolean;
  isRegister?: boolean;
}) {
  return isAuth ? (
    isRegister ? (
      <Link href={href} className="btn btn-ghost text-paragraph-1 font-medium">
        {title}
      </Link>
    ) : (
      <Link
        href={href}
        className="btn btn-primary text-paragraph-1 font-medium"
      >
        {title}
      </Link>
    )
  ) : (
    <Link
      href={href}
      className="link text-paragraph-1 no-underline underline-offset-4 hover:underline"
    >
      {title}
    </Link>
  );
}

export default NavItem;
