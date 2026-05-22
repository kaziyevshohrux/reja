const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb://umarkaziyev:wkJCcSIkYlBsHVKK@ac-gymt3jz-shard-00-00.ov499s2.mongodb.net:27017,ac-gymt3jz-shard-00-01.ov499s2.mongodb.net:27017,ac-gymt3jz-shard-00-02.ov499s2.mongodb.net:27017/?ssl=true&replicaSet=atlas-hjqqlv-shard-0&authSource=admin&appName=Cluster0";

mongodb.connect(
  connectionString,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("Error MongoDB connection: stop building backend server",err);
    } else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = process.env.PORT || 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on http://localhost:${PORT}`,
        );
      });
    }
  },
);
