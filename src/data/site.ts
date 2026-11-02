export const FIRM = {
  name: "Barron Law Firm PLLC",
  attorney: "John W. Barron",
  tagline: "Over 40 years of experience fighting for the injured",
  established: 1975,
  phone: "(501) 376-7934",
  phoneHref: "tel:+15013767934",
  email: "jay@jwbarronlaw.com",
  emailHref: "mailto:jay@jwbarronlaw.com",
  address: {
    street: "1012 W. 2nd Street",
    city: "Little Rock",
    state: "AR",
    zip: "72201-2002",
    country: "United States",
    full: "1012 W. 2nd Street, Little Rock, AR 72201-2002",
  },
  hours: [
    { days: "Monday – Friday", time: "8:30 am – 5:00 pm" },
    { days: "Saturday", time: "Closed" },
    { days: "Sunday", time: "Closed" },
  ],
};

export interface PracticeArea {
  slug: string;
  title: string;
  icon: "heart" | "slip" | "medical" | "scale" | "car" | "umbrella";
  excerpt: string;
  body: string[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "personal-injury",
    title: "Personal Injury",
    icon: "heart",
    excerpt:
      "Serious injuries deserve serious representation. We fight for the full compensation you are owed — never a quick, lowball settlement.",
    body: [
      "When someone else's carelessness turns your life upside down, you need an attorney who treats your case like it matters — because it does. Barron Law Firm PLLC has represented injured Arkansans since 1975, and we handle every type of personal injury case with hard work, team effort, and litigation skill.",
      "Insurance companies are not always fair. Many cases settle for less than they are worth simply because the injured person did not have experienced trial counsel. We prepare every claim as if it will be tried before a jury, and that preparation drives real results.",
      "We are by your side every step of the process — from the first phone call through the final resolution — and you pay no fee unless we recover money for you.",
    ],
  },
  {
    slug: "slip-and-fall",
    title: "Slip and Fall Accidents",
    icon: "slip",
    excerpt:
      "Property owners have a duty to keep their premises safe. When they fail, we hold them accountable for the harm their negligence caused.",
    body: [
      "Slip and fall accidents are often preventable — and they could have been avoided if the responsible party had taken more care. Wet floors, broken steps, poor lighting, and unsafe walkways cause serious injuries every day in grocery stores, parking lots, apartment complexes, and workplaces across Arkansas.",
      "Premises liability cases turn on proof: what the property owner knew, when they knew it, and what they failed to fix. Our decades of courtroom experience mean we know how to gather that evidence quickly, before it disappears.",
      "If you were hurt on someone else's property, call Barron Law Firm PLLC right away. We don't collect unless you win.",
    ],
  },
  {
    slug: "medical-negligence",
    title: "Medical Negligence",
    icon: "medical",
    excerpt:
      "Birth injuries, mis-filled prescriptions, and doctor or hospital negligence — we take on the tough medical malpractice cases.",
    body: [
      "We trust doctors, nurses, and pharmacists with our lives. When a preventable mistake causes harm — a birth injury, a mis-filled prescription, a missed diagnosis, or negligence by a doctor or hospital — the consequences can last a lifetime.",
      "Medical negligence cases are among the most demanding in the law. They require deep knowledge of medicine, access to leading experts, and the resources to take on hospitals and their insurers. With over 40 years of experience, Barron Law Firm PLLC has what these cases demand.",
      "If you or a loved one suffered at the hands of a healthcare provider, reach out for a confidential consultation. We will analyze every detail of your case and tell you plainly what your options are.",
    ],
  },
  {
    slug: "liability-claims",
    title: "Liability Claims",
    icon: "scale",
    excerpt:
      "Product liability and other liability claims. When a defective product or another party's fault injures you, someone must answer for it.",
    body: [
      "Defective and dangerous products reach consumers far too often. From faulty machinery to unsafe consumer goods, product liability cases hold manufacturers, distributors, and retailers responsible for the injuries their products cause.",
      "Liability claims also cover a wide range of other situations where another party's fault causes injury. The common thread is accountability: an entity other than you had a duty, breached it, and left you hurt.",
      "These cases are won with preparation. We work with engineers, safety experts, and investigators to build the strongest possible claim — and we welcome you with open arms and are proud to represent you.",
    ],
  },
  {
    slug: "auto-accidents",
    title: "Auto Accidents",
    icon: "car",
    excerpt:
      "Car, truck, and motorcycle accidents happen every day. If the person at fault did not see you or failed to yield, you can recover money for your injuries.",
    body: [
      "Automobile and motorcycle accidents happen every day, and people are injured through no fault of their own. When the person at fault did not see your motorcycle or failed to yield, you can recover money for your injuries and your fair share of compensation.",
      "Wrecks bring more than damaged vehicles — lost wages, mounting medical bills, and pain that disrupts everything. Insurance adjusters move fast to protect their company's bottom line; you deserve someone protecting yours.",
      "Barron Law Firm PLLC handles all types of motor vehicle cases, from rear-end collisions to catastrophic trucking wrecks. Call us right away so we can secure evidence, deal with the insurers, and pursue everything you are owed.",
    ],
  },
  {
    slug: "insurance-assistance",
    title: "Insurance Assistance",
    icon: "umbrella",
    excerpt:
      "Insurance companies are not always fair. We level the playing field and make sure the settlement you receive is based on the skills of your attorney.",
    body: [
      "After an accident, the insurance company has adjusters, attorneys, and algorithms working to pay you as little as possible. Many cases settle before they ever reach a courtroom — and whether the amount you receive is fair depends on the skills of your attorney.",
      "We review your policy, handle the correspondence, document your damages, and negotiate from a position of strength. When an insurer acts in bad faith or refuses to pay what a claim is truly worth, we are fully prepared to litigate.",
      "With us to ensure they pay, you never face the insurance process alone. We work with you to collect — and we don't collect unless you win.",
    ],
  },
];

export interface Association {
  name: string;
  monogram: string;
}

/** Associations attached to the firm — shown as a scrolling badge marquee. */
export const ASSOCIATIONS: Association[] = [
  { name: "Pulaski County Bar Association", monogram: "PCBA" },
  { name: "Arkansas Bar Association", monogram: "AR BAR" },
  { name: "Arkansas Trial Lawyers Association", monogram: "ATLA·AR" },
  { name: "The Association of Trial Lawyers of America", monogram: "ATLA" },
  { name: "University of Arkansas Law Review", monogram: "UALR" },
  { name: "Arkansas ABOTA", monogram: "ABOTA·AR" },
  { name: "National ABOTA", monogram: "ABOTA" },
  { name: "Special Associate Justice, Arkansas Supreme Court", monogram: "AJSC" },
];

export const SERVICES = [
  "Personal Injury Representation",
  "Attorneys",
  "Nursing Home Negligence",
  "Birth Injuries",
  "Mis-Filled Prescriptions",
  "Doctor or Hospital Negligence",
  "Product Liability Cases",
];

export const SPECIALTIES = [
  "Personal Injury & Accident",
  "Medical & Nursing Home Malpractice",
  "Product Liability",
  "Slip and Fall",
];
