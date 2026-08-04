import { PackageX } from 'lucide-react';
import PolicyPage from './PolicyPage';

export default function ReturnsView() {
  return (
    <PolicyPage
      title="Refund & Cancellation Policy"
      subtitle="Nurturing your journey with honesty and care"
      badge="Last Updated: 26/07/2026"
      icon={<PackageX className="h-5 w-5 text-secondary shrink-0" />}
      intro={[
        'At Aranya Organic, we take pride in creating handcrafted skincare, haircare, and personal care products using carefully selected natural ingredients. To maintain product quality, hygiene, and customer satisfaction, we have established the following Refund & Cancellation Policy.',
      ]}
      sections={[
        {
          title: '1. Order Cancellation',
          paragraphs: ['Customers may request cancellation of an order before it has been processed, packed, or dispatched. Once an order has been packed, shipped, or handed over to a delivery partner, cancellation requests may not be accepted.', 'Aranya Organic reserves the right to cancel any order at its sole discretion due to product unavailability, pricing or listing errors, suspected fraudulent activity, operational difficulties, force majeure events, or unforeseen circumstances. Where applicable, payments received for cancelled orders shall be refunded through the original payment method.'],
        },
        {
          title: '2. Order Verification',
          paragraphs: ['To protect customers and prevent fraudulent transactions, Aranya Organic reserves the right to verify any order before processing or dispatching it. Additional information or confirmation may be requested where necessary. Failure to provide requested information may result in cancellation of the order.'],
        },
        {
          title: '3. Returns',
          paragraphs: ['Aranya Organic accepts return requests within 48 hours of delivery only in eligible cases. Due to hygiene, safety, and quality considerations, Aranya Organic does not accept returns of products that have been opened, used, tampered with, damaged after delivery, or altered in any manner.'],
          bullets: ['Incorrect product delivered', 'Damaged product received', 'Product received in a leaking condition', 'Product received with a verified manufacturing defect', 'Missing item from the order'],
        },
        {
          title: '4. Reporting Product Issues',
          paragraphs: ['Customers must notify Aranya Organic within 48 hours of delivery if they receive damaged products, leaking products, incorrect products, incomplete orders, or defective products. Requests submitted after this period may not be eligible for review.', 'To process the claim, customers may be required to provide the order number, photographs of the product, photographs of the outer packaging, clear images of batch details where applicable, and a description of the issue.'],
        },
        {
          title: '5. Inspection & Approval Process',
          paragraphs: ['All refund, replacement, and return requests are subject to review and verification by Aranya Organic. Products may be inspected before a refund or replacement is approved. Approval shall be granted only if the claim satisfies the conditions outlined in this policy.'],
        },
        {
          title: '6. Replacements',
          paragraphs: ['Where appropriate, Aranya Organic may offer a replacement instead of a refund. Replacement approval is subject to product availability, verification of the reported issue, and compliance with this policy. If the product is unavailable, a refund may be offered instead.'],
        },
        {
          title: '7. Refunds',
          paragraphs: ['Once approved, refunds will be processed through the original payment method wherever possible. For Cash on Delivery orders, customers may be required to provide bank account details for processing the refund.', 'Approved refunds are generally processed within 7-14 business days from the date of approval. Actual credit timelines may vary depending on banks, payment gateways, or financial institutions. Shipping charges may not be refundable unless the issue arose due to an error on the part of Aranya Organic.'],
        },
        {
          title: '8. Non-Refundable Situations',
          bullets: ['Change of mind after purchase', 'Personal preference regarding fragrance, texture, colour, or consistency', 'Dissatisfaction based on individual results', 'Allergic reactions where ingredients were clearly disclosed', 'Failure to conduct a patch test', 'Improper storage of products', 'Misuse or abuse of products', 'Requests submitted beyond the reporting period', 'Products returned without original packaging where required', 'Opened or used products'],
        },
        {
          title: '9. Product Results Disclaimer',
          paragraphs: ['As our products contain natural and botanical ingredients, individual results may vary. Product descriptions, customer reviews, testimonials, and consultation recommendations should not be interpreted as guarantees of specific results.', 'Aranya Organic does not guarantee that every customer will experience identical outcomes. Refunds shall not be issued solely because expected skincare, haircare, or personal care results were not achieved.'],
        },
        {
          title: '10. Refusal of Requests',
          paragraphs: ['Aranya Organic reserves the right to refuse any refund, replacement, cancellation, or return request that does not meet policy conditions, contains incomplete or inaccurate information, appears fraudulent or abusive, or lacks sufficient evidence to support the claim.'],
        },
        {
          title: '11. Contact Us',
          paragraphs: ['For questions regarding returns, contact Aranya Organic at aranyaorganic1@gmail.com, WhatsApp 9920308677 / 9930318387, Mumbai, Maharashtra, India. Rooted in nature, crafted for you.'],
        },
      ]}
    />
  );
}
