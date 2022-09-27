import { ItemsProps } from "./gloabal";

import PollIcon from "@mui/icons-material/Poll";
import MessageIcon from "@mui/icons-material/Message";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SettingsIcon from "@mui/icons-material/Settings";
import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";
import CodeIcon from "@mui/icons-material/Code";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const defaultOpacity = 0.3;
const defaultPosition = [0, 0];
const Items: ItemsProps[] = [
  {
    Logo: MessageIcon,
    Name: "Send a Message",
    Description: 'Send a message to user e.g "Hi"',
    OutPort: 1,
    bgColor: "green",
    schema: {
      position: defaultPosition,
      OutputPort: ["next"],
      Inport: 1,
      connection: [],
      opacity: defaultOpacity,
      exist: false,
      Name: "Message",
      Message: "hi",
    },
  },
  {
    Logo: MoreHorizIcon,
    Name: "Ask Question withoptions",
    Description: "E.g Ask gender",
    OutPort: 2,
    bgColor: "",
    schema: {
      position: defaultPosition,
      OutputPort: ["true", "false"],
      Inport: 1,
      connection: [],
      opacity: defaultOpacity,
      exist: false,
      Name: "Message",
      Message: "hi",
    },
  },
  {
    Logo: PollIcon,
    Name: "Ask Question with input",
    Description: "E.g Ask Name",
    OutPort: 1,
    bgColor: "",
    schema: {
      position: defaultPosition,
      OutputPort: ["next"],
      Inport: 1,
      connection: [],
      opacity: defaultOpacity,
      exist: false,
      Name: "Message",
      Message: "hi",
    },
  },
  {
    Logo: SettingsIcon,
    Name: "Conditional Jumps",
    Description: "E.g Address as Mr. if gender is male",
    OutPort: 2,
    bgColor: "",
    schema: {
      position: defaultPosition,
      OutputPort: ["next"],
      Inport: 1,
      connection: [],
      opacity: defaultOpacity,
      exist: false,
      Name: "Message",
      Message: "hi",
    },
  },
  {
    Logo: ImageIcon,
    Name: "Send a Picture",
    Description: "E.g a product photo or simply a GIF",
    OutPort: 1,
    bgColor: "",
    schema: {
      position: defaultPosition,
      OutputPort: ["next"],
      Inport: 1,
      connection: [],
      opacity: defaultOpacity,
      exist: false,
      Name: "Message",
      Message: "hi",
    },
  },
  {
    Logo: SendIcon,
    Name: "Recive Email",
    Description: "Get e-mail of the responses collected.",
    OutPort: 1,
    bgColor: "",
    schema: {
      position: defaultPosition,
      OutputPort: ["next"],
      Inport: 1,
      connection: [],
      opacity: defaultOpacity,
      exist: false,
      Name: "Message",
      Message: "hi",
    },
  },
  {
    Logo: CodeIcon,
    Name: "Script Block",
    Description: "Meant for developers.",
    OutPort: 1,
    bgColor: "",
    schema: {
      position: defaultPosition,
      OutputPort: ["next"],
      Inport: 1,
      connection: [],
      opacity: defaultOpacity,
      exist: false,
      Name: "Message",
      Message: "hi",
    },
  },
  {
    Logo: CloudUploadIcon,
    Name: "Get API",
    Description: "Get data from an API/URL",
    OutPort: 1,
    bgColor: "",
    schema: {
      position: defaultPosition,
      OutputPort: ["next"],
      Inport: 1,
      connection: [],
      opacity: defaultOpacity,
      exist: false,
      Name: "Message",
      Message: "hi",
    },
  },
  {
    Logo: CloudDownloadIcon,
    Name: "Post API",
    Description: "Post data to an API/URL",
    OutPort: 1,
    bgColor: "",
    schema: {
      position: defaultPosition,
      OutputPort: ["next"],
      Inport: 1,
      connection: [],
      opacity: defaultOpacity,
      exist: false,
      Name: "Message",
      Message: "hi",
    },
  },
];

export default Items;
