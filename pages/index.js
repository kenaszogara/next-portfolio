import Head from "next/head";
import styles from "../styles/Home.module.css";
import configData from "../config.json";
import { getAllPostNames } from "../lib/posts";
import Link from "next/link";
import Image from "next/image";

export default function Home(props) {
  const config = props.configData;
  const paths = props.paths;

  return (
    <div className={styles.container}>
      <Head>
        <title>{config.title}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <Image
          className={styles.circular}
          src={config.profilePic}
          alt="Picture of the author"
          width="150"
          height="150"
        />
        <h1 className={styles.title}>{config.title}</h1>
        <p className={styles.description}>{config.tagline}</p>

        <div className={styles.grid}>
          {paths.map((path, index) => {
            return (
              <Link href={`/posts/${path.params.slug}`} key={index}>
                <a className={styles.card}>
                  <h3>{path.params.title}</h3>
                  <p>{path.params.subtitle}</p>
                </a>
              </Link>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>{config.footerContent}</p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const paths = getAllPostNames();

  return {
    props: {
      configData,
      paths,
    },
  };
}
