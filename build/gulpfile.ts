import { series } from "gulp";
import { withTaskName, run } from "./src";

export default series(
  withTaskName("clean", () => run("pnpm run clean")),
  withTaskName("buildPackages", () =>
    run("pnpm run --filter ./packages/* --parallel build")
  )
);
