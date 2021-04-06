import { Anchor } from '@twilio-paste/core/anchor';
import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';

export const SiteFooter: React.FC = () => {
  return (
    <Box textAlign="center">
      <Text as="span" fontSize="fontSize10" lineHeight="lineHeight10">
        &copy; {new Date().getFullYear()} Dr. Courtney Long //{' '}
        <Anchor href="mailto:courtneyelizabethlong@gmail.com" title="Contact">
          Contact
        </Anchor>
      </Text>
    </Box>
  );
};
