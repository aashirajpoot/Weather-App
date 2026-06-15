import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit'; // SNOW
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

export default function InfoBox({info}) {

const INIT_URL ="https://images.unsplash.com/photo-1674207899213-7feeeb256577?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3klMjB3b25kZXJsYW5kfGVufDB8fDB8fHww";

let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
let COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
let RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UkFJTnxlbnwwfHwwfHx8MA%3D%3D";
let SNOW_URL = "https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U05PV3xlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="InfoBox">
            {/* <h1>Weather Information</h1> */}
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={info.humidity > 80 ? RAIN_URL : info.temp < 1 ? SNOW_URL : info.temp > 15 ? HOT_URL : COLD_URL} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.humidity > 80 ? < ThunderstormIcon />: info.temp < 1 ? <AcUnitIcon/>: info.temp > 15 ? <SunnyIcon/> : <WbCloudyIcon/>}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', component:'span'}}>
                        <div>Temperature: {info.temp}&deg;C</div>
                        <div>Humidity: {info.humidity}</div>
                        <div>Minimum Temp: {info.tempMin}&deg;C</div>
                        <div>Maximum Temp: {info.tempMax}&deg;C</div>
                        <div>The weather can be described as <i> {info.weather} </i> and feels like: {info.feelsLike}&deg;C</div>
                      </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}