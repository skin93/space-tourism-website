import { useEffect, useState } from 'react';
import { InteractiveElement, SubHead1, SubHead2 } from 'styles/GlobalStyle';
import {
  Img,
  DestinationSection,
  Destinations,
  DestinationElement,
  Description,
  Name,
  StyledDivider,
  DestinationWrapper,
  AvgDist,
  EstTime,
  Info,
} from './Destination.styled';

type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export default function DestinationPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [selected, setSelected] = useState<Destination>({
    name: 'Moon',
    images: {
      png: './assets/destination/image-moon.png',
      webp: './assets/destination/image-moon.webp',
    },
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travel: '3 days',
  });

  const fetchData = async () => {
    try {
      const res = await fetch('data/data.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const data = await res.json();
      const destinations = await data.destinations;
      setDestinations(destinations);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DestinationWrapper>
      <DestinationSection>
        <InteractiveElement>
          <span>01</span> Pick Your Destination
        </InteractiveElement>
        <Img src={selected?.images.png} alt='destination' />
        <Destinations>
          {destinations?.map((destination) => (
            <DestinationElement
              className={selected?.name === destination.name ? 'active' : ''}
              onClick={() => setSelected(destination)}
              key={destination.name}>
              {destination.name}
            </DestinationElement>
          ))}
          <Name>{selected.name}</Name>
          <Description>{selected.description}</Description>
          <StyledDivider />
          <Info>
            <AvgDist>
              <SubHead2>Avg. Distance</SubHead2>
              <SubHead1>{selected.distance}</SubHead1>
            </AvgDist>
            <EstTime>
              <SubHead2>Est. Travel Time</SubHead2>
              <SubHead1>{selected.travel}</SubHead1>
            </EstTime>
          </Info>
        </Destinations>
      </DestinationSection>
    </DestinationWrapper>
  );
}
