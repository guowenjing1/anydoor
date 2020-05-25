const yargs = require('yargs');
const Server = require('./app');

const argv = yargs
    .usage('anywhere [options]')
    .option('p',{
        alias:'port',
        describe:'端口',
        default:952

    })
    .option('h',{
        alias:'hostname',
        describe:'host',
        default:'127.0.01'
    })
    .option('d',{
        alias:'root',
        describe:'root',
        default:process.cwd()
    })
    .version()
    .alias('v','version')
    .help()
    .argv;

    const server = new Server(argv);
    server.start();
