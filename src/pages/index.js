import Link from "next/link";
import Layout from "../../components/layout";
export default function Home() {
  return (
    <>
      <Layout title={"Inicio"} description={"Blog de música"}>
        <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </>
  );
}
