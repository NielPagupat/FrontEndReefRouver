import React from 'react'
import LandingNavigation from '../Components/LandingNavigation' 


export default function Landing() {

  return (
    <div className='flex fontsans  flex-col'
        >
        <LandingNavigation/>
        <main className='flex flex-1 flex-col bg-[#006994] items-center text-center '  style={{
          backgroundImage: "url('../src/assets/coralwithfish.png')", 
          backgroundAttachment: 'fixed', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }}>

            <div className="flex p-0 m-0 h-screen flex-col items-center bg-center" >
              <div className="flex text-2xl flex-col rounded justify-center mt-20  bg-black/50 backdrop-blur-sm font-light mb-20 w-6/12 p-5 border-10  text-white ">
                <p>
                  <p className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Coral reef are some of the most diverse ecosystem in the world.</p>
                  Coral polyps, the animals primarily responsible for building reefs, can take many forms: large reef-building colonies, graceful flowing fans, and even small,
                  solitary organisms. Thousands of species of corals have been discovered; some live in warm, shallow, tropical seas and others in the cold, dark depths of the
                  ocean.
                </p>
                <br />
                <br />
                <figcaption>
                  <p className='text-1xl'>School in great numbers at Rapture Reef, French Frigate Shoals Papahanaumokuakea National Monument. 
                  </p>
                  <br />
                  <p className='italic'>Image credit: James Watt </p>
                </figcaption>
              </div>
            </div>

                {/** coral bleaching */}
                <div className='flex flex-1 w-4/5 mb-2 mt-5 bg-white'>
                  <img src="../src/assets/CoralB.jpg" alt="bleachInfo" />
                </div>

                {/** biodivercity */}
                <div className="flex justify-center flex-1 items-center h-screen">
                  <div className="w-6/12 p-8 rounded bg-white bg-opacity-80 text-center border-2  border-gray-300">
                    <p className="text-lg font-serif">
                      Biodiversity refers to the variety of living species that can be found in a particular place. Coral reefs are believed by many to have the highest biodiversity of any ecosystem on the planet—even more than a tropical rainforest. Occupying less than one percent of the ocean floor, coral reefs are home to more than 25% of all marine life.
                      <br />
                      <br />
                      Why is that important? A highly biodiverse ecosystem, one with many different species, is often more resilient to changing conditions and can better withstand significant disturbances.
                    </p>
                  </div>
                </div>
            
            
                <div className='flex flex-col justify-center rounded-lg bg-black/50 backdrop-blur-sm h-full w-6/12 items-center mt-20 mb-20'>
                  <div className="flex flex-col items-center">
                    <div className="w-6/12 h-6/12 flex justify-center items-center">
                      <img src="../src/assets/rouverlogo.png" alt="logosaReef" />
                    </div>
                    <h6 className="text-7xl font-serif mb-5 mt-1 text-white">Reef Rouver</h6>
                  </div>
                  <div className='items-center w-6/12 text-base'>
                    <p className="text-white">
                      Reef Rouver is an alternative to the traditional way of hiring scuba divers to check and monitor the coral reefs, and other marine life. In addition, monitoring won’t be hassle enough risking the safety of the fragile coral reefs, as well as other marine life in the sea.
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
            
                <div className='flex flex-row justify-around items-center mb-20'>
                  <img 
                    src="../src/assets/sub1right.png" 
                    alt="sub1" 
                    style={{
                      width: '30%',              
                      height: '30%',             
                    }} 
                  />
                  <img 
                    src="../src/assets/aiDe.jpg" 
                    alt="sub2ai" 
                    style={{
                      width: '30%',
                      height: '30%',
                    }} 
                  />
                  <img 
                    src="../src/assets/sub3left.png" 
                    alt="sub3" 
                    style={{
                      width: '30%',
                      height: '30%',
                    }} 
                  />
              </div>

                <div className='bg-cyan-600 w-full mb-10 h-96'>
                  <div className='flex w-full font-bold text-5xl pl-20 mb-20'>
                    <h2 className=' text-white'>
                      Reef Rouver Uses
                    </h2>
                  </div>
              
                    {/** materials */}
                <div className='flex flex-row justify-around  text-white w-full min-h-16'>
                  <div className='flex justify-center flex-col flex-1 items-center'>
                      <img className='rounded-full w-6/12 mb-5'
                      src="../src/assets/AUno.png" alt="Aunp" />
                      <p>Arduino Uno</p>
                    </div>

                    <div className='flex justify-center flex-col flex-1 items-center'>
                      <img className='rounded-full w-6/12 mb-5'
                        src="../src/assets/MotorD.png" alt="MotorD" />
                      <p>L298 Motor Driver Boards</p>
                    </div>

                    <div className='flex justify-center flex-col flex-1 items-center'>
                      <img className='rounded-full w-6/12 mb-5'
                        src="../src/assets/Eshield.png" alt="mat" />
                      <p>Ethernet Shield</p>
                    </div>

                    <div className='flex justify-center flex-col flex-1 items-center'>
                    <img className='rounded-full w-6/12 h-auto mb-5'
                      src="../src/assets/relay.png" alt="relay" />
                      <p>Arduino Relay Channel</p>
                    </div>

                </div>
              </div>
              

              <div className='flex justify-center flex-col mb-20 items-center font-extrabold p-10 w-auto h-auto text-3xl text-white bg-black/50 backdrop-blur-sm'>
                <div>
                    <h1 className='mb-2' >
                      And Using
                    </h1>
                    <div className='flex justify-center items-center'>
                      <img className='w-6/12' src="../src/assets/yoloU.png" alt="AI" />
                    </div>    
                </div>
              </div>

              <div className='flex justify-center items-center w-6/12 mb-2 p-10 rounded '>
                    <p className='bg-black/50 backdrop-blur-sm break-words text-white'> 
                      The Prototype of Reef Rouver Was tried and Tested last November 17, 2024 where we got Valuable data for further AI training and How to improve the Submersible over all.
                    </p>
              </div>

              <div className='mb-20'>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <img className="h-64 w-full object-cover rounded-lg" src="../src/assets/1test.png" alt="testpic"/>
                  </div>
                  <div>
                    <img className="h-64 w-full object-cover rounded-lg" src="../src/assets/2test.png" alt="testpic"/>
                  </div>
                  <div>
                    <img className="h-64 w-full object-cover rounded-lg" src="../src/assets/3test.png" alt="testpic"/>
                  </div>
                  <div>
                    <img className="h-64 w-full object-cover rounded-lg" src="../src/assets/4test.png" alt="testpic"/>
                  </div>
                </div>
              </div>

              <div className='bg-black/50 backdrop-blur-sm mb-20'>
                    <h1 className='text-3xl text-white font-extrabold'>
                        Our Team
                    </h1>
                    <div className='flex flex-row justify-around  text-white w-full min-h-16'>
                        <div className='flex justify-center flex-col flex-1 items-center'>
                            <img className='rounded-full w-6/12 mb-5'
                            src="../src/assets/Cj.png" alt="Aunp" />
                            <p>Creslen Joy B. Boncales</p>
                          </div>

                          <div className='flex justify-center flex-col flex-1 items-center'>
                            <img className='rounded-full w-6/12 mb-5'
                              src="../src/assets/Rimand.png" alt="MotorD" />
                            <p>Ricado M. Rimando Jr.</p>
                          </div>

                          <div className='flex justify-center flex-col flex-1 items-center'>
                            <img className='rounded-full w-6/12 mb-5'
                              src="../src/assets/Niel.png" alt="mat" />
                            <p> Niel Angelo Pagupat</p>
                          </div>

                          <div className='flex justify-center flex-col flex-1 items-center'>
                          <img className='rounded-full w-6/12 h-auto mb-5'
                            src="../src/assets/Lance.png" alt="relay" />
                            <p> Lance Stuart Cambarijan</p>
                          </div>

                          <div className='flex justify-center flex-col flex-1 items-center'>
                          <img className='rounded-full w-6/12 h-auto mb-5'
                            src="../src/assets/Rome.png" alt="relay" />
                            <p> Gerome Quilestino</p>
                          </div>
                      </div>
                    </div>
        </main>

        

        <footer className=' bg-slate-800 w-full h-1/4 text-white'>
        <div className="container mx-auto text-center">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2">Email: reefrover.com</p>
          <p>Phone: 63+ 987654321</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
        </footer>
      </div>
    );
}