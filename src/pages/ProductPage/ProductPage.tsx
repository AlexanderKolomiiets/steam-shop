import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameDetails } from '../../api';
import { Loader } from '../../components/Loader';
import { ProductsDetails } from '../../types/productDetails';
import {
  CardContent,
  CardImage,
  CardDescription,
  CardContainer,
  CardInfo,
  CardLink,
} from './ProductPageStyles';

export const ProductPage: React.FC = () => {
  const [game, setGame] = useState<null | ProductsDetails>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { selectedId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);

      try {
        if (selectedId !== undefined) {
          setGame(await getGameDetails(selectedId));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {game && (
        <>
          <CardLink to="/">Back</CardLink>
          <CardContainer>
            <CardContent>
              <CardImage src={game.imgUrl} alt={game.title} />
              <CardDescription>
                <p style={{ fontSize: '18px' }}>{game.title}</p>
                <p>{game.description}</p>
                <CardInfo>
                  <div>
                    <p>{game.released}</p>
                    <p>{game.price}</p>
                  </div>
                  <div>
                    <p>{`Developer: ${game.developer.name}`}</p>
                    <p>{`Publisher: ${game.publisher.name}`}</p>
                  </div>
                </CardInfo>
              </CardDescription>
            </CardContent>
          </CardContainer>
        </>
      )}
    </>
  );
};
