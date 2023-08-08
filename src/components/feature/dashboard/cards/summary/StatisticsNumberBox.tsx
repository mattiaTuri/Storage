import Typography from "@mui/material/Typography";
import AnimatedNumber from "../../../../shared/AnimatedNumber";
import Loader from "../../../../shared/Loader";

interface StatisticsNumberBoxProps{
    title:string;
    data:any;
    loading:boolean;
    primaryColor:string;
    secondaryColor:string;
}

function StatisticsNumberBox({title, data, loading, primaryColor, secondaryColor}: StatisticsNumberBoxProps){
    return (
        <div className={`flex justify-between items-center p-3 bg-[${primaryColor}] rounded-md w-full`}>
            <Typography component="p">{title}</Typography>

            <div
                className={`bg-[${secondaryColor}] max-w-max px-4 text-center rounded-md`}
            >
                {loading ? (
                <AnimatedNumber listLength={data.length}/>
                ) : (
                <Loader size={10} color={secondaryColor}/>
                )}
            </div>
        </div>
    )
}

export default StatisticsNumberBox