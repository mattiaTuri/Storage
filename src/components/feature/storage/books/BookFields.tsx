import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem, Rating, Typography } from "@mui/material";
import TextInput from "../TextInput";
import { useSelector } from "react-redux";
import { errorsSelector } from "../../../../store/errors/selector";
import RatingStars from "../../../shared/RatingStars";
import { ChangeEvent } from "react";
import { BooksProps } from "../../../../models/Book";

interface BooksFieldProps {
  bookValues: BooksProps
  onValChanges: (e: ChangeEvent<HTMLInputElement>) => void;
  onValSelected: (e:any) => void;
  onValChangesYear: (e:any) => void;
  onValRating: (e: any) => void;
}

function BooksField({ bookValues, onValChanges, onValSelected, onValChangesYear, onValRating }: BooksFieldProps) {
  const { t } = useTranslation();
  const errors = useSelector(errorsSelector)

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
    <Box
      id="modal-modal-description"
      className="flex flex-col gap-10 mt-10"
      component="form"
    >
      <Box className="flex flex-col gap-10">
        <TextInput id="title" label={`${t("title")} *`} name="title" onChange={(e) => onValChanges(e)} autofocus={true} labelError={errors.titleError.label} errorVisibility={errors.titleError.errorVisibility}/>
        <TextInput id="author" label={t("author")} name="author" onChange={(e) => onValChanges(e)} autofocus={false} labelError={""} errorVisibility={false}/>
        <div className="w-full">
        {errors.genreError.errorVisibility && <Typography variant="caption" component="p" color="#ef233c" className="pb-2">{errors.genreError.label}</Typography>}
          <FormControl className="w-full">
            <InputLabel sx={{ color: "text.primary" }} id="genre-label">
              {`${t("genre")} *`}
            </InputLabel>
            <Select
              labelId="genre-label"
              name="genre"
              label={`${t("genre")} *`}
              onChange={(e) => onValSelected(e)}
              sx={{
                backgroundColor: "text.secondary",
                borderRadius: "4px",
                "& .MuiSelect-icon": {
                  color: "text.primary",
                },
              }}
            >
              {genresList.map((genre: any) => {
                return (
                  <MenuItem key={genre.key} value={genre.key}>
                    {genre.translation}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </Box>
      <Box className="flex items-center gap-10">
        <Box className="flex gap-2 items-center">
          <Typography className="w-max" component="legend">{`${t("rating")} *`}</Typography>
          <RatingStars functionChange={(e) => onValRating(e)}/>
        </Box>
        <TextInput id="reading_year" label={`${t("reading_year")} *`} name="reading_year" type="tel" value={bookValues.reading_year} onChange={(e) => onValChangesYear(e)} autofocus={false} labelError={errors.readingYearError.label} errorVisibility={errors.readingYearError.errorVisibility}/>
      </Box>
      <Box>
        <Typography component="span" variant="caption">* = {t("required_fields")}</Typography>
      </Box>
    </Box>
  );
}

export default BooksField;
