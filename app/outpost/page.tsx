
import Image from "next/image";

export default function Outpost() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
     
      <header className="bg-white dark:bg-gray-800 shadow-md p-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">SecureSaaS</h1>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-blue-600">Features</a></li>
            <li><a href="#use-cases" className="hover:text-blue-600">Use Cases</a></li>
            <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto p-8">
        <section className="text-center py-16" id="hero">
          <div className="mb-8">
            <Image 
              src="/hero-image.jpg" 
              alt="Secure data encryption illustration" 
              width={800} 
              height={400} 
              className="rounded-lg mx-auto"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4">Secure File Encryption & Decryption</h2>
          <p className="text-lg mb-6">
            Protect your sensitive data with our top-of-the-line encryption and decryption services.
          </p>
          <a href="#get-started" className="px-8 py-3 bg-blue-600 text-white rounded-lg">Get Started</a>
        </section>

        <section className="py-16" id="features">
          <h3 className="text-3xl font-bold mb-8 text-center">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
              <Image 
                src="/feature-1.jpg" 
                alt="Encryption algorithms" 
                width={200} 
                height={200} 
                className="rounded-md mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-4">Advanced Encryption Algorithms</h4>
              <p>Use state-of-the-art encryption algorithms like AES-256 and RSA to secure your files.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
              <Image 
                src="/feature-2.jpg" 
                alt="File management" 
                width={200} 
                height={200} 
                className="rounded-md mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-4">Easy File Management</h4>
              <p>Upload, encrypt, decrypt, and download files seamlessly with our user-friendly interface.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
              <Image 
                src="/feature-3.jpg" 
                alt="Cross-platform support" 
                width={200} 
                height={200} 
                className="rounded-md mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-4">Cross-Platform Support</h4>
              <p>Access our services on any device, whether it's Windows, Mac, or mobile.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100 dark:bg-gray-700" id="use-cases">
          <h3 className="text-3xl font-bold mb-8 text-center">Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 text-center">
              <Image 
                src="/use-case-1.jpg" 
                alt="Protect sensitive data" 
                width={400} 
                height={250} 
                className="rounded-md mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-4">Protect Sensitive Data</h4>
              <p>Secure personal and business data such as financial documents, legal files, and confidential information.</p>
            </div>
            <div className="p-6 text-center">
              <Image 
                src="/use-case-2.jpg" 
                alt="Compliance and legal security" 
                width={400} 
                height={250} 
                className="rounded-md mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-4">Compliance and Legal Security</h4>
              <p>Ensure your data encryption practices meet regulatory requirements and standards.</p>
            </div>
          </div>
        </section>

        <section className="py-16" id="pricing">
          <h3 className="text-3xl font-bold mb-8 text-center">Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
              <h4 className="text-2xl font-semibold mb-4">Free</h4>
              <p className="text-lg mb-6">Basic file encryption and decryption.</p>
              <p>$0 / month</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
              <h4 className="text-2xl font-semibold mb-4">Pro</h4>
              <p className="text-lg mb-6">Advanced encryption features with priority support.</p>
              <p>$9.99 / month</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
              <h4 className="text-2xl font-semibold mb-4">Enterprise</h4>
              <p className="text-lg mb-6">Custom encryption solutions for large organizations.</p>
              <p>Contact us for pricing</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100 dark:bg-gray-700" id="contact">
          <h3 className="text-3xl font-bold mb-8 text-center">Contact Us</h3>
          <p className="text-center mb-4">Have questions or need a custom solution? Reach out to us!</p>
          <div className="text-center">
            <a href="mailto:support@securesaas.com" className="text-blue-600 hover:underline">
              support@securesaas.com
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 p-4 text-center">
        <p>© 2024 SecureSaaS. All rights reserved.</p>
      </footer>
    </div>
  );
}
