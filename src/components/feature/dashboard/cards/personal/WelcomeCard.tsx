import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import UserAvatar from "../../../../shared/UserAvatar";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { userSelector } from "../../../../../store/user/selector";
import Loader from "../../../../shared/Loader";
import { useTranslation } from "react-i18next";

function WelcomeCard() {
  const user = useSelector(userSelector);
  const { t } = useTranslation();
  return (
    <Card className="border border-[#434343]">
      <CardContent className="flex justify-center items-center gap-10 h-full relative">
        {user.loading ? (
          <>
            <Box>
              <Typography gutterBottom variant="h5" component="h2">
                {t("greeting")} {user.currentUser.name}!
              </Typography>
              <Typography component="p">{t("welcome_phrase")} </Typography>
            </Box>
            <UserAvatar acronym={user.currentUser.acronym} />
          </>
        ) : (
          <Loader size={40} color="#0066ff" />
        )}
      </CardContent>
    </Card>
  );
}

export default WelcomeCard;
