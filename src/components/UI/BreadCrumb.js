import Link from "next/link";
import { useRouter } from "next/router";

const BreadCrumb = ({ title }) => {
  const router = useRouter();
  const path = router.asPath.split("/");
  return (
    <div className="text-sm breadcrumbs py-[20px] white ">
      <ul className="justify-center">
        <li className="capitalize text-[#131921]">
          <Link href={"/"}>Home</Link>
        </li>
        {path[1] !== "pcbuilder" && (
          <li className="capitalize text-[#131921]">
            <Link href={path[1] === "products" ? "/products" : "/"}>
              {path && path[1]}
            </Link>
          </li>
        )}
        <li className="capitalize md:text-xl font-bold  text-[#131921]">
          <Link className="hidden md:block" href={router.asPath}>
            {title}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
