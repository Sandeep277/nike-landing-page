import {
  Hero,
  PopularProduct,
  Footer,
  SpecialOffer,
  Subscriber,
  SuperQuality,
  Services,
  CustomerReviews,
} from "./sections/index";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 :padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscriber />
      </section>
      <section className="padding bh-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
