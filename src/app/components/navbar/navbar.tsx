import Link from "next/link";
import styles from "./nav.module.scss";

export default function Navbar() {
  return (
    <div className={styles.nav_wrapper}>
      <nav className="container mx-auto flex flex-row flex-wrap justify-between gap-3">
        <div className={`text-left p-6 logo ${styles.logo} order-2 md:order-none`}>
          <Link href={"/"}>{"<Aristreet/>"}</Link>
        </div>
        <div className="flex gap-3 p-6 order-1 md:order-none hidden lg:flex">
          <Link href={"/"}>
            <div className="p-3">Home</div>
          </Link>
          <Link href={"/about"}>
            <div className=" p-3">About</div>
          </Link>
          <Link href={"/"}>
            <div className="p-3">Portfolio</div>
          </Link>
          <Link href={"/contact"}>
            <div className="p-3">Contact</div>
          </Link>
          <Link href={"/"}>
            <div className="p-3">Blogs</div>
          </Link>
        </div>
        <div className="text-right p-6 order-3 md:order-none">
          <button className="btn-primary flex flex-wrap justify-between items-center">Resume
            <i className="ic ic-arrow_down"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}
