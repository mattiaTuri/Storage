import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

interface TextBoxProps {
  col: string;
  row: string;
}

function TextBox({ col, row }: TextBoxProps) {
  return (
    <Box className="sm:grid sm:grid-cols-[120px_auto] lg:grid-cols-[80px_auto]">
      <Typography className="break-words" variant="caption" component="span">
        {col}:
      </Typography>
      {col === "Link" ? (
        <Link
          href={row}
          target="_blank"
          variant="caption"
          className="break-all"
        >
          {row}
        </Link>
      ) : (
        <Typography variant="caption" component="p" className="break-all">
          {row}
        </Typography>
      )}
    </Box>
  );
}

export default TextBox;
