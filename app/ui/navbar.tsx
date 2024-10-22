import Link from "next/link"
interface NavListProps{
    items:[],
    style: string
}
const NavList:React.FC<NavListProps> = ({items,style})=>{
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