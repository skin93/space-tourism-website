import { BodyText, H1, H5 } from 'styles/GlobalStyle';
import { ExploreButton, Hero } from './Home.styled';

export default function HomePage() {
  return (
    <>
      <Hero>
        <H5 as='p'>So, you want to travel to</H5>
        <H1>space</H1>
        <BodyText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </BodyText>
      </Hero>
      <ExploreButton>Explore</ExploreButton>
    </>
  );
}
