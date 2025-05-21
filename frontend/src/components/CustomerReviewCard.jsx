import { Star } from "lucide-react";

export default function CustomerReviewCard({ name, review, location, rating = 5 }) {
  return (
    <div className="bg-white  shadow-2xl rounded-2xl h-52 p-4 m-2 max-w-sm w-full">
      <div className="flex items-center  mb-2 ">
        <div className="h-12 w-12 bg-blue-100 text-blue-600 font-bold rounded-full flex items-center justify-center text-lg">
          {name[0]}
        </div>
        <div className="ml-4">
          <h4 className="text-sm sm:text-lg font-semibold">{name}</h4>
          <p className="text-sm sm:text-lg text-gray-500">{location}</p>
        </div>
      </div>
<p className="text-gray-700 text-sm mb-4 w-full h-18 break-words ">
  “{review}”
</p>

      <div className="flex items-center">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
    </div>
  );
}
