import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description={"Sobre Nosotros, tienda de música"}
      >
        <main>
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="Imagen sobre nosotros"
            />
            <div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                mollitia, exercitationem error corrupti sint, sit repudiandae
                voluptatum aspernatur consequuntur, est quam quo sed. Deleniti
                doloribus consectetur quos repellendus? Eaque, et.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                sed provident et itaque, accusantium voluptas natus ex non
                repellat aspernatur, porro vel. Temporibus modi corrupti a fuga
                delectus tempore aliquam. provident saepe totam quia! Distinctio
                autem magni non eaque impedit enim cum perferendis, ullam nisi
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
