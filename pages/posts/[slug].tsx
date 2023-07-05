import ReactMarkdown from "react-markdown";
import configData from "../../config.json";
import { getAllPostNames, getPostData } from "../../src/lib/posts";
import CodeBlock from "../../src/components/CodeBlock";
import { format } from "date-fns";
import { postBody } from "../../styles/Article.module.css";
import { Footer } from "../../src/components/Footer";
import { SocialShareButton } from "../../src/components/SocialShareButton";
import Image from "next/image";

export default function Posts({ postData, configData }) {
  return (
    <div className={`mt-4 md:mt-0`}>
      <main className="container md:p-8 mx-auto">
        <a className={`block mb-10 underline text-center`} href="/">
          Go back to homepage
        </a>

        <article className="max-w-4xl mb-10 mx-auto bg-dark-800 md:rounded-md">
          <header className={`mb-12`}>
            <div className="px-6 pb-6 pt-12 ">
              <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
              <h3 className="text-xl font-semibold mb-4">
                {postData.subtitle}
              </h3>
              <div className="flex items-baseline">
                <p className="text-sm mr-auto">
                  Published {format(new Date(postData.date), "MMM d, yyyy")}
                </p>
                <SocialShareButton data={postData} />
              </div>
            </div>
            <div className="w-full md:rounded">
              <Image src={postData.image} width={900} height={500} />
            </div>
          </header>

          <ReactMarkdown
            children={postData.content}
            className={`${postBody} px-6 pb-6`}
            components={{
              code: CodeBlock,
            }}
          />
        </article>

        <div className={`text-center`}>
          <p>Copy Link</p>
          <SocialShareButton
            data={postData}
            className={`my-4 space-x-2 flex justify-center items-center`}
          />
        </div>
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
  const hostname = process.env.hostname;
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
          url: `${hostname}/posts/${params.slug}`,
          type: "article",
          article: {
            publishedTime: postData.date,
            tags: postData.tags,
            authors: ["@kenaszogara"],
          },
          images: [
            {
              url: `${hostname}${postData.image}`,
              width: 800,
              height: 500,
              alt: "Photo of post",
            },
          ],
        },
      },
    },
  };
}
