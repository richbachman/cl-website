import { Text } from '@twilio-paste/core/text';

export const SiteHeading: React.FC = (props) => (
  <Text
    as="h1"
    lineHeight={['lineHeight70', 'lineHeight110']}
    fontSize={['fontSize70', 'fontSize110']}
    fontWeight="fontWeightBold"
    {...props}
  />
);
