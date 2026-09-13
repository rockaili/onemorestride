export type TransparencyBillImage = {
  src: string;
  alt: string;
  label: string;
};

export type TransparencyBill = {
  title: string;
  category: string;
  date: string;
  amount: string;
  horses: string;
  description: string;
  images: TransparencyBillImage[];
};

export const transparencyBills: TransparencyBill[] = [
  {
    title: "Sycamore Lodge Equine Hospital",
    category: "Vet care",
    date: "06 Aug 2026",
    amount: "€160.00",
    horses: "Multiple horses",
    description: "Veterinary visit, examination, injection and medication support.",
    images: [
      {
        src: "/bills/sycamore-lodge-vet-care-2026-08-06.png",
        alt: "Public Sycamore Lodge Equine Hospital invoice for veterinary care dated 06 Aug 2026.",
        label: "View bill"
      }
    ]
  },
  {
    title: "Bakonyi & Byrne Equine Vets",
    category: "Vet care",
    date: "19 Apr 2026",
    amount: "€657.00",
    horses: "Bob, Contigo, Millie, Nancy and Twix",
    description:
      "Outstanding veterinary statement covering medicine, tests, postage and care items across several horses.",
    images: [
      {
        src: "/bills/lara-statement.png",
        alt: "Public Bakonyi and Byrne Equine Vets statement dated 19 Apr 2026.",
        label: "View bill"
      }
    ]
  }
];
