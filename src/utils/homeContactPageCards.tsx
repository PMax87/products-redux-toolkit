import React, { ReactNode } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { GiHumanPyramid } from "react-icons/gi";

interface CardComponent {
  icon: ReactNode;
  title: string;
  text: string;
}

interface ClassCardCompoents {
  className: string;
}

const cardContent: CardComponent[] = [
  {
    icon: <FaTruckFast className="text-3xl" />,
    title: "Fast Deliver",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi id tempora dolor quaerat facilis adipisci mollitia harum voluptas nihil?",
  },
  {
    icon: <AiOutlineLike className="text-3xl" />,
    title: "Simply to use",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi id tempora dolor quaerat facilis adipisci mollitia harum voluptas nihil?",
  },
  {
    icon: <GiHumanPyramid className="text-3xl" />,
    title: "Human first",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi id tempora dolor quaerat facilis adipisci mollitia harum voluptas nihil?",
  },
];

export const Card = () => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      {cardContent.map((card, id) => {
        return (
          <div
            key={id}
            className="px-5 py-9 text-center flex flex-col justify-center bg-yellow-600/50 rounded"
          >
            <span className="mx-auto relative bg-slate-300 p-5 rounded-full">
              <span className="abosulte">{card.icon}</span>
            </span>
            <h3 className="text-2xl font-bold my-5">{card.title}</h3>
            <p>{card.text}</p>
          </div>
        );
      })}
    </article>
  );
};
