// ESM + CJS compatible
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Load qrcode-terminal via require (CJS)
const qrcode = require("qrcode-terminal");

// Import library lain (ESM)
import pkg from "@whiskeysockets/baileys";
const { makeWASocket, useMultiFileAuthState, DisconnectReason, Browsers } = pkg;

import { Boom } from "@hapi/boom";
import P from "pino";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { watchFile, unwatchFile } from "fs";

// Import config & handler
import globalConfig from "./settings/config.js";
import colors from "./settings/colors.js"; 
import { setupMessageHandler } from "./handler.js";
import { Connection } from "./lib/connection/connect.js";

// Global vars
let currentSock = null;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Log banner
console.log(`\n${colors.bright}${colors.cyan}=====================================${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}         BOT WHATSAPP DIMULAI        ${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}=====================================${colors.reset}\n`);

// ... (lanjutan kode lo tadi tetap sama)
