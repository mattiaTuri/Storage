import { Card, Typography } from "@mui/material"
import CardContent from "@mui/material/CardContent"

function TasksCard(){
    return (
        <Card className="bg-white dark:bg-[#262626] dark:border-[#434343] border">
            <CardContent>
                <Typography
                gutterBottom
                className="text-[#474862] dark:text-white"
                variant="h5"
                component="h2"
                >
                Tasks
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TasksCard