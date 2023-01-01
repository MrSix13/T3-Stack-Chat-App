import type { ReactNode,ButtonHTMLAttributes  } from "react"

interface Props 
   extends React.DetailedHTMLProps<
 ButtonHTMLAttributes<HTMLButtonElement>,
 HTMLButtonElement>
 {
    children: ReactNode,
    shouldFill?:boolean,
    className?:string
}



export default function IconButton({children, shouldFill, className}:Props){
    return <button
            className={`flex w-h10 w-10 items-center justify-center [&_svg]:h-6 [&_svg]:w-6 ${shouldFill ? "[$_svg>*]:fill-primaryText" : ""}
} ${className ? className : ""}`}
        >
        {children}
    </button>
}