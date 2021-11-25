import { useEffect, useState } from 'react';
import { InteractiveElement } from 'styles/GlobalStyle';
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
  Block,
  Person,
  Role,
} from './Crew.styled';

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
  const [selected, setSelected] = useState<Crew>({
    name: 'Douglas Hurley',
    images: {
      png: './assets/crew/image-douglas-hurley.png',
      webp: './assets/crew/image-douglas-hurley.webp',
    },
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
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
      const crews = await data.crew;
      setCrews(crews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CrewWrapper>
      <CrewSection>
        <InteractiveElement>
          <span>02</span> Meet Your crew
        </InteractiveElement>
        <Container>
          <ImgWrapper>
            <Img src={selected?.images.png} alt='crew' />
          </ImgWrapper>
          <Crews>
            {crews?.map((crew) => (
              <CrewElement
                className={selected?.name === crew.name ? 'active' : ''}
                onClick={() => setSelected(crew)}
                key={crew.name}
              />
            ))}
          </Crews>
          <Person>
            <Block>
              <Role>{selected.role}</Role>
              <Name>{selected.name}</Name>
            </Block>
            <Bio>{selected.bio}</Bio>
          </Person>
        </Container>
      </CrewSection>
    </CrewWrapper>
  );
}
