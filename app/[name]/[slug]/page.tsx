import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

function getPost({ name, slug }: { name: string; slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), name, slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <>
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
        <h1>{props.frontMatter.title}</h1>
        <MDXRemote source={props.content} />
      </article>
      <div className="flex justify-between mt-20">
        <Link
          href={`/${params.name}`}
          className="hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </Link>
        <Link
          href={"/"}
          className="hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
        >
          Home
        </Link>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: any) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}
