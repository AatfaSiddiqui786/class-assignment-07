"use client";

import { useState, useEffect } from "react";
import Loader from "../Loader";
import BookCard from "../Books";

// Define types for the book structure
type Book = {
  title: string;
  authors: string;
  description: string;
  image: string;
  id: string;
};

const Page = () => {
  const [books, setBooks] = useState<Book[]>([]); // Use the Book type for state
  const [loading, setLoading] = useState(true);

  const fetchBookDetails = async () => {
    try {
      const bookApi = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=12"
      );
      const response = await bookApi.json();

      // Map the response to match the Book type
      const bookItems: Book[] = response.items.map((item: { volumeInfo: { title: string; authors: string[]; description: string; imageLinks: { thumbnail: string } } }, id: number) => {
        const book = item.volumeInfo;
        return {
          title: book?.title || "No Title",
          authors: book?.authors?.join(", ") || "No Author",
          description: book?.description || "No Description",
          image: book?.imageLinks?.thumbnail || "",
          id: id.toString(), // Convert id to string
        };
      });

      setBooks(bookItems);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, []);

  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-3xl font-extrabold text-center text-white mb-8">Book List</h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              id={book.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
