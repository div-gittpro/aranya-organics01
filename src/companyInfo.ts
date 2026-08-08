export const COMPANY_INFO = {
  address: 'D/1, plot no 8, Sagar Lahari society, Gorai 2, Borivali West, Mumbai, Maharashtra 400091',
  mapsUrl: 'https://maps.google.com/?q=' + encodeURIComponent('D/1, plot no 8, Sagar Lahari society, Gorai 2, Borivali West, Mumbai, Maharashtra 400091'),
  email: 'aranyaorganic1@gmail.com',
  instagram: 'https://www.instagram.com/aranyaorganic_',
  phoneDisplay: '+91 9920308677 / +91 9930318387',
  phones: ['+919920308677', '+919930318387'],
  whatsappPhone: '919920308677',
};

export const getWhatsAppUrl = (message: string) =>
  `https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappPhone}&text=${encodeURIComponent(message)}`;

export const MAX_RETAIL_QUANTITY = 10;

export const getBulkOrderWhatsAppUrl = (productName?: string, quantity?: number) => {
  const productLine = productName ? ` for ${productName}` : '';
  const quantityLine = quantity && quantity > MAX_RETAIL_QUANTITY ? ` Quantity required: ${quantity}.` : '';
  return getWhatsAppUrl(
    `Hello Aranya Organic, I would like to contact the manufacturer for a bulk order${productLine}.${quantityLine} Please share wholesale quantity, pricing, and delivery details.`
  );
};
