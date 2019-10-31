"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repl_1 = tslib_1.__importDefault(require("repl"));
const prompt = 'CMD> ';
const processCMD = (cmd) => {
    return cmd;
};
const evaluator = (cmd, ctx, filename, cb) => {
    const output = processCMD(cmd);
    cb(null, output);
};
const outputWriter = (output) => {
    return output.toUpperCase();
};
const completer = (line) => {
    const cmds = ['park', 'leave', 'display'];
    const completions = cmds.filter(cmd => cmd.startsWith(line));
    return [completions, line];
};
const replServer = repl_1.default.start({
    prompt,
    completer,
    terminal: true,
    eval: evaluator,
    writer: outputWriter
});
replServer.on('end', () => {
    process.exit();
});
replServer.on('exit', () => {
    process.exit();
});
//# sourceMappingURL=index.js.map