import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  areaList: Array<any>;
  claimList: Array<any>;
  yearList: Array<any>;
  criteria: Array<any>;
  countryList: Array<any>;
  gomList: Array<any>;
  usLoc: Array<any>;
  ratingArea: Array<any>;
  wellTypes: Array<any>;
  status: Array<any>;
  ugbo: Array<any>;
  depthCategories: Array<any>;
  category: Array<any>;
  subCat: Array<any>;
  subCat2: Array<any>;
  lossType: Array<any>;
  causes: Array<any>;
  events: Array<any>;
  selectedYears = [];
  allYears = [];
  singleSelectedYears = [];
  selectedDecades70 = []
  selectedDecades80 = []
  selectedDecades90 = []
  selectedDecades2000 = []
  selectedDecades2010 = []
  selectionFlag = true;
  car: Array<any>;
  udp: Array<any>;
  isYear: boolean = false;
  isLocation: boolean = false;
  isLoss: boolean = false;
  isClaim: boolean = false;
  isWell: boolean = false;
  isCostCat: boolean = false;
  isSummaryHidden: boolean = false;
  /******* ngModel*/
  areasSelected: Array<any> = [];
  selectedAreaNames: Array<any> = [];
  countriesSelected: Array<any> = [];
  selectedCountriesNames: Array<any> = [];
  gomSelected: Array<any> = [];
  selectedGomNames: Array<any> = [];
  usLocSelected: Array<any> = [];
  selectedUsLocNames: Array<any> = [];
  location: string = "";
  radio: string = "";
  categorySelected: Array<any> = [];
  selectedCategoryNames: Array<any> = [];
  subCategorySelected: Array<any> = [];
  selectedSubCategoryNames: Array<any> = [];
  subCategory2Selected: Array<any> = [];
  selectedSubCategory2Names: Array<any> = [];
  lossTypeSelected: Array<any> = [];
  selectedLossTypesNames: Array<any> = [];
  causesSelected: Array<any> = [];
  selectedCausesNames: Array<any> = [];
  eventSelected: Array<any> = [];
  selectedEventNames: Array<any> = [];
  carSelected: Array<any> = [];
  selectedCarNames: Array<any> = [];
  udpSelected: Array<any> = [];
  selectedUdpNames: Array<any> = [];
  PDMin: any;
  OEEmin: any;
  BImin: any;
  Totalmin: any;
  TotalIndexedmin: any;
  PDmax: any;
  OEEmax: any;
  BImax: any;
  Totalmax: any;
  TotalIndexedmax: any;
  ratingareaSelected: Array<any> = [];
  selectedRatingareaNames: Array<any> = [];
  wellTypeSelected: Array<any> = [];
  selectedWellTypeNames: Array<any> = [];
  drillingSelected: Array<any> = [];
  selectedDrillingStatusNames: Array<any> = [];
  ugboSelected: Array<any> = [];
  selectedUgboNames: Array<any> = [];
  depthCatSelected: Array<any> = [];
  selectedDepthCategoriesNames: Array<any> = [];
  ptdMin;
  ptdMax;
  pdClaimActualSelected: Array<any> = [];
  selectedPdClaimActualNames: Array<any> = [];
  oeeClaimActualSelected: Array<any> = [];
  selectedOeClaimActualNames: Array<any> = [];
  totalClaimActualSelected: Array<any> = [];
  selectedTotalClaimActualNames: Array<any> = [];
  pdClaimIndexedSelected: Array<any> = [];
  selectedPdClaimIndexedNames: Array<any> = [];
  oeClaimIndexedSelected: Array<any> = [];
  selectedOeClaimIndexedNames: Array<any> = [];
  totalClaimIndexedSelected: Array<any> = [];
  selectedTotalClaimIndexedNames: Array<any> = [];
  select70: boolean;
  select80: boolean;
  select90: boolean;
  select2000: boolean;
  select2010: boolean;
  isShowSuccess: boolean
  length: number;
  isHide: boolean = false;
  constructor(private _router: Router) {

    this.car = [
      { name: 'Either', code: 'All' },
      { name: 'Car', code: 'car' },
      { name: 'Idle', code: 'idle' },
      { name: 'Maint', code: 'maint' },
      { name: 'OP', code: 'op' },
      { name: 'Su/d', code: 'sud' },
      { name: 'T&C', code: 'tc' },

    ]

    this.udp = [
      { name: 'All UP/DOWN/', code: 'All' },
      { name: 'Down Stream', code: 'ds' },
      { name: 'Power', code: 'power' },
      { name: 'Up Stream', code: 'us' }
    ]
    this.events = [
      { name: 'All Events', code: 'All' },
      { name: 'Hurricane Alex', code: 'Alex' },
      { name: ' Hurricane Alicia', code: 'Alicia' },
      { name: 'Hurricane Allen', code: 'Allen' },
      { name: ' Hurricane Andrew', code: 'Andrew' },
      { name: 'Hurricane Bonnie', code: 'Bonnie' },
      { name: 'Hurricane Carmen', code: 'Carmen' },
      { name: 'Hurricane Danny', code: 'Danny' },
      { name: 'Hurricane Dean', code: 'Dean' },
      { name: 'Hurricane Dennis', code: 'Dennis' },
      { name: 'Hurricane Dolly', code: 'Dolly' },
      { name: 'Hurricane Earl', code: 'Earl' },
      { name: 'Hurricane Eloise', code: 'Eloise' },
      { name: 'Hurricane Florence', code: 'Florence' },
      { name: 'Hurricane Floyd', code: 'Floyd' },
      { name: 'Hurricane Georges', code: 'Georges' },
      { name: 'Hurricane Gert', code: 'Gert' },
      { name: 'Hurricane Gilbert', code: 'Gilbert' },
    ]
    this.causes = [
      { name: 'All Causes', code: 'All' },
      { name: 'Anchor/Jacking', code: 'Anchor' },
      { name: 'Blowout', code: 'Blowout' },
      { name: 'Capsize', code: 'Capsize' },
      { name: 'Collapse', code: 'Collapse' },
      { name: 'Collision', code: 'Collision' },
      { name: 'Contamination', code: 'Contamination' },
      { name: 'Corrosion', code: 'Corrosion' },
      { name: 'Drive Off', code: 'Drive Off' },
      { name: 'Earthquake', code: 'Earthquake' },
      { name: 'Explosion no fire', code: 'Explosion' },
      { name: 'Fire', code: 'Fire' },
      { name: 'Faulty Design', code: 'Faulty Design' },
      { name: 'Flood', code: 'Flood' },
      { name: 'Ice/snow', code: 'Ice/snow' },
      { name: 'Heavy Weather', code: 'Heavy' },
    ]

    this.lossType = [
      { name: 'All Loss Types', code: 'All' },
      { name: 'BI', code: 'AC' },
      { name: 'BI,LIAB', code: 'BI' },
      { name: 'CBI', code: 'CBI' },
      { name: 'OEE', code: 'OEE' },
      { name: 'OEE ,BI', code: 'OB' },
      { name: 'PD,BI', code: 'PD' },
      { name: 'PD,Bi,LIAB', code: 'PBL' },
      { name: 'PD,BI,OEEE', code: 'PBO' },
    ]
    this.subCat2 = [
      { name: 'All SubCategory 2', code: 'All' },
      { name: 'Adhesives', code: 'Adhesives' },
      { name: 'Alernator', code: 'Alernator' },
      { name: 'Ammonia', code: 'Ammonia' },
      { name: 'Ash Handling', code: 'Ash Handling' },
      { name: 'Balance of Plant', code: 'Balance' },
      { name: 'Ballast tanks', code: 'Ballast' },
      { name: 'Biodiesel', code: 'Biodiesel' },
      { name: 'Biogas', code: 'Biogas' },
      { name: 'Boiler', code: 'Boiler' },
      { name: 'Buoy', code: 'Buoy' },
      { name: 'Cable', code: 'Cable' },
      { name: 'Chloride', code: 'Chloride' },
      { name: 'Coker', code: 'Coker' },
      { name: 'Compressor', code: 'Compressor' },
      { name: 'Condenser', code: 'Condenser' },
    ]


    this.subCat = [
      { name: 'All SubCategory', code: 'All' },
      { name: 'Aromatics', code: 'Aromatics' },
      { name: 'Biomass', code: 'Biomass' },
      { name: 'Cable', code: 'Cable' },
      { name: 'CALM', code: 'CALM' },
      { name: 'Camp(workers)', code: 'Camp' },
      { name: 'Coal', code: 'Coal' },
      { name: 'Cofferdam', code: 'Cofferdam' },
      { name: 'Cracker', code: 'Cracker' },
      { name: 'Crane/pipe', code: 'Crane/pip' },
      { name: 'Crude Unit', code: 'Crude Unit' },
      { name: 'Disel/Oil', code: 'disel/Oil' },
      { name: 'EFW', code: 'EFW' },
      { name: 'Explosives', code: 'Explosives' },
      { name: 'Factory/Warehouse', code: 'Factory/Warehouse' },
    ]


    this.depthCategories = [
      { name: 'All Types', value: 'All' },
      { name: '0-4999', value: '0-4999' },
      { name: '5000-9999', value: '5000-9999' },
      { name: '10000-19999', value: '10000-19999' }
    ]

    this.category = [
      { name: 'All Category', code: 'All' },
      { name: 'Chemical', code: 'Chemical' },
      { name: 'Gas Plant', code: 'Gas Plant' },
      { name: 'DMOPU', code: 'DMOPU' },
      { name: 'Oil Sands', code: 'Oil Sands' },
      { name: 'Petrochemical', code: 'Petrochemical' },
      { name: 'Pipeline', code: 'Pipeline' },
      { name: 'Platform', code: 'Platform' },
      { name: 'Power Nuclear', code: 'Power Nuclear' },
      { name: 'Power Other', code: 'Power Other' },
      { name: 'Power Substation', code: '' },
      { name: 'Power T&D', code: 'Power T&D' },
      { name: 'Power Thermal', code: 'Power Thermal' },
      { name: 'Refinery', code: 'Refinery' },
    ]
    this.ugbo = [
      { name: 'Either', value: 'All' },
      { name: 'Y', value: 'yes' },
      { name: 'N', value: 'no' }
    ]
    this.status = [
      { name: 'All Status', code: 'All' },
      { name: 'Abandoned', code: 'Abandoned' },
      { name: 'Completion', code: 'Completion' },
      { name: 'Drilling', code: 'Drilling' },
      { name: 'Plugging', code: 'Plugging' },
      { name: 'Producing', code: 'Producing' },
      { name: 'Shut in', code: 'Shutin' },
      { name: 'Work Over', code: 'WorkOver' },
    ]
    this.ratingArea = [
      { area: 'All Areas', value: 'All' },
      { area: 1, value: 1 },
      { area: 2, value: 2 },
      { area: 3, value: 3 },
      { area: 4, value: 4 },
      { area: 5, value: 5 }
    ]

    this.wellTypes = [
      { name: 'All Types', value: 'All' },
      { name: 'Oil', value: 'oil' },
      { name: 'O&G', value: 'ong' },
      { name: 'Sulph', value: 'sulph' },
      { name: 'Water', value: 'water' },
      { name: 'Gas', value: 'gas' }
    ]
    this.usLoc = [
      { name: 'All US Loc Code', code: 'All' },
      { name: 'E-NM', code: 'EN' },
      { name: 'N-LOUIS', code: 'NL' },
      { name: 'S-LOUIS', code: 'SL' },
      { name: 'TRRC1', code: 'TRRC1' },
      { name: 'TRRC10', code: 'TRRC10' },
      { name: 'TRRC2', code: 'TRRC2' },
      { name: 'TRRC3', code: 'TRRC3' },
      { name: 'TRRC4', code: 'TRRC4' },
      { name: 'TRRC5', code: 'TRRC5' },
      { name: 'TRRC6', code: 'TRRC6' },
      { name: 'TRRC7B', code: 'TRRC7B' },
      { name: 'TRRC7C', code: 'TRRC7C' },
      { name: 'TRRC8', code: 'TRRC8' },
      { name: 'TRRC8A', code: 'TRRC8A' },
      { name: 'TRRC9', code: 'TRRC9' },
    ]
    this.gomList = [
      { name: 'All GOM Areas', code: 'All' },
      { name: 'Alaminos Canyon', code: 'AC' },
      { name: 'Atwater Valley', code: 'AV' },
      { name: 'Bay Marchand', code: 'BM' },
      { name: 'Brazos', code: 'BR' },
      { name: 'Breton Sound', code: 'BS' },
      { name: 'Chandeleur', code: 'CH' },
      { name: 'Desoto Canyon', code: 'DC' },
      { name: 'East Breaks', code: 'EB' },
      { name: 'East Cameron', code: 'EC' },
      { name: 'Eugen Island', code: 'EI' },
      { name: 'Ewing Banks', code: 'EB' },
      { name: 'Gelveston', code: 'GE' },
      { name: 'Garden Banks', code: 'GB' },
      { name: 'Grand Isle', code: 'GI' },
      { name: 'Green Canyon', code: 'GC' },
      { name: 'High Island', code: 'HI' },
      { name: 'Main Pass', code: 'MP' },
      { name: 'Ship Shoal', code: 'SS' },
      { name: 'South Pass', code: 'SP' },
      { name: 'Sabian Pass', code: 'SPP' },
      { name: 'South Timbalier', code: 'ST' },
      { name: 'Vermilion', code: 'VR' },
      { name: 'West Camereon', code: 'WC' },
      { name: 'West Delta', code: 'WD' }
    ]
    this.countryList = [
      { name: 'All Countries', code: 'All' },
      { name: 'Africa', code: 'AF' },
      { name: 'Åland Islands', code: 'AX' },
      { name: 'Albania', code: 'AL' },
      { name: 'Algeria', code: 'DZ' },
      { name: 'American Samoa', code: 'AS' },
      { name: 'AndorrA', code: 'AD' },
      { name: 'Angola', code: 'AO' },
      { name: 'Anguilla', code: 'AI' },
      { name: 'Antarctica', code: 'AQ' },
      { name: 'Antigua and Barbuda', code: 'AG' },
      { name: 'Argentina', code: 'AR' },
      { name: 'Armenia', code: 'AM' },
      { name: 'Aruba', code: 'AW' },
      { name: 'Australia', code: 'AU' },
      { name: 'Austria', code: 'AT' },
      { name: 'Azerbaijan', code: 'AZ' },
      { name: 'Bahamas', code: 'BS' },
      { name: 'Bahrain', code: 'BH' },
      { name: 'Bangladesh', code: 'BD' },
      { name: 'Barbados', code: 'BB' },
      { name: 'Belarus', code: 'BY' },
      { name: 'Belgium', code: 'BE' },
      { name: 'Belize', code: 'BZ' },
      { name: 'Benin', code: 'BJ' },
      { name: 'Bermuda', code: 'BM' },
      { name: 'Bhutan', code: 'BT' },
      { name: 'Bolivia', code: 'BO' },
      { name: 'Bosnia and Herzegovina', code: 'BA' },
      { name: 'Botswana', code: 'BW' },
      { name: 'Bouvet Island', code: 'BV' },
      { name: 'Brazil', code: 'BR' },
      { name: 'British Indian Ocean Territory', code: 'IO' },
      { name: 'Brunei Darussalam', code: 'BN' },
      { name: 'Bulgaria', code: 'BG' },
      { name: 'Burkina Faso', code: 'BF' },
      { name: 'Burundi', code: 'BI' },
      { name: 'Cambodia', code: 'KH' },
      { name: 'Cameroon', code: 'CM' },
      { name: 'Canada', code: 'CA' },
      { name: 'Cape Verde', code: 'CV' },
      { name: 'Cayman Islands', code: 'KY' },
      { name: 'Central African Republic', code: 'CF' },
      { name: 'Chad', code: 'TD' },
      { name: 'Chile', code: 'CL' },
      { name: 'China', code: 'CN' },
      { name: 'Christmas Island', code: 'CX' },
      { name: 'Cocos (Keeling) Islands', code: 'CC' },
      { name: 'Colombia', code: 'CO' },
      { name: 'Comoros', code: 'KM' },
      { name: 'Congo', code: 'CG' },
      { name: 'Congo, The Democratic Republic of the', code: 'CD' },
      { name: 'Cook Islands', code: 'CK' },
      { name: 'Costa Rica', code: 'CR' },
      { name: 'Cote D\'Ivoire', code: 'CI' },
      { name: 'Croatia', code: 'HR' },
      { name: 'Cuba', code: 'CU' },
      { name: 'Cyprus', code: 'CY' },
      { name: 'Czech Republic', code: 'CZ' },
      { name: 'Denmark', code: 'DK' },
      { name: 'Djibouti', code: 'DJ' },
      { name: 'Dominica', code: 'DM' },
      { name: 'Dominican Republic', code: 'DO' },
      { name: 'Ecuador', code: 'EC' },
      { name: 'Egypt', code: 'EG' },
      { name: 'El Salvador', code: 'SV' },
      { name: 'Equatorial Guinea', code: 'GQ' },
      { name: 'Eritrea', code: 'ER' },
      { name: 'Estonia', code: 'EE' },
      { name: 'Ethiopia', code: 'ET' },
      { name: 'Falkland Islands (Malvinas)', code: 'FK' },
      { name: 'Faroe Islands', code: 'FO' },
      { name: 'Fiji', code: 'FJ' },
      { name: 'Finland', code: 'FI' },
      { name: 'France', code: 'FR' },
      { name: 'French Guiana', code: 'GF' },
      { name: 'French Polynesia', code: 'PF' },
      { name: 'French Southern Territories', code: 'TF' },
      { name: 'Gabon', code: 'GA' },
      { name: 'Gambia', code: 'GM' },
      { name: 'Georgia', code: 'GE' },
      { name: 'Germany', code: 'DE' },
      { name: 'Ghana', code: 'GH' },
      { name: 'Gibraltar', code: 'GI' },
      { name: 'Greece', code: 'GR' },
      { name: 'Greenland', code: 'GL' },
      { name: 'Grenada', code: 'GD' },
      { name: 'Guadeloupe', code: 'GP' },
      { name: 'Guam', code: 'GU' },
      { name: 'Guatemala', code: 'GT' },
      { name: 'Guernsey', code: 'GG' },
      { name: 'Guinea', code: 'GN' },
      { name: 'Guinea-Bissau', code: 'GW' },
      { name: 'Guyana', code: 'GY' },
      { name: 'Haiti', code: 'HT' },
      { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
      { name: 'Holy See (Vatican City State)', code: 'VA' },
      { name: 'Honduras', code: 'HN' },
      { name: 'Hong Kong', code: 'HK' },
      { name: 'Hungary', code: 'HU' },
      { name: 'Iceland', code: 'IS' },
      { name: 'India', code: 'IN' },
      { name: 'Indonesia', code: 'ID' },
      { name: 'Iran, Islamic Republic Of', code: 'IR' },
      { name: 'Iraq', code: 'IQ' },
      { name: 'Ireland', code: 'IE' },
      { name: 'Isle of Man', code: 'IM' },
      { name: 'Israel', code: 'IL' },
      { name: 'Italy', code: 'IT' },
      { name: 'Jamaica', code: 'JM' },
      { name: 'Japan', code: 'JP' },
      { name: 'Jersey', code: 'JE' },
      { name: 'Jordan', code: 'JO' },
      { name: 'Kazakhstan', code: 'KZ' },
      { name: 'Kenya', code: 'KE' },
      { name: 'Kiribati', code: 'KI' },
      { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
      { name: 'Korea, Republic of', code: 'KR' },
      { name: 'Kuwait', code: 'KW' },
      { name: 'Kyrgyzstan', code: 'KG' },
      { name: 'Lao People\'S Democratic Republic', code: 'LA' },
      { name: 'Latvia', code: 'LV' },
      { name: 'Lebanon', code: 'LB' },
      { name: 'Lesotho', code: 'LS' },
      { name: 'Liberia', code: 'LR' },
      { name: 'Libyan Arab Jamahiriya', code: 'LY' },
      { name: 'Liechtenstein', code: 'LI' },
      { name: 'Lithuania', code: 'LT' },
      { name: 'Luxembourg', code: 'LU' },
      { name: 'Macao', code: 'MO' },
      { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
      { name: 'Madagascar', code: 'MG' },
      { name: 'Malawi', code: 'MW' },
      { name: 'Malaysia', code: 'MY' },
      { name: 'Maldives', code: 'MV' },
      { name: 'Mali', code: 'ML' },
      { name: 'Malta', code: 'MT' },
      { name: 'Marshall Islands', code: 'MH' },
      { name: 'Martinique', code: 'MQ' },
      { name: 'Mauritania', code: 'MR' },
      { name: 'Mauritius', code: 'MU' },
      { name: 'Mayotte', code: 'YT' },
      { name: 'Mexico', code: 'MX' },
      { name: 'Micronesia, Federated States of', code: 'FM' },
      { name: 'Moldova, Republic of', code: 'MD' },
      { name: 'Monaco', code: 'MC' },
      { name: 'Mongolia', code: 'MN' },
      { name: 'Montserrat', code: 'MS' },
      { name: 'Morocco', code: 'MA' },
      { name: 'Mozambique', code: 'MZ' },
      { name: 'Myanmar', code: 'MM' },
      { name: 'Namibia', code: 'NA' },
      { name: 'Nauru', code: 'NR' },
      { name: 'Nepal', code: 'NP' },
      { name: 'Netherlands', code: 'NL' },
      { name: 'Netherlands Antilles', code: 'AN' },
      { name: 'New Caledonia', code: 'NC' },
      { name: 'New Zealand', code: 'NZ' },
      { name: 'Nicaragua', code: 'NI' },
      { name: 'Niger', code: 'NE' },
      { name: 'Nigeria', code: 'NG' },
      { name: 'Niue', code: 'NU' },
      { name: 'Norfolk Island', code: 'NF' },
      { name: 'Northern Mariana Islands', code: 'MP' },
      { name: 'Norway', code: 'NO' },
      { name: 'Oman', code: 'OM' },
      { name: 'Pakistan', code: 'PK' },
      { name: 'Palau', code: 'PW' },
      { name: 'Palestinian Territory, Occupied', code: 'PS' },
      { name: 'Panama', code: 'PA' },
      { name: 'Papua New Guinea', code: 'PG' },
      { name: 'Paraguay', code: 'PY' },
      { name: 'Peru', code: 'PE' },
      { name: 'Philippines', code: 'PH' },
      { name: 'Pitcairn', code: 'PN' },
      { name: 'Poland', code: 'PL' },
      { name: 'Portugal', code: 'PT' },
      { name: 'Puerto Rico', code: 'PR' },
      { name: 'Qatar', code: 'QA' },
      { name: 'Reunion', code: 'RE' },
      { name: 'Romania', code: 'RO' },
      { name: 'Russian Federation', code: 'RU' },
      { name: 'RWANDA', code: 'RW' },
      { name: 'Saint Helena', code: 'SH' },
      { name: 'Saint Kitts and Nevis', code: 'KN' },
      { name: 'Saint Lucia', code: 'LC' },
      { name: 'Saint Pierre and Miquelon', code: 'PM' },
      { name: 'Saint Vincent and the Grenadines', code: 'VC' },
      { name: 'Samoa', code: 'WS' },
      { name: 'San Marino', code: 'SM' },
      { name: 'Sao Tome and Principe', code: 'ST' },
      { name: 'Saudi Arabia', code: 'SA' },
      { name: 'Senegal', code: 'SN' },
      { name: 'Serbia and Montenegro', code: 'CS' },
      { name: 'Seychelles', code: 'SC' },
      { name: 'Sierra Leone', code: 'SL' },
      { name: 'Singapore', code: 'SG' },
      { name: 'Slovakia', code: 'SK' },
      { name: 'Slovenia', code: 'SI' },
      { name: 'Solomon Islands', code: 'SB' },
      { name: 'Somalia', code: 'SO' },
      { name: 'South Africa', code: 'ZA' },
      { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
      { name: 'Spain', code: 'ES' },
      { name: 'Sri Lanka', code: 'LK' },
      { name: 'Sudan', code: 'SD' },
      { name: 'Suriname', code: 'SR' },
      { name: 'Svalbard and Jan Mayen', code: 'SJ' },
      { name: 'Swaziland', code: 'SZ' },
      { name: 'Sweden', code: 'SE' },
      { name: 'Switzerland', code: 'CH' },
      { name: 'Syrian Arab Republic', code: 'SY' },
      { name: 'Taiwan, Province of China', code: 'TW' },
      { name: 'Tajikistan', code: 'TJ' },
      { name: 'Tanzania, United Republic of', code: 'TZ' },
      { name: 'Thailand', code: 'TH' },
      { name: 'Timor-Leste', code: 'TL' },
      { name: 'Togo', code: 'TG' },
      { name: 'Tokelau', code: 'TK' },
      { name: 'Tonga', code: 'TO' },
      { name: 'Trinidad and Tobago', code: 'TT' },
      { name: 'Tunisia', code: 'TN' },
      { name: 'Turkey', code: 'TR' },
      { name: 'Turkmenistan', code: 'TM' },
      { name: 'Turks and Caicos Islands', code: 'TC' },
      { name: 'Tuvalu', code: 'TV' },
      { name: 'Uganda', code: 'UG' },
      { name: 'Ukraine', code: 'UA' },
      { name: 'United Arab Emirates', code: 'AE' },
      { name: 'United Kingdom', code: 'GB' },
      { name: 'United States', code: 'US' },
      { name: 'United States Minor Outlying Islands', code: 'UM' },
      { name: 'Uruguay', code: 'UY' },
      { name: 'Uzbekistan', code: 'UZ' },
      { name: 'Vanuatu', code: 'VU' },
      { name: 'Venezuela', code: 'VE' },
      { name: 'Viet Nam', code: 'VN' },
      { name: 'Virgin Islands, British', code: 'VG' },
      { name: 'Virgin Islands, U.S.', code: 'VI' },
      { name: 'Wallis and Futuna', code: 'WF' },
      { name: 'Western Sahara', code: 'EH' },
      { name: 'Yemen', code: 'YE' },
      { name: 'Zambia', code: 'ZM' },
      { name: 'Zimbabwe', code: 'ZW' }
    ]
    this.yearList = [
      { value: 1972 },
      { value: 1973 },
      { value: 1974 },
      { value: 1975 },
      { value: 1976 },
      { value: 1977 },
      { value: 2011 },
      { value: 2017 },
      { value: 2018 },
      { value: 1972 },
      { value: 1973 },
      { value: 1974 },
      { value: 1975 },
      { value: 1976 },
      { value: 1977 },
      { value: 2011 },
      { value: 2017 },
      { value: 2018 },
      { value: 1972 },
      { value: 1973 },
      { value: 1974 },
      { value: 1975 },
      { value: 1976 },
      { value: 1977 },
      { value: 2011 },
      { value: 2017 },
      { value: 2018 },
      { value: 1972 },
      { value: 1973 },
      { value: 1974 },
      { value: 1975 },
      { value: 1976 },
      { value: 1977 },
      { value: 2011 },
      { value: 2017 },
      { value: 2018 }
    ];
    this.claimList = [
      { name: 'All Categories', value: 'All' },
      { value: '$1 - 2.5M' },
      { value: '$2.5 - 5M' },
      { value: '$5 - 10M' },
      { value: '$10 - 15M' },
      { value: '$15 - 20M' },
      { value: '$20 - 30M' },
      { value: '$30 - 40M' },
      { value: '$40 - 50M' },
      { value: '$50 - 100M' },
    ];
    this.areaList = [
      { name: 'All Areas', code: 'All' },
      { name: 'Africa', code: 'AF' },
      { name: 'Australasia', code: 'AU' },
      { name: 'Caribbean', code: 'CB' },
      { name: 'Eastern Europe', code: 'EE' },
      { name: 'Europe', code: 'EU' },
      { name: 'Far East', code: 'FE' },
      { name: 'Middle East', code: 'ME' },
      { name: 'North America', code: 'NA' },
      { name: 'South America', code: 'SA' }
    ]
  }

  ngOnInit() {
    var mySelection = [];
    $("#table td").click(function () {
      $(this).toggleClass('selected');
      var value = $(this).html();
    });
    this.select70 = true;
    this.select80 = true;
    this.select90 = true;
    this.select2000 = true;
    this.select2010 = true;
    this.radio = "either";
    // this.allSelect=this.areasSelected[0];
    this.areasSelected = ['All'];
    this.countriesSelected = ['All'];
    this.gomSelected = ['All'];
    this.usLocSelected = ['All'];
    this.pdClaimActualSelected = ['All'];
    this.oeeClaimActualSelected = ['All'];
    this.totalClaimActualSelected = ['All'];
    this.pdClaimIndexedSelected = ['All'];
    this.oeClaimIndexedSelected = ['All'];
    this.totalClaimIndexedSelected = ['All'];
    this.depthCatSelected = ['All'];
    this.ugboSelected = ['All'];
    this.drillingSelected = ['All'];
    this.wellTypeSelected = ['All'];
    this.ratingareaSelected = ['All'];
    this.eventSelected = ['All'];
    this.udpSelected = ['All'];
    this.drillingSelected = ['All'];
    this.causesSelected = ['All'];
    this.lossTypeSelected = ['All'];
    this.carSelected = ['All'];
    this.subCategory2Selected = ['All'];
    this.categorySelected = ['All'];
    this.subCategorySelected = ['All'];
    this.isYear = true;
    this.isLocation = true;
    this.isClaim = true;
    this.isWell = true;
    this.isCostCat = true;
    this.isLoss = true
    this.isShowSuccess = false;
    this.isSummaryHidden = false;
    this.isHide = false;
  }

  // click(){
  //   var count=$(".details").length;
  //   if(count==0){
  //     this.active('year')
  //   }
  // console.log(count)
  // }


  // year of loss selection starts here
  singleSelect() {
    var selected = [];
    $("#table td.selected").each(function () {
      selected.push($(this).html());

    });

    this.singleSelectedYears = selected;
    this.isSummaryHidden = false;
    this.isHide = false;
  }

  selectAll() {
    var selected = [];
    $("#table td").each(function () {
      selected.push($(this).html());
      $(this).removeClass('selected');
      $(this).toggleClass('selected');
    });
    this.allYears = selected;
    this.selectionFlag = false;
    selected = [];
  }

  deselectAll() {
    var selected = [];
    $("#table td").each(function () {
      selected.push($(this).html());
      $(this).removeClass('selected');
    });
    this.selectionFlag = true;
    this.selectedYears = [];

  }
  locationContinue() {
    this.active("loss");
    if (this.areasSelected[0] == 'All') {
      this.selectedAreaNames.push('All Areas')
    } else this.updateArea(this.areasSelected);
    if (this.countriesSelected[0] == 'All') {
      this.selectedCountriesNames.push('All Countries')
    } else this.updateCountries(this.countriesSelected);
    if (this.gomSelected[0] == 'All') {
      this.selectedGomNames.push('All GOM Areas')
    } else this.updateGOM(this.gomSelected);
    if (this.usLocSelected[0] == 'All') {
      this.selectedUsLocNames.push('All US Location Code')
    } else this.updateUsLoc(this.usLocSelected);
  }
  continueLossDetails() {
    this.active("claim");
    if (this.categorySelected[0] == 'All') {
      this.selectedCategoryNames.push('All Category')
    } else
      this.updateCategory(this.categorySelected);

    if (this.subCategorySelected[0] == 'All') {
      this.selectedSubCategoryNames.push('All SubCategory')
    } else
      this.updateSubCategory(this.subCategorySelected);

    if (this.subCategory2Selected[0] == 'All') {
      this.selectedSubCategory2Names.push('All SubCategory2')
    } else
      this.updateSubCategory2(this.subCategory2Selected);

    if (this.lossTypeSelected[0] == 'All') {
      this.selectedLossTypesNames.push('All Loss Types')
    } else
      this.updateLossTypes(this.lossTypeSelected);

    if (this.causesSelected[0] == 'All') {
      this.selectedCausesNames.push('All Causes')
    } else
      this.updateCauses(this.causesSelected);

    if (this.eventSelected[0] == 'All') {
      this.selectedEventNames.push('All Events')
    } else
      this.updateEvent(this.eventSelected);

    if (this.carSelected[0] == 'All') {
      this.selectedCarNames.push('Either')
    } else
      this.updateCar(this.carSelected);

    if (this.udpSelected[0] == 'All') {
      this.selectedUdpNames.push('All UP/DOWN/POWER')
    } else
      this.updateUDP(this.udpSelected)
  }
  continueWell() {
    this.selectedPdClaimActualNames.push('All');
    this.selectedPdClaimIndexedNames.push('All');
    this.selectedOeClaimIndexedNames.push('All');
    this.selectedOeClaimActualNames.push('All');
    this.selectedTotalClaimActualNames.push('All');
    this.selectedTotalClaimIndexedNames.push('All');
    this.active("cost");
    if (this.ratingareaSelected[0] == 'All') {
      this.selectedRatingareaNames.push('All Areas')
    } else
      this.updateRatingArea(this.ratingareaSelected);

    if (this.wellTypeSelected[0] == 'All') {
      this.selectedWellTypeNames.push('All Types')
    } else
      this.updateWellTypes(this.wellTypeSelected);

    if (this.drillingSelected[0] == 'All') {
      this.selectedDrillingStatusNames.push('All Status')
    } else
      this.updateDrillingStatus(this.drillingSelected);

    if (this.ugboSelected[0] == 'All') {
      this.selectedUgboNames.push('Either')
    } else
      this.updateUGBO(this.ugboSelected);

    if (this.depthCatSelected[0] == 'All') {
      this.selectedDepthCategoriesNames.push('All Types')
    } else
      this.updateDepthCategories(this.depthCatSelected)
  }
  summaryDetails() {
    this.selectedYears = this.allYears;
    this.selectedYears = this.singleSelectedYears;
    this.isSummaryHidden = false;
    this.isHide = false
  }


  // closing Whole row and reset values in tab starts here

  checkPannelContent() {
    var x = document.querySelectorAll(".margin-bottom");
    this.length = x.length
    this.length = this.length - 1;
    if (this.length == 0) {
      this.isHide = true;
      this.active('year')
    }

  }


  closeYearofLoss() {
    this.checkPannelContent();
    var ele = $("#yearoflossSummary");
    ele.remove();
    this.deselectAll();
    this.isYear = false;
  }

  resetLocation() {
    this.areasSelected = ['All'];
    this.countriesSelected = ['All'];
    this.gomSelected = ['All'];
    this.location = "";
    this.usLocSelected = ['All'];
    this.radio = "either";
    this.selectedAreaNames = [];
    this.selectedCountriesNames = [];
    this.selectedGomNames = [];
    this.selectedUsLocNames =[];
  }

  closeLocation() {
    this.checkPannelContent();
    var ele = $("#locationSummary");
    ele.remove();
    this.resetLocation();
    this.isLocation = false;
  }

  resetLossDetails() {
    this.categorySelected = ['All'];
    this.subCategorySelected = ['All'];
    this.subCategory2Selected = ['All'];
    this.lossTypeSelected = ['All'];
    this.carSelected = ['All'];
    this.causesSelected = ['All'];
    this.udpSelected = ['All'];
    this.eventSelected = ['All'];
    this.selectedCategoryNames =[];
    this.selectedSubCategoryNames =[];
    this.selectedSubCategory2Names = [];
    this.selectedLossTypesNames = [];
    this.selectedCarNames = [];
    this.selectedCausesNames = [];
    this.selectedUdpNames = [];
    this.selectedEventNames = [];
  }

  closeLossDetails() {
    this.checkPannelContent();
    var ele = $("#lossDetailsSummary");
    ele.remove();
    this.resetLossDetails();
    this.isLoss = false;
  }

  resetClaims() {
    this.PDMin = ""
    this.OEEmin = ""
    this.BImin = ""
    this.Totalmin = ""
    this.TotalIndexedmin = ""
    this.PDmax = ""
    this.OEEmax = ""
    this.BImax = ""
    this.Totalmax = ""
    this.TotalIndexedmax = ""
  }

  closeClaims() {
    this.checkPannelContent();
    var ele = $("#claimsSummary");
    ele.remove();
    this.resetClaims();
    this.isClaim = false;
  }


  resetWellDetails() {
    this.ratingareaSelected = ['All'];
    this.wellTypeSelected = ['All'];
    this.drillingSelected = ['All'];
    this.ugboSelected = ['All'];
    this.depthCatSelected = ['All'];
    this.ptdMin = "";
    this.ptdMax = "";
    this.selectedRatingareaNames = [];
    this.selectedWellTypeNames = [];
    this.selectedDrillingStatusNames = [];
    this.selectedUgboNames = [];
    this.selectedDepthCategoriesNames = [];
  }

  closeWellDetails() {
    this.checkPannelContent();
    var ele = $("#wellDetailsSummary");
    ele.remove();
    this.resetWellDetails();
    this.isWell = false;
  }

  resetCostCat() {
    this.pdClaimActualSelected = ['All'];
    this.oeeClaimActualSelected = ['All'];
    this.totalClaimActualSelected = ['All'];
    this.pdClaimIndexedSelected = ['All'];
    this.oeClaimIndexedSelected = ['All'];
    this.totalClaimIndexedSelected = ['All'];
    this.selectedPdClaimActualNames = [];
    this.selectedOeClaimIndexedNames = [];
    this.selectedTotalClaimActualNames = [];
    this.selectedPdClaimIndexedNames = [];
    this.selectedOeClaimActualNames = [];
    this.selectedTotalClaimIndexedNames =[];

  }

  closeCostCat() {
    this.checkPannelContent();
    var ele = $("#costCatSummary");
    ele.remove();
    this.resetCostCat();
    this.isCostCat = false;
  }
  // closing Whole row and reset values in tab ends here

  ngAfterViewInit() {


  }

  active(tab: string) {
    // this.singleSelect();
    switch (tab) {
      case 'year':
        $('#yeartab').addClass('active');
        $('#locationtab').removeClass('active');
        $('#losstab').removeClass('active');
        $('#claimtab').removeClass('active');
        $('#welltab').removeClass('active');
        $('#costtab').removeClass('active');
        $('#year').addClass('in').addClass('active');
        $('#location').removeClass('in').removeClass('active');
        $('#loss').removeClass('in').removeClass('active');
        $('#claim').removeClass('in').removeClass('active');
        $('#well').removeClass('in').removeClass('active');
        $('#cost').removeClass('in').removeClass('active');
        break;
      case 'location':
        $('#yeartab').removeClass('active');
        $('#locationtab').addClass('active');
        $('#losstab').removeClass('active');
        $('#claimtab').removeClass('active');
        $('#welltab').removeClass('active');
        $('#costtab').removeClass('active');
        $('#location').addClass('in').addClass('active');
        $('#year').removeClass('in').removeClass('active');
        $('#loss').removeClass('in').removeClass('active');
        $('#claim').removeClass('in').removeClass('active');
        $('#well').removeClass('in').removeClass('active');
        $('#cost').removeClass('in').removeClass('active');
        break;
      case 'loss':
        $('#yeartab').removeClass('active');
        $('#locationtab').removeClass('active');
        $('#losstab').addClass('active');
        $('#claimtab').removeClass('active');
        $('#welltab').removeClass('active');
        $('#costtab').removeClass('active');
        $('#loss').addClass('in').addClass('active');
        $('#year').removeClass('in').removeClass('active');
        $('#location').removeClass('in').removeClass('active');
        $('#claim').removeClass('in').removeClass('active');
        $('#well').removeClass('in').removeClass('active');
        $('#cost').removeClass('in').removeClass('active');
        break;
      case 'claim':
        $('#yeartab').removeClass('active');
        $('#locationtab').removeClass('active');
        $('#losstab').removeClass('active');
        $('#claimtab').addClass('active');
        $('#welltab').removeClass('active');
        $('#costtab').removeClass('active');
        $('#claim').addClass('in').addClass('active');
        $('#year').removeClass('in').removeClass('active');
        $('#loss').removeClass('in').removeClass('active');
        $('#location').removeClass('in').removeClass('active');
        $('#well').removeClass('in').removeClass('active');
        $('#cost').removeClass('in').removeClass('active');
        break;
      case 'well':
        $('#yeartab').removeClass('active');
        $('#locationtab').removeClass('active');
        $('#losstab').removeClass('active');
        $('#claimtab').removeClass('active');
        $('#welltab').addClass('active');
        $('#costtab').removeClass('active');
        $('#well').addClass('in').addClass('active');
        $('#year').removeClass('in').removeClass('active');
        $('#loss').removeClass('in').removeClass('active');
        $('#claim').removeClass('in').removeClass('active');
        $('#location').removeClass('in').removeClass('active');
        $('#cost').removeClass('in').removeClass('active');
        break;
      case 'cost':
        $('#yeartab').removeClass('active');
        $('#locationtab').removeClass('active');
        $('#losstab').removeClass('active');
        $('#claimtab').removeClass('active');
        $('#welltab').removeClass('active');
        $('#costtab').addClass('active');
        $('#cost').addClass('in').addClass('active');
        $('#year').removeClass('in').removeClass('active');
        $('#loss').removeClass('in').removeClass('active');
        $('#claim').removeClass('in').removeClass('active');
        $('#well').removeClass('in').removeClass('active');
        $('#location').removeClass('in').removeClass('active');
        break;
    }
  }
  reset() {
    this.isShowSuccess = false;
    this.resetLocation()
    this.resetClaims();
    this.resetCostCat();
    this.resetLossDetails();
    this.resetWellDetails();
    this.closeLocation();
    this.closeLossDetails();
    this.closeClaims();
    this.closeWellDetails();
    this.deselectAll();
    this.closeCostCat();
    this.active('year');
    this.isSummaryHidden = true;
    this.isHide = true;
    this.select70Decade2();
    this.select80Decade2();
    this.select90Decade2();
    this.select2000Decade2();
    this.select2010Decade2();
    // $('.active-button-class').removeClass('inactive-button-class');
  }

  // binding dropdowns to summary tab starts here
  updateArea(val) {
    var areas = Array.apply(null, val);
    this.areaList.forEach(area => {
      for (let i = 0; i < areas.length; i++) {
        if (areas[i] === area.code && area.code !== 'All') {
          if (this.selectedAreaNames.indexOf(area.name) == -1) {
            this.selectedAreaNames.push(area.name)
          }
        }
      }
    });


  }

  updateCountries(val) {

    var countries = Array.apply(null, val);
    this.countryList.forEach(c => {
      for (let i = 0; i < countries.length; i++) {
        if (countries[i] === c.code && c.code !== 'All') {
          if (this.selectedCountriesNames.indexOf(c.name) == -1) {
            this.selectedCountriesNames.push(c.name);
          }
        }

      }
    })

  }

  updateGOM(val) {
    var gom = Array.apply(null, val);
    this.gomList.forEach(g => {
      for (let i = 0; i < gom.length; i++) {
        if (gom[i] === g.code && g.code !== 'All') {
          if (this.selectedGomNames.indexOf(g.name) == -1) {
            this.selectedGomNames.push(g.name)
          }
        }
      }
    })
  }

  updateUsLoc(val) {
    var us = Array.apply(null, val);
    this.usLoc.forEach(u => {
      for (let i = 0; i < us.length; i++) {
        if (us[i] === u.code && u.code !== 'All') {
          if (this.selectedUsLocNames.indexOf(u.name) == -1) {
            this.selectedUsLocNames.push(u.name)
          }
        }
      }
    })
  }

  updateCategory(val) {
    var cat = Array.apply(null, val);
    this.category.forEach(c => {
      for (let i = 0; i < cat.length; i++) {
        if (cat[i] === c.code && c.code !== 'All') {
          if (this.selectedCategoryNames.indexOf(c.name) == -1) {
            this.selectedCategoryNames.push(c.name)
          }
        }
      }
    })
  }

  updateSubCategory(val) {
    var scat = Array.apply(null, val);
    this.subCat.forEach(sc => {
      for (let i = 0; i < scat.length; i++) {
        if (scat[i] === sc.code && sc.code !== 'All') {
          if (this.selectedSubCategoryNames.indexOf(sc.name) == -1) {
            this.selectedSubCategoryNames.push(sc.name)
          }
        }
      }
    })
  }

  updateSubCategory2(val) {
    var scat2 = Array.apply(null, val);
    this.subCat2.forEach(sc2 => {
      for (let i = 0; i < scat2.length; i++) {
        if (scat2[i] === sc2.code && sc2.code !== 'All') {
          if (this.selectedSubCategory2Names.indexOf(sc2.name) == -1) {
            this.selectedSubCategory2Names.push(sc2.name)
          }
        }
      }
    })
  }

  updateLossTypes(val) {
    var loss = Array.apply(null, val);
    this.lossType.forEach(lt => {
      for (let i = 0; i < loss.length; i++) {
        if (loss[i] === lt.code && lt.code !== 'All') {
          if (this.selectedLossTypesNames.indexOf(lt.name) == -1) {
            this.selectedLossTypesNames.push(lt.name)
          }
        }
      }
    })
  }

  updateCauses(val) {
    var cause = Array.apply(null, val);
    this.causes.forEach(cs => {
      for (let i = 0; i < cause.length; i++) {
        if (cause[i] === cs.code && cs.code !== 'All') {
          if (this.selectedCausesNames.indexOf(cs.name) == -1) {
            this.selectedCausesNames.push(cs.name)
          }
        }
      }
    })
  }

  updateEvent(val) {
    var event = Array.apply(null, val);
    this.events.forEach(ev => {
      for (let i = 0; i < event.length; i++) {
        if (event[i] === ev.code && ev.code !== 'All') {
          if (this.selectedEventNames.indexOf(ev.name) == -1) {
            this.selectedEventNames.push(ev.name)
          }
        }
      }
    })
  }

  updateCar(val) {
    var cars = Array.apply(null, val);
    this.car.forEach(c => {
      for (let i = 0; i < cars.length; i++) {
        if (cars[i] === c.code && c.code !== 'All') {
          if (this.selectedCarNames.indexOf(c.name) == -1) {
            this.selectedCarNames.push(c.name)
          }
        }
      }
    })
  }

  updateUDP(val) {
    var udps = Array.apply(null, val);
    this.udp.forEach(u => {
      for (let i = 0; i < udps.length; i++) {
        if (udps[i] === u.code && u.code !== 'All') {
          if (this.selectedUdpNames.indexOf(u.name) == -1) {
            this.selectedUdpNames.push(u.name)
          }
        }
      }
    })
  }

  updateRatingArea(val) {
    var rating = Array.apply(null, val);
    this.ratingArea.forEach(r => {
      for (let i = 0; i < rating.length; i++) {
        if (rating[i] === r.value && r.value !== 'All') {
          if (this.selectedRatingareaNames.indexOf(r.name) == -1) {
            this.selectedRatingareaNames.push(r.area)
          }
        }
      }
    })
  }

  updateWellTypes(val) {
    var well = Array.apply(null, val);
    this.wellTypes.forEach(w => {
      for (let i = 0; i < well.length; i++) {
        if (well[i] === w.value && w.value !== 'All') {
          if (this.selectedWellTypeNames.indexOf(w.name) == -1) {
            this.selectedWellTypeNames.push(w.name)
          }
        }
      }
    })
  }


  updateDrillingStatus(val) {
    var drill = Array.apply(null, val);
    this.status.forEach(w => {
      for (let i = 0; i < drill.length; i++) {
        if (drill[i] === w.code && w.code !== 'All') {
          if (this.selectedDrillingStatusNames.indexOf(w.name) == -1) {
            this.selectedDrillingStatusNames.push(w.name)
          }
        }
      }
    })
  }

  updateUGBO(val) {
    var ugbos = Array.apply(null, val);
    this.ugbo.forEach(w => {
      for (let i = 0; i < ugbos.length; i++) {
        if (ugbos[i] === w.value && w.value !== 'All') {
          if (this.selectedUgboNames.indexOf(w.name) == -1) {
            this.selectedUgboNames.push(w.name)
          }
        }
      }
    })
  }

  updateDepthCategories(val) {
    var depth = Array.apply(null, val);
    this.depthCategories.forEach(w => {
      for (let i = 0; i < depth.length; i++) {
        if (depth[i] === w.value && w.value !== 'All') {
          if (this.selectedDepthCategoriesNames.indexOf(w.name) == -1) {
            this.selectedDepthCategoriesNames.push(w.name)
          }
        }
      }
    })
  }

  updatePdClaimActual(val) {
    this.selectedPdClaimActualNames =[];
    var pdactual = Array.apply(null, val);
    this.claimList.forEach(w => {
      for (let i = 0; i < pdactual.length; i++) {
        if (pdactual[i] === w.value && w.value !== 'All') {
          if (this.selectedPdClaimActualNames.indexOf(w.name) == -1) {
            this.selectedPdClaimActualNames.push(w.value)
          }
        }
      }
    })

  }

  updateOeClaimActual(val) {
    this.selectedOeClaimActualNames =[];
    var oeactual = Array.apply(null, val);
    this.claimList.forEach(w => {
      for (let i = 0; i < oeactual.length; i++) {
        if (oeactual[i] === w.value && w.code !== 'All') {
          if (this.selectedOeClaimActualNames.indexOf(w.name) == -1) {
            this.selectedOeClaimActualNames.push(w.value)
          }
        }
      }
    })

  }

  updateTotalClaimActual(val) {
    this.selectedTotalClaimActualNames = [];
    var totalactual = Array.apply(null, val);
    this.claimList.forEach(w => {
      for (let i = 0; i < totalactual.length; i++) {
        if (totalactual[i] === w.value && w.code !== 'All') {
          if (this.selectedTotalClaimActualNames.indexOf(w.name) == -1) {
            this.selectedTotalClaimActualNames.push(w.value)
          }
        }
      }
    })

  }

  updatePdClaimIndexed(val) {
    this.selectedPdClaimIndexedNames = [];
    var pindx = Array.apply(null, val);
    this.claimList.forEach(w => {
      for (let i = 0; i < pindx.length; i++) {
        if (pindx[i] === w.value && w.code !== 'All') {
          if (this.selectedPdClaimIndexedNames.indexOf(w.name) == -1) {
            this.selectedPdClaimIndexedNames.push(w.value)
          }
        }
      }
    })

  }

  updateOeClaimIndexed(val) {
    this.selectedOeClaimIndexedNames =[];
    var oeindx = Array.apply(null, val);
    this.claimList.forEach(w => {
      for (let i = 0; i < oeindx.length; i++) {
        if (oeindx[i] === w.value && w.code !== 'All') {
          if (this.selectedOeClaimIndexedNames.indexOf(w.name) == -1) {
            this.selectedOeClaimIndexedNames.push(w.value)
          }
        }
      }
    })

  }

  updateTotalClaimIndexed(val) {
    this.selectedTotalClaimIndexedNames = [];
    var tindx = Array.apply(null, val);
    this.claimList.forEach(w => {
      for (let i = 0; i < tindx.length; i++) {
        if (tindx[i] === w.value && w.code !== 'All') {
          if (this.selectedTotalClaimIndexedNames.indexOf(w.name) == -1) {
            this.selectedTotalClaimIndexedNames.push(w.value)
          }
        }
      }
    })

  }

  //  binding dropdowns to summary tab ends here

  // decade selection starts here
  select70Decade() {
    this.select70 = false;

    var selected = [];
    $("#70 td:nth-child(n+4)").each(function () {
      // $('#70 td:not(:nth-child(1)),p:not(:nth-child(2))').each(function () {
      selected.push($(this).html());
      $(this).removeClass('selected');
      $(this).toggleClass('selected');
    });

    this.selectedDecades70 = selected;
    // this.selectionFlag = false;
    selected = [];
  }
  select70Decade2() {
    this.select70 = true;
    var selected = [];
    $("#table td").each(function () {
      selected.push($(this).html());
      $(this).removeClass('selected');
    });
    this.selectionFlag = true;
    this.selectedDecades70 = [];
  }

  openSearchModal() {
    document.getElementById("searchModal").click();
  }
  saveSearchCriteria() {
    document.getElementById("saveCriteriaModal").click();
  }
  saveCriteria() {
    document.getElementById("saveCriteriaModal").click();
  }
  openSummary() {
    document.getElementById("summaryHeading").click();
    // this.active('location');
  }


  showSaveMessage() {
    this.isShowSuccess = true;
  }
  navigateToReportsPage() {
    this._router.navigateByUrl('/home');
  }



  select80Decade() {
    this.select80 = false;
    var selected80 = [];
    $("#80 td:not(:first-child)").each(function () {
      selected80.push($(this).html());
      $(this).removeClass('selected');
      $(this).toggleClass('selected');
    });
    this.selectedDecades80 = selected80;
    selected80 = [];
  }
  select80Decade2() {
    this.select80 = true;
    var selected80 = [];
    $("#80 td").each(function () {
      selected80.push($(this).html());
      $(this).removeClass('selected');
    });
    this.selectionFlag = true;
    this.selectedDecades80 = [];
  }

  select90Decade() {
    this.select90 = false;
    var selected90 = [];
    $("#90 td:not(:first-child)").each(function () {
      selected90.push($(this).html());
      $(this).removeClass('selected');
      $(this).toggleClass('selected');
    });
    this.selectedDecades90 = selected90;
    selected90 = [];
  }
  select90Decade2() {
    this.select90 = true;
    var selected90 = [];
    $("#90 td").each(function () {
      selected90.push($(this).html());
      $(this).removeClass('selected');
    });
    this.selectionFlag = true;
    this.selectedDecades90 = [];
  }
  select2000Decade() {
    this.select2000 = false;
    var selected2000 = [];
    $("#2000 td:not(:first-child)").each(function () {
      selected2000.push($(this).html());
      $(this).removeClass('selected');
      $(this).toggleClass('selected');
    });
    this.selectedDecades2000 = selected2000;
    selected2000 = [];
  }
  select2000Decade2() {
    this.select2000 = true;
    var selected2000 = [];
    $("#2000 td").each(function () {
      selected2000.push($(this).html());
      $(this).removeClass('selected');
    });
    this.selectionFlag = true;
    this.selectedDecades2000 = [];
  }
  select2010Decade() {
    this.select2010 = false;
    var selected2010 = [];
    $("#2010 td:not(:first-child):not(:last-child)").each(function () {
      selected2010.push($(this).html());
      $(this).removeClass('selected');
      $(this).toggleClass('selected');
    });
    this.selectedDecades2000 = selected2010;
    selected2010 = [];
  }
  select2010Decade2() {
    this.select2010 = true;
    var selected2010 = [];
    $("#2010 td").each(function () {
      selected2010.push($(this).html());
      $(this).removeClass('selected');
    });
    this.selectionFlag = true;
    this.selectedDecades2010 = [];
  }

  // decade selection ends here




}
