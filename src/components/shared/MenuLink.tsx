import { Link } from "react-router-dom";
import { ChangeMenu, CheckActiveLink } from "../core/sidebar/sidebarFunctions";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { SidebarLinkProps } from "../../models/ComponentsModels";

function MenuLink({
  id,
  href,
  link,
  fontSize,
  children,
  clickFunction,
}: SidebarLinkProps) {
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
        onClick={clickFunction}
        onMouseEnter={() => CheckActiveLink(id)}
      >
        {children}
        <Typography sx={{ fontSize: fontSize }} component="span">
          {link}
        </Typography>
      </Link>
    </Box>
  );
}

export default MenuLink;
