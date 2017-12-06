import { FuseBox, PostCSSPlugin, LESSPlugin, CSSPlugin, WebIndexPlugin, Sparky } from "fuse-box";

const fuse = FuseBox.init({
  homeDir: `src`,
  output: `dest/$name.js`,
  plugins: [
    // Less chain
    [
      LESSPlugin(),
      PostCSSPlugin(), // IF YOU COMMENT THIS LINE OUT THEN HMR WORKS
      CSSPlugin()
    ],

    WebIndexPlugin()
  ],
  target: "browser",
  sourceMaps: true,
  debug: false
});

fuse.dev();

// Bundle the application
fuse.bundle("app")
  .watch()
  .instructions("> app.ts")
  .hmr();

fuse.run();