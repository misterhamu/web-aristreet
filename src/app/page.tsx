import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import HomePage from "./home/home";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HomePage />
        <Footer/>
      </div>
    </>
  );
}
