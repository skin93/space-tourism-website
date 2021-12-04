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

type Technology = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

export default function CrewPage() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selected, setSelected] = useState<Technology>({
    name: "Launch vehicle",
    images: {
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  });

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
      setTechnologies(technologies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <Navigation>
              {technologies?.map((technology, index) => (
                <NavigationElement
                  className={selected?.name === technology.name ? "active" : ""}
                  onClick={() => setSelected(technology)}
                  key={technology.name}
                >
                  <span>{index + 1}</span>
                </NavigationElement>
              ))}
            </Navigation>
          </Technology>
        </Container>
      </TechnologySection>
    </TechnologyWrapper>
  );
}
