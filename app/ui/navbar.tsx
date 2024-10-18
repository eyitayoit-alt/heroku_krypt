import Link from "next/link"
const NavList = ({items,style}:{items:string[],style:string})=>{
return(
    <ul className={style}>
       {items.map((ele,index)=>(
           <li className="text-xl font-bold" key={index}>
                <Link href={`/${ele}`} >{ele}</Link>
                
            </li>
            
            
        ))}
    </ul>
)

}

export { NavList}