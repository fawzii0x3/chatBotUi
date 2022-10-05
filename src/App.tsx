import React, {  useLayoutEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import NavBar from "./components/NavBar";
import { Button, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ItemsCard from "./components/ItemsCard";
import Canvas from "./components/Canvas";
import { DefautCards } from "./DefaultData";
import EditTab from "./components/EditTab";
function App() {
  const [editTab, setEditTab] = useState({ open: true, elemId: "0" });
  const [itemsTab, setItemsTab] = useState(true);
  const border = useRef<any>();
  const [borderWidth, setborderWidth] = useState(0);
  const [borderheight, setborderHeight] = useState(0);
  const [borderPosition, setborderPosition] = useState([0, 0]);
  const [Cards, setCards] = useState(DefautCards);
  useLayoutEffect(() => {
    setborderWidth(border?.current.offsetWidth);
    setborderHeight(border?.current.offsetHeight);
    setborderPosition([border.current.offsetLeft, border.current.offsetTop]);
  }, [editTab, itemsTab]);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid xs={12}>
          <NavBar  />
        </Grid>
        <Grid container>
          <Grid
            xs={0.5 + +itemsTab * 1.5}
            sx={{
              position: "relative",
              height: "90vh",
              backgroundColor: "#121212",
              px: 2 * +itemsTab,
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <Box
              sx={{ position: "sticky", top: 0, backgroundColor: "#121212" }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: itemsTab ? "space-between" : "center",
                }}
              >
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  {itemsTab ? "Blocks" : ""}
                </Typography>
                <Button
                  onClick={() => {
                    setItemsTab(!itemsTab);
                  }}
                >
                  {itemsTab ? (
                    <KeyboardDoubleArrowLeftIcon titleAccess="close" />
                  ) : (
                    <KeyboardDoubleArrowRightIcon titleAccess="open" />
                  )}
                </Button>
              </Box>
              <Typography variant="caption" sx={{ color: "#fafafa" }}>
                {itemsTab ? "Drag a Block to the right :" : ""}
              </Typography>
            </Box>
            <Box sx={{ height: "auto", mt: 2 }}>
              <ItemsCard
                itemsTab={itemsTab}
                border={border}
                setCards={setCards}
                cards={Cards}
              ></ItemsCard>
            </Box>
          </Grid>
          <Grid
            xs={8 + +!editTab.open * 2 + +!itemsTab * 1.5}
            onDragOver={(e) => {
              e.preventDefault();
            }}
          >
            <Box
              ref={border}
              sx={{ width: "100%", height: "90vh", overflow: "auto" }}
            >
              <Canvas
                border={border}
                borderWidth={borderWidth}
                borderheight={borderheight}
                Cards={Cards}
                setEditTab={setEditTab}
                editTab={editTab}
                setCards={setCards}
                borderPosition={borderPosition}
              />
            </Box>
          </Grid>
          <Grid
            xs
            sx={{ display: editTab.open ? "block" : "none", height: "90vh" }}
          >
            <Box>
              {editTab.elemId !== "-1" && editTab.open ? (
                <EditTab
                  Cards={Cards}
                  setCards={setCards}
                  editTab={editTab}
                  setEditTab={setEditTab}
                />
              ) : (
                ""
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
