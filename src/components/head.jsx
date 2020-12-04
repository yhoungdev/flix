import React from 'react';
import net from '../images/net.jpg'
import device from '../images/device.png'
import Main from './main'
const Header=()=>{
    return(
        <div id='header'>
                   <header>
            <div className='blur'>
            <div>
              <span>
          <svg id='svg' viewBox="0 0 111 30" class="svg-icon svg-icon-netflix-logo" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
             </span>
            <span>
            <button className='btn btn-danger'>sign up</button>
            </span>
          </div>
               <section>
                   
                       <div >
                            <span>
                                    <h3>
                                        Unlimited movies Tv shows, and more.
                                    </h3>
                                    <h6>Watch anywhere. Cancel anytime</h6>
                                    <p>Ready to watch? Enter your email to create or restart your membership</p>
                                    <span id='cover'>
                                    <input type="email" placeholder='Email address'/>
                                        <button className='btn btn-danger 2nd'>GET STARTED </button>
                                    </span>
                            </span>
                       </div>
                   
               </section>
            </div>
            
        </header>
        {/*other part*/}
        <div className="na">
        <div className='container' id='line'>
         <div className='res' id='resi' >
             <span style={{paddingTop:178,fontSize:20}}>
                 <h4 style={{fontWeight:'bold',fontSize:38}}>Enjoy on your TV.</h4>
             <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
             </span>
             <span>
                 <img src={net} alt="tv logo"/>
             </span>
         </div>
        
     </div>
     </div>
     {/* part 2 */}
     <div className='na'>
         <div className="container">
     <div className='res'  >
             <span>
                  <img src={net} alt="tv logo"/>
             </span>
             <span style={{paddingTop:178,fontSize:20}}>
                <h2 style={{fontWeight:'bold',fontSize:38}}>
                Download your shows to watch offline.
                </h2>
                <p>Save your favorites easily and always have something to watch.</p>
             </span>
         </div>

     </div>

     {/* 3rd part */}
     <div className='na'>
     <div className="container">
     <div className='res'  >
             <span style={{fontSize:20}}>
                    <h2 style={{fontWeight:'bold',fontSize:38}}>
                    Watch everywhere.
                    </h2>
                    <p>
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
                    </p>
             </span>
             <span>
                <img src={device} alt=" netflix image"/>
             </span>
         </div>
         </div>
         </div>
     </div>

     <div className='na'>
         <div className="container" style={{display:"flex",flexDirection:'column'}}>
             <span className='box'>
                 <h3>What is netflix</h3>
             </span>
            
             <span className='box'>
                 <h3>How much does netflix cost ?</h3>
             </span>

             <span className='box'>
                 <h3>Where can i watch</h3>
             </span>

             <span className='box'>
                 <h3>How do i cancel</h3>
             </span>
        {/* other mail */}
        <span id='cove' style={{paddingTop:30}}>

            <h6>
            Ready to watch? Enter your email to create or restart your membership.
            </h6>
             <input type="email" placeholder='Email address'/>
             <button className='btn btn-danger ' >GET STARTED </button>
             </span>
         </div>
         
     </div>

       
        <footer>
            <div className="na">
            <div className="container">
                <div style={{flexDirection:'column'}}>
                    <h6>Questions? Contact us.</h6>
                    <span id='flex'>
                        <ul >
                            <li>FAQ</li>
                            <li>Help center</li>
                            <li>Account</li>
                            <li>Media</li>
                        </ul>
                        {/* second li */}
                        <ul>
                            <li>Investor Relations</li>
                            <li>Jobsr</li>
                            <li>Ways to Watch</li>
                            <li>Terms of Use</li>
                        </ul>
                        {/* 3rd li */}
                        <ul>
                            <li>Speed Test</li>
                            <li>Legal Notices</li>
                            <li>Netflix Originals</li>
                            <li>Contact Us</li>
                        </ul>
                    </span>
                </div>
            </div>
            </div>
        </footer>
        </div>
    )
}
export default Header;