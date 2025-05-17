/// <reference types="vite/client" />

declare module '*.modules.css' {
  const classes: { [key: string]: string };
  export default classes;
}
