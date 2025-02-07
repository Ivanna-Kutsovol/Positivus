import Hero from "./hero/hero";
import LogoSlider from "./logoSlider/logoSlider";
import Services from "./services/services";
import ArticleFirst from "./article/article";
import CaseStudies from "./caseStudies/caseStudies"
import WorkingProcess from "./workingProcess/workingProcess";
import Team from "./team/team";
import Testimonials from "./testimonials/testimonials";

export default function Home() {
  return (
    <div>
       <Hero/>
       <LogoSlider/>
       <Services/>
       <ArticleFirst/>
       <CaseStudies/>
       <WorkingProcess/>
       <Team/>
       <Testimonials/>    
      </div>
  );
}
