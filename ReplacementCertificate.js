import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaCloudUploadAlt } from "react-icons/fa";
import Sidebar from "./Sidebar";

const schema = z.object({
  certificateCopy: z.any(),
  uploadID: z.any(),
});

export default function ReplacementCertificate() {
  const [activeTab, setActiveTab] = useState("requestCertificate");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log("Uploaded Files:", data);
  };

  return (
    <div className="flex h-screen">
      
      {isSidebarOpen && (
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0" 
        }`}
      >
        <h1 className="text-2xl font-bold mb-6 text-left">Request a Replacement Certificate</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
            
            
            <p className="text-black mb-2 text-left">Uploading old certificate copy (if available)</p>
            <div className="bg-blue-100 rounded-lg p-4 flex flex-col justify-center items-center h-32 w-full border-dashed border-2 border-gray-400 cursor-pointer">
              <label htmlFor="certificateCopy" className="flex flex-col items-center">
              <FaCloudUploadAlt className="text-gray-500 text-3xl mb-2" />
                <span className="text-gray-600">Add pdf/png</span>
              </label>
              <input type="file" {...register("certificateCopy")} className="hidden" id="certificateCopy" />
            </div>


           
            <p className="text-black mb-2 text-left">Upload ID</p>
            <div className="bg-blue-100 rounded-lg p-4 flex flex-col justify-center items-center h-32 w-full border-dashed border-2 border-gray-400 cursor-pointer">
              <label htmlFor="uploadID" className="flex flex-col items-center">
              <FaCloudUploadAlt className="text-gray-500 text-3xl mb-2" />
                <span className="text-gray-600">Add pdf/png</span>
              </label>
              <input type="file" {...register("uploadID")} className="hidden" id="uploadID" />
            </div>

            <p className="text-gray-500 text-sm text-left">Each document must be less than 3MB in size</p>
          </form>
        </div>

        <div className="mt-4 text-right">
          <button className="bg-[#84D0FF21] text-black px-4 py-2 rounded mr-2">Back</button>
          <button type="submit" className="bg-[#84D0FF54] text-black px-4 py-2 rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
