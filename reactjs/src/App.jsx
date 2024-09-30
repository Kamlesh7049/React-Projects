const App = () => {
  const subject = ["php", "oracle", "java", "asp", "html", "python","Reactjs"];
  // const ans = subject.map((key) => <li>{key}</li>);
  const data=subject.map(function(data){
    return(
      <>
      <ul>{data}</ul>
      </>
    )
  })
  return (
    <>
      <h1>Hello World</h1>
      <ul>{data}</ul>
    </>
  );
};
export default App;
