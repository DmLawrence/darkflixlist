// Layout
//Nav bar with logo (left)
//  register(right when on sigin page)
//  signin(right when on registration)
//  signout(right when singed in)
//  profile - profile pic (right when logged in)
//  movie list (right when on profile page)
//Movie List
//  Search bar to find a movie in the list if no movie is found offer to suggest it
//  display Rank, img, title, year, upvote/downvote
//    Informational for movie clicked on
//      Img, title, year, horror subgenre, summary, director, actors
//      Number of times Ive watched it
//      watched it button for users
//        Number of users who have watched it
//      comment section
//  Suggest a movie
//User page
//  update settings
//    profile img
//    Email
//    Name
//    Password
//    delete
//  join date


import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import DarkList from './components/DarkList/DarkList';

function App() {
  
    return (
      <div className="App">
      <Navigation />
      <DarkList /> {/*search will be in top list*/}
      {/*<UserProfile /> /*for the user to update their profile*/}
      {/*<Signin />*/}
      {/*<Register />*/}
      </div>
    );
}

export default App;
