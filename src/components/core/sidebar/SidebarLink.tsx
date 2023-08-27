import { Link } from "react-router-dom";
import { ChangeMenu, CheckActiveLink } from "./sidebarFunctions";
import { ReactNode, useEffect } from "react";
import { Box, Typography } from "@mui/material";

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
    <Box
      className="text-[#c4c4c4] z-10"
      sx={{ "&:hover": { color: "primary.main" } }}
    >
      <Link
        id={id}
        to={href}
        className="h-10 w-full flex items-center gap-2 duration-300 break-all"
        onClick={() => ChangeMenu(id)}
        onMouseEnter={() => CheckActiveLink(id)}
      >
        {children}
        <Typography component="span">{link}</Typography>
      </Link>
    </Box>
  );
}

export default SidebarLink;
