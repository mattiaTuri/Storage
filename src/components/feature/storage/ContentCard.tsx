import Typography from "@mui/material/Typography";

interface ContentCardProps {
  row: string;
  col: string;
}

function ContentCard({ row, col }: ContentCardProps) {
  return (
    <div className="grid grid-cols-[150px_auto]">
      <Typography component="span">{col}:</Typography>
      <Typography component="p">{row}</Typography>
    </div>
  );
}

export default ContentCard;
