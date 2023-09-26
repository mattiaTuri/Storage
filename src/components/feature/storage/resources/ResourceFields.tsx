import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import TextInput from "../TextInput";
import { useSelector } from "react-redux";
import { errorsSelector } from "../../../../store/errors/selector";

interface ResourcesFieldProps {
  onValChanges: (e: any) => void;
}

function ResourceField({ onValChanges }: ResourcesFieldProps) {
  const { t } = useTranslation();
  const errors = useSelector(errorsSelector)
  return (
    <Box
      id="modal-modal-description"
      className="flex flex-col gap-10 mt-10"
      component="form"
    >
      <Box className="flex flex-col gap-10">
        <TextInput id="title" label={t("title")} name="title" onChange={(e) => onValChanges(e)} autofocus={true} labelError={errors.titleError.label} errorVisibility={errors.titleError.errorVisibility}/>
        <TextInput id="author" label={t("author")} name="author" onChange={(e) => onValChanges(e)} autofocus={false} labelError="" errorVisibility={false}/>
        <TextInput id="description" label={t("description")} name="description" onChange={(e) => onValChanges(e)} autofocus={false} labelError="" errorVisibility={false}/>
        <TextInput id="tag" label={t("tag")} name="tag" onChange={(e) => onValChanges(e)} autofocus={false} labelError="" errorVisibility={false}/>
      </Box>
    </Box>
  );
}

export default ResourceField;
