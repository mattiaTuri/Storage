import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import { RatingStarsProps } from '../../models/ComponentsModels';

function RatingStars({starsValue, functionChange} : RatingStarsProps){
    return (
        <Rating name="rating" value={starsValue} precision={0.5} max={5} emptyIcon={<StarBorderIcon fontSize="small" color="secondary"/>} icon={<StarIcon fontSize="small" color="primary" />} onChange={functionChange}/>
    )
}

export default RatingStars