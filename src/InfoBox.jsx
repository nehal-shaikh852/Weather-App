import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export default function InfoBox({ Info }) {
  let IMG_URL =
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww'

  let WINTER =
    'https://images.unsplash.com/photo-1679091478333-4b48eb24ecad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  let SUMMER =
    'https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  let RAINY =
    'https://images.unsplash.com/photo-1664887981255-55ef7a62e19d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UkFJTlklMjBzZWFzb258ZW58MHx8MHx8fDA%3D'

  return (
    <div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <Card
          sx={{
            maxWidth: '900px',
          }}
        >
          <CardMedia
            sx={{ height: 220 }}
            image={Info.temp < 22 ? WINTER : Info.temp < 30 ? RAINY : SUMMER}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {Info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <p> Temperature = {Info.temp}&deg;C </p>
              <p> MAX Temp = {Info.tempMax}&deg;C </p>
              <p> MIN Temp = {Info.tempMin}&deg;C </p>
              <p>Humidity = {Info.humidity}</p>
              <p>
                The weather can be described as <b>{Info.weather} </b>and feels
                like {Info.feelsLike}&deg;C{' '}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
