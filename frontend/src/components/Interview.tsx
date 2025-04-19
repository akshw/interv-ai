// import { useState } from "react";
// function Interview() {
//   const handleInterview = () => {
//     const stream = navigator.mediaDevices.getUserMedia({
//       audio: true,
//       video: true,
//     });
//     //@ts-expect-error
//     setMystream(stream);

//     alert("allow permissions ");
//   };

//   const [mystream, setMystream] = useState();

//   return (
//     <div className="flex ">
//       <div>Interview</div>
//       <div className="">
//         <button
//           className="bg-gray-400 justify-center align-middle "
//           onClick={handleInterview}
//         >
//           Take Interview
//         </button>
//       </div>
//       <video ref={mystream} className="w-xs h-52" autoPlay playsInline></video>
//     </div>
//   );
// }

// export default Interview;

import { useState, useRef, useEffect } from "react";

function Interview() {
  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Effect to set the video source when stream is available
  useEffect(() => {
    if (myStream && videoRef.current) {
      videoRef.current.srcObject = myStream;
    }
  }, [myStream]);

  const handleInterview = async (): Promise<void> => {
    setIsLoading(true);
    setError("");

    try {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });

      setMyStream(stream);
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError(
        `Camera access failed: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <div className="text-xl font-bold">Interview</div>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded">{error}</div>
      )}

      <div className="w-full max-w-md">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleInterview}
          disabled={isLoading}
        >
          {isLoading ? "Requesting access..." : "Take Interview"}
        </button>
      </div>

      {myStream && (
        <div className="border-2 border-gray-300 rounded overflow-hidden">
          <video
            ref={videoRef}
            className="w-full max-w-md h-64"
            autoPlay
            playsInline
          />
        </div>
      )}
    </div>
  );
}

export default Interview;
