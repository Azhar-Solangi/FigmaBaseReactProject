import './Style.css';

import leftPic from '../assets/images/friends-left.svg'
import rightPic from '../assets/images/friends-right.svg'
import starIcon from '../assets/images/5stars.svg';
import ovel from '../assets/images/female-ovel-pic.svg'
const FriendSection =() => {


    return (
        <div> 
            <div className='row pb-5 mt-5 pt-5 bg-col'>
                <div className='col-md-2'><img src={leftPic} alt="" /></div>
                <div className='row ms-1 col-md-8'>
                <div className='col-md-4'> <h1><u>We’ve got friends</u></h1> <br />
                <div class="  px-3 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex pt-5 pb-3 "><img src={ovel} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                <div class="mt-4  px-3 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex pt-5 pb-3 "><img src={ovel} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                </div>
                <div className=' mt-5 pt-5 col-md-4'>
                <div class="  px-3 mt-4 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex pt-5 pb-3 "><img src={ovel} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                <div class="mt-4  px-3 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex pt-5 pb-3 "><img src={ovel} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                </div>
                <div className='col-md-4 position-relative'>
                  <button class="position-absolute top-0 end-0  btn-light mt-2 me-3 join-free-btn " type="submit"> <b>Join For Free</b></button> <br />
       
                <div class=" mt-5 px-3 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex pt-5 pb-3 "><img src={ovel} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                <div class="mt-4  px-3 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex pt-5 pb-3 "><img src={ovel} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                </div>
                </div>
                <div className='col-md-2 position-relative'>
                     <img src={rightPic} alt="" className='position-absolute top-0 end-0' /></div>

            </div>
        </div>
    );
}
export default FriendSection;