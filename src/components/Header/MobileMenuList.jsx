import { useToggleMenu } from "../../stores/toggle-menu";
import { useActiveLinkAtom } from "../../stores/active-link";

const MobileMenuLinks = ({ links }) => {
  const [toggleMenu] = useToggleMenu();
  const [activeLink, setActiveLink] = useActiveLinkAtom();

  return (
    <nav className="sm:hidden">
      <ul
        className={`flex flex-col text-sm gap-y-3 py-3 px-8 ${
          !toggleMenu ? "hidden" : ""
        }`}
      >
        {links.map((link, index) => (
          <li key={index} className="h-8">
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

export default MobileMenuLinks;
