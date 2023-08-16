import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

function UserAvatar({acronym}: {acronym:string}) {

  const [newAcronym, setNewAcronym] = useState<string>(acronym)

  useEffect(() => {
    setNewAcronym(acronym)
  },[acronym])

  return (
    <Avatar sx={{ backgroundColor: "#0066ff", height: 120, width: 120 }}>
      <Typography component="span" className="text-white" sx={{ fontSize: 30 }}>
        {newAcronym}
      </Typography>
    </Avatar>
  );
}

export default UserAvatar;
