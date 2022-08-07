// Import Xpresser
import {init} from "xpresser";

/**
 * Boot Xpresser with your config
 *
 * Get config from config.ts
 * See https://xpresserjs.com/configuration/
 */
import config from "./config";

// Initialize Xpresser
const $ = init(config, {exposeDollarSign: false})

// Initialize Typescript
$.initializeTypescript(__filename)


// Boot Xpresser
$.boot();

// END File
