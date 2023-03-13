import { exec } from "child_process";

export default async function Command() {
  await exec("/opt/homebrew/bin/blueutil -p 0", (err, stdout, stderr) => {
    if (err) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

  exec("osascript -e 'tell application \"Finder\" to sleep'", (err, stdout, stderr) => {
    if (err) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  return;
}
