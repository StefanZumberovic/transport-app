import logger from './logger';

const errorLoader = () => {
    process.on('uncaughtException', (err) => {
        logger.error(err);
        process.exit(1);
    });

    process.on('unhandledRejection', (err) => {
        logger.error(err);
        process.exit(1);
    });
};

export default errorLoader;