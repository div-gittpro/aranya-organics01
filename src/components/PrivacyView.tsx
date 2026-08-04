import { ShieldCheck } from 'lucide-react';
import PolicyPage from './PolicyPage';

export default function PrivacyView() {
  return (
    <PolicyPage
      title="Privacy Policy"
      subtitle="Transparent handling of customer information"
      badge="Last Updated: 26/07/2026"
      icon={<ShieldCheck className="h-5 w-5 text-secondary shrink-0" />}
      intro={[
        'At Aranya Organic, we value the trust our customers place in us. This Privacy Policy explains how we collect, use, protect, and handle information shared by visitors, customers, and users of our website, products, services, consultations, and communication channels.',
        'By accessing or using our website, you acknowledge and agree to the practices described in this Privacy Policy.',
      ]}
      sections={[
        {
          title: '1. About This Policy',
          paragraphs: ['Aranya Organic is a handcrafted skincare, haircare, and personal care brand committed to maintaining transparency and protecting customer privacy. This policy applies to information collected through our website, product enquiries, consultation forms, order requests, WhatsApp, email, reviews, feedback, and other interactions with Aranya Organic.'],
        },
        {
          title: '2. Information We Collect',
          paragraphs: ['We may collect personal information customers voluntarily provide, including name, phone number, email address, delivery address, billing information, order details, and communication preferences.', 'For skincare or haircare consultations, we may collect skin type, hair concerns, product preferences, and concerns shared for personalised recommendations. Customers are responsible for ensuring that information provided is accurate and complete.', 'When customers submit reviews, testimonials, photographs, or feedback, we may collect and store that information for customer service and marketing purposes, as permitted under our Terms & Conditions.'],
        },
        {
          title: '3. Information We Do Not Collect',
          paragraphs: ['Aranya Organic does not intentionally collect sensitive personal information that is unnecessary for providing our products and services. We do not collect information unrelated to our business operations.'],
        },
        {
          title: '4. How We Use Your Information',
          bullets: ['Responding to product enquiries', 'Providing skincare and haircare consultation support', 'Processing and fulfilling orders', 'Communicating order updates', 'Providing customer support', 'Improving our products, services, and website experience', 'Managing customer feedback and reviews', 'Sending important business-related updates'],
          paragraphs: ['We do not use customer information for purposes unrelated to our services without appropriate consent.'],
        },
        {
          title: '5. Sharing of Information',
          paragraphs: ['Aranya Organic does not sell, rent, trade, or commercially exploit customer information. Customer information may only be shared where necessary for legitimate business purposes, including courier and delivery partners, payment service providers, technology service providers, or legal authorities where required by applicable laws.', 'Such third parties are only provided access to information necessary to perform their services.'],
        },
        {
          title: '6. Payment Information',
          paragraphs: ['Aranya Organic does not directly store complete payment details such as card numbers, UPI credentials, or banking passwords. Payments, where applicable, are processed through secure third-party payment providers. Customers should review the privacy policies of such payment providers for further information.'],
        },
        {
          title: '7. Cookies & Website Data',
          paragraphs: ['Our website may use cookies or similar technologies to improve user experience, understand website performance, and enhance website functionality. Cookies may help us understand website visits, user preferences, and general browsing behaviour.', 'Customers may choose to disable cookies through browser settings; however, some website features may not function properly.'],
        },
        {
          title: '8. Third-Party Services & Links',
          paragraphs: ['Our website may include links or integrations with third-party platforms such as WhatsApp, Instagram, payment gateways, review platforms, and other external services. These platforms operate independently and have their own privacy policies.', 'Aranya Organic is not responsible for the privacy practices, security measures, or content of third-party websites or services.'],
        },
        {
          title: '9. Data Security & Retention',
          paragraphs: ['Aranya Organic takes reasonable measures to protect customer information from unauthorized access, misuse, loss, or disclosure. However, no method of electronic storage or transmission over the internet can be guaranteed to be completely secure.', 'We retain customer information only for as long as necessary to provide requested services, maintain order records, fulfil legal and business requirements, resolve disputes, and support requests. When information is no longer required, reasonable steps may be taken to delete or securely dispose of it.'],
        },
        {
          title: '10. Customer Rights',
          paragraphs: ['Customers may request to know what information has been provided to Aranya Organic, update incorrect personal information, request deletion of personal information where applicable, or withdraw consent for certain communications. Requests may be submitted through our official contact channels.'],
        },
        {
          title: '11. Marketing Communications',
          paragraphs: ['If customers choose to receive updates from Aranya Organic, we may communicate information regarding new products, offers, brand updates, events, or announcements. Customers may request to stop receiving promotional communications at any time.'],
        },
        {
          title: '12. Children\'s Privacy',
          paragraphs: ['Aranya Organic does not knowingly collect personal information from children below the age required under applicable laws without appropriate consent from a parent or legal guardian.'],
        },
        {
          title: '13. Changes to This Privacy Policy',
          paragraphs: ['Aranya Organic reserves the right to update or modify this Privacy Policy at any time. Any changes will be published on this page with the updated date. Customers are encouraged to review this Privacy Policy periodically.'],
        },
        {
          title: '14. Contact Us',
          paragraphs: ['For questions, concerns, or requests regarding this Privacy Policy, contact Aranya Organic at aranyaorganic1@gmail.com, WhatsApp 9920308677 / 9930318387, Mumbai, Maharashtra, India. Rooted in nature, crafted for you.'],
        },
      ]}
    />
  );
}
