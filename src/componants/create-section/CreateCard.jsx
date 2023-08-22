import "./Style.css";
import backPic from '../assets/images/backgroud-black.svg';
import combinPic from '../assets/images/6pics-combine.svg';
import prototype from '../assets/images/prototype-pic.svg';
import leftPic from '../assets/images/left-blue.svg'
import arow from '../assets/images/btn-arrow-speare.png'
const CreateCard =() =>{

return (
    <div>
<div className="row mt-5 pt-5" >
    <div className="col-md-2"></div>
            <div className="col-md-4 ">
            <div className="position-relative">
                <h4 className="mt-5 position-absolute top-0 start-50 translate-middle  text-white"><b>Create beautifullayouts simply</b></h4>
                <button className="simle-btn position-absolute bottom-0 start-50 translate-middle-x mb-5"><b>See All My Work </b><img src={arow} alt="" /></button>
                
                <img src={backPic} className="img-fluid" alt="" /> 
                </div>
                <img src={combinPic} className="img-fluid mt-5" alt="" />
                <h3 className="pt-4 ps-2"><b>Design</b></h3>
                <p className="ps-2">There are some known issues with <br />
                    variable fonts in Chrome, in particular <br />
                    on Microsoft Windows</p>
            </div>
            <div className="col-md-4 pt-4 ">
                <p className="pt-5 pb-3 ps-5 mt-2 text-black"> <u> Let’s deal with one of the most useful design <br />
                    kits. You’re free to generate ideas and make <br />
                    them alive faster than before.</u></p>
                <img src={prototype} className="img-fluid pt-5 mt-5" alt="" />
                <h3 className="pt-4 ms-2"><b>Prototyping</b></h3>
                <p className=" ms-2">There are some known issues with <br />
                    variable fonts in Chrome, in particular <br />
                    on Microsoft Windows</p>

            </div>
    <div className="col-md-2 position-relative ">
        <img src={leftPic} class="position-absolute top-0 end-0 leftSidePic" alt="" />
    </div>

</div>
    </div>

)


};
export default CreateCard;