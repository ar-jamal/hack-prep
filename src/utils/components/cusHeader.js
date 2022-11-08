import SelectOptions from "./selectOptions";
import TextField from "@mui/material/TextField";
import PageviewIcon from "@mui/icons-material/Pageview";

function Header(props) {
        // console.log(props)
        // [onClick, children]= props
    
    return (
        <div className="Header-view" >
            <img className="Main-logo"
                src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/12/jewelry-logo.jpg'
                alt='link broken'
            />
            <div style={{ flex: 1 }}>
                <SelectOptions 
                onChange= {props.onChange}
                value= {props.value} />
            </div>
            <div
                style={{ flex: 3 }}
                className="Text-field-div">
                <TextField 
                onChange={props.onChangeInput}
                sx={{
                    border: 'none'
                }} className="Text-field"
                 />
                <PageviewIcon
                    sx={{ color: "blue", fontSize: 50, }}
                    className="Search-button"
                />
            </div>
        </div>
    )
}
export default Header;
// sx= {{height: '30px', width: 30}}111