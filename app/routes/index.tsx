import { format } from "date-fns";
import styled from "styled-components";

const H1 = styled.h1`
  :hover {
    color: blueviolet;
  }
`;

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <H1>Welcome to Remix</H1>

      <h2>{format(new Date(), "kk:mm")}</h2>
    </div>
  );
}
