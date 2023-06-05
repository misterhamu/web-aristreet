import styles from "./footer.module.scss";

export default function Footer() {
  const getYear = () => {
    const year = new Date();
    return year.getFullYear();
  };
  return (
    <div className={styles.footer_wrapper}>
      <div className="py-6 flex justify-center">
        <div className={styles.separator}></div>
        <p className="text-white">Copyright © {getYear()} Aristreet. All rights reserved.</p>
      </div>
    </div>
  );
}
