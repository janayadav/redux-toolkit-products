import { useEffect } from "react";
import { Alert, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CreateSlice";
import { getProducts } from "../store/ProductSlice";
import StatusCode from "../store/utlis/StatusCode";

const Product = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    // dispatch getsproducts on action
    dispatch(getProducts());
    // fetch("https://fakestoreapi.com/products")
    //   .then((Response) => Response.json())
    //   .then((result) => getProducts(result));
  }, []);
  if (status === StatusCode.LOADING) {
    return <p>loading...</p>;
  }
  if (status === StatusCode.ERROR) {
    return (
      <Alert key="danger" variant="danger">
        <p>something went wrong! try again later</p>;
      </Alert>
    );
  }
  const addToCart = (product) => {
    //  dispatch on add action
    dispatch(add(product));
  };
  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100" style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return <div className="row">{cards}</div>;
};

export default Product;
