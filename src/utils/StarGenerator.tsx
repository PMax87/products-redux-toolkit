import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export const starGenerator = (rating: number) => {
  const star = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      star.push(<BsStarFill key={i} />);
    } else if (i - 0.5 === rating) {
      star.push(<BsStarHalf key={i} />);
    } else {
      star.push(<BsStar key={i} />);
    }
  }
  return star;
};
