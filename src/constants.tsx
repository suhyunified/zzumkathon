import {
  ImgDecoBallGreen,
  ImgDecoBallGreenSmall,
  ImgDecoBallRed,
  ImgDecoBallRedSmall,
  ImgDecoBallYellow,
  ImgDecoBallYellowSmall,
  ImgDecoBell,
  ImgDecoBellSmall,
  ImgDecoSocksGreen,
  ImgDecoSocksGreenSmall,
  ImgDecoSocksRed,
  ImgDecoSocksRedSmall,
  ImgDecoStick,
  ImgDecoStickSmall,
} from "./assets";

export const ITEMS = [
  {
    id: 0,
    icon: <ImgDecoBallGreen width="100%" height="100%" />,
    small: <img src={ImgDecoBallGreenSmall} />,
    jsx: ImgDecoBallGreen,
  },
  {
    id: 1,
    icon: <ImgDecoBallRed width="100%" height="100%" />,
    small: <img src={ImgDecoBallRedSmall} />,
    jsx: ImgDecoBallRed,
  },
  {
    id: 2,
    icon: <ImgDecoBallYellow width="100%" height="100%" />,
    small: <img src={ImgDecoBallYellowSmall} />,
    jsx: ImgDecoBallYellow,
  },
  {
    id: 3,
    icon: <ImgDecoBell width="100%" height="100%" />,
    small: <img src={ImgDecoBellSmall} />,
  },
  {
    id: 4,
    icon: <ImgDecoSocksGreen width="100%" height="100%" />,
    small: <img src={ImgDecoSocksGreenSmall} />,
    jsx: ImgDecoSocksGreen,
  },
  {
    id: 5,
    icon: <ImgDecoSocksRed width="100%" height="100%" />,
    small: <img src={ImgDecoSocksRedSmall} />,
    jsx: ImgDecoSocksRed,
  },
  {
    id: 6,
    icon: <ImgDecoStick width="100%" height="100%" />,
    small: <img src={ImgDecoStickSmall} />,
    jsx: ImgDecoStick,
  },
];
