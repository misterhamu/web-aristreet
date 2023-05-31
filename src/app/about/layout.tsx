import Navbar from "../components/navbar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
      <Navbar/>
        <h1>About Header</h1>
      </div>
      {children}
      <div>
        <h1>About Footer</h1>
      </div>
    </>
  );
}
