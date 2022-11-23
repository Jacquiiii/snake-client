// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.on("event name", () => {
    // code that does something
  });

  conn.on("connect", (data) => {
    console.log('you ded cuz you idled');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};