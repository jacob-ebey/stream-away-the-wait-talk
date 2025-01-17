const path = require("path");
const cp = require("child_process");
const { resolvePath } = require("./scripts/utils");

let { 2: first, 3: second } = process.argv;

async function go() {
  const firstPath = resolvePath(first);
  const secondPath = resolvePath(second);

  cp.spawnSync(`git diff --no-index ./${firstPath}/app ./${secondPath}/app`, {
    shell: true,
    stdio: "inherit",
  });
}

go();
