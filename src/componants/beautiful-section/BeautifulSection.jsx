import './Style.css';
import rightBlue from '../assets/images/header-blueColor.svg'
import leftBlue from '../assets/images/left-blue.svg'
import blackFile from '../assets/images/file-black-and-white.svg'
import bulb from '../assets/images/bulb-pic.svg'
import newsPaper from '../assets/images/news-black-white.svg'
import manBlack from '../assets/images/man-black-white.svg'
const Beautiful =() =>{


    return(

        <div>
          
            <div className='row mt-5 pt-5'>
                <div className='col-md-2'> <img src={rightBlue} className='img-fluid' alt="" /></div>
                <div className='col-md-4 ms-2 mt-5 pt-5'>
                    <h1>Create beautifullayouts <br /> simply</h1> <br /> <br />
                    <img src={blackFile} className='img-fluid' alt="" />
                    <h1>Bring your ideas to life</h1>
                    <p>There are some known issues with variable <br /> fonts in Chrome, in particular on Microsoft <br /> Windows</p><br /> <br />
                    <img src={bulb} className='img-fluid' alt="" />
                    <h1>Bring your ideas to life</h1>
                    <p>There are some known issues with variable <br /> fonts in Chrome, in particular on Microsoft <br /> Windows</p><br />
                   

                </div>
                
                <div className='col-md-4 ms-2 mt-5 pt-5 '>
                    <p>There are many variations of passages of Lorem Ipsum <br />
                     available, but the majority have suffered alteration in some <br />
                     form, by injected humour, or randomised words</p> <br /> <br />
                     <img src={newsPaper} className='img-fluid' alt="" />
                    <h1>Bring your ideas to life</h1>
                    <p>There are some known issues with variable <br /> fonts in Chrome, in particular on Microsoft <br /> Windows</p><br /> <br />
                    <img src={manBlack} className='img-fluid' alt="" />
                    <h1>Bring your ideas to life</h1>
                    <p>There are some known issues with variable <br /> fonts in Chrome, in particular on Microsoft <br /> Windows</p><br />
                   
                </div>
                <div className='col-md right-Blue'>
            <img src={leftBlue} className=' img-fluid' alt="" /> 
            </div>
            </div>
           
        </div>
    )
};
export default Beautiful;