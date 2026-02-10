"use client"; // src/components/Footer.tsx
import Container from "./Container";
import MapSection from "./Map";
export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white border-t border-black/5 pt-24 pb-8"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div className="relative h-[400px] w-full bg-gray-100 overflow-hidden group border border-black/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1623916298634!2d-74.01053068459496!3d40.71445797933189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1e679a613d%3A0x6b18c6f6e5e8e8e8!2s54%20Warren%20St%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right: Studio Details */}
          <div className="flex flex-col justify-between py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400">
                  The Location
                </span>
                <h3 className="text-2xl font-serif">
                  Tribeca <br />
                  <span className="italic font-light">Dental Studio</span>
                </h3>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                  54 Warren Street
                  <br />
                  New York, NY 10007
                </p>
              </div>

              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400">
                  Inquiries
                </span>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                      Office Line
                    </p>
                    <a
                      href="tel:2125615303"
                      className="text-lg font-light hover:text-[#C5A059] transition-colors"
                    >
                      212.561.5303
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-black/5">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 block mb-6">
                Availability
              </span>
              <div className="flex flex-wrap gap-x-12 gap-y-4 text-[13px] text-gray-500 font-light italic">
                <span>Mon – Fri: 8am – 7pm</span>
                <span>Sat – Sun: 9am – 4pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Branding Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-black/5">
          <p className="text-[9px] uppercase tracking-[0.4em] text-gray-300">
            © 2026 Tribeca Dental Studio. All Rights Reserved. Design &
            Development by Kanat Nazarov
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-[9px] uppercase tracking-[0.4em] text-gray-300 hover:text-black"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[9px] uppercase tracking-[0.4em] text-gray-300 hover:text-black"
            >
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
