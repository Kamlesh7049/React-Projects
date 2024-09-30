const APP = () => {
  const subject = ["php", "oracle", "java", "asp", "html", "pyton"];
  const ans = subject.map((key) => {
    return (
      <>
        <li>{key}</li>
      </>
    );
  });
  return (
    <>
      <h1>Hello world</h1>
      <ol>{ans}</ol>
    </>
  );
};

export default APP;
