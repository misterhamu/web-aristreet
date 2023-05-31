export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>

        <h1>Contact Header</h1>
      </div>
      {children}
      <div>
        <h1>Contact Footer</h1>
      </div>
    </>
  );
}
