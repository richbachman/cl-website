import { Box } from '@twilio-paste/core/box';

export const SiteAvatar: React.FC = () => {
  return (
    <Box
      borderRadius="borderRadius30"
      overflow="hidden"
      width="150px"
      height="150px"
    >
      <Box
        as="img"
        src="/courtney_profile.jpg"
        alt="Picture of Dr. Courtney Long"
        width="100%"
        height="auto"
      />
    </Box>
  );
};
