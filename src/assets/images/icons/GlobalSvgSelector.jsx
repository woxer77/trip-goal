import React from 'react';

import selectorProps from 'propTypes/GlobalSvgSelector/selectorProps';

import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Rocket } from './rocket.svg';
import { ReactComponent as ArrowVertical } from './arrow-vertical.svg';
import { ReactComponent as CalendarSmall } from './calendar-small.svg';

import { ReactComponent as Messages } from './messages.svg';
import { ReactComponent as CalendarLarge } from './calendar-large.svg';
import { ReactComponent as Stars } from './stars.svg';

import { ReactComponent as Star } from './star.svg';
import { ReactComponent as ArrowHorizontal } from './arrow-horizontal.svg';

import { ReactComponent as Play } from './play.svg';

import { ReactComponent as Quote } from './quote.svg';

import { ReactComponent as Facebook } from './facebook.svg';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Pinterest } from './pinterest.svg';

function GlobalSvgSelector({ iconId, ...props }) {
  switch (iconId) {
  case 'logo':
    return <Logo {...props} />;
  case 'rocket':
    return <Rocket {...props} />;
  case 'arrow-vertical':
    return <ArrowVertical {...props} />;
  case 'calendar-small':
    return <CalendarSmall {...props} />;

  case 'messages':
    return <Messages {...props} />;
  case 'calendar-large':
    return <CalendarLarge {...props} />;
  case 'stars':
    return <Stars {...props} />;

  case 'star':
    return <Star {...props} />;
  case 'arrow-horizontal':
    return <ArrowHorizontal {...props} />;

  case 'play':
    return <Play {...props} />;

  case 'quote':
    return <Quote {...props} />;

  case 'facebook':
    return <Facebook {...props} />;
  case 'instagram':
    return <Instagram {...props} />;
  case 'pinterest':
    return <Pinterest {...props} />;

  default:
    return null;
  }
}

GlobalSvgSelector.propTypes = selectorProps;

export default GlobalSvgSelector;
