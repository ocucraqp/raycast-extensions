import { exec } from "child_process";

export default async function Command() {
  await exec("/opt/homebrew/bin/blueutil -p 1", (err, stdout, stderr) => {
    if (err) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  await exec("/opt/homebrew/bin/blueutil --connect e8-ee-cc-37-d3-a8", (err, stdout, stderr) => {
    if (err) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  return;
}
