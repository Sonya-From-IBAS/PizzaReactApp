import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
	return (
		<>
			<Button appearence='small' onClick={() => console.log('small')}> React </Button>
			<Button appearence='big' onClick={() => console.log('big')}> React </Button>
			<Input placeholder='email'/>
		</>
	);
}

export default App;
