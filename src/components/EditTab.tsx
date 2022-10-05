import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const OptionBox: React.FC<{
  arr: string[];
  setCards: any;
  editTab: any;
  simplyCard: any;
}> = ({ arr, setCards, editTab, simplyCard }) => {
  return (
    <Box sx={{ mt: 1 }}>
      {arr.length ? <Typography>Options :</Typography> : ""}
      {arr.map((elm: any, idx: number) => {
        return (
          <FormControl
            sx={{ width: "100%", mt: 1 }}
            variant="outlined"
            key={idx}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              option
            </InputLabel>
            <OutlinedInput
              type={"text"}
              value={elm}
              onChange={(e) => {
                setCards((prev: any) => {
                  return prev.map((elem: any) => {
                    if (elem.id === editTab.elemId) {
                      return {
                        ...elem,
                        OutputPort: elem.OutputPort.map(
                          (elem: any, indx: number) => {
                            if (idx === indx) {
                              return e.target.value;
                            }
                            return elem;
                          }
                        ),
                      };
                    }
                    return elem;
                  });
                });
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setCards((prev: any) => {
                        return prev.map((elem: any) => {
                          if (elem.id === editTab.elemId) {
                            console.log(
                              elem.OutputPort.filter(
                                (elem: any, indx: number) => idx !== indx
                              )
                            );
                            return {
                              ...elem,
                              OutputPort: elem.OutputPort.filter(
                                (elem: any, indx: number) => idx !== indx
                              ),
                            };
                          }
                          return elem;
                        });
                      });
                    }}
                    edge="end"
                    color="error"
                  >
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="option"
            />
          </FormControl>
        );
      })}
      <Button
        sx={{ mt: 2, width: "100%" }}
        variant="outlined"
        onClick={() => {
          setCards((prev: any) => {
            return prev.map((elem: any) => {
              if (elem.id === editTab.elemId) {
                return {
                  ...elem,
                  OutputPort: [
                    ...elem.OutputPort,
                    "option" + (elem.OutputPort.length + 1),
                  ],
                };
              }
              return elem;
            });
          });
        }}
      >
        add Element
      </Button>
      <TextField
        sx={{ mt: 2 }}
        id="outlined-basic"
        label="varName"
        variant="outlined"
        value={simplyCard.varName}
        onChange={(e) => {
          setCards((prev: any) => {
            return prev.map((elem: any) => {
              if (elem.id === editTab.elemId) {
                return { ...elem, varName: e.target.value };
              }
              return elem;
            });
          });
        }}
      />
    </Box>
  );
};

const IfBox: React.FC<{ Cards: any }> = ({ Cards }) => {
  return (
    <Card sx={{ border: "1px dashed #000", py: 3, px: 1, mt: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>If</Typography>
        <FormControl sx={{ m: 1, width: "90%" }}>
          <InputLabel id="demo-simple-select-helper-label"></InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={" "}
            // onChange={handleChange}
          >
            <MenuItem value=" ">
              <em>--choose variable--</em>
            </MenuItem>
            {Cards.map((elem: any, idx: any) => {
              return (
                <MenuItem key={idx} value={elem.varName}>
                  {elem.varName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <FormControl sx={{ m: 1, width: "90%" }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={"Equals"}
          // onChange={handleChange}
        >
          {[
            "Equals",
            "not Equals",
            "less Than",
            "Greater Than",
            "Contains",
            "Starts with",
            "Ends with",
          ].map((elem: any, idx: any) => {
            return (
              <MenuItem key={idx} value={elem}>
                {elem}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FormControl sx={{ m: 1, width: "60%" }}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={"Value"}
            // onChange={handleChange}
          >
            {["Value", "Variable"].map((elem: any, idx: any) => {
              return (
                <MenuItem key={idx} value={elem}>
                  {elem}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        {true ? (
          <TextField
            sx={{ width: "90%" }}
            id="outlined-basic"
            label="value"
            variant="outlined"
          />
        ) : (
          <FormControl sx={{ width: "90%" }}>
            <InputLabel id="demo-simple-select-helper-label"></InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={" "}
              // onChange={handleChange}
            >
              <MenuItem value=" ">
                <em>--choose variable--</em>
              </MenuItem>
              {Cards.map((elem: any, idx: any) => {
                return (
                  <MenuItem key={idx} value={elem.varName}>
                    {elem.varName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      </Box>
    </Card>
  );
};

const EditTab: React.FC<{
  setCards: any;
  Cards: any;
  editTab: any;
  setEditTab: any;
}> = ({ setCards, Cards, editTab, setEditTab }) => {
  const simplyCard = Cards.filter((elem: any) => elem.id === editTab.elemId)[0];
  return (
    <>
      <Box
        sx={{
          height: "90vh",
          width: "100%",
          overflow: "auto",
          paddingTop: 1,
          paddingX: 1,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
          Edit Block
        </Typography>
        <Box sx={{ width: "95%", mt: 4 }}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={simplyCard.Name}
            onChange={(e) => {
              setCards((prev: any) => {
                return prev.map((elem: any) => {
                  if (elem.id === editTab.elemId) {
                    return { ...elem, Name: e.target.value };
                  }
                  return elem;
                });
              });
            }}
          />
          {simplyCard.functionality === "condition" ? (
            <IfBox Cards={Cards} />
          ) : simplyCard.functionality === "sendPic" ? (
            <Button
            sx={{width:"100%",mt:2}}
              startIcon={<AddCircleOutlineIcon />}
              size="large"
              variant="contained"
              color="primary"
            >
              Add Image
            </Button>
          ) : (
            <TextField
              sx={{ mt: 2 }}
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              value={simplyCard.Message}
            />
          )}
          {simplyCard.functionality === "option" ? (
            <OptionBox
              simplyCard={simplyCard}
              editTab={editTab}
              setCards={setCards}
              arr={simplyCard.OutputPort}
            />
          ) : simplyCard.functionality === "input" ? (
            <TextField
              sx={{ mt: 2 }}
              id="outlined-basic"
              label="varName"
              variant="outlined"
              value={simplyCard.varName}
              onChange={(e) => {
                setCards((prev: any) => {
                  return prev.map((elem: any) => {
                    if (elem.id === editTab.elemId) {
                      return { ...elem, varName: e.target.value };
                    }
                    return elem;
                  });
                });
              }}
            />
          ) : (
            ""
          )}
          {editTab.elemId !== "0" ? (
            <Button
              sx={{ mt: 2, width: "100%" }}
              variant="outlined"
              size="large"
              color="error"
              onClick={(e) => {
                setEditTab({ open: false, elemId: "-1" });
                setCards((prev: any) => {
                  return prev.filter((elem: any) => {
                    return elem.id !== editTab.elemId;
                  });
                });
              }}
            >
              Delet Element
            </Button>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default EditTab;
