import Box from "@mui/material/Box";
import CustomButton from "../../../shared/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../../../store/modal/modalSlice";
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

function ResourceTab() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const resources = useSelector(resourcesSelector);
  const [resourceValues, setResourceValues] = useState<ResourcesProps>({
    id: "",
    title: "",
    link: "",
    description: "",
    tag: "",
  });

  const addNewResource = () => {
    dispatch(addResource(resourceValues));
    dispatch(closeModal());
  };

  const onValChanges = (event: any) => {
    setResourceValues({
      ...resourceValues,
      [event.target.name]: event.target.value,
    });
  };

  const resourceCol: GridColDef[] = [
    {
      field: "title",
      headerName: t("title"),
      width: 300,
      editable: true,
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
      width: 400,
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
      width: 400,
      editable: true,
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
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <Typography variant="caption" component="p">
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "actions",
      headerName: t("delete"),
      type: "actions",
      width: 100,
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
          functionClick={() => dispatch(openModal())}
        >
          <AddCircleOutlinedIcon
            color="secondary"
            className="group-hover:text-white ease-in-out z-10"
          />
        </CustomButton>
      </Box>
      <CustomModal title={t("add_new_resource")} addFunction={addNewResource}>
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
