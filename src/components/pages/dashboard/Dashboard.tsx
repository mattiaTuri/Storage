import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BookChart from "../../feature/dashboard/BookChart";
import Card from "@mui/material/Card";

function Dashboard() {
  return (
    <Container maxWidth="xl" className="h-full ">
      <Box className="flex flex-col h-full">
        <Box>
          <Typography variant="h2" component="h1" color="#efa135">
            DASHBOARD
          </Typography>
        </Box>
        <Box className="h-full flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-10 h-[40%]">
            <Card className="bg-white dark:bg-[#262626]">a</Card>
            <Card className="bg-white dark:bg-[#262626]">a</Card>
            <Card className="bg-white dark:bg-[#262626]">a</Card>
          </div>
          <div className="grid grid-cols-2 gap-10 h-[60%]">
            <Card className="bg-white dark:bg-[#262626] h-full">
              <BookChart />
            </Card>
            <Card className="bg-white dark:bg-[#262626] h-full">
              <BookChart />
            </Card>
          </div>
        </Box>
      </Box>

      {/* <Box className="w-full">
          <div className="h-[50%] flex">
            <div className="h-full bg-white shadow-lg">a</div>
            <div className="h-full shadow-lg">a</div>
            <div className="h-full shadow-lg">a</div>
          </div>
          <div className="h-[50%] w-full flex">
            <div className="bg-white h-[50%] w-[50%] shadow-lg">
              <BookChart />
            </div>
            <div className="bg-white h-[50%] w-[50%] shadow-lg">
              <BookChart />
            </div>
          </div>
        </Box> */}
    </Container>
  );
}

export default Dashboard;
