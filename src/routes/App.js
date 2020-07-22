import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const state = {
  items: [
    {
      id: 1,
      name: "100",
      description: "Lipoprotein deficiencies",
      colors: "Teal",
      price: 306,
      discount: null,
    },
    {
      id: 2,
      name: "R-Class",
      description: "Cellulocutaneous plague",
      colors: "Puce",
      price: 925,
      discount: null,
    },
    {
      id: 3,
      name: "RSX",
      description:
        "Poisoning by liver preparations and other antianemic agents",
      colors: "Khaki",
      price: 608,
      discount: null,
    },
    {
      id: 4,
      name: "Ram Van 2500",
      description: "Burn of unspecified degree of hand, unspecified site",
      colors: "Indigo",
      price: 995,
      discount: null,
    },
    {
      id: 5,
      name: "Quattro",
      description: "Exophthalmic ophthalmoplegia",
      colors: "Orange",
      price: 623,
      discount: null,
    },
    {
      id: 6,
      name: "GTO",
      description:
        "Other gonococcal infection (acute) of upper genitourinary tract",
      colors: "Puce",
      price: 947,
      discount: null,
    },
    {
      id: 7,
      name: "Aerio",
      description: "Amebic brain abscess",
      colors: "Pink",
      price: 738,
      discount: null,
    },
    {
      id: 8,
      name: "Wrangler",
      description:
        "Spontaneous abortion, complicated by renal failure, unspecified",
      colors: "Fuscia",
      price: 875,
      discount: null,
    },
    {
      id: 9,
      name: "4000CS Quattro",
      description: "Medical services in home not available",
      colors: "Red",
      price: 483,
      discount: null,
    },
    {
      id: 10,
      name: "Range Rover",
      description:
        "Fitting and adjustment of artificial arm (complete) (partial)",
      colors: "Green",
      price: 4,
      discount: null,
    },
    {
      id: 11,
      name: "Cherokee",
      description: "Unspecified congenital anomaly of heart",
      colors: "Mauv",
      price: 221,
      discount: null,
    },
    {
      id: 12,
      name: "Ram Van 2500",
      description:
        "Influenza due to identified 2009 H1N1 influenza virus with pneumonia",
      colors: "Blue",
      price: 639,
      discount: null,
    },
    {
      id: 13,
      name: "Caravan",
      description:
        "Elderly multigravida, delivered with or without mention of antepartum condition",
      colors: "Red",
      price: 840,
      discount: null,
    },
    {
      id: 14,
      name: "Dakota Club",
      description: "High-risk sexual behavior",
      colors: "Maroon",
      price: 428,
      discount: null,
    },
    {
      id: 15,
      name: "Avalanche 2500",
      description: "Velo-cardio-facial syndrome",
      colors: "Teal",
      price: 635,
      discount: null,
    },
    {
      id: 16,
      name: "S80",
      description: "Arthropathy associated with helminthiasis, forearm",
      colors: "Orange",
      price: 87,
      discount: null,
    },
    {
      id: 17,
      name: "Eurovan",
      description:
        "Unspecified failed trial of labor, unspecified as to episode of care or not applicable",
      colors: "Turquoise",
      price: 695,
      discount: null,
    },
    {
      id: 18,
      name: "Savana 2500",
      description: "Rheumatic fever without mention of heart involvement",
      colors: "Green",
      price: 50,
      discount: null,
    },
    {
      id: 19,
      name: "Century",
      description:
        "Benign localized hyperplasia of prostate with urinary obstruction and other lower urinary tract symptoms (LUTS)",
      colors: "Orange",
      price: 390,
      discount: null,
    },
    {
      id: 20,
      name: "Shadow",
      description: "Acute duodenal ulcer with hemorrhage, with obstruction",
      colors: "Red",
      price: 457,
      discount: null,
    },
    {
      id: 21,
      name: "Grand Marquis",
      description: "Late effect of spinal cord injury",
      colors: "Maroon",
      price: 826,
      discount: null,
    },
    {
      id: 22,
      name: "Colt Vista",
      description:
        "Burn [any degree] involving 20-29 percent of body surface with third degree burn, 10-19%",
      colors: "Crimson",
      price: 430,
      discount: null,
    },
    {
      id: 23,
      name: "Jetta",
      description:
        "Chronic or unspecified gastrojejunal ulcer with hemorrhage and perforation, without mention of obstruction",
      colors: "Blue",
      price: 941,
      discount: null,
    },
    {
      id: 24,
      name: "600SEL",
      description: "Boutonneuse fever",
      colors: "Aquamarine",
      price: 427,
      discount: null,
    },
    {
      id: 25,
      name: "Discovery",
      description: "Glaucoma with increased episcleral venous pressure",
      colors: "Khaki",
      price: 698,
      discount: null,
    },
    {
      id: 26,
      name: "G8",
      description: "Rh incompatibility reaction, unspecified",
      colors: "Goldenrod",
      price: 94,
      discount: null,
    },
    {
      id: 27,
      name: "Seville",
      description: "Subacute leukemia of unspecified cell type, in remission",
      colors: "Fuscia",
      price: 464,
      discount: null,
    },
    {
      id: 28,
      name: "Silhouette",
      description: "Encounter for vocational therapy",
      colors: "Puce",
      price: 523,
      discount: null,
    },
    {
      id: 29,
      name: "Jetta",
      description: "Other disease of nasal cavity and sinuses",
      colors: "Purple",
      price: 84,
      discount: null,
    },
    {
      id: 30,
      name: "LeSabre",
      description: "Fistula of bile duct",
      colors: "Fuscia",
      price: 168,
      discount: null,
    },
    {
      id: 31,
      name: "GS",
      description: "Hepatitis B carrier",
      colors: "Goldenrod",
      price: 202,
      discount: 0.17,
    },
    {
      id: 32,
      name: "Pajero",
      description: "Persistent postoperative fistula",
      colors: "Yellow",
      price: 260,
      discount: null,
    },
    {
      id: 33,
      name: "Escort",
      description:
        "Prolonged second stage of labor, unspecified as to episode of care or not applicable",
      colors: "Crimson",
      price: 349,
      discount: null,
    },
    {
      id: 34,
      name: "T100",
      description:
        "Delayed delivery after artificial rupture of membranes, unspecified as to episode of care or not applicable",
      colors: "Turquoise",
      price: 586,
      discount: null,
    },
    {
      id: 35,
      name: "Cougar",
      description:
        "Other open skull fracture with subarachnoid, subdural, and extradural hemorrhage, with brief [less than one hour] loss of consciousness",
      colors: "Violet",
      price: 425,
      discount: null,
    },
    {
      id: 36,
      name: "NSX",
      description: "Ankylosis of joint, forearm",
      colors: "Green",
      price: 822,
      discount: null,
    },
    {
      id: 37,
      name: "Ranger",
      description: "Hypopyon ulcer",
      colors: "Goldenrod",
      price: 253,
      discount: null,
    },
    {
      id: 38,
      name: "Alero",
      description: "Ankylosis of joint, hand",
      colors: "Goldenrod",
      price: 525,
      discount: null,
    },
    {
      id: 39,
      name: "FX",
      description: "Problems with sight",
      colors: "Mauv",
      price: 281,
      discount: null,
    },
    {
      id: 40,
      name: "Sportage",
      description:
        "Illegally induced abortion, complicated by damage to pelvic organs or tissues, unspecified",
      colors: "Goldenrod",
      price: 364,
      discount: null,
    },
    {
      id: 41,
      name: "Altima",
      description: "Postprocedural fever",
      colors: "Green",
      price: 728,
      discount: null,
    },
    {
      id: 42,
      name: "Eurovan",
      description: "Other activity involving external motion",
      colors: "Puce",
      price: 772,
      discount: null,
    },
    {
      id: 43,
      name: "Spyder",
      description: "Contact with or exposure to meningococcus",
      colors: "Fuscia",
      price: 519,
      discount: null,
    },
    {
      id: 44,
      name: "Prizm",
      description: "Other acquired deformities of ankle and foot",
      colors: "Mauv",
      price: 906,
      discount: null,
    },
    {
      id: 45,
      name: "Firebird",
      description: "Other specified disorders of pancreatic internal secretion",
      colors: "Indigo",
      price: 159,
      discount: null,
    },
    {
      id: 46,
      name: "Sonata",
      description: "Toxic effect of soaps and detergents",
      colors: "Goldenrod",
      price: 739,
      discount: null,
    },
    {
      id: 47,
      name: "TL",
      description: "Special screening for malignant neoplasms of other sites",
      colors: "Crimson",
      price: 978,
      discount: null,
    },
    {
      id: 48,
      name: "CR-X",
      description: "Intermittent exophthalmos",
      colors: "Mauv",
      price: 104,
      discount: null,
    },
    {
      id: 49,
      name: "Escalade",
      description:
        "Allergic rhinitis due to animal (cat) (dog) hair and dander",
      colors: "Pink",
      price: 251,
      discount: null,
    },
    {
      id: 50,
      name: "Mustang",
      description:
        "Suicide and self-inflicted poisoning by other specified drugs and medicinal substances",
      colors: "Aquamarine",
      price: 987,
      discount: 0.17,
    },
    {
      id: 51,
      name: "G5",
      description:
        "Galactorrhea associated with childbirth, postpartum condition or complication",
      colors: "Pink",
      price: 482,
      discount: null,
    },
    {
      id: 52,
      name: "Montero",
      description:
        "Closed fracture of vault of skull with intracranial injury of other and unspecified nature, with concussion, unspecified",
      colors: "Orange",
      price: 330,
      discount: null,
    },
    {
      id: 53,
      name: "ZX2",
      description: "Major depressive affective disorder, single episode, mild",
      colors: "Crimson",
      price: 746,
      discount: null,
    },
    {
      id: 54,
      name: "Sportage",
      description: "Huntington's chorea",
      colors: "Maroon",
      price: 709,
      discount: null,
    },
    {
      id: 55,
      name: "Commander",
      description:
        "Unspecified abortion, complicated by damage to pelvic organs or tissues, complete",
      colors: "Yellow",
      price: 51,
      discount: null,
    },
    {
      id: 56,
      name: "MDX",
      description:
        "Other and unspecified respiratory drugs causing adverse effects in therapeutic use",
      colors: "Violet",
      price: 474,
      discount: null,
    },
    {
      id: 57,
      name: "Accord",
      description: "Acromegaly and gigantism",
      colors: "Orange",
      price: 48,
      discount: null,
    },
    {
      id: 58,
      name: "X5",
      description: "ABO incompatibility reaction, unspecified",
      colors: "Blue",
      price: 272,
      discount: null,
    },
    {
      id: 59,
      name: "Express 3500",
      description: "Fitting and adjustment of other cardiac device",
      colors: "Pink",
      price: 252,
      discount: null,
    },
    {
      id: 60,
      name: "RX-8",
      description: "Atherosclerosis of other specified arteries",
      colors: "Purple",
      price: 278,
      discount: null,
    },
    {
      id: 61,
      name: "Estate",
      description:
        "Smallpox vaccine causing adverse effects in therapeutic use",
      colors: "Red",
      price: 734,
      discount: null,
    },
    {
      id: 62,
      name: "Lancer Evolution",
      description: "Malignant carcinoid tumor of the duodenum",
      colors: "Green",
      price: 632,
      discount: null,
    },
    {
      id: 63,
      name: "525",
      description: "Diaper or napkin rash",
      colors: "Fuscia",
      price: 247,
      discount: null,
    },
    {
      id: 64,
      name: "928",
      description: "Unsatisfactory anal cytology smear",
      colors: "Blue",
      price: 501,
      discount: null,
    },
    {
      id: 65,
      name: "626",
      description: "Central perforation of tympanic membrane",
      colors: "Violet",
      price: 844,
      discount: 0.7,
    },
    {
      id: 66,
      name: "Aurora",
      description: "Benign neoplasm of colon",
      colors: "Mauv",
      price: 9,
      discount: null,
    },
    {
      id: 67,
      name: "62",
      description: "Exposure to radioactive isotopes",
      colors: "Turquoise",
      price: 879,
      discount: null,
    },
    {
      id: 68,
      name: "Pajero",
      description:
        "Single liveborn, born in hospital, delivered by cesarean section",
      colors: "Khaki",
      price: 972,
      discount: null,
    },
    {
      id: 69,
      name: "Esperante",
      description:
        "Aftercare for healing traumatic fracture of arm, unspecified",
      colors: "Teal",
      price: 397,
      discount: null,
    },
    {
      id: 70,
      name: "Yukon XL 1500",
      description:
        "Other systemic agents, not elsewhere classified, causing adverse effects in therapeutic use",
      colors: "Red",
      price: 239,
      discount: null,
    },
    {
      id: 71,
      name: "Astro",
      description: "Unspecified viral hepatitis C with hepatic coma",
      colors: "Maroon",
      price: 532,
      discount: 0.24,
    },
    {
      id: 72,
      name: "Concorde",
      description: "Teething syndrome",
      colors: "Mauv",
      price: 734,
      discount: null,
    },
    {
      id: 73,
      name: "Wrangler",
      description: "Accidents due to excessive heat of man-made origin",
      colors: "Aquamarine",
      price: 566,
      discount: null,
    },
    {
      id: 74,
      name: "928",
      description: "Injury of face and neck",
      colors: "Puce",
      price: 974,
      discount: null,
    },
    {
      id: 75,
      name: "Tempo",
      description: "Other autosomal deletions",
      colors: "Puce",
      price: 618,
      discount: null,
    },
    {
      id: 76,
      name: "V12 Vantage",
      description: "Ectropion, unspecified",
      colors: "Pink",
      price: 408,
      discount: null,
    },
    {
      id: 77,
      name: "9-5",
      description: "Injury to popliteal vein",
      colors: "Turquoise",
      price: 776,
      discount: null,
    },
    {
      id: 78,
      name: "Express 3500",
      description: "Open wound of cheek, without mention of complication",
      colors: "Crimson",
      price: 451,
      discount: null,
    },
    {
      id: 79,
      name: "Grand Voyager",
      description: "Congenital folds and cysts of posterior segment",
      colors: "Khaki",
      price: 579,
      discount: null,
    },
    {
      id: 80,
      name: "Sonata",
      description:
        "Retained portions of placenta or membranes, without hemorrhage, unspecified as to episode of care or not applicable",
      colors: "Fuscia",
      price: 375,
      discount: null,
    },
    {
      id: 81,
      name: "Suburban 1500",
      description: "Cerebral arteritis",
      colors: "Orange",
      price: 825,
      discount: null,
    },
    {
      id: 82,
      name: "DeVille",
      description: "Obesity, unspecified",
      colors: "Blue",
      price: 132,
      discount: null,
    },
    {
      id: 83,
      name: "Lancer",
      description: "Malignant neoplasm of cerebellum nos",
      colors: "Red",
      price: 669,
      discount: 0.22,
    },
    {
      id: 84,
      name: "Escalade EXT",
      description: "Raynaud's syndrome",
      colors: "Yellow",
      price: 325,
      discount: null,
    },
    {
      id: 85,
      name: "Versa",
      description: "Genetic susceptibility to other malignant neoplasm",
      colors: "Purple",
      price: 206,
      discount: null,
    },
    {
      id: 86,
      name: "Impreza",
      description: "Other and unspecified mitral valve diseases",
      colors: "Aquamarine",
      price: 103,
      discount: null,
    },
    {
      id: 87,
      name: "Mustang",
      description: "Chronic venous embolism and thrombosis of axillary veins",
      colors: "Puce",
      price: 663,
      discount: null,
    },
    {
      id: 88,
      name: "GS",
      description: "Phthisical cornea",
      colors: "Blue",
      price: 368,
      discount: null,
    },
    {
      id: 89,
      name: "Voyager",
      description: "Idiopathic hypersomnia without long sleep time",
      colors: "Fuscia",
      price: 405,
      discount: null,
    },
    {
      id: 90,
      name: "Leone",
      description: "Farmers' lung",
      colors: "Maroon",
      price: 386,
      discount: null,
    },
    {
      id: 91,
      name: "Grand Prix",
      description: "Tuberculoma of spinal cord, unspecified",
      colors: "Teal",
      price: 715,
      discount: null,
    },
    {
      id: 92,
      name: "Grand Caravan",
      description:
        "Accident to watercraft causing other injury, occupant of military watercraft, any type",
      colors: "Pink",
      price: 552,
      discount: 0.99,
    },
    {
      id: 93,
      name: "Corvette",
      description: "Image test inconclusive due to excess body fat",
      colors: "Purple",
      price: 687,
      discount: null,
    },
    {
      id: 94,
      name: "Ram 50",
      description: "Aggressive periodontitis, unspecified",
      colors: "Green",
      price: 713,
      discount: 0.95,
    },
    {
      id: 95,
      name: "Ram Van 2500",
      description:
        "Malignant neoplasm of other specified sites of gallbladder and extrahepatic bile ducts",
      colors: "Blue",
      price: 485,
      discount: null,
    },
    {
      id: 96,
      name: "Escalade",
      description: "Laceration of eyelid involving lacrimal passages",
      colors: "Indigo",
      price: 561,
      discount: null,
    },
    {
      id: 97,
      name: "SLK-Class",
      description: "Doubling of uterus",
      colors: "Red",
      price: 580,
      discount: null,
    },
    {
      id: 98,
      name: "240SX",
      description: "Syndactyly of fingers without fusion of bone",
      colors: "Violet",
      price: 889,
      discount: null,
    },
    {
      id: 99,
      name: "Matrix",
      description:
        "Carcinoma in situ of other and unspecified digestive organs",
      colors: "Violet",
      price: 68,
      discount: null,
    },
    {
      id: 100,
      name: "Corvette",
      description:
        "Acute gastrojejunal ulcer with hemorrhage and perforation, without mention of obstruction",
      colors: "Teal",
      price: 974,
      discount: null,
    },
  ],
};



const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
};

export default App;
