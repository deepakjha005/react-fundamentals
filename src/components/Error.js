import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Oops!!!!!</h1>
      </div>
      <div>
        <h2>Something went wrong </h2>
      </div>
      <div>
        <h3>
          {error?.status}: {error?.statusText}
        </h3>
      </div>
    </div>
  );
};
