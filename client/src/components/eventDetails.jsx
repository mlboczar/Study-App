import { useState, useEffect } from "react";
import { getEventById } from "../fetching";
import { useParams } from "react-router-dom";

// Define a mapping of topic names to image URLs
const topicImageMapping = {
  Science:
    "https://e0.pxfuel.com/wallpapers/135/1007/desktop-wallpaper-science-background-vectors-stock-psd-social-science.jpg",
  Mathematics:
    "https://t4.ftcdn.net/jpg/02/05/76/23/360_F_205762306_KCw2syVz457NVnZNQCgFdeWW0MRKqlt0.jpg",
  Art: "https://i.pinimg.com/736x/cb/2c/13/cb2c130454e570e4d6a2896928b9a1d0.jpg",
  Social_Studies:
    "https://www.oksd.wednet.edu/cms/lib/WA01001356/Centricity/Domain/78/geography-555x370.jpg",
  Literature:
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl0ZXJhdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  Foreign_Language:
    "https://media.istockphoto.com/id/493800479/photo/thank-you.webp?b=1&s=170667a&w=0&k=20&c=3NBo_wEnJ7AEZ2mDuyGKZqmZssmKNN7sUOYX7xKjdpo=",
  Computer_Science:
    "https://t4.ftcdn.net/jpg/02/38/56/37/360_F_238563715_TT246ABsfPc7OMkIASI5wTOYiwwlf8Yz.jpg",
  Business:
    "https://thumbs.dreamstime.com/b/infographic-showing-economics-trends-39390289.jpg",
};

// Function to get the image URL based on the event's topic
function getImageUrl(topic) {
  // Check if the topic exists in the mapping, otherwise use a default image URL
  return (
    topicImageMapping[topic] ||
    "https://media.istockphoto.com/id/594484448/vector/books-sketch-seamless.jpg?s=612x612&w=0&k=20&c=DACpDBVkXYVwafxvixLdFERAbVJMF94SyZO9gJ0FcU4="
  );
}

export default function Event() {
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchEvent() {
      const singleEvent = await getEventById(id);
      setEvent(singleEvent);
    }
    fetchEvent();
  }, [id]);

  const imageUrl = getImageUrl(event.topic);

  return (
    <div>
      {/* Event Details */}
      <div>
        <div>
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={imageUrl}
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                <h1 className="truncate text-2xl font-bold text-gray-900">
                  {event.name}
                </h1>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                ></button>
              </div>
            </div>
          </div>
          <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
            <h1 className="truncate text-2xl font-bold text-gray-900">
              {event.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-8">
        {/* Event Title and RSVP Button */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">{event.title}</h1>
          <button
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
            onClick={() => alert("RSVP Button Clicked")}
          >
            RSVP
          </button>
        </div>

        {/* Date & Time */}
        <p className="text-gray-600 mb-4">
          Date & Time: {new Date(event.datetime).toLocaleString()}{" "}
          {event.timezone}
        </p>

        {/* Topic */}
        <p className="text-gray-600 mb-4">Topic: {event.topic}</p>

        {event.group !== null ? (
          <p className="text-gray-600 mb-4">Group Study</p>
        ) : (
          <p>Partner Study</p>
        )}

        {event.gender !== null ? (
          <p className="text-gray-600 mb-4">Gender: {event.gender}</p>
        ) : null}

        {event.location !== null && (
          <p className="text-gray-600 mb-4">
            Address: {event.address} {event.location}
          </p>
        )}
        <br></br>
        <h1 className="text-3xl font-bold">Description</h1>
        <div className="mt-8 text-xl text-gray-800">
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}
