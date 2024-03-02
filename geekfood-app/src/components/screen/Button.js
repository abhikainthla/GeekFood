import'./Button.css'
function Button(props){
    return(
        <button style={{color : props.fontColor, backgroundColor : props.backgroundColor, borderRadius : props.borderRadius, fontSize : props.fontSize, fontWeight : props.fontWeight, padding : props.padding}} className="button">
            {props.children}
        </button>
    )
}
export default Button;