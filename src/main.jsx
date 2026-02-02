import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <App />

)






      // <section className="global w-full !py-[100px]">
      //           <h1 className='text-center text-[clamp(30px,10vh,128px)] !mb-[clamp(40px,8vw,100px)] !px-5'>
      //               Azerbaycan Medeniyyeti qlobal seviyyede temsil <span> olunur</span>
      //           </h1>


      //           <div className='w-full z-20'>
      //               <div className="main-box relative !mb-[-360px]">
      //                   <div className="video-box">
      //                       <video
      //                           className='w-full relative z-20 !px-5'
      //                           ref={videoRef}
      //                           controls
      //                           loop
      //                           src={main}
      //                           poster={mainvideo}
      //                       ></video>

      //                       {/* Play overlay icon */}
      //                       {!play && (
      //                           <div
      //                               onClick={() => {
      //                                   handlePlay();
      //                                   setPlay(play => !play);
      //                               }}
      //                               className='absolute inset-0 flex items-center justify-center z-30 cursor-pointer'
      //                           >
      //                               <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
      //                                   <rect x="1.25315" y="1.25315" width="81.4927" height="81.4927" rx="40.7464" stroke="white" strokeWidth="0.662543" />
      //                                   <circle cx="41.9992" cy="42.0002" r="34.758" fill="white" />
      //                                   <path d="M35.4814 54.5404V30.0518L53.9466 41.9998L35.4814 54.5404Z" fill="black" />
      //                               </svg>
      //                           </div>
      //                       )}
      //                   </div>
      //               </div>

      //               <div className="z-1 bg-[#161616] h-[600px] flex items-end !pb-[20px]">

      //                   <p className='max-w-[1024px]  !mx-auto text-white text-[14px] md:text-lg lg:text-xl px-0'>
      //                       18 dekabr 2024-cü il tarixində İtaliyanın paytaxtı Romadakı Azərbaycan Mədəniyyət Mərkəzində dünyanın 22 ölkəsindən mədəniyyət xadimlərimizin iştirakı ilə Azərbaycan Mədəniyyət Elçilərinin ilk Toplantısı keçirilib. Tədbirdə Azərbaycan Mədəniyyət Elçilərinin 1-ci Forumunun təşkil olunmasına dair qərar qəbul olunub və Təşkilat Komitəsi yaradılıb. Azərbaycanlı mədəniyyət xadimləri burada bir araya gələrək ortaq bir məqsədi bölüşdü: Azərbaycan mədəniyyətini dünyanın hər guşəsində daha güclü və sistemli şəkildə tanıtmaq. Həmin görüş sadəcə bir toplantı deyil, yeni bir mərhələnin başlanğıcı oldu.
      //                   </p>

      //               </div>
      //           </div>
      //       </section>
