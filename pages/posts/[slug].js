import ReactMarkdown from "react-markdown";
import configData from "../../config.json";
import { getAllPostNames, getPostData } from "../../src/lib/posts";
import CodeBlock from "../../src/components/CodeBlock";
import { format } from "date-fns";
import { postBody } from "../../styles/Article.module.css";
import { Footer } from "../../src/components/Footer";
import { SocialShareButton } from "../../src/components/SocialShareButton";

export default function Posts({ postData, configData }) {
  return (
    <div className={`mt-4 md:mt-0`}>
      <main className="container p-8 mx-auto">
        <article className="max-w-4xl mx-auto">
          <header className={`text-center mb-12`}>
            <a className={`block mb-10 underline`} href="/">
              Go back to homepage
            </a>
            <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
            <h3 className="text-xl font-semibold mb-4">{postData.subtitle}</h3>
            <small className="text-sm">
              Published {format(new Date(postData.date), "MMM d, yyyy")}
            </small>

            <SocialShareButton data={postData} />
          </header>

          <ReactMarkdown
            children={postData.content}
            className={postBody}
            components={{
              code: CodeBlock,
            }}
          />
        </article>
      </main>

      <Footer config={configData} />
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
  const description = postData.content
    .replace(/\r?\n|\r/gm, "")
    .substring(0, 158);

  postData.description = description;
  postData.slug = params.slug;

  return {
    props: {
      postData,
      configData,
      seo: {
        title: postData.title,
        description: description,
        openGraph: {
          title: postData.title,
          description: description,
          url: `/posts/${params.slug}`,
          type: "article",
          article: {
            publishedTime: postData.date,
            tags: postData.tags,
          },
        },
      },
    },
  };
}
