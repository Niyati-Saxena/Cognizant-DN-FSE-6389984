import office_img from '../images/office.png'

function OfficeImg() {
    return (
        <img src = {office_img} alt = "Office Image" 
        // inline styling 
        style = {
            {
                width: "350px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "12px"
                
            }
        } />
    )
}

export default OfficeImg;
