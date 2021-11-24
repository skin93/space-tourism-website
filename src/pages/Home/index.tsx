import { BodyText, H1, H5, Section } from 'styles/GlobalStyle';
import { ExploreButton, HomeWrapper } from './Home.styled';

export default function HomePage() {
  return (
    <HomeWrapper>
      <Section>
        <H5>So, you want to travel to</H5>
        <H1>space</H1>
        <BodyText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </BodyText>
        <ExploreButton>Explore</ExploreButton>
      </Section>
    </HomeWrapper>
  );
}
