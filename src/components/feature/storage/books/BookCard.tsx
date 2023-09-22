import { Card, CardContent, Typography } from "@mui/material"
import Box from "@mui/material/Box"

function BookCard({rows, cols}:any){
    return (
        <Box className="flex flex-col gap-4">
            <Card key={1}>
                <CardContent className="flex flex-col gap-1">
                    <div key={rows.id} className="grid grid-cols-[100px_auto]">
                        <Typography component="span">:</Typography>
                        <p></p>
                    </div>
                </CardContent>
            </Card>   
    </Box>
    )
}

export default BookCard