import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

interface LinkComponent {
  url: string;
  text: string;
}

interface SocialLinkComponent {
  url: string;
  icon: React.ReactNode;
}

interface ClassNameForLinkAndSocialComponents {
  classLink: string;
}

const links: LinkComponent[] = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/products",
    text: "Products",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];

const socialLink: SocialLinkComponent[] = [
  {
    url: "https://www.facebook.com/",
    icon: <FaFacebookSquare className="text-3xl fill-rose-700" />,
  },
  {
    url: "https://twitter.com/home?lang=it",
    icon: <FaInstagramSquare className="text-3xl fill-rose-700" />,
  },
  {
    url: "https://www.youtube.com/",
    icon: <FaYoutubeSquare className="text-3xl fill-rose-700" />,
  },
];

export const LinksComponent = ({
  classLink,
}: ClassNameForLinkAndSocialComponents) => {
  return (
    <div
      className={
        classLink === "navbar"
          ? "hidden md:block justify-self-center"
          : "flex flex-col justify-center items-center h-[60vh]"
      }
    >
      <ul className={classLink === "navbar" ? "flex gap-5" : "text-center"}>
        {links.map((link) => {
          return (
            <li
              key={link.text}
              className={classLink === "sidebar" ? "[&:nth-child(2)]:my-8" : ""}
            >
              <Link to={link.url}>
                <p
                  className={
                    classLink === "navbar"
                      ? "text-xl font-medium"
                      : "uppercase text-2xl font-medium"
                  }
                >
                  {link.text}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const SocialComponet = ({
  classLink,
}: ClassNameForLinkAndSocialComponents) => {
  return (
    <div
      className={
        classLink === "navbar"
          ? "hidden md:block justify-self-end"
          : "flex w-full justify-center"
      }
    >
      <ul className="flex gap-5">
        {socialLink.map((link) => {
          return (
            <li key={link.url}>
              <Link to={link.url}>
                <span>{link.icon}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
