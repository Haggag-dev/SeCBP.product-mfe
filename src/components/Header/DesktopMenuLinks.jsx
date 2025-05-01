import { useActiveLinkAtom } from "../../stores/active-link";

const DesktopMenuLinks = ({ links }) => {
  const [activeLink, setActiveLink] = useActiveLinkAtom();

  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-x-4 text-sm font-semibold">
        {links.map((link, index) => (
          <li key={index}>
            <a
              onClick={() => setActiveLink(index)}
              className={`cursor-pointer hover:border-solid hover:border-b-black hover:border-b-1  ${
                activeLink === index
                  ? "text-black border-solid border-b-black border-b-1"
                  : ""
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenuLinks;
