import { Box } from "@mui/material";
import DragDrop from "./components/DragDrop";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Box sx={{ m: 10 }}>
        <NavBar />
      </Box>

      <DragDrop />
    </div>
  );
}

export default App;
