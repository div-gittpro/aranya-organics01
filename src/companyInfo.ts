export const COMPANY_INFO = {
  address: 'D/1, plot no 8, Sagar Lahari society, Gorai 2, Borivali West, Mumbai, Maharashtra 400091',
  email: 'aranyaorganic1@gmail.com',
  instagram: 'https://www.instagram.com/aranyaorganic_',
  phoneDisplay: '+91 9920308677',
  whatsappPhone: '919920308677',
};

export const getWhatsAppUrl = (message: string) =>
  `https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappPhone}&text=${encodeURIComponent(message)}`;
