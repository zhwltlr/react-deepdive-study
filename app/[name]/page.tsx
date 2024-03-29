import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";

export default function Dashboard({ params }: { params: any }) {
  const writer = params.name;
  const files = fs.readdirSync(path.join(writer));
  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(writer, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className="flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">{writer}</h1>
        <Link
          className="hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
          href={"/"}
        >
          Home
        </Link>
      </div>
      <section className="py-10">
        <h2 className="text-2xl font-bold">Weekly Posting</h2>

        <div className="py-2">
          {posts.map((post) => (
            <Link href={params.name + "/" + post.slug} passHref key={post.slug}>
              <div className="py-2 flex justify-between align-middle gap-2">
                <div>
                  <h3 className="text-lg font-bold">{post.meta.title}</h3>
                  <p className="text-gray-400">{post.meta.description}</p>
                </div>
                <div className="my-auto text-gray-400">
                  <p>{post.meta.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
