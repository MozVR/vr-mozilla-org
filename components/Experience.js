// Since this is built with NextJS. Even though I'm using the static export
// I need to 'support' SSR which is why the minor workaround for using window
// and the NoSSR component

import React from 'react';
import NoSSR from 'react-no-ssr';
import { Parallax } from 'react-scroll-parallax';

class Experience extends React.Component {

  componentDidMount() {
    const isBrowser = typeof window !== 'undefined';
    // eslint-disable-next-line
    const ParallaxController = isBrowser ? require('react-scroll-parallax').ParallaxController : undefined;
    ParallaxController.init();
  }

  render() {
    return (
      <div className="experience" id="experience">
        <h2>How to Experience VR</h2>
        <p className="experience__text">
          Experience WebVR on your phone, computer or headset.
        </p>
        <img className="hidden-desktop mb4" src="/static/img/experience/devices-with-bg.png" alt="supported devices" />
        <div className="experience__devices">
          <NoSSR>
            <Parallax
              className="hidden-mobile"
              offsetYMax={5}
              offsetYMin={-5}
              offsetXMin={-5}
              offsetXMax={2}
              slowerScrollRate={false}
            >
              <img src="/static/img/experience/devices-bg.png" alt="supported devices" />
            </Parallax>
          </NoSSR>
        </div>

        <div className="mt3">
          <a href="http://www.mozilla.org" alt="How to experience WebVR">How to enjoy WebVR </a>
        </div>

      </div>
    );
  }
}

export default Experience;
