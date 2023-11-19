import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _6317Icon } from './_6317Icon.js';
import { _6490Icon } from './_6490Icon.js';
import { _6504Icon } from './_6504Icon.js';
import { _6509Icon } from './_6509Icon.js';
import { _11157Icon } from './_11157Icon.js';
import { _11172Icon } from './_11172Icon.js';
import classes from './Frame1.module.css';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon3 } from './GroupIcon3.js';
import { GroupIcon } from './GroupIcon.js';
import { Iconfinder_icons_home_1564508I } from './Iconfinder_icons_home_1564508I.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 10:1876 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes._6490}>
        <_6490Icon className={classes.icon2} />
      </div>
      <div className={classes._6317}>
        <_6317Icon className={classes.icon3} />
      </div>
      <div className={classes.group}>
        <GroupIcon className={classes.icon4} />
      </div>
      <div className={classes.hOME}>HOME</div>
      <div className={classes.iconfinder_icons_home_1564508}>
        <Iconfinder_icons_home_1564508I className={classes.icon5} />
      </div>
      <div className={classes._11157}>
        <_11157Icon className={classes.icon6} />
      </div>
      <div className={classes._11172}>
        <_11172Icon className={classes.icon7} />
      </div>
      <div className={classes.group2}>
        <GroupIcon2 className={classes.icon8} />
      </div>
      <div className={classes.hKG}>HKG</div>
      <div className={classes.tKO}>TKO</div>
      <div className={classes.tokyo}>Tokyo</div>
      <div className={classes.hongKong}>Hong Kong</div>
      <div className={classes._6504}>
        <_6504Icon className={classes.icon9} />
      </div>
      <div className={classes._6509}>
        <_6509Icon className={classes.icon10} />
      </div>
      <div className={classes.cX500CHANTaiMen}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>CX500 </span>
          <span className={classes.label2}>CHAN, Tai Men</span>
        </p>
      </div>
      <div className={classes._3h49m}>3h49m</div>
      <div className={classes.departure}>Departure</div>
      <div className={classes._1527}>15:27</div>
      <div className={classes.terminal1}>Terminal 1</div>
      <div className={classes.gate31}>Gate 31</div>
      <div className={classes.boarding}>Boarding</div>
      <div className={classes._2016}>20:16</div>
      <div className={classes.terminal2}>Terminal 2</div>
      <div className={classes.gate73}>Gate 73</div>
      <div className={classes._1}></div>
      <div className={classes.myBoardingPass}>My Boarding Pass</div>
      <div className={classes.group3}>
        <GroupIcon3 className={classes.icon11} />
      </div>
      <div className={classes.asiaMiles1000}>Asia Miles : 10,000</div>
      <div className={classes.seat}>Seat </div>
      <div className={classes._24A}>24A</div>
    </div>
  );
});
