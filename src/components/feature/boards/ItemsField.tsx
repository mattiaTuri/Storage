import { useTranslation } from "react-i18next";
import TextInput from "../storage/TextInput"
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { errorsSelector } from "../../../store/errors/selector";
import { setGenreError } from "../../../store/errors/errorsSlice";
import { useDispatch } from "react-redux";
import SelectBox from "../../shared/SelectBox";

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

      const genresList = [
        {
          "key": "dystopian",
          "translation":t("genres.dystopian"),
        },
        {
          "key": "fantasy",
          "translation":t("genres.fantasy"),
        },
        {
          "key": "yellow",
          "translation":t("genres.yellow"),
        },
        {
          "key": "historian",
          "translation":t("genres.historian"),
        },
        {
          "key": "personal_grow",
          "translation":t("genres.personal_grow"),
        },
        {
          "key": "psychological",
          "translation":t("genres.psychological"),
        },
      ];
    
    return (
        <Box className="flex flex-col gap-10 mt-10">
             <TextInput id="title" label={`${t("title")} *`} name="title" onChange={(e) => onChangeVal(e)} autofocus={true} labelError="" errorVisibility={false}/>
             <TextInput id="author" label={`${t("author")}`} name="author" onChange={(e) => onChangeVal(e)} autofocus={false} labelError="" errorVisibility={false}/>
             <SelectBox id="genre" label={`${t("genre")} *`} selectLabel={`${t("genre")} *`} name="genre" onChange={(e) => onValSelected(e)} fixedLabel={false} labelError={errors.genreError.label} errorVisibility={errors.genreError.errorVisibility} objList={genresList} multiple={false}/>
        </Box>
    )
}

export default ItemsField