import './Style.css';
import lastp1 from '../assets/images/all-logos.svg'

const FooterSec =()=> {


    return(


        <div>
            <div className='row bg-col1'>
                <div className='col-md-4'>
                    <h3>Ui/Ux Desogner</h3>
                </div>
                <div className='col-md-4'>
                    <span><u>About     Features     Pricing   Get Started</u></span>
                </div>
                <div className='col-md-4'>
                    <img src={lastp1} alt="" />
                    {/* <img src={lastp2} alt="" />
                    <img src={lastp3} alt="" />
                    <img src={lastp3} alt="" /> */}
                </div>
            </div>
            <div className='row lastDiv'>
                <div className='col-md-6'>
                © Copyright 2023, All Rights Reserved
                </div>
                <div className='col-md-6'> 
               <p> Privacy Policy   Terms & Conditions</p>
                </div>

            </div>

        </div>
    )
};
export default FooterSec;