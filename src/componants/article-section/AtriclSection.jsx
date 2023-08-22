import './Style.css';
import rightpic from '../assets/images/left-blue.svg'
import articlpic1 from '../assets/images/article-pic1.svg'
import articlpic2 from '../assets/images/article-pic2.svg'
import articlpic3 from '../assets/images/article-pic3.svg'
 const ArticlesSec = () => {



    return(
        <div>
            <div className='row pb-5 pt-5 mt-5 mb-5'> <h1 className='articl' ><u>Latest article</u></h1>
                <div className='col-md-2'></div>
                <div className='col-md-8 mt-5 row ms-1'>
                    <div className='col-md-4'>
                        <img src={articlpic1} alt="" /> <br /> <br />
                        <span>April 02, 2022</span>
                        <h4 className='mt-3'>Build an Athletic Body <br />
                         With In Eight Weeks Time</h4>
                    </div>
                    <div className='col-md-4'>
                    <img src={articlpic2} alt="" /> <br /> <br />
                        <span>April 02, 2022</span>
                        <h4 className='mt-3'>Build an Athletic Body <br />
                         With In Eight Weeks Time</h4>
                    </div>

                    <div className='col-md-4'>
                    <img src={articlpic3} alt="" /> <br /> <br />
                        <span>April 02, 2022</span>
                        <h4 className='mt-3'>Build an Athletic Body <br />
                         With In Eight Weeks Time</h4>
                    </div>
                </div>
                <div className='col-md-2'><img src={rightpic} alt="" /></div>
            </div>
        </div>
    )
 };
 export default ArticlesSec;