import { Link } from "react-router-dom";
import { ChangeMenu, HideHoverLink, ShowHoverLink } from "./sidebarFunctions";
import { ReactNode, useEffect } from "react";
import { Typography } from "@mui/material";

interface SidebarLinkProps {
  id: string;
  href: string;
  link: string;
  children: ReactNode;
}

function SidebarLink({ id, href, link, children }: SidebarLinkProps) {
  useEffect(() => {
    let sectionActive: string = window.location.pathname.replace("/", "");
    if (sectionActive === "") sectionActive = "dashboard";
    ChangeMenu(sectionActive);
  }, []);

  return (
    <Link
      id={id}
      to={href}
      className="h-10 w-full flex items-center gap-2 z-10 duration-300"
      onClick={() => ChangeMenu(id)}
      onMouseEnter={() => ShowHoverLink(id)}
      onMouseLeave={() => HideHoverLink(id)}
    >
      {children}
      <Typography component="span">{link}</Typography>
    </Link>
  );
}

export default SidebarLink;
