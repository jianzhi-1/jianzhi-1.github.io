import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function Sketch({image, alt}) {
    return (
        <Card       
            sx={{
                width: "100%",         // fill grid cell width
                aspectRatio: "1 / 1",  // force square
                overflow: "hidden"     // crop overflow
            }}>
            <CardMedia
                component="img"
                image={image}
                alt={alt}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // crop to fill square
                    objectPosition: "center" // keep center focus
                }}
            />
        </Card>
    );
}
