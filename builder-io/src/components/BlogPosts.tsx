"use client";

import { useState, useMemo } from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

interface BlogCardProps {
  data: {
    title: string;
    description: string;
    image: string;
    data: {
      authorImage: string;
      authorName: string;
      category: string;
      time: number;
    };
  }[];
}

export default function BlogCards({ data }: BlogCardProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const postsPerPage = 6;
  console.log(data);
  const filteredPosts = useMemo(() => {
    setCurrentPage(1);
    return data.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const FilterIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-[#00C7BE]"
    >
      <path
        d="M10.5 21V3M10.5 21L6 16.5M10.5 21L15 16.5"
        stroke="#00C7BE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7H18M3 12H15M3 17H12"
        stroke="#00C7BE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const renderPagination = () => {
    const pageNumbersToDisplay = [];
    const maxPagesToShow = 3;
    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbersToDisplay.push(i);
      }
    } else {
      if (currentPage <= maxPagesToShow - 1) {
        for (let i = 1; i <= maxPagesToShow; i++) {
          pageNumbersToDisplay.push(i);
        }
        pageNumbersToDisplay.push("...");
        pageNumbersToDisplay.push(totalPages);
      } else if (currentPage >= totalPages - (maxPagesToShow - 2)) {
        pageNumbersToDisplay.push(1);
        pageNumbersToDisplay.push("...");
        for (let i = totalPages - (maxPagesToShow - 1); i <= totalPages; i++) {
          pageNumbersToDisplay.push(i);
        }
      } else {
        pageNumbersToDisplay.push(1);
        pageNumbersToDisplay.push("...");
        pageNumbersToDisplay.push(currentPage - 1);
        pageNumbersToDisplay.push(currentPage);
        pageNumbersToDisplay.push(currentPage + 1);
        pageNumbersToDisplay.push("...");
        pageNumbersToDisplay.push(totalPages);
      }
    }

    return (
      <div className="flex text-black justify-center items-center space-x-1 md:space-x-2 mt-8">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="px-2 py-1"
        >
          <ChevronDoubleLeftIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        {pageNumbersToDisplay.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 rounded-full text-sm md:text-base ${
                currentPage === page ? "bg-[#00C7BE] text-white" : "text-black"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="px-1 md:px-2 py-1">
              {page}
            </span>
          )
        )}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 disabled:opacity-50"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 disabled:opacity-50"
        >
          <ChevronDoubleRightIcon className="h-5 w-5" />
        </button>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      <div className="md:w-[80%] ml-auto mr-auto w-full grid  md:grid-cols-[75%_25%]">
        <div className=""></div>
        <div className="relative my-8 mr-5 rounded-sm">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            <MagnifyingGlassIcon className="h-5 w-5 !text-[#00C7BE]" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 px-12 border border-[#00C7BE] placeholder:text-[#00C7BE] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00C7BE]"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-5">
            <FilterIcon />
          </span>
        </div>
      </div>

      <div className="flex ml-auto mr-auto h-full md:w-[80%]">
        <div className="w-full flex  flex-wrap ">
        {currentPosts?.map((post, index) => (
          <div key={index} className="w-[400px] rounded p-4 bg-white">
            <img
              width="100%"
              height="600px"
              src={post.image}
              alt={post.title}
              className="object-cover rounded"
            />
            <h3 className="text-[80%] md:text-lg font-bold mt-2 text-black py-3 ">
              {post.title}
            </h3>
            <p className="md:text-sm text-[#595959] py-2">{post.description}</p>
            <div className="w-full py-4 flex space-x-5 capitalize text-[#595959]">
              <div className="flex space-x-2">
                <img
                  src={post.data.authorImage}
                  width={40}
                  height={40}
                  alt=""
                />
                <span className="flex items-center">
                  {post.data.authorName}
                </span>
              </div>
              <span className="flex items-center bg-[#00C7BE] text-white px-3 py-1 rounded-full">
                {post.data.category}
              </span>
              <span className="flex items-center lowercase">
                {post.data.time} mins
              </span>
            </div>
          </div>
        ))}

        </div>
      </div>
      {totalPages > 1 && renderPagination()}
    </div>
  );
}
