import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import UserAvatar from "../../../../shared/UserAvatar";
import Box from "@mui/material/Box";

function WelcomeCard() {
  return (
    <Card className="bg-white dark:bg-[#262626] dark:border-[#434343] border">
      <CardContent className="flex justify-between items-center h-full ">
        <Box>
          <Typography
            gutterBottom
            className="text-[#474862] dark:text-white"
            variant="h5"
            component="h2"
          >
            Hello Mattia!
          </Typography>
          <Typography className="text-[#474862] dark:text-white" component="p">
            It is good to see you again
          </Typography>
        </Box>

        <UserAvatar />
      </CardContent>
    </Card>
  );
}

export default WelcomeCard;
