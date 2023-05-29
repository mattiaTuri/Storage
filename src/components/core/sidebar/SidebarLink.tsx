import { Link } from "react-router-dom";
import { ChangeMenu, HideHoverLink, ShowHoverLink } from "./sidebarFunctions";
import { ReactNode, useEffect } from "react";

interface SidebarLinkProps {
  id: string;
  href: string;
  children: ReactNode;
}

function SidebarLink({ id, href, children }: SidebarLinkProps) {

  useEffect(() => {
    let sectionActive: string = window.location.pathname.replace("/", "");
    if (sectionActive === "") sectionActive = "dashboard";
    ChangeMenu(sectionActive);
  }, []);

  return (
    <Link
      id={id}
      to={href}
      className="h-10 w-full flex items-center justify-center z-10 duration-300"
      onClick={() => ChangeMenu(id)}
      onMouseEnter={() => ShowHoverLink(id)}
      onMouseLeave={() => HideHoverLink(id)}
    >
      {children}
    </Link>
  );
}

export default SidebarLink

