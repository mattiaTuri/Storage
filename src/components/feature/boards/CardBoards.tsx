import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Draggable } from "react-beautiful-dnd";
import TextBox from "../../shared/TextBox";
import { useTranslation } from "react-i18next";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomButton from "../../shared/CustomButton";
import { Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../controller/boardsApi";
import { useSelector } from "react-redux";
import { boardsItemsSelector } from "../../../store/boardsItems/selector";

function CardBoards({ book, index }: any) {
  const { id, title, author, genre, column } = book;
  const { t } = useTranslation();

  const [openMenu, setOpenMenu] = useState(null);
  const open = Boolean(openMenu);
  const dispatch = useDispatch();
  const boardsItems = useSelector(boardsItemsSelector);
  const openItemMenu = (event: any) => {
    setOpenMenu(event.currentTarget);
  };

  const deleteItem = () => {
    dispatch(removeItem({ id, boardsItems }));
    setOpenMenu(null);
  };

  const editItem = () => {
    setOpenMenu(null);
  };

  const saveItem = () => {
    setOpenMenu(null);
  };

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Card
          className="my-2 flex w-[90%] border flex flex-col relative"
          sx={{ borderColor: "primary.main" }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Box
            className="w-2 h-full absolute"
            sx={{ backgroundColor: "primary.main" }}
          ></Box>
          <Box className="pt-2 px-4 flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center">
            <Box>
              <CustomButton
                id="btnMenuList"
                functionClick={(e) => openItemMenu(e)}
              >
                <MoreHorizIcon
                  color="secondary"
                  className="group-hover:text-white ease-in-out z-10"
                />
              </CustomButton>
              <Menu
                id="basic-menu"
                anchorEl={openMenu}
                open={open}
                onClose={() => setOpenMenu(null)}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={editItem}>{t("edit")}</MenuItem>
                <MenuItem onClick={deleteItem}>{t("cancel")}</MenuItem>
                <MenuItem
                  onClick={saveItem}
                  disabled={column === "complete" ? false : true}
                >
                  {t("save")}
                </MenuItem>
              </Menu>
            </Box>
            <Typography className="lg:order-first" component="span">
              {title}
            </Typography>
          </Box>
          <CardContent className="w-full">
            <TextBox col={t("author")} row={author} />
            <TextBox col={t("genre")} row={t(`genres.${genre}`)} />
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}

export default CardBoards;
