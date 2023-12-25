import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CardBoards from "./CardBoards";
import Typography from "@mui/material/Typography";
import { CambanBoardProps } from "../../../models/ComponentsModels";

function CambanBoard({ columns, handleOnDragEnd }: CambanBoardProps) {
  return (
    <Card className="flex flex-col lg:grid lg:grid-cols-3 gap-10 h-full p-4">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {columns != null &&
          Object.entries(columns).map(([columnId, col]: any) => {
            return (
              <Box key={columnId} className="flex flex-col overflow-y-scroll">
                <Box className="border-b">
                  <Typography component="p">{col.colName}</Typography>
                </Box>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided) => (
                    <Box
                      className="flex flex-col items-center min-h-[100px]"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      sx={{
                        height: "100%",
                        backgroundColor: "background.default",
                        borderRadius: "4px",
                      }}
                    >
                      {col.books.length > 0 &&
                        col.books.map((book: any, index: number) => {
                          return (
                            <CardBoards key={index} book={book} index={index} />
                          );
                        })}
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Box>
            );
          })}
      </DragDropContext>
    </Card>
  );
}

export default CambanBoard;
