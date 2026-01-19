import Header from "@/components/Header/Header";

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="colored"/>
      <main>{children}</main>
    </>
  );
}