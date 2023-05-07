import Layout from "../../components/layout";
import ListadoGuitarras from "../../components/listado-guitarras";

export default function Tienda({ guitarras }) {
  console.log(guitarras);
  return (
    <>
      <Layout
        title={"Tienda Virtual"}
        description={"Tienda virtual, venta de guitarras, instrumentos"}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra colección</h1>
          <ListadoGuitarras />
        </main>
      </Layout>
    </>
  );
}

//generación estatica, no se regenera con cada visita del usuario, se hace en el build
/**
 * This function fetches data from a local API endpoint and returns it as props for a static page.
 * @returns The function `getStaticPropsS` is returning an object with a `props` property that contains
 * the `guitarras` data fetched from the Strapi API. This data is being populated with the related
 * `imagen` data.
 */
export async function getStaticProps() {
  const respuesta = await fetch(
    `${process.env.API_URL }/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();

  //{gutarras} al exportarlo se puede pasar como props al componente tienda
  return {
    props: { guitarras },
  };
}
