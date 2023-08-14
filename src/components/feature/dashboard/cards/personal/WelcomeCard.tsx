import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import UserAvatar from "../../../../shared/UserAvatar";
import Box from "@mui/material/Box";

function WelcomeCard() {
  return (
    <Card className="border border-[#434343]">
      <CardContent className="flex justify-between items-center h-full ">
        <Box>
          <Typography gutterBottom variant="h5" component="h2">
            Hello Mattia!
          </Typography>
          <Typography component="p">It is good to see you again</Typography>
        </Box>
        <UserAvatar />
      </CardContent>
    </Card>
  );
}

export default WelcomeCard;
