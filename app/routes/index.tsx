// import { format } from "date-fns";
import styled from "styled-components";

const H1 = styled.h1`
  :hover {
    color: blueviolet;
  }
`;

export default function Index() {
  const now = new Date();
  const hr = now.getHours();
  const min = now.getMinutes();

  const yr = now.getFullYear();
  const mth = now.getMonth();
  const dd = now.getDate();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <H1>Welcome to Remix</H1>

      <h2>
        {hr}:{min}
        {`${yr}-${mth}-${dd}`}
      </h2>
    </div>
  );
}
