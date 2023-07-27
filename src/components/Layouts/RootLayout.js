const RootLayout = ({ children }) => {
  return (
    <div>
      <h1 className="">header</h1>
      {children}
      <h1 className="">footer</h1>
    </div>
  );
};

export default RootLayout;
