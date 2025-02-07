import { useState } from "react";
import Sidebar from "./Sidebar";

export default function ReviewSubmitPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <div className="flex h-screen">
      
      {isSidebarOpen && <Sidebar activeTab="reviewSubmit" />}

      <div className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <h1 className="text-2xl font-bold mb-6 text-left">Request a Replacement Certificate</h1>

        <div className="bg-white shadow-md rounded-lg p-10 w-full h-[70vh] flex justify-between">

          
          <div>
            <h2 className="text-lg font-semibold mb-2">Request Information</h2>
            <p>P.G.H.J. Sathsarani</p>
            <p>2000457451</p>
            <p>Running event certificate</p>
            <div className="mt-4">
              <input
                type="checkbox"
                id="agree"
                checked={isAgreed}
                onChange={() => setIsAgreed(!isAgreed)}
                className="mr-2"
              />
              <label htmlFor="agree" className="text-sm text-gray-600">I Agree with Terms & Conditions</label>
            </div>
          </div>

          
          <div className="text-right">
            <p><strong>Date:</strong> 02/02/2025</p>
            <p><strong>Request ID:</strong> #564941564</p>
          </div>
        </div>

        
        <div className="mt-6 flex justify-between">
          <button className="bg-[#84D0FF21] text-black px-4 py-2 rounded">Back</button>
          <div className="flex gap-2">
            <button className="bg-[#84D0FF21] text-black px-4 py-2 rounded">Print</button>
            <button className={`px-4 py-2 rounded ${isAgreed ? "bg-[#84D0FF54] text-white" : "bg-blue-200 text-black"}`} disabled={!isAgreed}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
