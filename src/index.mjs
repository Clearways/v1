// Module Import //
import { createBareServer } from '@tomphttp/bare-server-node';
import http from 'node:http';
import express from 'express';
import { hostname } from "node:os";
// Configuration //

const FilePath = './public';
const BareDirectory = '/api/';
const DefaultPort = 8080;

const httpServer = http.createServer();
const app = express();

app.post('/configuration/', (req, res) => {
	res.send('config.json')
  });

app.use(express.static(FilePath));
app.use("/config/", express.static('config.json'));
app.use(express.static(FilePath));
const bareServer = createBareServer(BareDirectory);

httpServer.on('request', (req, res) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeRequest(req, res);
	} else {
		app(req, res);
	}
});

httpServer.on('upgrade', (req, socket, head) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeUpgrade(req, socket, head);
	} else {
		socket.end();
	}
});

httpServer.on('listening', () => {
	const address = httpServer.address();
    console.log("Listening on:");
    console.log(`\thttp://localhost:${address.port}`);
    console.log(`\thttp://${hostname()}:${address.port}`);
    console.log(
      `\thttp://${
        address.family === "IPv6" ? `[${address.address}]` : address.address
      }:${address.port}`
    );
});



httpServer.listen({
	port: DefaultPort,
});