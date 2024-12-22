import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  title: string;
  authors: string;
  description: string;
  image: string;
  id: string;
}

const BookCard = ({ title, authors, description, image ,id }: BookCardProps) => {
  return (

    <>

      <Link href={`/${id}`}>
    <div className="bg-white p-4 rounded-lg shadow-md h-full transform transition-transform duration-300 hover:scale-105">
 
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

 
      <p className="text-gray-700 mb-2">
        <strong>Author(s):</strong> {authors}
      </p>

      {image ? (
          <div className="flex justify-center mb-4">
          <Image
            src={image}
            alt={title}
            width={200}  
            height={300} 
            className="rounded"
            />
        </div>
      ) : (
          <p className="text-gray-500 text-center mb-4">No Image Available</p>
        )}

      {/* Description */}
      <div className="text-gray-600 overflow-auto max-h-20">
        {description || "No Description"}
      </div>
    </div>
        </Link>

        </>
  );
};

export default BookCard;
