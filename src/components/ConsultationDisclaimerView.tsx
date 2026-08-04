import { HeartPulse } from 'lucide-react';
import PolicyPage from './PolicyPage';

export default function ConsultationDisclaimerView() {
  return (
    <PolicyPage
      title="Consultation Disclaimer"
      subtitle="Personalised product guidance, not medical advice"
      badge="Last Updated: 26/07/2026"
      icon={<HeartPulse className="h-5 w-5 text-secondary shrink-0" />}
      intro={[
        'At Aranya Organic, we aim to help customers understand their skincare and haircare needs and recommend products that may be suitable based on the information shared with us.',
        'Our consultations are designed to provide personalised product guidance and general skincare and haircare information. Please read the following disclaimer carefully before using our consultation services.',
      ]}
      sections={[
        {
          title: '1. Nature of Consultation',
          paragraphs: ['Any skincare or haircare consultation provided by Aranya Organic through our website, WhatsApp, social media, email, forms, or other communication channels is intended for general guidance and product recommendations, understanding customer concerns, and helping customers choose suitable Aranya Organic products.', 'Our consultations are not intended to replace professional medical advice, diagnosis, or treatment.'],
        },
        {
          title: '2. No Medical Advice',
          paragraphs: ['Aranya Organic is not a medical or healthcare provider. Recommendations provided during consultations should not be considered medical diagnosis, medical treatment, prescription advice, or professional dermatological advice.', 'Customers with medical concerns, persistent skin conditions, severe allergies, infections, or other health-related concerns should consult a qualified dermatologist or healthcare professional.'],
        },
        {
          title: '3. Customer Information Accuracy',
          paragraphs: ['Consultation recommendations are based entirely on information voluntarily provided by the customer. Customers are responsible for providing accurate and complete information regarding skin type, hair type, existing concerns, allergies or sensitivities, current products being used, and relevant personal information affecting product suitability.', 'Aranya Organic shall not be responsible for recommendations affected by incomplete, incorrect, or inaccurate information provided by the customer.'],
        },
        {
          title: '4. Product Suitability',
          paragraphs: ['While we aim to recommend products suitable for individual concerns, skincare and haircare outcomes vary from person to person. Factors that may influence results include skin type, hair type, lifestyle, diet, environment, existing conditions, and individual sensitivity to ingredients.', 'A product recommended during consultation may not produce identical results for every customer.'],
        },
        {
          title: '5. Patch Testing',
          paragraphs: ['Customers are advised to perform a patch test before using any new skincare or haircare product. Discontinue use immediately if irritation, discomfort, or an adverse reaction occurs.', 'Aranya Organic shall not be responsible for reactions caused by undisclosed allergies, failure to perform a patch test, incorrect product usage, or misuse of products.'],
        },
        {
          title: '6. Product Results Disclaimer',
          paragraphs: ['Aranya Organic does not guarantee specific results from the use of any product. Customer experiences, testimonials, and reviews shared by others are individual experiences and should not be interpreted as guaranteed outcomes. Results may differ based on individual circumstances.'],
        },
        {
          title: '7. Ingredients & Customer Responsibility',
          paragraphs: ['Customers are encouraged to review product ingredients before purchase and use. If a customer has known allergies, sensitivities, medical conditions, or specific concerns, they should seek professional advice before using any product.'],
        },
        {
          title: '8. Changes to Recommendations',
          paragraphs: ['Product recommendations may change based on new information provided by the customer, changes in skin or hair concerns, product availability, or changes in product formulations. Aranya Organic reserves the right to update or modify recommendations where necessary.'],
        },
        {
          title: '9. Limitation of Liability',
          paragraphs: ['To the maximum extent permitted by law, Aranya Organic shall not be liable for skin or hair reactions, lack of expected results, product intolerance, or individual differences in response. Customers acknowledge that skincare and haircare outcomes vary and that product recommendations are provided based on available information.'],
        },
        {
          title: '10. Acceptance of Disclaimer',
          paragraphs: ['By submitting a consultation form, communicating with Aranya Organic, or receiving product recommendations, customers acknowledge that they have read, understood, and agreed to this Consultation Disclaimer.'],
        },
        {
          title: '11. Contact Us',
          paragraphs: ['For questions regarding consultations, contact Aranya Organic at aranyaorganic1@gmail.com, WhatsApp 9920308677 / 9930318387, Mumbai, Maharashtra, India. Rooted in nature, crafted for you.'],
        },
      ]}
    />
  );
}
