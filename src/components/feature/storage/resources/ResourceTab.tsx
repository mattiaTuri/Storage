import Box from "@mui/material/Box";
import CustomButton from "../../../shared/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CustomModal from "../CustomModal";
import Table from "../Table";
import { useState } from "react";
import { resourcesSelector } from "../../../../store/resources/selector";
import { ResourcesProps } from "../../../../models/Resource";
import { addResource } from "../../../../controller/resourcesApi";
import ResourceFields from "./ResourceFields";
import { useTranslation } from "react-i18next";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ActionDeleteResource from "./ActionDeleteResource";
import ResourceCard from "./ResourceCard";
import { setTitleError, setLinkError, setTagError } from "../../../../store/errors/errorsSlice";
import Chip from "@mui/material/Chip";
import { setAddResourcesModalVisibility } from "../../../../store/modals/modalsSlice";
import { modalsSelector } from "../../../../store/modals/selector";

function ResourceTab() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const resources = useSelector(resourcesSelector);
  const modals = useSelector(modalsSelector)
  const initialResourcesValues:ResourcesProps={
    id: "",
    title: "",
    link: "",
    description: "",
    tag: "",
  }

  const [resourceValues, setResourceValues] = useState<ResourcesProps>(initialResourcesValues)

  const addNewResource = () => {
    const resourceExist = resources.resourcesList.find((resource) => resource.title == resourceValues.title)
    if(!resourceExist && resourceValues.title != "" && resourceValues.link != "" && resourceValues.tag != ""){
      dispatch(addResource(resourceValues));
      setResourceValues(initialResourcesValues)
    }else{
      resourceValues.title == "" && dispatch(setTitleError({titleLabel:t("errors.empty_field"), titleErrorVisibility:true}))
      resourceValues.link == "" && dispatch(setLinkError({linkLabel:t("errors.empty_field"), linkErrorVisibility:true}))
      resourceValues.tag == "" && dispatch(setTagError({tagLabel:t("errors.empty_field"), tagErrorVisibility:true}))
    }
  };

  const onValChanges = (event: any) => {
    if(event.target.name == "title"){
      const resourceExist = resources.resourcesList.find((resource) => resource.title == event.target.value)
      if(resourceExist){
        dispatch(setTitleError({titleLabel:t("errors.resource_present"), titleErrorVisibility:true}))
      }else{     
        if(event.target.value == ""){
          dispatch(setTitleError({titleLabel:t("errors.empty_field"), titleErrorVisibility:true}))
        }else{
          dispatch(setTitleError({titleLabel:"", titleErrorVisibility:false}))
        }
      }
    }

    if(event.target.name == "link"){
      if(event.target.value == ""){
        dispatch(setLinkError({linkLabel:t("errors.empty_field"), linkErrorVisibility:true}))
      }else{
        dispatch(setLinkError({linkLabel:"", linkErrorVisibility:false}))
      }
    }

    if(event.target.name == "tag"){
      if(event.target.value == ""){
        dispatch(setTagError({tagLabel:t("errors.empty_field"), tagErrorVisibility:true}))
      }else{
        dispatch(setTagError({tagLabel:"", tagErrorVisibility:false}))
      }
    }

      setResourceValues({
        ...resourceValues,
        [event.target.name]: event.target.value,
      });
  };

  const resourceCol: GridColDef[] = [
    {
      field: "title",
      headerName: t("title"),
      flex:1,
      renderCell: (params) => {
        return (
          <Typography variant="caption" component="p">
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "link",
      headerName: t("link"),
      flex:1,
      renderCell: (params) => {
        return (
          <Link href={params.value} target="_blank" variant="caption">
            {params.value}
          </Link>
        );
      },
    },
    {
      field: "description",
      headerName: t("description"),
      type: "string",
      flex:1,
      renderCell: (params) => {
        return (
          <Typography variant="caption" component="p">
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "tag",
      headerName: t("tag"),
      type: "string",
      headerAlign: "center",
      align: "center",
      flex:1,
      renderCell: (params) => {
        return (
          <Chip label={params.value} color="primary" />
        );
      },
    },
    {
      field: "actions",
      headerName: t("delete"),
      type: "actions",
      flex:1,
      getActions: ({ id }) => {
        return [<ActionDeleteResource id={id} />];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%" }} className="flex flex-col h-full">
      <Box className="flex justify-end my-4">
        <CustomButton
          id="btnAddResource"
          title={t("add")}
          functionClick={() => dispatch(setAddResourcesModalVisibility(true))}
        >
          <AddCircleOutlinedIcon
            color="secondary"
            className="group-hover:text-white ease-in-out z-10"
          />
        </CustomButton>
      </Box>
      <CustomModal title={t("add_new_resource")} btnId="btnAddResource" btnTitle={t("save")} btnFunction={addNewResource} open={modals.addResourcesModal.visibility} >
        <ResourceFields onValChanges={onValChanges} />
      </CustomModal>
      {window.innerWidth >= 1024 ? (
        <Table rows={resources.resourcesList} cols={resourceCol} />
      ) : (
        <ResourceCard rows={resources.resourcesList} />
      )}
    </Box>
  );
}

export default ResourceTab;
