import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = "posts";

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  console.log(matterResult);
  return {
    id,
    ...matterResult.data,
    content: matterResult.content,
  };
}

export function getAllPostNames() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, `${fileName}`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
        ...matterResult.data,
      },
    };
  });
}
