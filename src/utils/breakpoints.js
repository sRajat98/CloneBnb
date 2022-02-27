export const breakpoints = {
  mobileS: 320,
  mobileM: 400,
  mobileL: 580,
  tablet: 780,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const minMediaQueries = {
  mobileS: `(min-width: ${breakpoints.mobileS}px)`,
  mobileM: `(min-width: ${breakpoints.mobileM}px)`,
  mobileL: `(min-width: ${breakpoints.mobileL}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  laptopL: `(min-width: ${breakpoints.laptopL}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
};

export const maxMediaQueries = {
  mobileS: `(max-width: ${breakpoints.mobileS}px)`,
  mobileM: `(max-width: ${breakpoints.mobileM}px)`,
  mobileL: `(max-width: ${breakpoints.mobileL}px)`,
  tablet: `(max-width: ${breakpoints.tablet}px)`,
  laptop: `(max-width: ${breakpoints.laptop}px)`,
  laptopL: `(max-width: ${breakpoints.laptopL}px)`,
  desktop: `(max-width: ${breakpoints.desktop}px)`,
};

export const maxHeightQueries = {
  mobileS: `(max-height: ${breakpoints.mobileS}px)`,
  mobileM: `(max-height: ${breakpoints.mobileM}px)`,
  mobileL: `(max-height: ${breakpoints.mobileL}px)`,
  tablet: `(max-height: ${breakpoints.tablet}px)`,
  laptop: `(max-height: ${breakpoints.laptop}px)`,
  laptopL: `(max-height: ${breakpoints.laptopL}px)`,
  desktop: `(max-height: ${breakpoints.desktop}px)`,
};
