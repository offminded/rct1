import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Test = (props) =>{

	const [posts, setPosts] = useState([]);
	const [filteredPosts, setFilteredPosts] = useState(posts);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/').then(res=>res.json()).then(json=>{
			setPosts(json);
			setFilteredPosts(json);
		})
	}, []);
	
	useEffect(() => {
	  setFilteredPosts(posts.filter(post=>(
	      post.title.toLowerCase().includes(searchField.toLowerCase())
	    )
	  ));
	}, [searchField])
	
	return(
		<div>
			<input type="search" value={searchField} onChange={(e)=>{setSearchField(e.target.value)}}/>
			<ul>{filteredPosts.map(n=> (<li key={n.id}><a href={n.id}>{n.title}</a></li>))}</ul>	
		</div>
		
		)
}

export default Test;