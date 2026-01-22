import fs from "fs";
import { WebSocketServer } from "ws";

const CONTENT_FOLDER = "content";

const wss = new WebSocketServer({ port: 3201 });
const clients = new Set<import("ws").WebSocket>();

wss.on("connection", function connection(ws) {
  clients.add(ws);
  ws.on("error", console.error);
  ws.on("close", () => clients.delete(ws));
});

fs.watch(
  CONTENT_FOLDER,
  { persistent: true, recursive: true },
  async (eventType, fileName) => {
    console.log(`[watcher] ${eventType}: ${fileName}`);
    clients.forEach((ws) => {
      ws.send("refresh");
    });
  }
);

console.log("[watcher] Watching content folder for changes...");
