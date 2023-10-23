import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export const starGenerator = (rating: number): JSX.Element[] => {
  return Array.from({ length: 5 }, (_, i) => {
    if (rating > i + 1) {
      return <BsStarFill key={i} className="text-yellow-500" />;
    } else if (rating >= i + 0.5) {
      return <BsStarHalf key={i} className="text-yellow-500" />;
    } else {
      return <BsStar key={i} className="text-yellow-500" />;
    }
  });
};
