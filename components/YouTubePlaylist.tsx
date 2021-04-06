import { Anchor } from '@twilio-paste/core/anchor';
import { Box } from '@twilio-paste/core/box';
import { Heading } from '@twilio-paste/core/heading';
import { Stack } from '@twilio-paste/core/stack';

interface YouTubePlaylistProps {
  data: {};
}

export const YouTubePlaylist: React.FC<YouTubePlaylistProps> = ({
  data,
}: any) => {
  return (
    <Stack orientation="vertical" spacing="space90">
      {/* @ts-ignore */}
      {data.items.map(({ id, snippet = {} }) => {
        // @ts-ignore
        const { title, thumbnails = {}, resourceId = {} } = snippet;
        const { medium } = thumbnails;
        return (
          <Box key={id}>
            <Box
              as="img"
              src={medium.url}
              alt={title}
              maxWidth="100%"
              height="auto"
            />
            <Heading as="h5" variant="heading50">
              <Anchor
                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
              >
                {title}
              </Anchor>
            </Heading>
          </Box>
        );
      })}
    </Stack>
  );
};
