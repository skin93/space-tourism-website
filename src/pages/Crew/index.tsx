import { useEffect, useState } from "react";
import { InteractiveElement } from "styles/GlobalStyle";
import {
  Container,
  CrewElement,
  Crews,
  CrewSection,
  CrewWrapper,
  Bio,
  Img,
  ImgWrapper,
  Name,
  Introduction,
  Person,
  Role,
} from "./Crew.styled";

type Crew = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  bio: string;
  role: string;
};

export default function CrewPage() {
  const [crews, setCrews] = useState<Crew[]>([]);
  const [selected, setSelected] = useState<Crew>();

  const fetchData = async () => {
    try {
      const res = await fetch("data/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await res.json();
      const crews = await data.crew;
      setSelected(crews[0]);
      setCrews(crews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!selected) {
    return <div>Loading...</div>;
  }

  return (
    <CrewWrapper>
      <CrewSection>
        <InteractiveElement>
          <span>02</span> Meet Your crew
        </InteractiveElement>
        <Container>
          <ImgWrapper>
            <Img src={selected.images.png} alt="crew" />
          </ImgWrapper>
          <Person>
            <Introduction>
              <Role>{selected.role}</Role>
              <Name>{selected.name}</Name>
            </Introduction>
            <Bio>{selected.bio}</Bio>
            <Crews>
              {crews?.map((crew) => (
                <CrewElement
                  className={selected.name === crew.name ? "active" : ""}
                  onClick={() => setSelected(crew)}
                  key={crew.name}
                />
              ))}
            </Crews>
          </Person>
        </Container>
      </CrewSection>
    </CrewWrapper>
  );
}
