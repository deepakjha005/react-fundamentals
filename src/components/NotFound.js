const NotFound = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          marginTop: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 25 }}>This restaurant is not available.</p>
      </div>
    </div>
  );
};
export default NotFound;
