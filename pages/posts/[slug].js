import ReactMarkdown from "react-markdown";
import styles from "../../styles/Home.module.css";
import configData from "../../config.json";
import { getAllPostNames, getPostData } from "../../lib/posts";

export default function Posts({ postData, configData }) {
  return (
    <div>
      <header></header>
      <main className="container p-8 mx-auto">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-8 text-center">{postData.title}</h1>
          <h3 className="text-2xl mb-8 text-center">{postData.subtitle}</h3>
          <ReactMarkdown
            children={postData.content}
            className="markdown-body"
          />
        </article>
        <section></section>
      </main>
      <footer className={styles.footer}>
        <p>{configData.footerContent}</p>
      </footer>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
      configData,
    },
  };
}
