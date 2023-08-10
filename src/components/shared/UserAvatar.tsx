import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function UserAvatar() {
  return (
    <Avatar sx={{ backgroundColor: "#0066ff", height: 120, width: 120 }}>
      <Typography component="span" className="text-white" sx={{ fontSize: 30 }}>
        TM
      </Typography>
    </Avatar>
  );
}

export default UserAvatar;
