import service from "@/app/lib/hygraphServices"
import BlogCard from "@/app/components/cards/BlogCard";
import SectionTitle from "../components/heading/sectionTitle";

const BlogPage = async () => {
  const {blogs} = await service.getBlogs();
  return (
    <>
      <SectionTitle
        title="Blogs & Articles"
        excerpt="DelTech MUN & DebSoc stands 56 Council Members and 60+ Diplomats strong. Ready to take onto ant challenge of the world. Reach out to us ! We are happy to discuss the pressing problems of the world even when the clock strikes midnight."
      />
      <div className="flex flex-wrap justify-center items-center my-12 max-w-full mx-auto gap-10 py-5">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            img={blog.thumbnail.url}
            excerpt={blog.excerpt}
            createdAt={blog.createdAt.slice(0, 10)}
            authorName={blog.author.name}
            authorPhoto={
              blog.author.photo?.url ||
              "/img/avatar.png"
            }
            slug={blog.id}
          />
        ))}
      </div>
    </>
  );
};

export default BlogPage;
