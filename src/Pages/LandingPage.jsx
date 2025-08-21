import Buttons from "../components/Buttons";
import Feature from "../components/Feature";
import NavLanding from "../components/NavLanding";
import CTAItems from "../components/CTAItems";
import useNavOverlayStore from "../stores/NavOverlayStore";

import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { CgCalculator } from "react-icons/cg";
import { TbChartHistogram } from "react-icons/tb";
import { IoIosJournal } from "react-icons/io";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import NavOverlay from "../components/NavOverlay";

const LandingPage = () => {
  const buttonIsClicked = useNavOverlayStore((s) => s.buttonIsClicked);

  return (
    <>
      <div className="bg-main-Background grid grid-cols-4 gap-5 p-10 md:grid-cols-8 lg:grid-cols-12">
        {/* Nav Section */}
        <nav className="col-span-full">
          <NavLanding />
          <hr className="border-t border-main-border mt-6" />
        </nav>

        {/* Mobile Nav Overlay Section */}
        <div onClick={() => buttonIsClicked}>
          <NavOverlay />
        </div>

        {/* Hero Section */}
        <div className="col-span-full md:col-start-2 md:col-end-8 lg:col-start-3 flex gap-15 py-15 lg:col-end-11 flex-col justify-center items-center">
          <h1 className="text-primary-headings text-5xl sm:text-6xl text-center ">
            One Suite. All Your Trading Tools.
          </h1>
          <p className="text-secondary-headings text-xl text-center mx-4 sm:mx-13">
            PipSuite helps traders plan, execute, and review with
            confidence—risk calculators, market hours, news, analytics, and a
            beautiful trade journal. No tab jungle.
          </p>
          <div className="flex justify-center items-center flex-col sm:flex-row gap-6">
            <Buttons
              variant="mainVariant"
              styles="w-60 p-2"
              label="Get Started Free"
              LeftIcon={<IoPersonAddOutline size={24} />}
              RightIcon={null}
              link="register"
            />
            <Buttons
              variant="secondaryVariant"
              styles="w-60 p-2"
              label="Watch Demo"
              LeftIcon={null}
              RightIcon={<MdOutlinePlayCircleOutline size={24} />}
              link="https://www.youtube.com/watch?v=ffQJRqlgf4E&list=RDffQJRqlgf4E&start_radio=1"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="col-span-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-primary-headings text-4xl text-center ">
              Main Features
            </p>
            <p className="text-secondary-headings text-xl text-center ">
              The essentials, all in one place.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 px-8 py-6">
            {/*feature Boxes */}
            <Feature
              variant={[
                <CgCalculator size={64} />,
                "Risk Calculator",
                "Calculate position size, set stop-loss & take-profit levels, and control your risk with precision — so every trade is backed by smart money management.",
              ]}
            />
            <Feature
              variant={[
                <TbChartHistogram size={64} />,
                "Trade Analytics",
                "Track win rates, R:R ratios, and trading patterns with clear visuals — helping you spot strengths, fix weaknesses, and grow consistently",
              ]}
            />
            <Feature
              variant={[
                <IoIosJournal size={64} />,
                "Trade Data Journal",
                "Log, review, and filter every trade in one place — complete with notes, screenshots, and key metrics for smarter future decisions",
              ]}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="col-span-full flex justify-center items center">
          <div className="flex flex-col justify-center items-center col-span-full w-full max-w-293 bg-secondary-Background rounded-2xl py-12 px-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-primary-headings text-4xl text-center px-4">
                Get started with PipSuite today
              </p>
              <p className="text-secondary-headings text-xl text-center">
                Your trading journey, simplified
              </p>
              <hr className="border-t border-brand-green mt-4 w-full" />
            </div>
            <div className="flex justify-center items-start flex-col gap-8 w-3/5 py-8 md:pb-16 md:px-16 md:flex-row md:w-full">
              <CTAItems
                variant={[
                  "Plan",
                  "Set stop-loss & target",
                  "Check session overlap",
                  "Mark up-levels",
                ]}
              />
              <CTAItems
                variant={[
                  "Act",
                  "Calculate risk",
                  "Position accordingly",
                  "Journal  setup result along with photos",
                ]}
              />
              <CTAItems
                variant={[
                  "Review",
                  "Filter review data",
                  "Review your trades",
                  "Analyze calculated metrics",
                ]}
              />
            </div>
            <Buttons
              variant="mainVariant"
              styles="w-2/3 md:w-2/5 p-2"
              label="Get Started"
              LeftIcon={null}
              RightIcon={null}
              link="signin"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="col-span-full">
          <div className="flex flex-col justify-center items-center">
            <div className="text-primary-headings text-4xl text-center px-4">
              <p>Frequently Asked Questions</p>
              <hr className="border-t border-brand-green mt-4" />
            </div>
            <div className="w-full max-w-6xl rounded-2xl bg-secondary-Background my-8">
              <FAQ
                position="top"
                question="What is PipSuite?"
                answer="PipSuite is a web app that puts all the tools forex and crypto traders use—risk calculator, trade tracker, news, analytics into one place, so you can trade smarter without tab overload."
                isOpen={true}
              />
              <FAQ
                question="Can I use PipSuite as my default trading journalling app?"
                answer="PipSuite is a web app that puts all the tools forex and crypto traders use—risk calculator, trade tracker, news, analytics into one place, so you can trade smarter without tab overload."
                isOpen={false}
              />
              <FAQ
                question="Is PipSuite free to use?"
                answer="PipSuite is a web app that puts all the tools forex and crypto traders use—risk calculator, trade tracker, news, analytics into one place, so you can trade smarter without tab overload."
                isOpen={false}
              />
              <FAQ
                question="Is my data private when using this website?"
                answer="PipSuite is a web app that puts all the tools forex and crypto traders use—risk calculator, trade tracker, news, analytics into one place, so you can trade smarter without tab overload."
                isOpen={false}
              />
              <FAQ
                position="bottom"
                question="Can I delete my account if I want to stop using the website?"
                answer="PipSuite is a web app that puts all the tools forex and crypto traders use—risk calculator, trade tracker, news, analytics into one place, so you can trade smarter without tab overload."
                isOpen={false}
              />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="col-span-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
