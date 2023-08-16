import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import UserAvatar from "../../../../shared/UserAvatar";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { userSelector } from "../../../../../store/user/selector";
import Loader from "../../../../shared/Loader";

function WelcomeCard() {
  const user = useSelector(userSelector)
  return (
    <Card className="border border-[#434343]">
      <CardContent className="flex justify-center items-center gap-10 h-full">
        {user.loading ? <><Box>
          <Typography gutterBottom variant="h5" component="h2">
            Hello {user.currentUser.name}!
          </Typography>
          <Typography component="p">It is good to see you again</Typography>
        </Box>
        <UserAvatar acronym={user.currentUser.acronym}/></> : <Loader size={40} color="#0066ff"/>}
        
      </CardContent>
    </Card>
  );
}

export default WelcomeCard;
