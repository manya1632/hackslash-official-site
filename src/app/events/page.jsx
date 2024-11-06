import { connectToDb } from '@/lib/db';
import React from 'react'
import { Event } from '@/lib/models'
import Link from 'next/link';
import moment from 'moment';
import Card from '@/components/Card';

const EventsPage = async () => {
  
  await connectToDb();
  const events = await Event.find().populate({
    path: 'author',
    select: 'username'
  })
  // console.log(blogs);


  return (
    // <section className='flex flex-col items-center noScrollbar' style={{background : 'url("/blogs-bg.jpg")', backgroundPosition : 'center', backgroundSize: 'cover', backgroundAttachment : 'fixed'}}>
    //   <div className='flex flex-col items-center gap-4 w-full'>
    //     <h1 className='text-4xl font-bold m-4 text-white'>Events</h1>
    //     <div className='flex flex-wrap w-full px-8 gap-8 justify-between'>

    //       {
    //         events.length > 0 && (
    //           events.map((event) => (
    //             <Link href={'/events/' + event._id} key={event._id} style={{background : `url(${event.images[0] || 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})` , backgroundPosition : 'center', backgroundSize: 'cover'}} className='relative bg-center h-[300px] w-full md:w-[45%] lg:w-[30%] rounded-md flex justify-center items-center cursor-pointer transition-all duration-200 group border border-gray-500'>
    //               <div className="absolute inset-0 bg-black opacity-40 rounded-md transition-all duration-200 group-hover:opacity-70"></div>

    //               <div className="relative z-10 p-4 flex flex-col items-center gap-2 transition-all duration-200 group-hover:scale-110">
    //                 <h1 className="text-white font-semibold text-2xl">{event.title}</h1>
    //                 <h2 className="text-white">{moment(event.eventDate).format("MMMM Do YYYY")}</h2>
    //                 {/* <span className='text-gray-500 text-sm'>{new Date(event.createdAt).toDateString()}</span> */}
    //               </div>
    //             </Link>
    //           ))
    //         )
    //       }


    //     </div>
    //   </div>


    // </section>
    <div className="bg-black  min-h-screen text-white font-sans">
      {/* Event Title */}
  <section className="relative h-screen bg-cover bg-center bg-[url('/bg.png')]">
        <h2 className="xl:text-9xl text-6xl text-center pt-60 font-bold text-neonGreen ">&lt; EVENT &gt;</h2>
      </section>

      {/* Upcoming Events */}
      <section className="py-6 bg-black">
        <h3 className="text-3xl text-center font-semibold mb-6 py-8 text-gray-200">
          Upcoming Events
        </h3>
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-3 gap-6 px-4 md:px-20">
          <Card
            title={"Delta Winter of Code"}
            imgSrc={"/event.png"}
            description={
              "DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."
            }
            buttonText={"SESSION DETAILS"}
          />
          <Card
            title={"Delta Winter of Code"}
            imgSrc={"/event.png"}
            description={
              "DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."
            }
            buttonText={"SESSION DETAILS"}
          />
          <Card
            title={"Delta Winter of Code"}
            imgSrc={"/event.png"}
            description={
              "DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."
            }
            buttonText={"SESSION DETAILS"}
          />
        </div>
      </section>

      {/* Past Events */}
      <section className="py-6 bg-black">
        <h3 className="text-3xl text-center font-semibold mb-6 text-gray-200">
          Past Events
        </h3>
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-12 md:px-20 max-w-4xl pb-14">
            <Card
              title={"Delta Winter of Code"}
              imgSrc={"/event.png"}
              description={
                "DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."
              }
              buttonText={"SESSION DETAILS"}
            />
            <Card
              title={"Delta Winter of Code"}
              imgSrc={"/event.png"}
              description={
                "DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."
              }
              buttonText={"SESSION DETAILS"}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-3 gap-6 px-4 md:px-20 ">
          <Card
            title={"Delta Winter of Code"}
            imgSrc={"/event.png"}
            description={
              "DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."
            }
            buttonText={"SESSION DETAILS"}
          />
          <Card
            title={"Delta Winter of Code"}
            imgSrc={"/event.png"}
            description={
              "DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."
            }
            buttonText={"SESSION DETAILS"}
          />
          <Card
            title={"Delta Winter of Code"}
            imgSrc={"/event.png"}
            description={
              "DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."
            }
            buttonText={"SESSION DETAILS"}
          />
          
        </div>
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-12 md:px-20 max-w-4xl pb-14 pt-14">
            <Card
              title={"Delta Winter of Code"}
              imgSrc={"/event.png"}
              description={
                "DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."
              }
              buttonText={"SESSION DETAILS"}
            />
            <Card
              title={"Delta Winter of Code"}
              imgSrc={"/event.png"}
              description={
                "DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."
              }
              buttonText={"SESSION DETAILS"}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default EventsPage