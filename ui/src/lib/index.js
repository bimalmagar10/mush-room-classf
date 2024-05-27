export const elements = [
  {
    attribute: "cap-shape",
    values: "bell=b,conical=c,convex=x,flat=f, knobbed=k,sunken=s",
    options: [
      { label: "bell", value: "b" },
      { label: "conical", value: "c" },
      { label: "convex", value: "x" },
      { label: "flat", value: "f" },
      { label: "knobbed", value: "k" },
      { label: "sunken", value: "s" },
    ],
    name: "cap_shape",
  },
  {
    attribute: "cap-surface",
    values: "fibrous=f,grooves=g,scaly=y,smooth=s",
    options: [
      { label: "fibrous", value: "f" },
      { label: "grooves", value: "g" },
      { label: "scaly", value: "y" },
      { label: "smooth", value: "s" },
    ],
    name: "cap_surface",
  },
  {
    attribute: "cap-color",
    values:
      "brown=n,buff=b,cinnamon=c,gray=g,green=r,pink=p,purple=u,red=e,white=w,yellow=y",
    options: [
      { label: "brown", value: "n" },
      { label: "buff", value: "b" },
      { label: "cinnamon", value: "c" },
      { label: "gray", value: "g" },
      { label: "green", value: "r" },
      { label: "pink", value: "p" },
      { label: "purple", value: "u" },
      { label: "red", value: "e" },
      { label: "white", value: "w" },
      { label: "yellow", value: "y" },
    ],
    name: "cap_color",
  },
  {
    attribute: "bruises",
    values: "bruises=t,no=f",
    options: [
      { label: "bruises", value: "t" },
      { label: "no", value: "f" },
    ],
    name: "bruises",
  },
  {
    attribute: "odor",
    values:
      "almond=a,anise=l,creosote=c,fishy=y,foul=f,musty=m,none=n,pungent=p,spicy=s",
    options: [
      { label: "almond", value: "a" },
      { label: "anise", value: "l" },
      { label: "creosote", value: "c" },
      { label: "fishy", value: "y" },
      { label: "foul", value: "f" },
      { label: "musty", value: "m" },
      { label: "none", value: "n" },
      { label: "pungent", value: "p" },
      { label: "spicy", value: "s" },
    ],
    name: "odor",
  },
  {
    attribute: "gill-attachment",
    values: "attached=a,descending=d,free=f,notched=n",
    options: [
      { label: "attached", value: "a" },
      { label: "free", value: "f" },
    ],
    name: "gill_attachment",
  },
  {
    attribute: "gill-spacing",
    values: "close=c,crowded=w",
    options: [
      { label: "close", value: "c" },
      { label: "crowded", value: "w" },
    ],
    name: "gill_spacing",
  },
  {
    attribute: "gill-size",
    values: "broad=b,narrow=n",
    options: [
      { label: "broad", value: "b" },
      { label: "narrow", value: "n" },
    ],
    name: "gill_size",
  },
  {
    attribute: "gill-color",
    values:
      "black=k,brown=n,buff=b,chocolate=h,gray=g, green=r,orange=o,pink=p,purple=u,red=e,white=w,yellow=y",
    options: [
      { label: "black", value: "k" },
      { label: "brown", value: "n" },
      { label: "buff", value: "b" },
      { label: "chocolate", value: "h" },
      { label: "green", value: "r" },
      { label: "orange", value: "o" },
      { label: "pink", value: "p" },
      { label: "purple", value: "u" },
      { label: "red", value: "e" },
      { label: "white", value: "w" },
      { label: "yellow", value: "y" },
      { label: "gray", value: "g" },
    ],
    name: "gill_color",
  },
  {
    attribute: "stalk-shape",
    values: "enlarging=e,tapering=t",
    options: [
      { label: "enlarging", value: "e" },
      { label: "tapering", value: "t" },
    ],
    name: "stalk_shape",
  },
  {
    attribute: "stalk-root",
    values: "bulbous=b,club=c,cup=u,equal=e,rhizomorphs=z,rooted=r,missing=?",
    options: [
      { label: "bulbous", value: "b" },
      { label: "club", value: "c" },
      { label: "equal", value: "e" },
      { label: "rooted", value: "r" },
      { label: "missing", value: "?" },
    ],
    name: "stalk_root",
  },
  {
    attribute: "stalk-surface-above-ring",
    values: "fibrous=f,scaly=y,silky=k,smooth=s",
    options: [
      { label: "fibrous", value: "f" },
      { label: "scaly", value: "y" },
      { label: "silky", value: "k" },
      { label: "smooth", value: "s" },
    ],
    name: "stalk_surface_above_ring",
  },
  {
    attribute: "stalk-surface-below-ring",
    values: "fibrous=f,scaly=y,silky=k,smooth=s",
    options: [
      { label: "fibrous", value: "f" },
      { label: "scaly", value: "y" },
      { label: "silky", value: "k" },
      { label: "smooth", value: "s" },
    ],
    name: "stalk_surface_below_ring",
  },
  {
    attribute: "stalk-color-above-ring",
    values:
      "brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y",
    options: [
      { label: "brown", value: "n" },
      { label: "buff", value: "b" },
      { label: "cinnamon", value: "c" },
      { label: "gray", value: "g" },
      { label: "orange", value: "o" },
      { label: "pink", value: "p" },
      { label: "red", value: "e" },
      { label: "white", value: "w" },
      { label: "yellow", value: "y" },
    ],
    name: "stalk_color_above_ring",
  },
  {
    attribute: "stalk-color-below-ring",
    values:
      "brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y",
    options: [
      { label: "brown", value: "n" },
      { label: "buff", value: "b" },
      { label: "cinnamon", value: "c" },
      { label: "gray", value: "g" },
      { label: "orange", value: "o" },
      { label: "pink", value: "p" },
      { label: "red", value: "e" },
      { label: "white", value: "w" },
      { label: "yellow", value: "y" },
    ],
    name: "stalk_color_below_ring",
  },

  {
    attribute: "veil-color",
    values: "brown=n,orange=o,white=w,yellow=y",
    options: [
      { label: "brown", value: "n" },
      { label: "orange", value: "o" },
      { label: "white", value: "w" },
      { label: "yellow", value: "y" },
    ],
    name: "veil_color",
  },
  {
    attribute: "ring-number",
    values: "none=n,one=o,two=t",
    options: [
      { label: "none", value: "n" },
      { label: "one", value: "o" },
      { label: "two", value: "t" },
    ],
    name: "ring_number",
  },
  {
    attribute: "ring-type",
    values:
      "cobwebby=c,evanescent=e,flaring=f,large=l,none=n,pendant=p,sheathing=s,zone=z",
    options: [
      { label: "evanescent", value: "e" },
      { label: "flaring", value: "f" },
      { label: "large", value: "l" },
      { label: "none", value: "n" },
      { label: "pendant", value: "p" },
    ],
    name: "ring_type",
  },
  {
    attribute: "spore-print-color",
    values:
      "black=k,brown=n,buff=b,chocolate=h,green=r,orange=o,purple=u,white=w,yellow=y",
    options: [
      { label: "black", value: "k" },
      { label: "brown", value: "n" },
      { label: "buff", value: "b" },
      { label: "chocolate", value: "h" },
      { label: "green", value: "r" },
      { label: "orange", value: "o" },
      { label: "purple", value: "u" },
      { label: "white", value: "w" },
      { label: "yellow", value: "y" },
    ],
    name: "spore_print_color",
  },
  {
    attribute: "population",
    values:
      "abundant=a,clustered=c,numerous=n,scattered=s,several=v,solitary=y",
    options: [
      { label: "abundant", value: "a" },
      { label: "clustered", value: "c" },
      { label: "numerous", value: "n" },
      { label: "scattered", value: "s" },
      { label: "several", value: "v" },
      { label: "solitary", value: "y" },
    ],
    name: "population",
  },
  {
    attribute: "habitat",
    values: "grasses=g,leaves=l,meadows=m,paths=p,urban=u,waste=w,woods=d",
    options: [
      { label: "grasses", value: "g" },
      { label: "leaves", value: "l" },
      { label: "meadows", value: "m" },
      { label: "paths", value: "p" },
      { label: "urban", value: "u" },
      { label: "waste", value: "w" },
      { label: "woods", value: "d" },
    ],
    name: "habitat",
  },
];

export const API_URL =
  "https://mushroom-classification-api.azurewebsites.net/predict";
