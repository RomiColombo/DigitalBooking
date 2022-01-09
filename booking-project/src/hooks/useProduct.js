import { useEffect, useState } from "react";
import config from '../config/index.js';

export default function useProduct(id) {
  const [product, setProduct] = useState(null);

  useEffect(async () => {
    let url = config.baseUrl + ':8080/products/' + id;
    await fetch(url)
      .then((res) => res.json())
      .then((producto) => {
        setProduct(producto);
      });
      

  }, []);

  return product;
}
