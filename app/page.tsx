import Image from "next/image";
import {lock,compliance, dataProtection} from "./images"
import { ButtonPrimary } from "./ui/input";

export default function Home() {

  return (
  
    <main className="max-w-7xl mx-auto p-8">
    <section className="flex sm:flex-col lg:flex-row  py-10 " id="hero">
    <div className="mb-4 w-full lg:w-[45%] mx-auto">
            <Image 
              src={dataProtection} 
              alt="Secure data encryption illustration" 
              width={500} 
              height={250} 
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="flex flex-col  w-full lg:w-[45%] mx-auto">
          <h2 className="text-3xl font-bold mb-2">Secure File Encryption & Decryption</h2>
          <ul className="list-disc px-8 mb-4">
           <li className="text-lg mb-2">Protect your sensitive data with our top-of-the-line encryption and decryption services.
           </li>
          <li className="text-lg mb-2">Use state-of-the-art encryption algorithms like AES-256 and RSA to secure your files.</li>
          <li className="text-lg mb-2">Upload, encrypt, decrypt, and download files seamlessly with our user-friendly interface.</li>
          <li className="text-lg mb-2" >Access our services on any device, whether it's Windows, Mac, or mobile.</li>
          </ul>
         {/* <ButtonPrimary label="Get Started" src="" style="bg-red-600 text-white font-bold w-1/4 h-12 rounded-xl"/>*/}
           <button className="bg-red-600 text-white font-bold w-1/4 h-12 rounded-xl"><a href="/api/auth/login">Login</a></button>
          </div>
        </section>
        <section className="py-10 bg-gray-100 dark:bg-gray-700" id="use-cases">
          <h3 className="text-3xl font-bold mb-4 text-center">Use Cases</h3>
          <div className="flex flex-col lg:flex-row ">
            <div className="p-6 text-justify w-full lg:w-[45%] mx-auto">
              <Image 
                src={compliance}
                alt="Protect sensitive data" 
                width={500} 
                height={250} 
                className="rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold mb-4">Protect Sensitive Data</h4>
              <p>Secure personal and business data such as financial documents, legal files, and confidential information.</p>
            </div>
            <div className="p-6 text-justify w-full lg:w-[45%] mx-auto">
              <Image 
                src={lock} 
                alt="Compliance and legal security" 
                width={500} 
                height={250} 
                className="rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold mb-4">Compliance and Legal Security</h4>
              <p>Ensure your data encryption practices meet regulatory requirements and standards.</p>
            </div>
          </div>
        </section>
   
    </main>


  
      
  );
}
