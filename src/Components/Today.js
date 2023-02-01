import"./Today.css"
export default function Today(props){
    let date = new Date();
    let day = date.toLocaleString('en-US', { day: '2-digit' });
    let Month = date.toLocaleString('en-US', { month: 'long' });
    let Year = date.getFullYear()
    return(
        <div className="Text">{Year}/{Month}/{day}</div>
    )
}