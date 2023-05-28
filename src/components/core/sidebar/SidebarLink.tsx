import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { ChangeMenu, HideHoverLink, ShowHoverLink } from "./sidebarFunctions";
import { ReactNode } from "react";

interface SidebarLinkProps {
  id: string;
  title: string;
  href: string;
  children: ReactNode;
}

function SidebarLink({ id, title, href, children }: SidebarLinkProps) {
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
      {/* <Typography variant="body1" component="span">
        {title}
      </Typography> */}
    </Link>
  );
}

export default SidebarLink;
