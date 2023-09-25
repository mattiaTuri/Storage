import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

interface ContentCardProps {
  row: string;
  col: string;
}

function ContentCard({ row, col }: ContentCardProps) {
  return (
    <div className="grid grid-cols-[150px_auto]">
      <Typography variant="caption" component="span">{col}:</Typography>
      {col == "Link" ? <Link href={row} target="_blank" variant="caption" className="break-all">{row}</Link> : <Typography variant="caption" component="p" className="break-all">{row}</Typography>}
    </div>
  );
}

export default ContentCard;
 