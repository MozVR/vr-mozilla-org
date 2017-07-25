import Layout from '../components/layout/Layout';
import { prodUrl as baseUrl } from '../variables';


// components
import Hero from '../components/Hero';
import DemoCard from '../components/DemoCard';
import ResourceCard from '../components/ResourceCard';
import Experiment from '../components/Experiment';
import Experience from '../components/Experience';
import AdditionalResources from '../components/AdditionalResources';
import About from '../components/About';

const desc = `
  VR for the free and open Web.
`;

export default () => (
  <Layout title="Mozilla VR | Home" desc={desc}>
    <Hero />
    <DemoCard
      bg={`${baseUrl}/static/img/demo/inspirit.png`}
      lead="An Immersive VR World"
      title="Inspirit: An Interactive Story"
      linkText="Explore Now"
      link="http://inspirit.unboring.net/"
    />

    {/* <div className="span span-1-3"> */}
    <div className="col-md-5 col-lg-5">
      <ResourceCard
        lead="Experience VR"
        title="Firefox Nightly"
        desc="Experience WebVR with Mozilla's most advanced web browser."
        link="https://www.mozilla.org/en-US/firefox/nightly/all/"
        linkText="Get it Now"
      />
      <ResourceCard
        lead="Build VR"
        title="A-Frame"
        desc="A-Frame allows developers to easily create VR experiences for the browser."
        link="https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame"
        linkText="Get Started"
      />
      <ResourceCard
        lead="Explore VR"
        title="VR Gallery"
        desc="Developers and artist are bringing new VR experiences to the web every day."
        link="http://vrlist.io/"
        linkText="View Gallery"
      />
    </div>
    {/* <div className="span--last span-2-3"> */}
    <div className="col-md-7 col-lg-8 col-last">
      <DemoCard
        bg={`${baseUrl}/static/img/demo/apainter.png`}
        lead="Paint in Virtual Reality"
        title="A-Painter"
        linkText="Explore A-Painter"
        link="https://aframe.io/a-painter/"
      />
      <DemoCard
        bg={`${baseUrl}/static/img/demo/pingpong.png`}
        lead="A Virtual Reality Game"
        title="Konterball"
        linkText="Play Now"
        link="https://konterball.com/"
      />
    </div>
    <Experiment />
    <Experience />
    <AdditionalResources />
    <About />
  </Layout>
);
