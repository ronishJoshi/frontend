import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Typography,
  Container,
  Button,
  Select,
  MenuItem,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  makeStyles,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    width: 150,
  },
});
function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      {category && <Typography variant="h2">{category}</Typography>}

      <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <TextField
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <Button color="primary" variant="contained" type="submit">
              Search
            </Button>
          </form>
          
          

        </li>
        <li>
          Sort By
          <Select
            name="sortOrder"
            onChange={sortHandler}
            inputProps={{
              name: "age",
              id: "age-native-simple",
              
            }}
          >
            <MenuItem value="Newest">Newest</MenuItem>
            <MenuItem value="Lowest">Lowest</MenuItem>
            <MenuItem value="Highest">Highest</MenuItem>
          </Select>
          </li>
      </ul>

      <div className="container py-5">
          <header className="text-center mb-5">
          <h1 className="display-4 font-weight-bold"><b>THRIFT</b>.CO</h1>
          <p className="font-italic">Home to the best in vintage clothing.</p>
          </header>
      </div>

    
      <div className="container">
  <div className="row">
    <div className="col-md-8 col-md-offset-2">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Carousel indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>   
        {/* Wrapper for carousel items */}
        <div className="carousel-inner">
          <div className="item active">
            <img src="https://lp2.hm.com/hmgoepprod?set=width[1280],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s03/magazine-2021/1143-3x2-Magazine-Landscape-1688x1126-72ppi-6.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]" alt />
          </div>
          <div className="item">
            <img src="https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/hm-magazine-2019/featured-fashion/19_Magazine_A_Men_Tuturial_Accessories.jpg]&sink=format[jpeg],quality[70]" alt />
          </div>
          <div className="item">
            <img src="https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/hm-magazine-2019/editors-picks/19_40_T_Accessoarer_Berlin_magazine.jpg]&sink=format[jpeg],quality[70]" alt />
          </div>						
        </div>
        {/* Carousel controls */}
        <a className="carousel-control left" href="#myCarousel" data-slide="prev">
          <span><i className="fa fa-angle-left" /></span>
        </a>
        <a className="carousel-control right" href="#myCarousel" data-slide="next">
          <span><i className="fa fa-angle-right" /></span>
        </a>
      </div>
    </div>
  </div>
</div>




      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
          {products.map((product) => (




             <Card key={product._id}>
             <CardActionArea>
            <img
                  src={product.image}
                  title={product.name}
                  width="200"
                  height="300"
               />
                <CardContent>
                <Typography gutterBottom variant="h3" component="h5">
                    {product.brand}
                  </Typography>
                  
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>

                  <Typography gutterBottom variant="h3" component="h5">
                    Rs.{product.price}
                  </Typography>

                  <Rating
                    value={product.rating}
                    text={product.numReviews + " reviews"}
                  />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={"/product/" + product._id}>{product.name}</Link>
                </Button>
              </CardActions>
            </Card>



          ))}
        </ul>
        

      )}

<div className="container">
  <div className="row">
    <div className="col-md-12">
      <h2>Featured <b>Products</b></h2>
      <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>
        {/* Carousel indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>   
        {/* Wrapper for carousel items */}
        <div className="carousel-inner">
          <div className="item active">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://static.zara.net/photos///2021/V/1/2/p/2714/720/004/2/w/2400/2714720004_6_3_1.jpg?ts=1614779362527" className="img-responsive" alt />									
                  </div>
                  <div className="thumb-content">
                    <h4>HOOK AND LOOP SANDALS</h4>									
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <p className="item-price"><strike>Rs.400.00</strike> <b>Rs.369.00</b></p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://static.zara.net/photos///2021/V/1/2/p/3706/720/032/2/w/1280/3706720032_6_2_1.jpg?ts=1617198231798" className="img-responsive" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>QUILTED NYLON CLUTCH</h4>									
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <p className="item-price"><strike>Rs.1000</strike> <b>Rs700</b></p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>		
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://static.zara.net/photos///2021/V/0/1/p/4661/014/712/2/w/1280/4661014712_6_1_1.jpg?ts=1618558435505" className="img-responsive" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>SATIN TOP WITH PRINT</h4>									
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                      </ul>
                    </div>
                    <p className="item-price"><strike>Rs.900</strike> <b>Rs.700</b></p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>								
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://static.zara.net/photos///2021/V/0/1/p/1918/446/251/2/w/1280/1918446251_6_1_1.jpg?ts=1618409795382" className="img-responsive" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>CONTRAST TULLE BODYSUIT</h4>									
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <p className="item-price"><strike>Rs.1200</strike> <b>Rs.1000</b></p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="/examples/images/products/play-station.jpg" className="img-responsive" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Sony Play Station</h4>
                    <p className="item-price"><strike>$289.00</strike> <span>$269.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="/examples/images/products/macbook-pro.jpg" className="img-responsive" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Macbook Pro</h4>
                    <p className="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="/examples/images/products/speaker.jpg" className="img-responsive" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Bose Speaker</h4>
                    <p className="item-price"><strike>$109.00</strike> <span>$99.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="/examples/images/products/galaxy.jpg" className="img-responsive" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Samsung Galaxy S8</h4>
                    <p className="item-price"><strike>$599.00</strike> <span>$569.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>						
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="/examples/images/products/iphone.jpg" className="img-responsive" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Apple iPhone</h4>
                    <p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="/examples/images/products/canon.jpg" className="img-responsive" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Canon DSLR</h4>
                    <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="/examples/images/products/pixel.jpg" className="img-responsive" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Google Pixel</h4>
                    <p className="item-price"><strike>$450.00</strike> <span>$418.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>	
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="/examples/images/products/watch.jpg" className="img-responsive" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Apple Watch</h4>
                    <p className="item-price"><strike>$350.00</strike> <span>$330.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel controls */}
        <a className="carousel-control left" href="#myCarousel" data-slide="prev">
          <i className="fa fa-angle-left" />
        </a>
        <a className="carousel-control right" href="#myCarousel" data-slide="next">
          <i className="fa fa-angle-right" />
        </a>
      </div>
    </div>
  </div>
</div>




    </Container>
    
    
  );
}
export default HomeScreen;
