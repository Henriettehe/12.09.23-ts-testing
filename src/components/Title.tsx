// - dot. tsx er for å skrive reacty

//import { string } from "zod"

//Lager en type og props: 
type TitleProps = {
    title: string
    //className? = string
}

//Props, er bedre for mer fleksibilitet: tar inn Titleprops.
export default function Title(props: TitleProps) {
    const { title, className } = props
    //Lager en funksjon for tittel. 
    //Må returnere noe, og kan skrive html syntax
    return <h1 className={className}>{title}</h1>
}

