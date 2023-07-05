import { format } from "date-fns";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { SocialShareButton } from "@/components/SocialShareButton";
import { Footer } from "@/components/Footer";
import { getAllPostSlug, getPostData } from "@/lib/posts";
import configData from "@/config/config.json";
import CodeBlock from "@/components/CodeBlock";
import { redirect } from "next/navigation";
import styles from "@/styles/Article.module.css";

type PageProps = {
  params: {
    slug: string;
  };
};

type MetaProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: MetaProps) {
  // read from route
  const slug = params.slug;
  const hostname = process.env.hostname;

  // get post data
  const postData = await getPostData(slug);

  if (postData === null)
    return {
      title: configData.title,
      description: configData.tagline,
    };

  const description = postData.content
    .replace(/\r?\n|\r/gm, "")
    .substring(0, 158);

  return {
    title: postData.title,
    description,
    openGraph: {
      title: postData.title,
      description: description,
      url: `${hostname}/posts/${slug}`,
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
  };
}

const getPostDataFromSlug = async (slug: string) => {
  const postData = await getPostData(slug);

  if (postData === null) {
    return {
      postData: null,
      slug,
    };
  }

  const description =
    postData?.content.replace(/\r?\n|\r/gm, "").substring(0, 158) ?? "";

  return {
    postData: {
      ...postData,
      description,
    },
    slug,
  };
};

export async function generateStaticParams() {
  const slugs = getAllPostSlug();

  return slugs.map((slug) => {
    slug;
  });
}

export default async function Page({ params }: PageProps) {
  const { postData, slug } = await getPostDataFromSlug(params.slug);

  if (postData === null) {
    redirect("/404");
  }

  return (
    <div className={`mt-4 md:mt-0`}>
      <main className="container md:p-8 mx-auto">
        <a className={`block mb-10 underline text-center`} href="/">
          Go back to homepage
        </a>

        <article className="max-w-4xl mb-10 mx-auto bg-dark-800 md:rounded-md">
          <header className={`mb-12`}>
            <div className="px-6 pb-6 pt-12 ">
              <h1 className="text-4xl font-bold mb-4">{postData?.title}</h1>
              <div className="flex items-baseline">
                <p className="text-sm mr-auto">
                  Published {format(new Date(postData?.date), "MMM d, yyyy")}
                </p>
                <SocialShareButton data={postData} />
              </div>
            </div>
            <div className="w-full md:rounded">
              <Image
                src={postData?.image}
                width={900}
                height={500}
                alt="post image"
              />
            </div>
          </header>

          <ReactMarkdown
            children={postData?.content}
            className={`${styles.postBody} px-6 pb-6`}
            components={{
              code: CodeBlock as any,
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
