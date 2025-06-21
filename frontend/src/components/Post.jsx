import { useState } from "react";

const Post = () => {
  const [likes, setLikes] = useState(87);
  const [comments, setComments] = useState(20); // static for now

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Jese Leos"
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                  >
                    Jese Leos
                  </a>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Graphic Designer, educator & CEO Flowbite
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    <time
                      pubdate="true"
                      dateTime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h6 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              Best practices for successful prototypes
            </h6>
          </header>

          <p className="lead text-lime-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>

          <figure>
            <img
              src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
              alt=""
            />
            <figcaption>Digital art by Anonymous</figcaption>
          </figure>

          {/* Like & Comment Buttons */}
          <div className="flex items-center space-x-6 mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setLikes(likes + 1)}
              className="flex items-center text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
                <img   className="w-6 h-6 mr-1" src="data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMi43ODEgMi4zNzVjLS4zODEtLjQ3NS0xLjE4MS0uNDc1LTEuNTYyIDBsLTggMTBBMS4wMDEgMS4wMDEgMCAwIDAgNCAxNGg0djdhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTdoNGExLjAwMSAxLjAwMSAwIDAgMCAuNzgxLTEuNjI1bC04LTEwek0xNSAxMmgtMXY4aC00di04SDYuMDgxTDEyIDQuNjAxIDE3LjkxOSAxMkgxNXoiLz48L3N2Zz4=" alt="" />
              {/* <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              > */}
                <path d="" />
             
              <span>{likes}</span>
            </button>

            
          </div>

          {/* Rest of your comment section here (you already have it below) */}
        </article>
      </div>
    </main>
  );
};

export default Post;
