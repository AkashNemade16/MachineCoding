import MyAccordin from './MyAccordin';
import './Accordin.css'
const data  =[
    {title:'html',content:'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'},
    {title:'css',content:'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'},
    {title:'Javascript',content:'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'},

]
const Accordin = () => {

    return (
        data.map((item,index)=>(
            <MyAccordin key={index} {...item}/>
        ))
    )
}

export default Accordin