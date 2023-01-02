const nations = {
  "1": {
    "name": "Afghanistan",
    "iso2": "AF",
    "iso3": "AFG"
  },
  "2": {
    "name": "Albania",
    "iso2": "AL",
    "iso3": "ALB"
  },
  "3": {
    "name": "Algeria",
    "iso2": "DZ",
    "iso3": "DZA"
  },
  "4": {
    "name": "American Samoa",
    "iso2": "AS",
    "iso3": "ASM"
  },
  "5": {
    "name": "Andorra",
    "iso2": "AD",
    "iso3": "AND"
  },
  "6": {
    "name": "Angola",
    "iso2": "AO",
    "iso3": "AGO"
  },
  "7": {
    "name": "Anguilla",
    "iso2": "AI",
    "iso3": "AIA"
  },
  "8": {
    "name": "Antigua And Barbuda",
    "iso2": "AG",
    "iso3": "ATG"
  },
  "9": {
    "name": "Argentina",
    "iso2": "AR",
    "iso3": "ARG"
  },
  "10": {
    "name": "Armenia",
    "iso2": "AM",
    "iso3": "ARG"
  },
  "11": {
    "name": "Aruba",
    "iso2": "AW",
    "iso3": "ABW"
  },
  "12": {
    "name": "Australia",
    "iso2": "AU",
    "iso3": "AUS"
  },
  "13": {
    "name": "Austria",
    "iso2": "AT",
    "iso3": "AUT"
  },
  "14": {
    "name": "Azerbaijan",
    "iso2": "AZ",
    "iso3": "AZE"
  },
  "15": {
    "name": "Bahamas, The",
    "iso2": "BS",
    "iso3": "BHS"
  },
  "16": {
    "name": "Bahrain",
    "iso2": "BH",
    "iso3": "BHR"
  },
  "17": {
    "name": "Bangladesh",
    "iso2": "BD",
    "iso3": "BGD"
  },
  "18": {
    "name": "Barbados",
    "iso2": "BB",
    "iso3": "BRB"
  },
  "19": {
    "name": "Belarus",
    "iso2": "BY",
    "iso3": "BLR"
  },
  "20": {
    "name": "Belgium",
    "iso2": "BE",
    "iso3": "BEL"
  },
  "21": {
    "name": "Belize",
    "iso2": "BZ",
    "iso3": "BLZ"
  },
  "22": {
    "name": "Benin",
    "iso2": "BJ",
    "iso3": "BEN"
  },
  "23": {
    "name": "Bermuda",
    "iso2": "BM",
    "iso3": "BMU"
  },
  "24": {
    "name": "Bhutan",
    "iso2": "BT",
    "iso3": "BTN"
  },
  "25": {
    "name": "Bolivia",
    "iso2": "BO",
    "iso3": "BOL"
  },
  "26": {
    "name": "Bosnia And Herzegovina",
    "iso2": "BA",
    "iso3": "BIH"
  },
  "27": {
    "name": "Botswana",
    "iso2": "BW",
    "iso3": "BWA"
  },
  "28": {
    "name": "Brazil",
    "iso2": "BR",
    "iso3": "BRA"
  },
  "29": {
    "name": "Brunei",
    "iso2": "BN",
    "iso3": "BRN"
  },
  "30": {
    "name": "Bulgaria",
    "iso2": "BG",
    "iso3": "BGR"
  },
  "31": {
    "name": "Burkina Faso",
    "iso2": "BF",
    "iso3": "BFA"
  },
  "32": {
    "name": "Burundi",
    "iso2": "BI",
    "iso3": "BDI"
  },
  "33": {
    "name": "Cabo Verde",
    "iso2": "CV",
    "iso3": "CPV"
  },
  "34": {
    "name": "Cambodia",
    "iso2": "KH",
    "iso3": "KHM"
  },
  "35": {
    "name": "Cameroon",
    "iso2": "CM",
    "iso3": "CMR"
  },
  "36": {
    "name": "Canada",
    "iso2": "CA",
    "iso3": "CAN"
  },
  "37": {
    "name": "Cayman Islands",
    "iso2": "KY",
    "iso3": "CYM"
  },
  "38": {
    "name": "Central African Republic",
    "iso2": "CF",
    "iso3": "CAF"
  },
  "39": {
    "name": "Chad",
    "iso2": "TD",
    "iso3": "TCD"
  },
  "40": {
    "name": "Chile",
    "iso2": "CL",
    "iso3": "CHL"
  },
  "41": {
    "name": "China",
    "iso2": "CN",
    "iso3": "CHN"
  },
  "42": {
    "name": "Christmas Island",
    "iso2": "CX",
    "iso3": "CXR"
  },
  "43": {
    "name": "Colombia",
    "iso2": "CO",
    "iso3": "COL"
  },
  "44": {
    "name": "Comoros",
    "iso2": "KM",
    "iso3": "COM"
  },
  "45": {
    "name": "Congo (Brazzaville)",
    "iso2": "CG",
    "iso3": "COG"
  },
  "46": {
    "name": "Congo (Kinshasa)",
    "iso2": "CD",
    "iso3": "COD"
  },
  "47": {
    "name": "Cook Islands",
    "iso2": "CK",
    "iso3": "COK"
  },
  "48": {
    "name": "Costa Rica",
    "iso2": "CR",
    "iso3": "CRI"
  },
  "49": {
    "name": "Croatia",
    "iso2": "HR",
    "iso3": "HRV"
  },
  "50": {
    "name": "Cuba",
    "iso2": "CU",
    "iso3": "CUB"
  },
  "51": {
    "name": "Curaçao",
    "iso2": "CW",
    "iso3": "CUW"
  },
  "52": {
    "name": "Cyprus",
    "iso2": "CY",
    "iso3": "CYP"
  },
  "53": {
    "name": "Czechia",
    "iso2": "CZ",
    "iso3": "CZE"
  },
  "54": {
    "name": "Côte D’Ivoire",
    "iso2": "CI",
    "iso3": "CIV"
  },
  "55": {
    "name": "Denmark",
    "iso2": "DK",
    "iso3": "DNK"
  },
  "56": {
    "name": "Djibouti",
    "iso2": "DJ",
    "iso3": "DJI"
  },
  "57": {
    "name": "Dominica",
    "iso2": "DM",
    "iso3": "DMA"
  },
  "58": {
    "name": "Dominican Republic",
    "iso2": "DO",
    "iso3": "DOM"
  },
  "59": {
    "name": "Ecuador",
    "iso2": "EC",
    "iso3": "ECU"
  },
  "60": {
    "name": "Egypt",
    "iso2": "EG",
    "iso3": "EGY"
  },
  "61": {
    "name": "El Salvador",
    "iso2": "SV",
    "iso3": "SLV"
  },
  "62": {
    "name": "Equatorial Guinea",
    "iso2": "GQ",
    "iso3": "GNQ"
  },
  "63": {
    "name": "Eritrea",
    "iso2": "ER",
    "iso3": "ERI"
  },
  "64": {
    "name": "Estonia",
    "iso2": "EE",
    "iso3": "EST"
  },
  "65": {
    "name": "Ethiopia",
    "iso2": "ET",
    "iso3": "ETH"
  },
  "66": {
    "name": "Falkland Islands (Islas Malvinas)",
    "iso2": "FK",
    "iso3": "FLK"
  },
  "67": {
    "name": "Faroe Islands",
    "iso2": "FO",
    "iso3": "FRO"
  },
  "68": {
    "name": "Fiji",
    "iso2": "FJ",
    "iso3": "FJI"
  },
  "69": {
    "name": "Finland",
    "iso2": "FI",
    "iso3": "FIN"
  },
  "70": {
    "name": "France",
    "iso2": "FR",
    "iso3": "FRA"
  },
  "71": {
    "name": "French Guiana",
    "iso2": "GF",
    "iso3": "GUF"
  },
  "72": {
    "name": "French Polynesia",
    "iso2": "PF",
    "iso3": "PYF"
  },
  "73": {
    "name": "Gabon",
    "iso2": "GA",
    "iso3": "GAB"
  },
  "74": {
    "name": "Gambia, The",
    "iso2": "GM",
    "iso3": "GMB"
  },
  "75": {
    "name": "Gaza Strip",
    "iso2": "XG",
    "iso3": "XGZ"
  },
  "76": {
    "name": "Georgia",
    "iso2": "GE",
    "iso3": "GEO"
  },
  "77": {
    "name": "Germany",
    "iso2": "DE",
    "iso3": "DEU"
  },
  "78": {
    "name": "Ghana",
    "iso2": "GH",
    "iso3": "GHA"
  },
  "79": {
    "name": "Gibraltar",
    "iso2": "GI",
    "iso3": "GIB"
  },
  "80": {
    "name": "Greece",
    "iso2": "GR",
    "iso3": "GRC"
  },
  "81": {
    "name": "Greenland",
    "iso2": "GL",
    "iso3": "GRL"
  },
  "82": {
    "name": "Grenada",
    "iso2": "GD",
    "iso3": "GRD"
  },
  "83": {
    "name": "Guadeloupe",
    "iso2": "GP",
    "iso3": "GLP"
  },
  "84": {
    "name": "Guam",
    "iso2": "GU",
    "iso3": "GUM"
  },
  "85": {
    "name": "Guatemala",
    "iso2": "GT",
    "iso3": "GTM"
  },
  "86": {
    "name": "Guinea",
    "iso2": "GN",
    "iso3": "GIN"
  },
  "87": {
    "name": "Guinea-Bissau",
    "iso2": "GW",
    "iso3": "GNB"
  },
  "88": {
    "name": "Guyana",
    "iso2": "GY",
    "iso3": "GUY"
  },
  "89": {
    "name": "Haiti",
    "iso2": "HT",
    "iso3": "HTI"
  },
  "90": {
    "name": "Honduras",
    "iso2": "HN",
    "iso3": "HND"
  },
  "91": {
    "name": "Hong Kong",
    "iso2": "HK",
    "iso3": "HKG"
  },
  "92": {
    "name": "Hungary",
    "iso2": "HU",
    "iso3": "HUN"
  },
  "93": {
    "name": "Iceland",
    "iso2": "IS",
    "iso3": "ISL"
  },
  "94": {
    "name": "India",
    "iso2": "IN",
    "iso3": "IND"
  },
  "95": {
    "name": "Indonesia",
    "iso2": "ID",
    "iso3": "IDN"
  },
  "96": {
    "name": "Iran",
    "iso2": "IR",
    "iso3": "IRN"
  },
  "97": {
    "name": "Iraq",
    "iso2": "IQ",
    "iso3": "IRQ"
  },
  "98": {
    "name": "Ireland",
    "iso2": "IE",
    "iso3": "IRL"
  },
  "99": {
    "name": "Isle Of Man",
    "iso2": "IM",
    "iso3": "IMN"
  },
  "100": {
    "name": "Israel",
    "iso2": "IL",
    "iso3": "ISR"
  },
  "101": {
    "name": "Italy",
    "iso2": "IT",
    "iso3": "ITA"
  },
  "102": {
    "name": "Jamaica",
    "iso2": "JM",
    "iso3": "JAM"
  },
  "103": {
    "name": "Japan",
    "iso2": "JP",
    "iso3": "JPN"
  },
  "104": {
    "name": "Jersey",
    "iso2": "JE",
    "iso3": "JEY"
  },
  "105": {
    "name": "Jordan",
    "iso2": "JO",
    "iso3": "JOR"
  },
  "106": {
    "name": "Kazakhstan",
    "iso2": "KZ",
    "iso3": "KAZ"
  },
  "107": {
    "name": "Kenya",
    "iso2": "KE",
    "iso3": "KEN"
  },
  "108": {
    "name": "Kiribati",
    "iso2": "KI",
    "iso3": "KIR"
  },
  "109": {
    "name": "Korea, North",
    "iso2": "KP",
    "iso3": "PRK"
  },
  "110": {
    "name": "Korea, South",
    "iso2": "KR",
    "iso3": "KOR"
  },
  "111": {
    "name": "Kosovo",
    "iso2": "XK",
    "iso3": "XKS"
  },
  "112": {
    "name": "Kuwait",
    "iso2": "KW",
    "iso3": "KWT"
  },
  "113": {
    "name": "Kyrgyzstan",
    "iso2": "KG",
    "iso3": "KGZ"
  },
  "114": {
    "name": "Laos",
    "iso2": "LA",
    "iso3": "LAO"
  },
  "115": {
    "name": "Latvia",
    "iso2": "LV",
    "iso3": "LVA"
  },
  "116": {
    "name": "Lebanon",
    "iso2": "LB",
    "iso3": "LBN"
  },
  "117": {
    "name": "Lesotho",
    "iso2": "LS",
    "iso3": "LSO"
  },
  "118": {
    "name": "Liberia",
    "iso2": "LR",
    "iso3": "LBR"
  },
  "119": {
    "name": "Libya",
    "iso2": "LY",
    "iso3": "LBY"
  },
  "120": {
    "name": "Liechtenstein",
    "iso2": "LI",
    "iso3": "LIE"
  },
  "121": {
    "name": "Lithuania",
    "iso2": "LT",
    "iso3": "LTU"
  },
  "122": {
    "name": "Luxembourg",
    "iso2": "LU",
    "iso3": "LUX"
  },
  "123": {
    "name": "Macau",
    "iso2": "MO",
    "iso3": "MAC"
  },
  "124": {
    "name": "Macedonia",
    "iso2": "MK",
    "iso3": "MKD"
  },
  "125": {
    "name": "Madagascar",
    "iso2": "MG",
    "iso3": "MDG"
  },
  "126": {
    "name": "Malawi",
    "iso2": "MW",
    "iso3": "MWI"
  },
  "127": {
    "name": "Malaysia",
    "iso2": "MY",
    "iso3": "MYS"
  },
  "128": {
    "name": "Maldives",
    "iso2": "MV",
    "iso3": "MDV"
  },
  "129": {
    "name": "Mali",
    "iso2": "ML",
    "iso3": "MLI"
  },
  "130": {
    "name": "Malta",
    "iso2": "MT",
    "iso3": "MLT"
  },
  "131": {
    "name": "Marshall Islands",
    "iso2": "MH",
    "iso3": "MHL"
  },
  "132": {
    "name": "Martinique",
    "iso2": "MQ",
    "iso3": "MTQ"
  },
  "133": {
    "name": "Mauritania",
    "iso2": "MR",
    "iso3": "MRT"
  },
  "134": {
    "name": "Mauritius",
    "iso2": "MU",
    "iso3": "MUS"
  },
  "135": {
    "name": "Mayotte",
    "iso2": "YT",
    "iso3": "MYT"
  },
  "136": {
    "name": "Mexico",
    "iso2": "MX",
    "iso3": "MEX"
  },
  "137": {
    "name": "Micronesia, Federated States Of",
    "iso2": "FM",
    "iso3": "FSM"
  },
  "138": {
    "name": "Moldova",
    "iso2": "MD",
    "iso3": "MDA"
  },
  "139": {
    "name": "Monaco",
    "iso2": "MC",
    "iso3": "MCO"
  },
  "140": {
    "name": "Mongolia",
    "iso2": "MN",
    "iso3": "MNG"
  },
  "141": {
    "name": "Montenegro",
    "iso2": "ME",
    "iso3": "MNE"
  },
  "142": {
    "name": "Morocco",
    "iso2": "MA",
    "iso3": "MAR"
  },
  "143": {
    "name": "Mozambique",
    "iso2": "MZ",
    "iso3": "MOZ"
  },
  "144": {
    "name": "Myanmar",
    "iso2": "MM",
    "iso3": "MMR"
  },
  "145": {
    "name": "Namibia",
    "iso2": "NA",
    "iso3": "NAM"
  },
  "146": {
    "name": "Nepal",
    "iso2": "NP",
    "iso3": "NPL"
  },
  "147": {
    "name": "Netherlands",
    "iso2": "NL",
    "iso3": "NLD"
  },
  "148": {
    "name": "New Caledonia",
    "iso2": "NC",
    "iso3": "NCL"
  },
  "149": {
    "name": "New Zealand",
    "iso2": "NZ",
    "iso3": "NZL"
  },
  "150": {
    "name": "Nicaragua",
    "iso2": "NI",
    "iso3": "NIC"
  },
  "151": {
    "name": "Niger",
    "iso2": "NE",
    "iso3": "NER"
  },
  "152": {
    "name": "Nigeria",
    "iso2": "NG",
    "iso3": "NGA"
  },
  "153": {
    "name": "Niue",
    "iso2": "NU",
    "iso3": "NIU"
  },
  "154": {
    "name": "Norfolk Island",
    "iso2": "NF",
    "iso3": "NFK"
  },
  "155": {
    "name": "Northern Mariana Islands",
    "iso2": "MP",
    "iso3": "MNP"
  },
  "156": {
    "name": "Norway",
    "iso2": "NO",
    "iso3": "NOR"
  },
  "157": {
    "name": "Oman",
    "iso2": "OM",
    "iso3": "OMN"
  },
  "158": {
    "name": "Pakistan",
    "iso2": "PK",
    "iso3": "PAK"
  },
  "159": {
    "name": "Palau",
    "iso2": "PW",
    "iso3": "PLW"
  },
  "160": {
    "name": "Panama",
    "iso2": "PA",
    "iso3": "PAN"
  },
  "161": {
    "name": "Papua New Guinea",
    "iso2": "PG",
    "iso3": "PNG"
  },
  "162": {
    "name": "Paraguay",
    "iso2": "PY",
    "iso3": "PRY"
  },
  "163": {
    "name": "Peru",
    "iso2": "PE",
    "iso3": "PER"
  },
  "164": {
    "name": "Philippines",
    "iso2": "PH",
    "iso3": "PHL"
  },
  "165": {
    "name": "Pitcairn Islands",
    "iso2": "PN",
    "iso3": "PCN"
  },
  "166": {
    "name": "Poland",
    "iso2": "PL",
    "iso3": "POL"
  },
  "167": {
    "name": "Portugal",
    "iso2": "PT",
    "iso3": "PRT"
  },
  "168": {
    "name": "Puerto Rico",
    "iso2": "PR",
    "iso3": "PRI"
  },
  "169": {
    "name": "Qatar",
    "iso2": "QA",
    "iso3": "QAT"
  },
  "170": {
    "name": "Reunion",
    "iso2": "RE",
    "iso3": "REU"
  },
  "171": {
    "name": "Romania",
    "iso2": "RO",
    "iso3": "ROU"
  },
  "172": {
    "name": "Russia",
    "iso2": "RU",
    "iso3": "RUS"
  },
  "173": {
    "name": "Rwanda",
    "iso2": "RW",
    "iso3": "RWA"
  },
  "174": {
    "name": "Saint Barthelemy",
    "iso2": "BL",
    "iso3": "BLM"
  },
  "175": {
    "name": "Saint Helena, Ascension, And Tristan Da Cunha",
    "iso2": "SH",
    "iso3": "SHN"
  },
  "176": {
    "name": "Saint Kitts And Nevis",
    "iso2": "KN",
    "iso3": "KNA"
  },
  "177": {
    "name": "Saint Lucia",
    "iso2": "LC",
    "iso3": "LCA"
  },
  "178": {
    "name": "Saint Martin",
    "iso2": "MF",
    "iso3": "MAF"
  },
  "179": {
    "name": "Saint Pierre And Miquelon",
    "iso2": "PM",
    "iso3": "SPM"
  },
  "180": {
    "name": "Saint Vincent And The Grenadines",
    "iso2": "VC",
    "iso3": "VCT"
  },
  "181": {
    "name": "Samoa",
    "iso2": "WS",
    "iso3": "WSM"
  },
  "182": {
    "name": "San Marino",
    "iso2": "SM",
    "iso3": "SMR"
  },
  "183": {
    "name": "Sao Tome And Principe",
    "iso2": "ST",
    "iso3": "STP"
  },
  "184": {
    "name": "Saudi Arabia",
    "iso2": "SA",
    "iso3": "SAU"
  },
  "185": {
    "name": "Senegal",
    "iso2": "SN",
    "iso3": "SEN"
  },
  "186": {
    "name": "Serbia",
    "iso2": "RS",
    "iso3": "SRB"
  },
  "187": {
    "name": "Seychelles",
    "iso2": "SC",
    "iso3": "SYC"
  },
  "188": {
    "name": "Sierra Leone",
    "iso2": "SL",
    "iso3": "SLE"
  },
  "189": {
    "name": "Singapore",
    "iso2": "SG",
    "iso3": "SGP"
  },
  "190": {
    "name": "Sint Maarten",
    "iso2": "SX",
    "iso3": "SXM"
  },
  "191": {
    "name": "Slovakia",
    "iso2": "SK",
    "iso3": "SVK"
  },
  "192": {
    "name": "Slovenia",
    "iso2": "SI",
    "iso3": "SVN"
  },
  "193": {
    "name": "Solomon Islands",
    "iso2": "SB",
    "iso3": "SLB"
  },
  "194": {
    "name": "Somalia",
    "iso2": "SO",
    "iso3": "SOM"
  },
  "195": {
    "name": "South Africa",
    "iso2": "ZA",
    "iso3": "ZAF"
  },
  "196": {
    "name": "South Georgia And South Sandwich Islands",
    "iso2": "GS",
    "iso3": "SGS"
  },
  "197": {
    "name": "South Sudan",
    "iso2": "SS",
    "iso3": "SSD"
  },
  "198": {
    "name": "Spain",
    "iso2": "ES",
    "iso3": "ESP"
  },
  "199": {
    "name": "Sri Lanka",
    "iso2": "LK",
    "iso3": "LKA"
  },
  "200": {
    "name": "Sudan",
    "iso2": "SD",
    "iso3": "SDN"
  },
  "201": {
    "name": "Suriname",
    "iso2": "SR",
    "iso3": "SUR"
  },
  "202": {
    "name": "Svalbard",
    "iso2": "XR",
    "iso3": "XSV"
  },
  "203": {
    "name": "Swaziland",
    "iso2": "SZ",
    "iso3": "SWZ"
  },
  "204": {
    "name": "Sweden",
    "iso2": "SE",
    "iso3": "SWE"
  },
  "205": {
    "name": "Switzerland",
    "iso2": "CH",
    "iso3": "CHE"
  },
  "206": {
    "name": "Syria",
    "iso2": "SY",
    "iso3": "SYR"
  },
  "207": {
    "name": "Taiwan",
    "iso2": "TW",
    "iso3": "TWN"
  },
  "208": {
    "name": "Tajikistan",
    "iso2": "TJ",
    "iso3": "TJK"
  },
  "209": {
    "name": "Tanzania",
    "iso2": "TZ",
    "iso3": "TZA"
  },
  "210": {
    "name": "Thailand",
    "iso2": "TH",
    "iso3": "THA"
  },
  "211": {
    "name": "Timor-Leste",
    "iso2": "TL",
    "iso3": "TLS"
  },
  "212": {
    "name": "Togo",
    "iso2": "TG",
    "iso3": "TGO"
  },
  "213": {
    "name": "Tonga",
    "iso2": "TO",
    "iso3": "TON"
  },
  "214": {
    "name": "Trinidad And Tobago",
    "iso2": "TT",
    "iso3": "TTO"
  },
  "215": {
    "name": "Tunisia",
    "iso2": "TN",
    "iso3": "TUN"
  },
  "216": {
    "name": "Turkey",
    "iso2": "TR",
    "iso3": "TUR"
  },
  "217": {
    "name": "Turkmenistan",
    "iso2": "TM",
    "iso3": "TKM"
  },
  "218": {
    "name": "Turks And Caicos Islands",
    "iso2": "TC",
    "iso3": "TCA"
  },
  "219": {
    "name": "Tuvalu",
    "iso2": "TV",
    "iso3": "TUV"
  },
  "220": {
    "name": "Uganda",
    "iso2": "UG",
    "iso3": "UGA"
  },
  "221": {
    "name": "Ukraine",
    "iso2": "UA",
    "iso3": "UKR"
  },
  "222": {
    "name": "United Arab Emirates",
    "iso2": "AE",
    "iso3": "ARE"
  },
  "223": {
    "name": "United Kingdom",
    "iso2": "GB",
    "iso3": "GBR"
  },
  "224": {
    "name": "United States",
    "iso2": "US",
    "iso3": "USA"
  },
  "225": {
    "name": "Uruguay",
    "iso2": "UY",
    "iso3": "URY"
  },
  "226": {
    "name": "Uzbekistan",
    "iso2": "UZ",
    "iso3": "UZB"
  },
  "227": {
    "name": "Vanuatu",
    "iso2": "VU",
    "iso3": "VUT"
  },
  "228": {
    "name": "Vatican City",
    "iso2": "VA",
    "iso3": "VAT"
  },
  "229": {
    "name": "Venezuela",
    "iso2": "VE",
    "iso3": "VEN"
  },
  "230": {
    "name": "Vietnam",
    "iso2": "VN",
    "iso3": "VNM"
  },
  "231": {
    "name": "Virgin Islands, British",
    "iso2": "VG",
    "iso3": "VGB"
  },
  "232": {
    "name": "Wallis And Futuna",
    "iso2": "WF",
    "iso3": "WLF"
  },
  "233": {
    "name": "West Bank",
    "iso2": "XW",
    "iso3": "XWB"
  },
  "234": {
    "name": "Western Sahara",
    "iso2": "EH",
    "iso3": "ESH"
  },
  "235": {
    "name": "Yemen",
    "iso2": "YE",
    "iso3": "YEM"
  },
  "236": {
    "name": "Zambia",
    "iso2": "ZM",
    "iso3": "ZMB"
  },
  "237": {
    "name": "Zimbabwe",
    "iso2": "ZW",
    "iso3": "ZWE"
  }
}