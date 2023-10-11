
export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
        <Card imgURL={"https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"}/>
        <Card imgURL={"https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}/>
        <Card imgURL={"https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"}/>
        <Card imgURL={"https://images.unsplash.com/photo-1615111784767-4d7c527f32a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
        <Card imgURL={"https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
      </div>
    </section>
  );
}

function Card({ imgURL }){
  return (
    <article className="relative bg-stone-500 rounded-[15px] overflow-hidden">
      <div className="z-0 absolute inset-0">
        <img className="object-cover object-center w-full h-full" src={`${imgURL}`} alt="" />
        <div className="absolute inset-0 bg-gray-700 opacity-30"></div>
      </div>
      <div className="relative h-80 ">
        <h1 className="absolute bottom-0 right-0 origin-center -rotate-90 -translate-y-10 text-white text-5xl font-semibold">
          Vetcity <br/> Clinic
        </h1>
      </div>
      <div className=" glass relative z-20 flex justify-between items-center m-4 py-2 px-4 rounded-[15px] bg-red-300">
        <p className="text-white">
          This is some address a bit more of it
        </p>
        <div className="flex-none flex justify-center items-center h-10 w-10 bg-white p-1 rounded-md">
          <img 
            className="w-full"
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WhatTheHellMate" 
            alt="" 
          />
        </div>
      </div>
    </article>
  )
}