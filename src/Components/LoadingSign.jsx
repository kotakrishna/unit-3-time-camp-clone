import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingSign() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        // minHeight: "100vh"
      }}
    >
      <CircularProgress style={{ color: "green" }} />
    </div>
  );
}
