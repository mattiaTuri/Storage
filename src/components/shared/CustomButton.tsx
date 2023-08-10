import { Button, Icon, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CustomButtonProps {
  id: string;
  title: string;
  functionClick: () => void;
  children?: ReactNode;
}

function CustomButton({
  id,
  title,
  functionClick,
  children,
}: CustomButtonProps) {
  return (
    <Button
      id={id}
      variant="outlined"
      className="group relative flex gap-2 overflow-hidden h-[40px] after:content-[''] after:absolute after:bg-[#efa135] after:dark:bg-[#522AA7] after:w-60 after:h-60 after:top-[100%] hover:after:top-[-100%] after:duration-500 after:rounded-full"
      onClick={functionClick}
    >
      {children}
      <Typography
        component="span"
        className="text-[#474862] dark:text-white group-hover:text-white duration-500 ease-in-out z-10"
      >
        {title}
      </Typography>
    </Button>
  );
}

export default CustomButton;
