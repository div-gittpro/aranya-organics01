import { Scale } from 'lucide-react';
import PolicyPage from './PolicyPage';

export default function TermsView() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      subtitle="Agreement of botanical purity and client trust"
      badge="Last Updated: 26/07/2026"
      icon={<Scale className="h-5 w-5 text-secondary shrink-0" />}
      intro={[
        'Welcome to Aranya Organic. By accessing, browsing, or using this website, viewing our products, submitting consultation forms, placing orders, or otherwise interacting with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with these Terms, please refrain from using this website.',
      ]}
      sections={[
        {
          title: '1. About Aranya Organic',
          paragraphs: ['Aranya Organic is a wellness brand offering handcrafted skincare, haircare, and personal care products made using carefully selected natural and botanical ingredients. Our mission is to provide high-quality products inspired by nature while maintaining transparency, integrity, and customer satisfaction.'],
        },
        {
          title: '2. Eligibility',
          paragraphs: ['By using this website, you confirm that you are legally capable of entering into a binding agreement under applicable laws.', 'Users under the age of 18 should access and use this website only under the supervision of a parent or legal guardian.'],
        },
        {
          title: '3. Website Use',
          paragraphs: ['By using this website, you agree to use it only for lawful purposes, provide accurate information, avoid interfering with site security or functionality, avoid unauthorized access, and avoid copying or exploiting content without prior written consent.', 'Aranya Organic reserves the right to restrict, suspend, or terminate access to the website at its sole discretion.'],
        },
        {
          title: '4. Product Information',
          paragraphs: ['We strive to keep product descriptions, images, ingredient information, and website content accurate and up to date. Product colours, packaging, appearance, availability, formulations, pricing, and descriptions may vary or change without prior notice.', 'Due to the handcrafted and natural nature of our products, variations between batches may occur. Product information is provided for general informational purposes only.'],
        },
        {
          title: '5. Orders & Payments',
          paragraphs: ['Placing an order does not constitute acceptance of that order. Aranya Organic may accept, reject, limit, or cancel orders due to stock unavailability, listing errors, pricing issues, suspected fraud, or other operational concerns.', 'All payments must be completed through approved payment methods communicated by Aranya Organic. Prices are not displayed on the website; kindly contact Aranya Organic for up-to-date pricing and related information. Applicable taxes, duties, and shipping charges will be applied according to Indian laws and regulations.'],
        },
        {
          title: '6. Shipping, Returns & Replacements',
          paragraphs: ['Delivery timelines are estimates and may vary due to courier availability, weather, transportation disruptions, government restrictions, public emergencies, or other events beyond our reasonable control.', 'Returns, refunds, and replacements are governed by our Refund & Cancellation Policy. Opened, used, or tampered products are generally not eligible for return unless the product was damaged during transit, incorrect, or contains a verified manufacturing defect.'],
        },
        {
          title: '7. Consultation Disclaimer',
          paragraphs: ['Consultations are provided for informational and educational purposes only. They do not constitute medical advice, diagnosis, or treatment, and should not replace professional medical consultation.', 'Recommendations are based solely on information supplied by the customer. Aranya Organic shall not be responsible for outcomes arising from incomplete, inaccurate, or omitted information provided during consultations.'],
        },
        {
          title: '8. Product Usage & Allergies',
          paragraphs: ['Customers are responsible for reviewing ingredients, performing patch tests, and following usage instructions. Individual results may vary depending on skin type, hair type, lifestyle, allergies, environmental factors, and other personal circumstances.', 'Product descriptions, testimonials, reviews, and customer experiences should not be interpreted as guarantees of specific results. Aranya Organic shall not be liable for allergic reactions, sensitivities, misuse, or adverse effects resulting from product use.'],
        },
        {
          title: '9. Intellectual Property',
          paragraphs: ['All logos, product names, images, videos, graphics, website design, product descriptions, text content, and brand assets are the exclusive property of Aranya Organic and are protected by applicable intellectual property laws. No content may be copied, reproduced, republished, distributed, modified, or commercially exploited without prior written permission.'],
        },
        {
          title: '10. User Reviews, Testimonials & Submissions',
          paragraphs: ['Any reviews, testimonials, photographs, feedback, comments, suggestions, or other content submitted to Aranya Organic may be used for marketing, promotional, educational, or business purposes. By submitting such content, you grant Aranya Organic a non-exclusive, royalty-free, worldwide right to reproduce, publish, display, distribute, and use the content across its website, social media platforms, advertisements, catalogues, and other marketing materials.', 'Aranya Organic reserves the right to edit, remove, or refuse publication of any content at its discretion.'],
        },
        {
          title: '11. Third-Party Links & Privacy',
          paragraphs: ['This website may contain links to third-party websites, services, or resources for convenience. Aranya Organic does not control, endorse, or assume responsibility for third-party content, privacy practices, products, or services.', 'Your use of this website is also governed by our Privacy Policy. By using the website, you consent to the collection, processing, storage, and use of information as described in the Privacy Policy.'],
        },
        {
          title: '12. Limitation of Liability',
          paragraphs: ['To the fullest extent permitted by law, Aranya Organic shall not be liable for indirect, incidental, special, consequential damages, loss of profits, loss of business opportunities, loss of goodwill, or loss of data arising from use of, inability to use, or reliance upon our website, products, consultations, or services.', 'In no event shall Aranya Organic\'s total liability exceed the amount paid by the customer for the specific product giving rise to the claim.'],
        },
        {
          title: '13. Force Majeure',
          paragraphs: ['Aranya Organic shall not be liable for delay, interruption, or failure to perform obligations due to circumstances beyond reasonable control, including natural disasters, floods, fires, earthquakes, epidemics or pandemics, government actions, labour disputes, transportation disruptions, internet or communication failures, or utility outages.'],
        },
        {
          title: '14. Changes, Governing Law & Contact',
          paragraphs: ['Aranya Organic reserves the right to modify, update, or replace these Terms & Conditions at any time without prior notice. Updated versions will be posted on this page and become effective immediately upon publication.', 'These Terms & Conditions are governed by the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.', 'For questions, contact Aranya Organic at aranyaorganic1@gmail.com, WhatsApp 9920308677 / 9930318387, Mumbai, Maharashtra, India. Rooted in nature, crafted for you.'],
        },
      ]}
    />
  );
}
