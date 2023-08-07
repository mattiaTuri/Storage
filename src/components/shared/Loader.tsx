import CircularProgress from "@mui/material/CircularProgress"

interface SpinnerProps{
    size:number;
    color:string;
}

function Loader({size, color}:SpinnerProps){
    return (
        <CircularProgress size={size} sx={{ color: color }} />
    )

}

export default Loader