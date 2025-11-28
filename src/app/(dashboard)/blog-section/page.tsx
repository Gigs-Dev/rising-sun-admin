import Image from "next/image";
import BlogHeader from "./section/BlogHeader";

export default function BlogPage() {
  return (
    <div className="flex-col-view gap-6">
      <BlogHeader/>
    </div>
  );
}
