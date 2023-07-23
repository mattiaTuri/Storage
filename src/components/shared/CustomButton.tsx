import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector } from "../../store/modal/selector";
import { openModal } from "../../store/modal/modalSlice";

interface CustomButtonProps {
  title: string;
}

function CustomButton({ title }: CustomButtonProps) {
  const dispatch = useDispatch();

  return (
    <Button
      sx={{
        ":hover": { bgcolor: "initial", borderColor: "#efa135" },
        border: "1px solid #efa135",
      }}
      variant="outlined"
      className="group relative overflow-hidden"
      onClick={() => dispatch(openModal())}
    >
      <Box className="absolute bottom-0 origin-bottom group-hover:h-[120%] group-hover:w-full w-0 h-0 rounded bg-[#efa135] duration-300 "></Box>
      <Typography
        component="span"
        className="text-[#474862] group-hover:text-white duration-500 px-4 z-10"
      >
        {title}
      </Typography>
    </Button>
  );
}

export default CustomButton;
