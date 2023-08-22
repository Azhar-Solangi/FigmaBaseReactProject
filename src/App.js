
import './App.css';
import ArticlesSec from './componants/article-section/AtriclSection';
import Beautiful from './componants/beautiful-section/BeautifulSection';
import CreateCard from './componants/create-section/CreateCard';
import FooterSec from './componants/footer/FooterSection';
import FriendSection from './componants/friendsSection/FriendSection';
import Header from './componants/header/Header';
import TeacherCard from './componants/teacher-card/Teacher';


function App() {
  return (
<>

<Header />
<CreateCard />
<TeacherCard />
<Beautiful />
<FriendSection />
<ArticlesSec/>
<FooterSec />



  
</>
    
  );
}

export default App;
