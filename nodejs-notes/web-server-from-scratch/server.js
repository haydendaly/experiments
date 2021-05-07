const net = require("net");

/* 
Use `curl -v -XPOST -d'hello=world' http://127.0.0.1:3000/hello`.
*/
function createWebServer(requestHandler) {
  const server = net.createServer();
  server.on("connection", handleConnection);

  function handleConnection(socket) {
    socket.once("readable", function () {
      let reqBuffer = new Buffer.from("");
      let buf, reqHeader;
      do {
        buf = socket.read();
        reqBuffer = Buffer.concat([reqBuffer, buf]);
        let marker = reqBuffer.indexOf("\r\n\r\n");

        if (marker !== -1) {
          let remaining = reqBuffer.slice(marker + 4);
          reqHeader = reqBuffer.slice(0, marker).toString();
          socket.unshift(remaining);
          break;
        }
      } while (buf !== null);

      const reqHeaders = reqHeader.split("\r\n");
      const reqLine = reqHeaders.shift().split(" ");
      const headers = reqHeaders.reduce((acc, currentHeader) => {
        const [key, value] = currentHeader.split(":");
        return {
          ...acc,
          [key.trim().toLowerCase()]: value.trim(),
        };
      }, {});

      const request = {
        method: reqLine[0],
        url: reqLine[1],
        httpVersion: reqLine[2].split("/")[1],
        headers,
        socket,
      };

      let status = 200,
        statusText = "OK",
        headersSent = false,
        isChunked = false;
      const responseHeaders = {
        server: "my-custom-server",
      };

      function setHeaders(key, value) {
        responseHeaders[key.toLowerCase()] = value;
      }
      function sendHeaders() {
        if (!headersSent) {
          headersSent = true;
          setHeaders("date", new Date().toGMTString());
          socket.write(`HTTP/1.1 ${status} ${statusText}\r\n`);
          Object.keys(responseHeaders).forEach((headerKey) => {
            socket.write(`${headerKey}: ${responseHeaders[headerKey]}\r\n`);
          });
          socket.write("\r\n");
        }
      }

      const response = {
        write(chunk) {
          if (!headersSent) {
            if (!responseHEaders["content-length"]) {
              isChunked = true;
              setHeaders("transfer-encoding", "chunked");
            }
            sendHeaders();
          }
          if (isChunked) {
            const size = chunk.length.toString(16);
            socket.write(`${size}\r\n`);
            socket.write(chunk);
            socket.write("\r\n");
          } else {
            socket.write(chunk);
          }
        },
        end(chunk) {
          if (!headersSent) {
            if (!responseHeaders["content-length"]) {
              setHeaders("content-length", chunk ? chunk.length : 0);
            }
            sendHeaders();
          }
          if (isChunked) {
            if (chunk) {
              const size = chunk.length.toString(16);
              socket.write(`${size}\r\n`);
              socket.write(chunk);
              socket.write("\r\n");
            }
            socket.end("0\r\n\r\n");
          } else {
            socket.end(chunk);
          }
        },
        setHeaders,
        setStatus(newStatus, newStatusText) {
          (status = newStatus), (statusText = newStatusText);
        },
        json(data) {
          if (headersSent) {
            throw new Error("Headers sent, cannot proceed to send JSON");
          }
          const json = new Buffer(JSON.stringify(data));
          setHeaders("content-type", "application/json; charset=utf-8");
          setHeaders("content-length", json.length);
          sendHeaders();
          socket.end(json);
        },
      };

      requestHandler(request, response);
    });
  }

  return {
    listen: (port) => server.listen(port),
  };
}

const webServer = createWebServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  res.setHeaders("Content-Type");
  res.end("Hello World");
});

webServer.listen(3000);

// If intend to read whole body
// reqBuffer = new Buffer("");
// while ((buf = socket.read()) !== null) {
//   reqBuffer = Buffer.concat([reqBuffer, buf]);
// }
// let reqBody = reqBuffer.toString();
// console.log(`Request body:\n${reqBody}`);

// Simple
// function handleConnection(socket) {
//   socket.on("data", (chunk) => {
//     console.log("Received chunk:\n", chunk.toString());
//   });
//   socket.write(
//     "HTTP/1.1 200 OK\r\nServer: my-web-server\r\nContent-Length: 0\r\n\r\n"
//   );
// }
