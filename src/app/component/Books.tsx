import Image from "next/image";

interface BookCardProps {
  title: string;
  authors: string;
  description: string;
  image: string;
  id: string;
}

const BookCard = ({ title, authors, description, image }: BookCardProps) => {
  return (

    <>

  
 <div className="  border-4 border-blue-800 p-4 rounded-lg shadow-md h-full transform transition-transform duration-300 hover:scale-105">
 
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

 
      <p className="text-white -700 mb-2">
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
          <p className="text-white text-center mb-4">No Image Available</p>
        )}

      {/* Description */}
      <div className="text-white overflow-auto max-h-20">
        {description || "No Description"}
      </div>
    </div>
       

        </>
  );
};

export default BookCard;
