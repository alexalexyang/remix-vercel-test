import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { MetaFunction } from "@remix-run/node";
import styled from "styled-components";

const Html = styled.html`
  height: 100%;
`;

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Html lang="en">
      <head>
        <Meta />
        <Links />
        {/* {typeof document === "undefined" ? "__STYLES__" : null} */}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </Html>
  );
}
