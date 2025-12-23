import Carousel from '../../components/Carousel/Carousel';
import './HomePage.css';



const carousel_images =[
{

id : 1,
img_src :'/images/Carousel/css.png',
title : 'buhahahaha',
caption : "yuhohoho!!!"
},
{

id : 2,
img_src : '/images/Carousel/html.png',
title : 'buhahahaha',
caption : "yuhohoho!!!"
},

{
id : 3,
img_src : '/images/Carousel/React.png',
title : 'buhahahaha',
caption : "yuhohoho!!!"
},

]



function HomePage() {
    return (<>
        <div className="container h-100">
            <div className="row home_carousel">
        <div className="col bg-primary flex-column h-100">
            <Carousel  images  = {carousel_images} />
        </div>
            <div className="col bg-success h-100">manju</div>
            
            </div>
        </div>
        

    </>)
}

export default HomePage;