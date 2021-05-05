const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return ()=>{//willUnMount
      element.current.removeEventListener("click",onClick);
    }
  },[]);
  return element;
};
const App = () => {
  const sayHello = () => console.log("say Hi!!");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
    </div>
  );
};