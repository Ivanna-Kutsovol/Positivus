import Hero from "./home/hero/hero";
import LogoSlider from "./home/logoSlider/logoSlider";
import Services from "./home/services/services";
import ArticleFirst from "./home/article/article";
import CaseStudies from "./home/caseStudies/caseStudies"
import WorkingProcess from "./home/workingProcess/workingProcess";
import Team from "./home/team/team";
import Testimonials from "./home/testimonials/testimonials";
import ContactUs from "./home/contactUs/contactUs";

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
       <ContactUs/>  
      </div>
  );
}
