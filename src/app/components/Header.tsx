"use client";

import Link from "next/link";
import {
    HOME_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
} from "../constants/routes";

const Header = () => {
  const isLogin = false;
  return (
    <div>
      <Link href={HOME_ROUTE}>
        <div>Logo</div>
      </Link>

      {!isLogin && (
        <>
          <Link href={LOGIN_ROUTE}>
            <li>Login</li>
          </Link>
          <Link href={REGISTER_ROUTE}>
            <li>Register</li>
          </Link>
        </>
      )}
      {isLogin && (
        <>
          <Link href={PROFILE_ROUTE}>
            <li>Profile</li>
          </Link>
          <li className=" cursor-pointer" onClick={() =>LOGIN_ROUTE}>
            Logout
          </li>
        </>
      )}
    </div>
  );
};

export default Header;
