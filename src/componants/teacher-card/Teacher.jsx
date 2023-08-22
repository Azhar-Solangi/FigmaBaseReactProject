import './Style.css';
import zigzag from '../assets/images/zigzag-line-teacher.svg'
import teacherimg from '../assets/images/w-power.svg'
import arow from '../assets/images/btn-arrow-speare.png'
const TeacherCard =() =>{

return(
    <div>
        <div className="row pt-5 mt-5">
        
                <div className="col-md-2 position-relative leftside"> 
                <img src={zigzag} alt="" className='position-absolute bottom-0 start-0 pb-5 imag-fluid ' /> 
                </div>
                <div className="col-md-4 leftside pt-5  ">
                    <h1 className='pt-5 mt-5 ps-2'><b>Start teaching <br /> app development</b></h1>
                    <p className='mt-4 ps-2'>There are some known issues with variable fonts <br />
                     in Chrome, in particular on Microsoft Windows</p>
                     <h3 className='mt-5 ps-2'> <u><b>See More</b></u> <img src={arow} alt="" /></h3>

                </div>
                <div className='col-md-1 leftside me-0'></div>
               
            <div className="col-md-5 ps-0"> <img src={teacherimg} alt="" className='img-fluid' /></div>
        </div>
    </div>
)


}
export default TeacherCard;