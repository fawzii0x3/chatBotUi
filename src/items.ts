import PollIcon from "@mui/icons-material/Poll";
import MessageIcon from "@mui/icons-material/Message";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SettingsIcon from "@mui/icons-material/Settings";
import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";
import CodeIcon from "@mui/icons-material/Code";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Items = [
  {
    Logo: MessageIcon,
    Name: "Send a Message",
    Description: 'Send a message to user e.g "Hi"',
    OutPort: 1,
    bgColor: "#00e676",
    schema: {
      OutputPort: ["next"],
      connection: [],
      functionality: "message",
    },
  },
  {
    Logo: MoreHorizIcon,
    Name: "Ask Question with Options",
    Description: "E.g Ask gender",
    OutPort: 2,
    bgColor: "#d4e157",
    schema: {
      OutputPort: ["option1", "option2"],
      connection: [],
      functionality: "option",
      varName:"opp"
    },
  },
  {
    Logo: PollIcon,
    Name: "Ask Question with input",
    Description: "E.g Ask Name",
    OutPort: 1,
    bgColor: "#ffca28",
    schema: {
      OutputPort: ["next"],
      connection: [],
      functionality: "input",
      varName:"in"
    },
  },
  {
    Logo: SettingsIcon,
    Name: "Conditional Jumps",
    Description: "E.g Address as Mr. if gender is male",
    OutPort: 2,
    bgColor: "#ff7043",
    schema: {
      OutputPort: ["true","false"],
      connection: [],
      functionality: "condition",
      varIf:""
    },
  },
  {
    Logo: ImageIcon,
    Name: "Send a Picture",
    Description: "E.g a product photo or simply a GIF",
    OutPort: 1,
    bgColor: "#8d6e63",
    schema: {
      OutputPort: ["next"],
      connection: [],
      functionality: "sendPic",
    },
  },
  {
    Logo: SendIcon,
    Name: "Recive Email",
    Description: "Get e-mail of the responses collected.",
    OutPort: 1,
    bgColor: "#78909c",
    schema: {
      OutputPort: ["next"],
      connection: [],
      functionality: "sendPic"
    },
  },
  {
    Logo: CodeIcon,
    Name: "Script Block",
    Description: "Meant for developers.",
    OutPort: 1,
    bgColor: "#76ff03",
    schema: {
      OutputPort: ["next"],
      connection: [],
      functionality: "script"
    },
  },
  {
    Logo: CloudUploadIcon,
    Name: "Get API",
    Description: "Get data from an API/URL",
    OutPort: 1,
    bgColor: "#1de9b6",
    schema: {
      OutputPort: ["next"],
      connection: [],
      functionality: "getApi"
    },
  },
  {
    Logo: CloudDownloadIcon,
    Name: "Post API",
    Description: "Post data to an API/URL",
    OutPort: 1,
    bgColor: "#26a69a",
    schema: {
      OutputPort: ["next"],
      connection: [],
      functionality: "PostApi"
    },
  },
];

export default Items;
