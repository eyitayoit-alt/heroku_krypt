import Link from "next/link";
import { KeyIcon } from "@heroicons/react/20/solid";
export default function Header(){

    return(
    <header className="bg-white dark:bg-gray-800 shadow-md p-4">
    <nav className="max-w-7xl mx-auto flex justify-between items-center">
    <h1 className="flex flex-row text-2xl font-bold text-red-600"><span><Link href="./">SecureFiles </Link></span><span><KeyIcon className="size-8 "/></span></h1>
    <ul className="flex space-x-6">
    <li><Link href='/features' className="hover:text-blue-600">Features</Link></li>
    <li><Link href="/use-cases" className="hover:text-blue-600">Use Cases</Link></li>
    <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
    <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
    </ul>
    </nav>
    </header>

    )
}
