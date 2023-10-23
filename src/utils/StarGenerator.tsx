import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export const starGenerator = (rating: number) => {
  console.log(rating);

  const star = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      star.push(<BsStarFill key={i} className="text-yellow-400" />);
    } else if (i - 0.5 <= rating) {
      star.push(<BsStarHalf key={i} className="text-yellow-400" />);
    } else {
      star.push(<BsStar key={i} className="text-yellow-400" />);
    }
  }
  return star;
};
