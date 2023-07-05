import styles from "../styles/Home.module.css";
import configData from "../config.json";
import { getAllPostNames } from "../src/lib/posts";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Footer } from "../src/components/Footer";

export default function Home({ config, paths, tags }) {
  return (
    <div className={`${styles.container} bg-dark-900 `}>
      <main className={`${styles.main} max-w-4xl`}>
        <div className={`flex-col text-center mb-40`}>
          <Image
            className={`${styles.circular} m-auto `}
            src={config.profilePic}
            alt="Picture of the author"
            width="150"
            height="150"
          />
          <h1 className={`${styles.title}`}>{config.title}</h1>
          <p className={`${styles.description} p-3 mb-5`}>{config.tagline}</p>
        </div>

        <div className={`${styles.grid} md:flex-col w-full px-4`}>
          {paths.map((path, index) => {
            return (
              <Link
                href={`/posts/${path.params.slug}`}
                key={index}
                className={`${styles.card} flex-col md:flex-row w-full`}
              >
                <div className={` md:max-w-lg md:mb-0 md:mr-auto`}>
                  <h3 className={`font-bold text-2xl mb-4  break-normal`}>
                    {path.params.title}
                  </h3>
                  <div className={`flex flex-wrap flex-row`}>
                    {path.params.tags.map((tag, i) => {
                      return (
                        <div
                          key={i}
                          className={`m-1 border-2 rounded px-2 py-1`}
                        >
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p className={`font-normal`}>
                  {format(new Date(path.params.date), "MMM d, yyyy")}
                </p>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer config={config} />
    </div>
  );
}

export async function getStaticProps() {
  const paths = getAllPostNames();
  paths.sort((a, b) => {
    if (Date.parse(a.params.date) > Date.parse(b.params.date)) {
      return -1;
    } else {
      return 1;
    }
  });

  const allTags = [];

  // get all tags from posts
  paths.map((item) => {
    item.params.tags.map((tag) => {
      if (allTags.indexOf(tag) === -1) {
        allTags.push(tag);
      }
    });
  });

  return {
    props: {
      config: configData,
      paths,
      tags: allTags,
      seo: {
        title: configData.title,
        description: configData.tagline,
      },
    },
  };
}
