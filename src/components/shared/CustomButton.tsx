import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface CustomButtonProps{
  title:string;
  children: ReactNode;
}

function CustomButton({title, children}: CustomButtonProps) {
  return <Button sx={{ ":hover":{bgcolor:"initial", borderColor:"#efa135"}, border: "1px solid #efa135"}} variant="outlined" className="group relative overflow-hidden">
          <Box className="absolute bottom-0 origin-bottom group-hover:h-[120%] group-hover:w-full w-0 h-0 rounded bg-[#efa135] duration-300 "></Box>
          {children}
          <Typography component="span" className="text-[#474862] group-hover:text-white duration-500 px-4 z-10">{title}</Typography>
        </Button>;
}

export default CustomButton;
