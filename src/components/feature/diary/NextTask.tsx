import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Chip, IconButton } from "@mui/material";

interface TaskProps {
  title: string;
  date: string;
  chip: string;
  description: string;
  task: string[];
}

function NextTask() {
  return (
    <Card
      className="bg-white flex"
      sx={{
        minWidth: 275,
        borderRadius: "0.5rem",
        width: "500px",
      }}
    >
      <CardActions sx={{ alignItems: "flex-start" }}>
        <IconButton className="bg-[#474862]">
          <SportsSoccerIcon fontSize="large" />
        </IconButton>
      </CardActions>
      <CardContent className="w-full flex flex-col justify-between gap-4">
        <Box className="flex justify-between items-center">
          <Typography variant="subtitle1" component="span" color="#efa135">
            Football Match
          </Typography>
          <Typography variant="subtitle2" component="p" color="#efa135">
            15 Mar 2023 - 9:00
          </Typography>
        </Box>
        <Box>
          <Chip label="Football" sx={{ backgroundColor: "#efa135" }} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default NextTask;
