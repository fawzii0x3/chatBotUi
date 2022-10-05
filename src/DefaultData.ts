const companieName = "BotFlow";
const DefautCards = [
  {
    InPort: false,
    Name:"Hello there 👋",
    Message: "Hello there 👋",
    functionality : "message",
    OutputPort: ["next"],
    connection: [1],
    position: [10, 10],
    id: '0',
  },
  {
    Name:"hi",
    Message: "hi",
    functionality: "message",
    OutputPort: ["next"],
    connection: [],
    position: [529, 172],
    id: '1',
  },
];

export { companieName,DefautCards };
