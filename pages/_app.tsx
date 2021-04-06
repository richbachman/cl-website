import type { AppProps } from 'next/app';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import { CustomizationProvider } from '@twilio-paste/core/customization';
import { GenericThemeShape } from '@twilio-paste/core/theme';
import { StylingGlobals, css } from '@twilio-paste/core/styling-library';
import CustomTheme from '../theme/index.json';
import DefaultSeoConfig from '../next-seo.json';

interface GlobalStylesProps {
  theme: GenericThemeShape;
}

const globalStyles = (props: GlobalStylesProps): any =>
  css({
    body: {
      backgroundColor: CustomTheme.backgroundColors.colorBackgroundBody,
    },
  })(props);

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...DefaultSeoConfig} />
      <SocialProfileJsonLd
        name="Dr. Courtney Long"
        sameAs={['https://www.youtube.com/channel/UCjVQIUB6LIGsyp54bWi8gFQ']}
        type="Person"
        url="https://courtneylongmusic.com"
      />
      {/* @ts-ignore - not including the whole GenericThemeShape in the custom theme. */}
      <StylingGlobals styles={globalStyles({ theme: CustomTheme })} />
      <CustomizationProvider theme={CustomTheme}>
        <Component {...pageProps} />
      </CustomizationProvider>
    </>
  );
};

export default MyApp;
