import Container from "../shared/Container";
import { useThemeStore } from "../../store/ThemeStore";
import logoLight from "../../assets/logo-for-light.png";
import logoDark from "../../assets/logo-for-dark.png";
import { navItems } from "./Navbar";
import NavItem from "../shared/NavItem";

const Footer = () => {
  const { theme } = useThemeStore();

  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            {theme === "dark" ? (
              <img src={logoDark} alt="" className="rounded-lg w-7 h-7" />
            ) : (
              <img src={logoLight} alt="" className="rounded-lg w-7 h-7" />
            )}
            <span className="text-lg font-semibold text-heading-1">NexAI</span>
          </div>
        <ul className="flex gap-6 text-heading-1">
          {navItems.map((item,key)=>(
            <NavItem key={key} href={item.href} text={item.text} />
          ))}
        </ul>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
