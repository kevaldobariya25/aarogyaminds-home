// "use client";
// import React, { useEffect, useState } from "react";
// import { getBlogs } from "./actions";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Assuming you are using Shadcn's card components
// import Image from "next/image";

// // Define the blog type
// interface Blog {
//   id: string;
//   title: string;
//   short_summary: string;
//   author: string;
//   img_url?: string;
// }

// const truncateSummary = (text: string, wordLimit: number) => {
//   const words = text.split(" ");
//   if (words.length > wordLimit) {
//     return words.slice(0, wordLimit).join(" ") + "...";
//   }
//   return text;
// };

// const Blogs: React.FC = () => {
//   const [blogs, setBlogs] = useState<Blog[]>([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const data: Blog[] = await getBlogs(); // Ensure that the fetched data is typed as Blog[]
//         setBlogs(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
//       {blogs.map((blog) => (
//         <Card key={blog.id} className="rounded-lg shadow-lg overflow-hidden">
//           {/* Image Section */}
//           <div className="h-48 w-full relative bg-gray-200">
//             {blog.img_url ? (
//               <Image
//                 src={blog.img_url}
//                 alt={blog.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-t-lg"
//               />
//             ) : (
//               <div className="h-full w-full flex items-center justify-center bg-gray-300">
//                 <span>No Image Available</span>
//               </div>
//             )}
//           </div>

//           {/* Blog Content */}
//           <CardContent className="p-4">
//             <CardHeader className="mb-4">
//               <CardTitle className="text-lg font-semibold">{blog.title}</CardTitle>

//               {/* Fixed height for summary */}
//               <div className="text-gray-600 mt-2 h-24 overflow-hidden">
//                 <CardDescription>
//                   {truncateSummary(blog.short_summary, 50)}
//                 </CardDescription>
//               </div>
//             </CardHeader>

//             {/* Read More Button */}
//             <div className="mt-4 flex justify-between items-center">
//               <button className="text-blue-600 hover:text-blue-800 font-semibold">
//                 Read More
//               </button>
//               <p className="text-sm text-gray-500">Author: {blog.author}</p>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Blogs;

////////////////////////////////////////////////////






"use client";
import React, { useEffect, useState } from "react";
import { getBlogs } from "./actions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Assuming you are using Shadcn's card components
import Image from "next/image";

// Define the blog type
interface Blog {
  id: string;
  title: string;
  short_summary: string;
  author: string;
  img_url?: string;
}

const truncateSummary = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data: Blog[] = await getBlogs(); // Ensure that the fetched data is typed as Blog[]
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8">
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          className="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl bg-white border border-gray-200"
        >
          {/* Image Section */}
          <div className="h-48 w-full relative bg-gray-200">
            {blog.img_url ? (
              <Image
                src={blog.img_url}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gray-300 text-gray-500">
                <span>No Image Available</span>
              </div>
            )}
          </div>

          {/* Blog Content */}
          <CardContent className="p-6">
            <CardHeader className="mb-4">
              <CardTitle className="text-xl font-bold text-gray-800">
                {blog.title}
              </CardTitle>

              {/* Fixed height for summary */}
              <div className="text-gray-600 mt-2 h-24 overflow-hidden">
                <CardDescription className="text-sm text-gray-600">
                  {truncateSummary(blog.short_summary, 50)}
                </CardDescription>
              </div>
            </CardHeader>

            {/* Read More Button */}
            <div className="mt-6 flex justify-between items-center">
              <button className="text-blue-500 hover:text-blue-700 font-medium transition-colors">
                Read More
              </button>
              <p className="text-sm text-gray-500 italic">By {blog.author}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Blogs;

