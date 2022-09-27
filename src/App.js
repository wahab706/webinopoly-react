import { Suspense, useState } from "react";
import { Layout } from "./components/global/Layout.server";
import Hero from "./components/sections/Hero.client";
import BrandsSlider from "./components/sections/BrandsSlider.client";
import Reviews from "./components/sections/Reviews.client";
import ContactForm from "./components/sections/ContactForm.client";
import IconsGrid from "./components/sections/IconsGrid.client";
import GridItems from "./components/sections/GridItems.client";
import KeyFeatures from "./components/sections/KeyFeatures.client";
import OurPartners from "./components/sections/OurPartners.client";
import WebTypeDesigns from "./components/sections/WebTypeDesigns.client";
import Faq from "./components/sections/Faq.client";
import Modal from "./components/global/Modal.client";

function App() {
  const [modalShow, setModalShow] = useState(false)


  return (
    <Layout>
      <Suspense >
        {
          modalShow &&
          <Modal setModalShow={setModalShow} />
        }
        <Hero setModalShow={setModalShow} />
        <BrandsSlider />
        <Reviews />
        <ContactForm toggle={true} />
        <IconsGrid />
        <GridItems />
        <KeyFeatures />
        <WebTypeDesigns setModalShow={setModalShow} />
        <OurPartners />
        <ContactForm />
        <Faq />
      </Suspense>
    </Layout>
  );
}

export default App;
