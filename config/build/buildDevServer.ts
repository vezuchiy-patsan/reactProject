import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import fs from "fs"; // eslint-disable-lin
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
};
