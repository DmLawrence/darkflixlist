// builds the Item list and provides it to DarkList
import ART from './art.jpg';
import './ItemList.css';
import DislikeBlank from './dislike-blank.png';
import Dislike from './dislike.png';
import LikeBlank from './like-blank.png';
import Like from './like.png';

export default function ItemList() {
	const db = [
		{
			"id":1,
			"rank":1,
			"poster":ART,
			"title":"Terrifier",
			"year":"2016",
			"description":"On Halloween night, Tara Heyes finds herself as the obsession of a sadistic murderer known as Art the Clown.",
			"upVote": 0,
			"downVote":0
		},
		{
			"id":2,
			"rank":2,
			"poster":ART,
			"title":"Terrifier 2",
			"year":"2022",
			"description": "After being resurrected by a sinister entity, Art the Clown returns to the timid town of Miles County where he targets a teenage girl and her younger brother on Halloween night.",
			"upVote": 0,
			"downVote":0
		},
		{
			"id":3,
			"rank":4,
			"poster":ART,
			"title":"Silence of the Lambs",
			"year":"1991",
			"description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
			"upVote": 0,
			"downVote":0
		},
		{
			"id":4,
			"rank":3,
			"poster":ART,
			"title":"Red Dragon",
			"year":"2002",
			"description": `A retired FBI agent with psychological gifts is assigned to help track down "The Tooth Fairy", a mysterious serial killer. Aiding him is imprisoned forensic psychiatrist Dr. Hannibal "The Cannibal" Lecter.`,
			"upVote": 0,
			"downVote":0
		},
		{
			"id":5,
			"rank":6,
			"poster":ART,
			"title":"Saw",
			"year":"2004",
			"description": "Two strangers awaken in a room with no recollection of how they got there, and soon discover they're pawns in a deadly game perpetrated by a notorious serial killer.",
			"upVote": 0,
			"downVote":0
		},
		{
			"id":6,
			"rank":7,
			"poster":ART,
			"title":"Saw 2",
			"year":"2005",
			"description": "A detective and his team must rescue 8 people trapped in a factory by the twisted serial killer known as Jigsaw.",
			"upVote": 0,
			"downVote":0
		},
		{
			"id":7,
			"rank":5,
			"poster":ART,
			"title":"Saw 3",
			"year":"2006",
			"description": "Jigsaw abducts a doctor in order to keep himself alive while he watches his new apprentice put an unlucky citizen named Jeff through a brutal test.",
			"upVote": 0,
			"downVote":0
		},
		{
			"id":8,
			"rank":8,
			"poster":ART,
			"title":"Saw 4",
			"year":"2007",
			"description": "Despite Jigsaw's death, and in order to save the lives of two of his colleagues, Lieutenant Rigg is forced to take part in a new game, which promises to test him to the limit.",
			"upVote": 0,
			"downVote":0
		},
		{
			"id":9,
			"rank":9,
			"poster":ART,
			"title":"Saw 5",
			"year":"2008",
			"description": "Following Jigsaw's grisly demise, Mark Hoffman is commended as a hero, but Agent Strahm is suspicious, and delves into Hoffman's past. Meanwhile, another group of people are put through a series of gruesome tests.",
			"upVote": 0,
			"downVote":0
		},
		{
			"id":10,
			"rank":10,
			"poster":ART,
			"title":"Saw 6",
			"year":"2009",
			"description": "Agent Strahm is dead, and FBI agent Erickson draws nearer to Hoffman. Meanwhile, a pair of insurance executives find themselves in another game set by Jigsaw.",
			"upVote": 0,
			"downVote":0
		},
	];

	const buildList = (db) => {
		const items = db.map((item) =>(
			<div className='itemCard' key={item.id}>
				<div className='poster'>
					<img src={item.poster} alt={`${item.title}'s poster`} />
				</div>
				<div className='film'>
					<div className='film-item rank'>
						{`Rank`}
						<br/>
						{`${item.rank}`}
					</div>
					<div className='film-item title'>
						{`${item.title}`}
						<div className='film-item year'>
							{`${item.year}`}
						</div>
					</div>
					<div className='film-item description'>
						{`${item.description.length > 100 ? item.description.slice(0,100) + '...' : item.description}`}
					</div>
				</div>
				<div className='vote'>
					<div className='votebtn'>
						<img src={LikeBlank} alt='Like unselected' />
					</div>
					<div className='votebtn'>
					<img src={DislikeBlank} alt='Dislike unselected' />
					</div>
				</div>
			</div>
		))

		return (
			items
		);
	}

	return (
		buildList(db)
	);
}