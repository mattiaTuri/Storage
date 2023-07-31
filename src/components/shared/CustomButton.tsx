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
      className="group relative overflow-hidden h-12 w-24 after:content-[''] after:absolute after:bg-[#efa135] after:w-60 after:h-60 after:top-[100%] hover:after:top-[-100%] after:duration-500 after:rounded-full"
      onClick={() => dispatch(openModal())}
    >
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
