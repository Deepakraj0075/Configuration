// import scooter from './images/Scooter';

const ConfirmBox = () => {
    return (
        <div>
            
            <div id="bigBox">
              
              <div id="leftBox">
              
              </div>
              {/* <img src={require('../images/giphy.gif').default} height={300} width={300}/> */}
              {/* <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-64 h-92 rounded-md overflow-hidden object-center object-none" src={require('../images/giphy.gif').default}></img> */}
              
              <div id="rightBox">
              
              </div>
             <centre>
 

             <img class="h-full w-full object-cover md:h-full md:w-full" src={require('../images/giphy.gif').default} width="448" height="299" alt="Man looking at item at a store"></img>

             {/* <div class="relative p-2 h-44 w-44 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">
      <div class="absolute inset-x-0 top-0 h-64 w-42 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">
      <img src={require('../images/giphy.gif').default} /> 
      </div>
    </div> */}
    
    </centre> 
            
           </div>
           
           <div class="flex items-center justify-center font-bold">          
                <svg class="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>   
               </svg>
            
        <p> Order successful placed</p>
        </div>

            <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-30">
  <div class="divide-y-4 divide-black divide-opacity-25">
    <div class="text-center font-extrabold text-2xl text-light-blue-600 py-3">   
     <p class="italic text-xs text-orange-600 md:text--600 ..."> In the unlikely case of items being unavalible, what would you prefer</p>
        </div>
    <div class="text-center font-extrabold text-2xl text-light-blue-600 py-3">
    <div class="text-center">
      <br />
    <button type="button" class="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-red-500 focus:outline-none" tabindex="-1">
      Continue to shooping
    </button>
  </div>
    </div>
  </div>
</div>
           {/* <div class="flex justify-around -m-2">   
            <div class="w-200px h-12 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-purple-500 m-2 box-content h-10 w-12 p-4 border-4 ...">
            <input type="radio" name="radio-group" value="1" defaultChecked />
                </div>
                  <div class="w-200px h-12 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-purple-500 m-2 box-content h-10 w-12 p-4 border-4 ...">
                  <input type="radio"/>
                     </div>  
                        <div class="w-200px h-12 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-purple-500 m-2 box-content h-10 w-12 p-4 border-4 ...">
                        <input type="radio"/>
                          </div>
                         
                    
              </div> */}


      
      {/* <footer class="bold text-xs centre text-red-600 md:text-purple-600 ..."> Prime Vogue .Ltd,Kolkata</footer> */}

      <br/>
           </div> 
              
    )
}

export default ConfirmBox
