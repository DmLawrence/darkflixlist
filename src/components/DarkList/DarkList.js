import './DarkList.css';
import ItemList from './ItemList';

export default function DarkList() {
	return (
		<div className='DarkList'>
			<h2>The Chamber's Darkflix List</h2>
			<div className='search'>
				<input type='text' />
				<button>search</button>
			</div>
			<ItemList />
		</div>
	)
}