import { useEffect, useState } from "react";
import { InteractiveElement, SubHead1, SubHead2 } from "styles/GlobalStyle";
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
  Container,
} from "./Destination.styled";

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
  const [selected, setSelected] = useState<Destination>();

  const fetchData = async () => {
    try {
      const res = await fetch("data/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await res.json();
      const destinations = await data.destinations;
      setSelected(destinations[0]);
      setDestinations(destinations);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!selected) {
    return <div>Loading...</div>;
  }

  return (
    <DestinationWrapper>
      <DestinationSection>
        <InteractiveElement>
          <span>01</span> Pick Your Destination
        </InteractiveElement>
        <Container>
          <Img src={selected.images.png} alt="destination" />
          <Destinations>
            {destinations?.map((destination) => (
              <DestinationElement
                className={selected.name === destination.name ? "active" : ""}
                onClick={() => setSelected(destination)}
                key={destination.name}
              >
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
        </Container>
      </DestinationSection>
    </DestinationWrapper>
  );
}
