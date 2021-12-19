import { useEffect, useState } from "react";
import { InteractiveElement } from "styles/GlobalStyle";
import {
  TechnologySection,
  TechnologyWrapper,
  Container,
  ImgWrapper,
  Img,
  Technology,
  Introduction,
  Name,
  Description,
  Navigation,
  NavigationElement,
  SubHead,
} from "./Technology.styled";

type TechnologyProps = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

export default function CrewPage() {
  const [technologies, setTechnologies] = useState<TechnologyProps[]>([]);
  const [selected, setSelected] = useState<TechnologyProps>();

  const fetchData = async () => {
    try {
      const res = await fetch("data/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await res.json();
      const technologies = await data.technology;
      setSelected(technologies[0]);
      setTechnologies(technologies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!selected || !technologies) {
    return <div>Loading...</div>;
  }

  return (
    <TechnologyWrapper>
      <TechnologySection>
        <InteractiveElement>
          <span>03</span> Space launch 101
        </InteractiveElement>
        <Container>
          <ImgWrapper>
            <Img src={selected.images} />
          </ImgWrapper>
          <Technology>
            <Introduction>
              <SubHead>The terminology...</SubHead>
              <Name>{selected.name}</Name>
            </Introduction>
            <Description>{selected.description}</Description>
          </Technology>
          <Navigation>
            {technologies.map((technology, index) => (
              <NavigationElement
                className={selected?.name === technology.name ? "active" : ""}
                onClick={() => setSelected(technology)}
                key={technology.name}
              >
                <span>{index + 1}</span>
              </NavigationElement>
            ))}
          </Navigation>
        </Container>
      </TechnologySection>
    </TechnologyWrapper>
  );
}
