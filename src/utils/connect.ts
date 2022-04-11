import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        logger.info(`Connected to ${dbUri}`);
    } catch (error) {
        logger.error(`Failed to connect to ${dbUri}`);
        process.exit(1);
    }
}

export default connect;
