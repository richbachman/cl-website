import { Text } from '@twilio-paste/core/text';

export const SiteSubHeading: React.FC = (props) => (
  <Text
    as="p"
    color="colorTextBrandHighlight"
    lineHeight={['lineHeight50', 'lineHeight70']}
    fontSize={['fontSize50', 'fontSize70']}
    fontWeight="fontWeightBold"
    marginBottom="space0"
    {...props}
  />
);
