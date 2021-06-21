// This is needed to tell tsc that importing SVGs is okay.
// The actual importing is handled by Webpack.
declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}
