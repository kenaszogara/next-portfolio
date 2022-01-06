import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = "posts";

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // check if tags empty
  const tags = "tags" in matterResult.data ? matterResult.data.tags : [];

  // use placeholder if image not found
  const imgPlaceholder = "/images/posts/placeholder.png";
  const image =
    "image" in matterResult.data ? matterResult.data.image : imgPlaceholder;

  return {
    id,
    tags,
    image,
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
    const tags = "tags" in matterResult.data ? matterResult.data.tags : [];

    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
        ...matterResult.data,
        tags,
      },
    };
  });
}

export function getAllPostPagesPath() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(
    (fileName) => `${postsDirectory}/${fileName.replace(/\.md$/, "")}`
  );
}
