import Header from "@/components/Header/Header";
import css from "./layout.module.css"

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="colored"/>
      <main className={css.container}>{children}</main>
    </>
  );
}