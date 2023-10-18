import { useTranslation } from "react-i18next";
import TextInput from "../storage/TextInput"
import Box from "@mui/material/Box";
import SelectInput from "../../shared/SelectBox";
import { useSelector } from "react-redux";
import { errorsSelector } from "../../../store/errors/selector";
import { setGenreError } from "../../../store/errors/errorsSlice";
import { useDispatch } from "react-redux";

function ItemsField({itemValues, setItemValues}:any){
    const { t } = useTranslation();
    const errors = useSelector(errorsSelector)
    const dispatch = useDispatch()
   
    const onChangeVal = (event:any) => {
        setItemValues({ ...itemValues, [event.target.name]: event.target.value });
    }

    const onValSelected = (event: any) => {
        dispatch(setGenreError({genreLabel:"", genreErrorVisibility:false}))
        setItemValues({ ...itemValues, [event.target.name]: event.target.value });
      }
    
    return (
        <Box className="flex flex-col gap-10 mt-10">
             <TextInput id="title" label={`${t("title")} *`} name="title" onChange={(e) => onChangeVal(e)} autofocus={true} labelError="" errorVisibility={false}/>
             <TextInput id="author" label={`${t("author")}`} name="author" onChange={(e) => onChangeVal(e)} autofocus={false} labelError="" errorVisibility={false}/>
             {/* <SelectInput id="genre" label={`${t("genre")} *`} name="genre" onChange={(e) => onValSelected(e)} labelError={errors.genreError.label} errorVisibility={errors.genreError.errorVisibility}/> */}
        </Box>
    )
}

export default ItemsField