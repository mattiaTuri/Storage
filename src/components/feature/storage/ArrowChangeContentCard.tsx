import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface ArrowChangeContentCardProps {
  disabledLeftArrow: boolean;
  disabledRightArrow: boolean;
  loadPreviusFiveElem: () => void;
  loadNextFiveElem: () => void;
}

function ArrowChangeContentCard({
  disabledLeftArrow,
  disabledRightArrow,
  loadPreviusFiveElem,
  loadNextFiveElem,
}: ArrowChangeContentCardProps) {
  return (
    <Box className="flex justify-center pb-10">
      <IconButton
        onClick={() => loadPreviusFiveElem()}
        disabled={disabledLeftArrow}
        className={`${disabledLeftArrow && "opacity-30"}`}
      >
        <KeyboardArrowLeftIcon fontSize="large" className="text-white" />
      </IconButton>
      <Typography component="span"></Typography>
      <IconButton
        onClick={() => loadNextFiveElem()}
        disabled={disabledRightArrow}
        className={`${disabledRightArrow && "opacity-30"}`}
      >
        <KeyboardArrowRightIcon fontSize="large" className="text-white" />
      </IconButton>
    </Box>
  );
}

export default ArrowChangeContentCard;
