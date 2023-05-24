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
      className="flex items-center gap-2 h-10 z-10 pl-2 duration-300"
      onClick={() => ChangeMenu(id)}
      onMouseEnter={() => ShowHoverLink(id)}
      onMouseLeave={() => HideHoverLink(id)}
    >
      {children}
      <Typography variant="body1" component="span">
        {title}
      </Typography>
    </Link>
  );
}

export default SidebarLink;
