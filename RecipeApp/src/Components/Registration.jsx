import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const continent = [
    { id: 1, name: 'Africa' },
    { id: 2, name: 'Asia' },
    { id: 3, name: 'Europe' },
    { id: 4, name: 'North America' },
    { id: 5, name: 'Oceania' },
    { id: 6, name: 'South America' },
];

const country = {
    1: [
        { id: 1, name: 'Algeria' },
        { id: 2, name: 'Angola' },
        { id: 3, name: 'Benin' },
        { id: 4, name: 'Botswana' },
        { id: 5, name: 'Burkina Faso' },
        { id: 6, name: 'Burundi' },
        { id: 7, name: 'Cabo Verde' },
        { id: 8, name: 'Cameroon' },
        { id: 9, name: 'Central African Republic' },
        { id: 10, name: 'Chad' },
        { id: 11, name: 'Comoros' },
        { id: 12, name: 'Congo (Congo-Brazzaville)' },
        { id: 13, name: 'Democratic Republic of the Congo' },
        { id: 14, name: 'Djibouti' },
        { id: 15, name: 'Egypt' },
        { id: 16, name: 'Equatorial Guinea' },
        { id: 17, name: 'Eritrea' },
        { id: 18, name: 'Eswatini (fmr. "Swaziland")' },
        { id: 19, name: 'Ethiopia' },
        { id: 20, name: 'Gabon' },
        { id: 21, name: 'Gambia' },
        { id: 22, name: 'Ghana' },
        { id: 23, name: 'Guinea' },
        { id: 24, name: 'Guinea-Bissau' },
        { id: 25, name: 'Ivory Coast' },
        { id: 26, name: 'Kenya' },
        { id: 27, name: 'Lesotho' },
        { id: 28, name: 'Liberia' },
        { id: 29, name: 'Libya' },
        { id: 30, name: 'Madagascar' },
        { id: 31, name: 'Malawi' },
        { id: 32, name: 'Mali' },
        { id: 33, name: 'Mauritania' },
        { id: 34, name: 'Mauritius' },
        { id: 35, name: 'Morocco' },
        { id: 36, name: 'Mozambique' },
        { id: 37, name: 'Namibia' },
        { id: 38, name: 'Niger' },
        { id: 39, name: 'Nigeria' },
        { id: 40, name: 'Rwanda' },
        { id: 41, name: 'Sao Tome and Principe' },
        { id: 42, name: 'Senegal' },
        { id: 43, name: 'Seychelles' },
        { id: 44, name: 'Sierra Leone' },
        { id: 45, name: 'Somalia' },
        { id: 46, name: 'South Africa' },
        { id: 47, name: 'South Sudan' },
        { id: 48, name: 'Sudan' },
        { id: 49, name: 'Tanzania' },
        { id: 50, name: 'Togo' },
        { id: 51, name: 'Tunisia' },
        { id: 52, name: 'Uganda' },
        { id: 53, name: 'Zambia' },
        { id: 54, name: 'Zimbabwe' },
    ],

    2:[
        { id: 55, name: "Afghanistan" },
        { id: 56, name: "Armenia" },
        { id: 57, name: "Azerbaijan" },
        { id: 58, name: "Bahrain" },
        { id: 59, name: "Bangladesh" },
        { id: 60, name: "Bhutan" },
        { id: 61, name: "Brunei" },
        { id: 62, name: "Cambodia" },
        { id: 63, name: "China" },
        { id: 64, name: "Cyprus" },
        { id: 65, name: "Georgia" },
        { id: 66, name: "India" },
        { id: 67, name: "Indonesia" },
        { id: 68, name: "Iran" },
        { id: 69, name: "Iraq" },
        { id: 70, name: "Israel" },
        { id: 71, name: "Japan" },
        { id: 72, name: "Jordan" },
        { id: 73, name: "Kazakhstan" },
        { id: 74, name: "Kuwait" },
        { id: 75, name: "Kyrgyzstan" },
        { id: 76, name: "Laos" },
        { id: 77, name: "Lebanon" },
        { id: 78, name: "Malaysia" },
        { id: 79, name: "Maldives" },
        { id: 80, name: "Mongolia" },
        { id: 81, name: "Myanmar" },
        { id: 82, name: "Nepal" },
        { id: 83, name: "North Korea" },
        { id: 84, name: "Oman" },
        { id: 85, name: "Pakistan" },
        { id: 86, name: "Palestine" },
        { id: 87, name: "Philippines" },
        { id: 88, name: "Qatar" },
        { id: 89, name: "Saudi Arabia" },
        { id: 90, name: "Singapore" },
        { id: 91, name: "South Korea" },
        { id: 92, name: "Sri Lanka" },
        { id: 93, name: "Syria" },
        { id: 94, name: "Taiwan" },
        { id: 95, name: "Tajikistan" },
        { id: 96, name: "Thailand" },
        { id: 97, name: "Timor-Leste" },
        { id: 98, name: "Turkey" },
        { id: 99, name: "Turkmenistan" },
        { id: 100, name: "United Arab Emirates" },
        { id: 101, name: "Uzbekistan" },
        { id: 102, name: "Vietnam" },
        { id: 103, name: "Yemen" }
    ],
    
    3:[
        { id: 104, name: "Albania" },
        { id: 105, name: "Andorra" },
        { id: 106, name: "Armenia" },
        { id: 107, name: "Austria" },
        { id: 108, name: "Azerbaijan" },
        { id: 109, name: "Belarus" },
        { id: 110, name: "Belgium" },
        { id: 111, name: "Bosnia and Herzegovina" },
        { id: 112, name: "Bulgaria" },
        { id: 113, name: "Croatia" },
        { id: 114, name: "Cyprus" },
        { id: 115, name: "Czech Republic" },
        { id: 116, name: "Denmark" },
        { id: 117, name: "Estonia" },
        { id: 118, name: "Finland" },
        { id: 119, name: "France" },
        { id: 120, name: "Georgia" },
        { id: 121, name: "Germany" },
        { id: 122, name: "Greece" },
        { id: 123, name: "Hungary" },
        { id: 124, name: "Iceland" },
        { id: 125, name: "Ireland" },
        { id: 126, name: "Italy" },
        { id: 127, name: "Kazakhstan" },
        { id: 128, name: "Kosovo" },
        { id: 129, name: "Latvia" },
        { id: 130, name: "Liechtenstein" },
        { id: 131, name: "Lithuania" },
        { id: 132, name: "Luxembourg" },
        { id: 133, name: "Malta" },
        { id: 134, name: "Moldova" },
        { id: 135, name: "Monaco" },
        { id: 136, name: "Montenegro" },
        { id: 137, name: "Netherlands" },
        { id: 138, name: "North Macedonia" },
        { id: 139, name: "Norway" },
        { id: 140, name: "Poland" },
        { id: 141, name: "Portugal" },
        { id: 142, name: "Romania" },
        { id: 143, name: "Russia" },
        { id: 144, name: "San Marino" },
        { id: 145, name: "Serbia" },
        { id: 146, name: "Slovakia" },
        { id: 147, name: "Slovenia" },
        { id: 148, name: "Spain" },
        { id: 149, name: "Sweden" },
        { id: 150, name: "Switzerland" },
        { id: 151, name: "Turkey" },
        { id: 152, name: "Ukraine" },
        { id: 153, name: "United Kingdom" },
        { id: 154, name: "Vatican City" }
    ],

    4: [
        { id: 155, name: "Antigua and Barbuda" },
        { id: 156, name: "Bahamas" },
        { id: 157, name: "Barbados" },
        { id: 158, name: "Belize" },
        { id: 159, name: "Canada" },
        { id: 160, name: "Costa Rica" },
        { id: 161, name: "Cuba" },
        { id: 162, name: "Dominica" },
        { id: 163, name: "Dominican Republic" },
        { id: 164, name: "El Salvador" },
        { id: 165, name: "Grenada" },
        { id: 166, name: "Guatemala" },
        { id: 167, name: "Haiti" },
        { id: 168, name: "Honduras" },
        { id: 169, name: "Jamaica" },
        { id: 170, name: "Mexico" },
        { id: 171, name: "Nicaragua" },
        { id: 172, name: "Panama" },
        { id: 173, name: "Saint Kitts and Nevis" },
        { id: 174, name: "Saint Lucia" },
        { id: 175, name: "Saint Vincent and the Grenadines" },
        { id: 176, name: "Trinidad and Tobago" },
        { id: 177, name: "United States" }
    ],
    
    
    5: [
        { id: 178, name: "Australia" },
        { id: 179, name: "Fiji" },
        { id: 180, name: "Kiribati" },
        { id: 181, name: "Marshall Islands" },
        { id: 182, name: "Micronesia" },
        { id: 183, name: "Nauru" },
        { id: 184, name: "New Zealand" },
        { id: 185, name: "Palau" },
        { id: 186, name: "Papua New Guinea" },
        { id: 187, name: "Samoa" },
        { id: 188, name: "Solomon Islands" },
        { id: 189, name: "Tonga" },
        { id: 190, name: "Tuvalu" },
        { id: 191, name: "Vanuatu" }
    ],

    6: [
        { id: 192, name: "Argentina" },
        { id: 193, name: "Bolivia" },
        { id: 194, name: "Brazil" },
        { id: 195, name: "Chile" },
        { id: 196, name: "Colombia" },
        { id: 197, name: "Ecuador" },
        { id: 198, name: "Guyana" },
        { id: 199, name: "Paraguay" },
        { id: 200, name: "Peru" },
        { id: 201, name: "Suriname" },
        { id: 202, name: "Uruguay" },
        { id: 203, name: "Venezuela" }
    ],

};

const language = {
    1: ['Arabic', 'Tamazight', 'French'],
    2: ['Portuguese', 'Bantu languages', 'Kikongo'],
    3: ['French'],
    4: ['English', 'Setswana'],
    5: ['French', 'Mooré'],
    6: ['Kirundi', 'French', 'Swahili'],
    7: ['Portuguese'],
    8: ['English', 'French', 'Fang'],
    9: ['French', 'Sango'],
    10: ['Arabic', 'French'],
    11: ['French', 'Arabic', 'Comorian'],
    12: ['French', 'Lingala', 'Kongo'],
    13: ['French', 'Lingala', 'Kikongo'],
    14: ['French', 'Arabic', 'Somali'],
    15: ['Arabic'],
    16: ['Spanish'],
    17: ['Arabic', 'Tigrinya', 'English'],
    18: ['Swazi', 'English'],
    19: ['Amharic', 'Oromo', 'Tigrinya'],
    20: ['French', 'Fang'],
    21: ['English'],
    22: ['English'],
    23: ['French', 'Fulfulde'],
    24: ['Portuguese', 'Crioulo'],
    25: ['French'],
    26: ['Swahili', 'English'],
    27: ['English', 'Southern Sotho'],
    28: ['English'],
    29: ['Arabic'],
    30: ['Malagasy', 'French'],
    31: ['English', 'Chichewa'],
    32: ['French', 'Bambara'],
    33: ['Arabic'],
    34: ['English', 'French', 'Hindi'],
    35: ['Arabic', 'Berber'],
    36: ['Portuguese'],
    37: ['English'],
    38: ['French', 'Hausa'],
    39: ['English'],
    40: ['Kinyarwanda', 'French', 'English'],
    41: ['Portuguese'],
    42: ['French', 'Wolof'],
    43: ['Seychellois Creole', 'English', 'French'],
    44: ['English'],
    45: ['Somali', 'Arabic'],
    46: ['Zulu', 'Xhosa', 'English'],
    47: ['English'],
    48: ['Arabic', 'English'],
    49: ['Swahili', 'English'],
    50: ['French'],
    51: ['Arabic', 'French'],
    52: ['English', 'Swahili'],
    53: ['English'],
    54: ['English', 'Shona', 'Ndebele'],
    55: ['Pashto', 'Dari'],
    56: ['Armenian'],
    57: ['Azerbaijani'],
    58: ['Arabic'],
    59: ['Bengali'],
    60: ['Dzongkha'],
    61: ['Malay', 'English'],
    62: ['Khmer'],
    63: ['Mandarin'],
    64: ['Greek'],
    65: ['Georgian'],
    66: ['Hindi', 'English'],
    67: ['Indonesian'],
    68: ['Persian'],
    69: ['Arabic', 'Kurdish'],
    70: ['Hebrew'],
    71: ['Japanese'],
    72: ['Arabic'],
    73: ['Kazakh'],
    74: ['Arabic'],
    75: ['Kyrgyz', 'Russian'],
    76: ['Lao'],
    77: ['Arabic', 'French'],
    78: ['Malay', 'English', 'Chinese'],
    79: ['Dhivehi'],
    80: ['Mongolian'],
    81: ['Burmese'],
    82: ['Nepali'],
    83: ['Korean'],
    84: ['Arabic'],
    85: ['Urdu', 'English'],
    86: ['Arabic'],
    87: ['Filipino', 'English'],
    88: ['Arabic'],
    89: ['Arabic'],
    90: ['English', 'Malay', 'Tamil'],
    91: ['Korean'],
    92: ['Sinhala', 'Tamil'],
    93: ['Arabic'],
    94: ['Mandarin'],
    95: ['Tajik', 'Russian'],
    96: ['Thai'],
    97: ['Tetum', 'Portuguese'],
    98: ['Turkish'],
    99: ['Turkmen'],
    100: ['Arabic'],
    101: ['Uzbek'],
    102: ['Vietnamese'],
    103: ['Arabic'],
    104: ['Albanian'],
    105: ['Catalan'],
    106: ['Armenian'],
    107: ['German', 'Hungarian', 'Austrian'],
    108: ['Azerbaijani'],
    109: ['Belarusian', 'Russian'],
    110: ['Dutch', 'French', 'German'],
    111: ['Bosnian', 'Croatian', 'Serbian'],
    112: ['Bulgarian'],
    113: ['Croatian'],
    114: ['Greek', 'Turkish'],
    115: ['Czech'],
    116: ['Danish'],
    117: ['Estonian'],
    118: ['Finnish', 'Swedish'],
    119: ['French'],
    120: ['Georgian'],
    121: ['German'],
    122: ['Greek'],
    123: ['Hungarian'],
    124: ['Icelandic'],
    125: ['Irish', 'English'],
    126: ['Italian'],
    127: ['Kazakh', 'Russian'],
    128: ['Albanian', 'Serbian'],
    129: ['Latvian'],
    130: ['German'],
    131: ['Lithuanian'],
    132: ['Luxembourgish', 'French', 'German'],
    133: ['Maltese', 'English'],
    134: ['Romanian', 'Russian'],
    135: ['French'],
    136: ['Montenegrin', 'Serbian'],
    137: ['Dutch'],
    138: ['Macedonian'],
    139: ['Norwegian'],
    140: ['Polish'],
    141: ['Portuguese'],
    142: ['Romanian'],
    143: ['Russian'],
    144: ['Italian'],
    145: ['Serbian'],
    146: ['Slovak'],
    147: ['Slovene'],
    148: ['Spanish'],
    149: ['Swedish'],
    150: ['German', 'French', 'Italian', 'Romansh'],
    151: ['Turkish'],
    152: ['Ukrainian', 'Russian'],
    153: ['English'],
    154: ['Italian', 'Latin'],
    155: ['English'],
    156: ['English'],
    157: ['English'],
    158: ['English'],
    159: ['English', 'French'],
    160: ['Spanish'],
    161: ['Spanish'],
    162: ['English'],
    163: ['Spanish'],
    164: ['Spanish'],
    165: ['English'],
    166: ['Spanish'],
    167: ['French', 'Haitian Creole'],
    168: ['Spanish'],
    169: ['English'],
    170: ['Spanish'],
    171: ['Spanish'],
    172: ['Spanish'],
    173: ['English'],
    174: ['English'],
    175: ['English'],
    176: ['English'],
    177: ['English'],
    178: ['English'],
    179: ['English', 'Fijian', 'Hindi'],
    180: ['English', 'Gilbertese'],
    181: ['English', 'Marshallese'],
    182: ['English'],
    183: ['English', 'Nauruan'],
    184: ['English', 'Māori'],
    185: ['English'],
    186: ['English', 'Tok Pisin', 'Hiri Motu'],
    187: ['English', 'Samoan'],
    188: ['English'],
    189: ['English', 'Tongan'],
    190: ['English', 'Tuvaluan'],
    191: ['English', 'Bislama'],
    192: ['Spanish'],
    193: ['Spanish', 'Quechua', 'Aymara'],
    194: ['Portuguese'],
    195: ['Spanish'],
    196: ['Spanish'],
    197: ['Spanish'],
    198: ['English'],
    199: ['Spanish', 'Guaraní'],
    200: ['Spanish', 'Quechua', 'Aymara'],
    201: ['Dutch'],
    202: ['Spanish'],
    203: ['Spanish']
};



function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedContinent, setSelectedContinent] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/auth/register', { username, password, continent, country, language })
            .then(result => {
                navigate('/auth/login');
                console.log(result);
            })
            .catch(err => console.log(err));
    };

    const handleContinentChange = (e) => {
        setSelectedContinent(e.target.value);
        setSelectedCountry('');
        setSelectedLanguage('');
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedLanguage('');
    };

    const handleSearchChange = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filtered = countries[selectedContinent]?.filter(country =>
            country.name.toLowerCase().includes(searchQuery)
        );
        setFilteredCountries(filtered);
    };

    const countriesToDisplay = filteredCountries.length > 0 ? filteredCountries : countries[selectedContinent];

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 login'>
            <div className='login-wrapper'>
            <div className='p-3  w-100 login-wrapper-scroll' style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                <h3>Registration</h3>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username" className='form-label'>Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder='Enter Username'
                            className='form-control'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder='Enter Password'
                            className='form-control'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="continent" className='form-label'>Continent</label>
                        <select
                            id="continent"
                            className='form-control'
                            onChange={handleContinentChange}
                            value={selectedContinent}
                            required
                        >
                            <option value="">Select Continent</option>
                            {continents.map(continent => (
                                <option key={continent.id} value={continent.id}>{continent.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="search" className='form-label'>Search Country</label>
                        <input
                            type="text"
                            id="search"
                            placeholder='Search Country By Name'
                            className='form-control'
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="country" className='form-label'>Country</label>
                        <select
                            id="country"
                            className='form-control'
                            onChange={handleCountryChange}
                            value={selectedCountry}
                            required
                            disabled={!selectedContinent}
                        >
                            <option value="">Select Country</option>
                            {countriesToDisplay?.slice(0, 5).map(country => (
                                <option key={country.id} value={country.id}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="language" className='form-label'>Language</label>
                        <select
                            id="language"
                            className='form-control'
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            value={selectedLanguage}
                            required
                            disabled={!selectedCountry}
                        >
                            <option value="">Select Language</option>
                            {selectedCountry && languages[selectedCountry]?.map((language, index) => (
                                <option key={index} value={language}>{language}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className='btn btn-success w-100 mt-3'>Submit</button>
                    <p className='mt-3'>Do you have an Account?</p>
                    <Link to='/auth/login'>
                        <button type="button" className='btn btn-outline-success text-white w-100 mt-2.5'>Login</button>
                    </Link>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Registration;




{/*---------------*************************************************************----------------------*/}

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const continents = [
//     { id: 1, name: 'Africa' },
//     { id: 2, name: 'Asia' },
//     { id: 3, name: 'Europe' },
//     { id: 4, name: 'North America' },
//     { id: 5, name: 'Oceania' },
//     { id: 6, name: 'South America' },
// ];

// const countries = {
//     1: [
//         { id: 1, name: 'Algeria' },
//         { id: 2, name: 'Angola' },
//         { id: 3, name: 'Benin' },
//         { id: 4, name: 'Botswana' },
//         { id: 5, name: 'Burkina Faso' },
//         { id: 6, name: 'Burundi' },
//         { id: 7, name: 'Cabo Verde' },
//         { id: 8, name: 'Cameroon' },
//         { id: 9, name: 'Central African Republic' },
//         { id: 10, name: 'Chad' },
//         { id: 11, name: 'Comoros' },
//         { id: 12, name: 'Congo (Congo-Brazzaville)' },
//         { id: 13, name: 'Democratic Republic of the Congo' },
//         { id: 14, name: 'Djibouti' },
//         { id: 15, name: 'Egypt' },
//         { id: 16, name: 'Equatorial Guinea' },
//         { id: 17, name: 'Eritrea' },
//         { id: 18, name: 'Eswatini (fmr. "Swaziland")' },
//         { id: 19, name: 'Ethiopia' },
//         { id: 20, name: 'Gabon' },
//         { id: 21, name: 'Gambia' },
//         { id: 22, name: 'Ghana' },
//         { id: 23, name: 'Guinea' },
//         { id: 24, name: 'Guinea-Bissau' },
//         { id: 25, name: 'Ivory Coast' },
//         { id: 26, name: 'Kenya' },
//         { id: 27, name: 'Lesotho' },
//         { id: 28, name: 'Liberia' },
//         { id: 29, name: 'Libya' },
//         { id: 30, name: 'Madagascar' },
//         { id: 31, name: 'Malawi' },
//         { id: 32, name: 'Mali' },
//         { id: 33, name: 'Mauritania' },
//         { id: 34, name: 'Mauritius' },
//         { id: 35, name: 'Morocco' },
//         { id: 36, name: 'Mozambique' },
//         { id: 37, name: 'Namibia' },
//         { id: 38, name: 'Niger' },
//         { id: 39, name: 'Nigeria' },
//         { id: 40, name: 'Rwanda' },
//         { id: 41, name: 'Sao Tome and Principe' },
//         { id: 42, name: 'Senegal' },
//         { id: 43, name: 'Seychelles' },
//         { id: 44, name: 'Sierra Leone' },
//         { id: 45, name: 'Somalia' },
//         { id: 46, name: 'South Africa' },
//         { id: 47, name: 'South Sudan' },
//         { id: 48, name: 'Sudan' },
//         { id: 49, name: 'Tanzania' },
//         { id: 50, name: 'Togo' },
//         { id: 51, name: 'Tunisia' },
//         { id: 52, name: 'Uganda' },
//         { id: 53, name: 'Zambia' },
//         { id: 54, name: 'Zimbabwe' },
//     ],
//     2: [
//         { id: 5, name: 'China' },
//         { id: 6, name: 'India' },
//         { id: 7, name: 'Japan' },
//         { id: 8, name: 'South Korea' },
//     ],
//     3: [
//         { id: 9, name: 'Germany' },
//         { id: 10, name: 'France' },
//         { id: 11, name: 'United Kingdom' },
//         { id: 12, name: 'Italy' },
//     ],
//     4: [
//         { id: 13, name: 'United States' },
//         { id: 14, name: 'Canada' },
//         { id: 15, name: 'Mexico' },
//     ],
//     5: [
//         { id: 16, name: 'Australia' },
//         { id: 17, name: 'New Zealand' },
//         { id: 18, name: 'Fiji' },
//     ],
//     6: [
//         { id: 19, name: 'Brazil' },
//         { id: 20, name: 'Argentina' },
//         { id: 21, name: 'Chile' },
//     ],
// };

// const languages = {
//     1: ['Swahili', 'English'],
//     2: ['English', 'Hausa'],
//     3: ['Afrikaans', 'Zulu'],
//     4: ['Arabic', 'English'],
//     5: ['Mandarin', 'Cantonese'],
//     6: ['Hindi', 'English'],
//     7: ['Japanese'],
//     8: ['Korean'],
//     9: ['German', 'English'],
//     10: ['French', 'English'],
//     11: ['English'],
//     12: ['Italian', 'English'],
//     13: ['English', 'Spanish'],
//     14: ['English', 'French'],
//     15: ['Spanish'],
//     16: ['English'],
//     17: ['English', 'Maori'],
//     18: ['Fijian', 'Hindi'],
//     19: ['Portuguese'],
//     20: ['Spanish'],
//     21: ['Spanish'],
// };

// function Registration() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [selectedContinent, setSelectedContinent] = useState('');
//     const [selectedCountry, setSelectedCountry] = useState('');
//     const [selectedLanguage, setSelectedLanguage] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3001/auth/register', { username, password, selectedCountry, selectedLanguage })
//             .then(result => {
//                 navigate('/auth/login');
//                 console.log(result);
//             })
//             .catch(err => console.log(err));
//     };

//     const handleContinentChange = (e) => {
//         setSelectedContinent(e.target.value);
//         setSelectedCountry('');
//         setSelectedLanguage('');
//     };

//     const handleCountryChange = (e) => {
//         setSelectedCountry(e.target.value);
//         setSelectedLanguage('');
//     };

//     return (
//         <div className='d-flex justify-content-center align-items-center vh-100'>
//             <div className='p-3 border border-1 w-25'>
//                 <h3>Registration</h3>
//                 <form onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <label htmlFor="username" className='form-label'>Username</label>
//                         <input
//                             type="text"
//                             id="username"
//                             placeholder='Enter Username'
//                             className='form-control'
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="password" className='form-label'>Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             placeholder='Enter Password'
//                             className='form-control'
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="continent" className='form-label'>Continent</label>
//                         <select
//                             id="continent"
//                             className='form-control'
//                             onChange={handleContinentChange}
//                             value={selectedContinent}
//                             required
//                         >
//                             <option value="">Select Continent</option>
//                             {continents.map(continent => (
//                                 <option key={continent.id} value={continent.id}>{continent.name}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="country" className='form-label'>Country</label>
//                         <select
//                             id="country"
//                             className='form-control'
//                             onChange={handleCountryChange}
//                             value={selectedCountry}
//                             required
//                             disabled={!selectedContinent}
//                         >
//                             <option value="">Select Country</option>
//                             {selectedContinent && countries[selectedContinent]?.slice(0, 5).map(country => (
//                                 <option key={country.id} value={country.id}>{country.name}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="country" className='form-label'>Country</label>
//                         <select
//                             id="country"
//                             className='form-control'
//                             onChange={handleCountryChange}
//                             value={selectedCountry}
//                             required
//                             disabled={!selectedContinent}
//                         >
//                             <option value="">Select Country</option>
//                             {countriesToDisplay?.slice(0, 5).map(country => (
//                                 <option key={country.id} value={country.id}>{country.name}</option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className='mb-3'>
//                         <label htmlFor="language" className='form-label'>Language</label>
//                         <select
//                             id="language"
//                             className='form-control'
//                             onChange={(e) => setSelectedLanguage(e.target.value)}
//                             value={selectedLanguage}
//                             required
//                             disabled={!selectedCountry}
//                         >
//                             <option value="">Select Language</option>
                            // {selectedCountry && languages[selectedCountry]?.map((language, index) => (
                            //     <option key={index} value={language}>{language}</option>
                            // ))}
//                         </select>
//                     </div>
//                     <button type="submit" className='btn btn-success w-100 mt-3'>Submit</button>
//                     <p className='mt-3'>Do you have an Account?</p>
//                     <Link to='/auth/login'>
//                         <button type="button" className='btn btn-default w-100 mt-2.5'>Login</button>
//                     </Link>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Registration;



// {/*---------------------------------------------------------------------------------------------*/}

// // import React, { useState } from 'react'
// // import 'bootstrap/dist/css/bootstrap.min.css'
// // import axios from 'axios'
// // import { Link, useNavigate } from 'react-router-dom'

// // function Registration() {
// //     const [username, setUsername] = useState('')
// //     const [password, setPassword] = useState('')
// //     const navigate = useNavigate()

// //     // const handleSubmit = (e) => {
// //     //     e.preventDefault()
// //     //     axios.post('/http://localhost:3001/auth/register', {username, password})
// //     //         .then(result => {
// //     //             console.log(result)
// //     //         }).catch(err => console.log(err))
        
// //     // }

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         axios.post('http://localhost:3001/auth/register', { username, password })
// //             .then(result => {
// //                 navigate('/auth/login')
// //                 console.log(result)
// //             })
// //             .catch(err => console.log(err));
// //     }

// //   return (
    // <div className='d-flex justify-content-center align-items-center vh-100'>
    //     <div className='p-3 border border-1 w-25'>
    //         <h3>Registration</h3>
    //         <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label htmlFor="username">Username</label>
    //                 <input type="text" placeholder='Enter Username' className='form-control'
    //                 onChange={(e) => setUsername(e.target.value)}/>
    //             </div>
    //             <div>
    //                 <label htmlFor="password">Password</label>
    //                 <input type="password" placeholder='Enter Password' className='form-control' 
    //                 onChange={(e) => setPassword(e.target.value)}/>
    //             </div>
    //             <button className='btn btn-success w-100 mt-3'>Submit</button>
    //             <p className='mt-3'>Do you have an Account?</p>
    //             <Link to='/auth/login'> <button className='btn btn-default w-100 mt-2.5'>Login</button> </Link>
    //         </form>
    //     </div>
    // </div>
// //   )
// // }

// // export default Registration