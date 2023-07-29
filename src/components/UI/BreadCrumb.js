import Link from "next/link";
import { useRouter } from "next/router";

const BreadCrumb = ({ title }) => {
  const router = useRouter();
  const path = router.asPath.split("/");
  return (
    <div className="text-sm breadcrumbs py-[20px] ">
      <ul className="justify-center">
        <li className="capitalize text-[#131921]">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="capitalize text-[#131921]">
          <Link href={path[1] === "products" ? "/products" : "/"}>
            {path && path[1]}
          </Link>
        </li>
        <li className="capitalize text-xl font-bold  text-[#131921]">
          <Link href={router.asPath}>{title}</Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
