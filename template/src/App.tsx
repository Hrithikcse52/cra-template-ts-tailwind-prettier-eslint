import { Button } from 'components/Elements/Button';

function App(): JSX.Element {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-blue-500">Hello world!</h1>
      <div className="bg-red-200 w-5 h-5"></div>
      <Button>Click me</Button>
      {/* <Spinner /> */}
    </div>
  );
}

export default App;
