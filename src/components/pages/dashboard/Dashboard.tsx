import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BooksChart from "../../feature/dashboard/BooksChart";
import Card from "@mui/material/Card";
import ResourcesChart from "../../feature/dashboard/ResourcesChart";

function Dashboard() {
  return (
    <Container maxWidth="xl" className="h-full p-10">
      <Box className="flex flex-col h-full">
        <Box className="text-center lg:text-left pb-10 lg:pb-0">
          <Typography
            sx={{ fontSize: 40 }}
            variant="h2"
            component="h1"
            color="#efa135"
          >
            DASHBOARD
          </Typography>
        </Box>
        <Box className="h-full">
          <div className="flex flex-col justify-end gap-10 h-full">
            <div className="flex flex-col gap-10 md:grid grid-cols-3 h-[30%]">
              <Card className="bg-white dark:bg-[#262626]">a</Card>
              <Card className="bg-white dark:bg-[#262626]">a</Card>
              <Card className="bg-white dark:bg-[#262626]">a</Card>
            </div>
            <div className="flex flex-col gap-10 lg:grid grid-cols-2 h-[60%]">
              <Card className="bg-white dark:bg-[#262626] ">
                <BooksChart />
              </Card>
              <Card className="bg-white dark:bg-[#262626] ">
                <ResourcesChart />
              </Card>
            </div>
          </div>
        </Box>
        {/*
        <Box className="h-full flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-10 h-[40%]">
            <Card className="bg-white dark:bg-[#262626]">a</Card>
            <Card className="bg-white dark:bg-[#262626]">a</Card>
            <Card className="bg-white dark:bg-[#262626]">a</Card>
          </div>
          <div className="flex flex-col md:grid grid-cols-2 gap-10 h-[60%]">
            <Card className="bg-white dark:bg-[#262626] h-full">
              <BooksChart />
            </Card>
            <Card className="bg-white dark:bg-[#262626] h-full">
              <ResourcesChart />
            </Card>
          </div>
        </Box> */}
      </Box>
    </Container>
  );
}

export default Dashboard;
