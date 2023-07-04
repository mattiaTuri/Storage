import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { IconButton } from "@mui/material";

interface TaskProps{
    title:string;
    date:string;
    description:string;
    task:string[];
}

function Task({title, date, description, task}: TaskProps) {
  return (
    <Box className="flex p-5">
        <IconButton className="h-max">
            <CircleOutlinedIcon/>
        </IconButton>
        <Card sx={{ width:500, borderRadius:"0.5rem" }}>
      <CardContent sx={{paddingTop:"24px"}}>
        <Box className="flex items-center justify-between">
            <Typography variant="subtitle1" component="h2">
            {title}
            </Typography>
            <Typography variant="subtitle2" component="span">
            {date}
            </Typography>
        </Box>
        <Box>
            <Typography  component="p">
            {description}
            </Typography>
        </Box>
        {task &&  
        <Box>
            <ul>
                {task.map((elem:string, index:number) => {
                    return (
                        <li key={index}>
                            <Typography  component="p">
                            {elem}
                            </Typography>
                        </li>
                    )
                })}
            </ul>

        </Box>
        }
      </CardContent>
    </Card>
    </Box> 
  )
}

export default Task;
