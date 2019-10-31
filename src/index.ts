import repl from 'repl';

const prompt = 'CMD> ';

const processCMD = (cmd: string) => cmd;

const evaluator = (cmd: string, ctx: object, filename: string, cb: Function) => {
  const output = processCMD(cmd);
  cb(null, output);
};

const outputWriter = (output: string) => output.toUpperCase();

const completer = (line: string) => {
  const cmds = ['park', 'leave', 'display'];
  const completions = cmds.filter((cmd) => cmd.startsWith(line));

  return [completions, line];
};

const replServer = repl.start({
  prompt,
  completer,
  terminal: true,
  eval: evaluator,
  writer: outputWriter,
});

replServer.on('end', () => {
  process.exit();
});

replServer.on('exit', () => {
  process.exit();
});
