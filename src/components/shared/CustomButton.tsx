import { Button, Typography } from "@mui/material";
import { CustomButtonProps } from "../../models/ComponentsModels";

function CustomButton({
  id,
  title,
  functionClick,
  children,
  disabled,
}: CustomButtonProps) {
  return (
    <Button
      id={id}
      variant="outlined"
      sx={{
        border: 2,
        "&:hover": {
          border: 2,
        },
        "&:hover:after": {
          backgroundColor: "primary.main",
        },
      }}
      className={`group relative flex gap-2 overflow-hidden after:content-[''] after:absolute after:w-60 after:h-60 after:top-[100%] hover:after:top-[-100%] after:duration-500 after:rounded-full ${
        disabled && "opacity-50"
      }`}
      onClick={functionClick}
    >
      {children}
      {title && <Typography
        component="span"
        className="group-hover:text-white duration-500 ease-in-out z-10"
        color="text.primary"
      >
        {title}
      </Typography>}   
    </Button>
  );
}

export default CustomButton;
