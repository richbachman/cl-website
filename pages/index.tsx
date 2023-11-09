import { NextSeo } from 'next-seo';
import { Box } from '@twilio-paste/core/box';
import { Grid, Column } from '@twilio-paste/core/grid';
import { Heading } from '@twilio-paste/core/heading';
import { UnorderedList, ListItem } from '@twilio-paste/core/list';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Separator } from '@twilio-paste/core/separator';
import { SiteAvatar } from '../components/SiteAvatar';
import { SiteHeading } from '../components/SiteHeading';
import { SiteSubHeading } from '../components/SiteSubHeading';
import { SiteFooter } from '../components/SiteFooter';
import { YouTubePlaylist } from '../components/YouTubePlaylist';

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PL67C_KQwR4TfxXVTjly1CfcegbKMo1jOt&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

interface HomeProps {
  data: {};
}

const Home: React.FC<HomeProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      <NextSeo title="Saxophonist, Theorist &amp; Educator" />
      <Box
        as="main"
        marginTop="space100"
        marginRight="auto"
        marginLeft="auto"
        maxWidth="1080px"
        paddingTop="space200"
        paddingRight="space60"
        paddingBottom="space200"
        paddingLeft="space60"
      >
        <Box
          display="flex"
          alignItems={['flex-start', 'center']}
          flexDirection={['column', 'row']}
          marginBottom="space120"
        >
          <Box marginBottom={['space60', 'space0']}>
            <SiteAvatar />
          </Box>
          <Box marginLeft={['space0', 'space60']}>
            <SiteHeading>Dr. Courtney Long</SiteHeading>
            <SiteSubHeading>
              Saxophonist, Educator &amp; Clinician
            </SiteSubHeading>
          </Box>
        </Box>
        <Grid gutter="space90" vertical={[true, false, false]}>
          <Column span={8}>
            <Heading as="h4" variant="heading40">
              Degrees
            </Heading>

            <UnorderedList>
              <ListItem>
                D.A. Saxophone Performance and Pedagogy with secondary emphasis
                in Music Theory <i>(University of Northern Colorado)</i>
              </ListItem>
              <ListItem>
                M.M. Music Theory and Composition{' '}
                <i>(Wichita State University)</i>
              </ListItem>
              <ListItem>
                B.M. Saxophone Performance <i>(Friends University)</i>
              </ListItem>
            </UnorderedList>

            <Heading as="h4" variant="heading40">
              Biography and Professional Achievements
            </Heading>

            <Paragraph>
              Dr. Courtney Long is an active saxophonist, educator, and
              clinician, performing as a soloist and with various chamber
              groups. She has also played and presented at the North American
              Saxophone Alliance Biennial and National Conferences several
              times. Dr. Long&#39;s research areas of interest are post-tonal
              motivic analysis and its application to agency and narrative
              theories, performative analysis, and motivic parallelism in post-
              tonal and Romantic music. You can find her most recent work
              published in The Saxophone Symposium (Volume 42).
            </Paragraph>
            <Paragraph>
              Long holds a Doctor of Arts degree in Music from the University of
              Northern Colorado in Saxophone Performance with a secondary
              emphasis in Music Theory. Prior to her studies at UNC, she earned
              her Bachelor of Music degree in Saxophone Performance from Friends
              University in Wichita, KS, and her Master of Music degree in Music
              Theory and Composition from Wichita State University. She has
              studied saxophone under Andrew Dahlke, Robert Young, Jean Lansing,
              and Lisa Hittle. Long has played saxophone with the Colorado
              Symphony, Colorado Music Festival, Fort Collins Symphony
              Orchestra, Greeley Philharmonic, Wichita Symphony Orchestra, and
              the Wichita Wind Symphony, and has previously held teaching
              positions in both saxophone and music theory at University of
              Northern Colorado, Colorado Christian University, Friends
              University, and Bethany College.
            </Paragraph>
            <Paragraph>
              Dr. Long currently teaches saxophone and music theory at Wichita
              State University and lives in Wichita, KS with her husband, Rich,
              and their three basset hounds, Stevie Nicks, Willie Nelson,
              Frankie Valli. She loves supporting music education at all levels
              and has served as a clinician and guest artist at several schools,
              camps, and outreach programs. She enjoys learning and performing
              all types of music.
            </Paragraph>
          </Column>

          <Column span={4}>
            <Heading as="h4" variant="heading40">
              Recent Performances
            </Heading>

            <YouTubePlaylist data={data} />
          </Column>
        </Grid>
        <Separator orientation="horizontal" verticalSpacing="space120" />

        <SiteFooter />
      </Box>
    </>
  );
};

export default Home;
