import { Application } from "probot"; // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on("issues.opened", async context => {
    const { number: issue_number, ...issueComment } = context.issue({ body: "Thanks for opening this issue!" });
    await context.github.issues.createComment({ issue_number, ...issueComment });
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
