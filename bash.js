process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    const pwd = require("./pwd");
    pwd();
  }
  if (cmd === "ls") {
    const ls = require("./ls");
    ls();
  }
  process.stdout.write("You typed: " + cmd);
  console.log(data);

  process.stdout.write("\nprompt > ");
});
