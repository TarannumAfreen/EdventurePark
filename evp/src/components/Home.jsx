import React from 'react'

function Home() {
  return (
    
    <>
    
    <div className="bg-emerald-600 p-4 rounded-lg mb-4">
            <div className="flex flex-col md:flex-row items-center">
              

              <div className="w-full md:w-1/2 text-white">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" >
                  450+
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{color:'black'}}>
                Student entrepreneurs
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" >
                9 Million
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{color:'black'}}>
                Investment Raised
                </p>
                
              </div>
            </div>
          </div>
     <div className="w-full max-w-7xl mx-auto px-4 py-8">
              <h1 className="text-[clamp(2rem,8vw,8rem)] font-black tracking-tighter leading-none text-neutral-900 uppercase">
                turn your ideas
              </h1>
            </div>
   
    
    </>
  )
}

export default Home