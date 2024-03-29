import { useTranslation } from "react-i18next";
import TextInput from "../storage/TextInput";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { errorsSelector } from "../../../store/errors/selector";
import { setGenreError } from "../../../store/errors/errorsSlice";
import { useDispatch } from "react-redux";
import SelectBox from "../../shared/SelectBox";
import { genresList } from "../../../date/genresList";

function CardFields({ itemValues, setItemValues }: any) {
  const { t } = useTranslation();
  const errors = useSelector(errorsSelector);
  const dispatch = useDispatch();

  const onChangeVal = (event: any) => {
    setItemValues({ ...itemValues, [event.target.name]: event.target.value });
  };

  const onValSelected = (event: any) => {
    dispatch(setGenreError({ genreLabel: "", genreErrorVisibility: false }));
    setItemValues({ ...itemValues, [event.target.name]: event.target.value });
  };

  return (
    <Box className="flex flex-col gap-10 mt-10">
      <TextInput
        id="title"
        label={`${t("title")} *`}
        name="title"
        value={itemValues.title}
        onChange={(e) => onChangeVal(e)}
        autofocus={true}
        labelError=""
        errorVisibility={false}
      />
      <TextInput
        id="author"
        label={`${t("author")}`}
        name="author"
        value={itemValues.author}
        onChange={(e) => onChangeVal(e)}
        autofocus={false}
        labelError=""
        errorVisibility={false}
      />
      <SelectBox
        id="genre"
        label={`${t("genre")} *`}
        selectLabel={`${t("genre")} *`}
        name="genre"
        value={itemValues.genre}
        onChange={(e) => onValSelected(e)}
        fixedLabel={false}
        labelError={errors.genreError.label}
        errorVisibility={errors.genreError.errorVisibility}
        objList={genresList}
        multiple={false}
      />
    </Box>
  );
}

export default CardFields;
