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

const links: LinkComponent[] = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/products",
    text: "Products",
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

export const LinksComponent = () => {
  return (
    <ul className="flex gap-5">
      {links.map((link) => {
        return (
          <li key={link.text}>
            <Link to={link.url}>
              <p className="text-xl font-medium">{link.text}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const SocialComponet = () => {
  return (
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
  );
};
