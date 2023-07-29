import Link from "next/link";
import React from "react";

const BreadCrumb = ({ title }) => {
  const path = window.location.pathname.split("/");
  return (
    <div className="text-sm breadcrumbs py-[20px] ">
      <ul className="justify-center">
        <li className="capitalize text-[#131921]">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="capitalize text-[#131921]">{path && path[1]} </li>
        <li className="capitalize text-xl font-bold  text-[#131921]">
          <Link href={window.location.pathname}> {title}</Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
