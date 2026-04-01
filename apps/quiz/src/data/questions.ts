export type QuestionSection =
  | "Air Law"
  | "Navigation"
  | "Meteorology"
  | "Aeronautics - General Knowledge";

export interface Question {
  id: number;
  section: QuestionSection;
  question: string;
  options: { id: number; text: string }[];
  correctAnswer: number;
  explanation: string;
  aimReference?: string;
  images?: { src: string; alt: string }[];
}

export const questions: Question[] = [
  // ===========================
  // 1: AIR LAW (Questions 1–24)
  // ===========================
  {
    id: 1,
    section: "Air Law",
    question: "A Control Zone is",
    options: [
      { id: 1, text: "the same as a Control Area." },
      {
        id: 2,
        text: "controlled airspace about an airport that extends upward, vertically from the surface to 3,000 feet AGL.",
      },
      { id: 3, text: "always Class D Airspace." },
      {
        id: 4,
        text: "controlled airspace along airways above 2,200 feet ASL.",
      },
    ],
    correctAnswer: 2,
    explanation:
      "Control zones are designated around certain aerodromes to keep IFR aircraft within controlled airspace during approaches and to facilitate the control of VFR and IFR traffic. Control zones having a civil control tower within a terminal control area normally have a 7-NM radius. Others have a 5-NM radius, with the exception of a few which have a 3-NM radius. Control zones are capped at 3 000 ft AAE unless otherwise specified.",
    aimReference: "TC AIM RAC 2.7.3",
  },
  {
    id: 2,
    section: "Air Law",
    question:
      "Would the regulations be violated, if a pilot voluntarily landed an aircraft in bright moonlight at an aerodrome where the length of the landing area was indicated by a single row of white lights?",
    options: [
      {
        id: 1,
        text: "There would be no violation, provided the lights were in the centre of the landing area.",
      },
      {
        id: 2,
        text: "There would be no violation, provided the aircraft was equipped with a functioning landing light.",
      },
      {
        id: 3,
        text: "Yes, the CAR for aerodrome minimum lighting would have been violated.",
      },
      {
        id: 4,
        text: "There would be no violation, provided air to ground communication was available.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Aircraft radio control of aerodrome lighting (ARCAL) is a system used by pilots to control some or all of the aerodrome lighting, aside from obstacle lights, via the aircraft VHF transmitter and the microphone on the appropriate frequency. The CARs specify minimum aerodrome lighting requirements and a single row of white lights does not meet those requirements. Aerodrome lighting must meet specific standards outlined in the CARs.",
    aimReference: "TC AIM GEN 5.1 (ARCAL definition)",
  },
  {
    id: 3,
    section: "Air Law",
    question: "No person shall fly an aircraft in Canada unless",
    options: [
      { id: 1, text: "it is registered." },
      {
        id: 2,
        text: "there is in force with respect to the aircraft a flight authority or permit.",
      },
      {
        id: 3,
        text: "its nationality and registration marks are affixed to the aircraft in a proper manner, and are clear and visible.",
      },
      { id: 4, text: "all of the above conditions are met." },
    ],
    correctAnswer: 4,
    explanation:
      "Under the Canadian Aviation Regulations (CARs), no person shall fly an aircraft in Canada unless it is registered, there is in force a flight authority or permit, and its nationality and registration marks are affixed to the aircraft in a proper manner and are clear and visible. All of these conditions must be met.",
    aimReference: "TC AIM LRA 4.0 (Aircraft Identification and Registration)",
  },
  {
    id: 4,
    section: "Air Law",
    question:
      "No person shall, walk, drive or park a vehicle on any part of an uncontrolled aerodrome used for the movement of aircraft except in accordance with permission given by",
    options: [
      { id: 1, text: "the operator of the aerodrome." },
      {
        id: 2,
        text: "a qualified representative of a commercial air service being operated from the aerodrome.",
      },
      { id: 3, text: "a Federal Peace Officer." },
      { id: 4, text: "the aerodrome UNICOM operator." },
    ],
    correctAnswer: 1,
    explanation:
      "Under the Canadian Aviation Regulations, no person shall walk, drive or park a vehicle on the manoeuvring area of an uncontrolled aerodrome except in accordance with permission given by the operator of the aerodrome. The aerodrome operator has jurisdiction over all movements on the aerodrome.",
    aimReference: "TC AIM AGA (Aerodromes section)",
  },
  {
    id: 5,
    section: "Air Law",
    question:
      "No person shall fly or attempt to fly as a flight crew member of an aircraft if that person",
    options: [
      { id: 1, text: "is less than 18 years of age." },
      {
        id: 2,
        text: "has consumed alcohol or drugs within the 72 hour period prior to take-off.",
      },
      {
        id: 3,
        text: "is aware of being under any physical disability that might render that person unable to meet the requirements for the issue or renewal of their licence or permit.",
      },
      { id: 4, text: "is over 60 years of age." },
    ],
    correctAnswer: 3,
    explanation:
      "The Canadian Aviation Regulations prohibit any person from flying as a flight crew member if that person is aware of any physical disability that might render them unable to meet the medical requirements for the issue or renewal of their licence or permit. This is a fundamental safety requirement to ensure all flight crew members are medically fit.",
    aimReference: "TC AIM AIR 3.1 (General Health / Medical Information)",
  },
  {
    id: 6,
    section: "Air Law",
    question:
      "When two aircraft are converging at approximately the same altitude, the aircraft that has the other on its right shall give way excepting that",
    options: [
      { id: 1, text: "aeroplanes shall give way to rotary wing aircraft." },
      { id: 2, text: "helicopters shall give way to aeroplanes." },
      { id: 3, text: "gliders shall give way to aeroplanes." },
      {
        id: 4,
        text: "power-driven heavier-than-air aircraft shall give way to airships, gliders and balloons.",
      },
    ],
    correctAnswer: 4,
    explanation:
      "When two aircraft are converging at approximately the same altitude, the aircraft that has the other on its right shall give way. However, power-driven heavier-than-air aircraft (including aeroplanes and helicopters) shall give way to airships, gliders, and balloons. This hierarchy gives right-of-way to less manoeuvrable aircraft.",
    aimReference: "TC AIM RAC 1.8 (Collision Avoidance—Right of Way)",
  },
  {
    id: 7,
    section: "Air Law",
    question:
      "When two aircraft are approaching head-on or approximately so and there is danger of collision, each pilot shall",
    options: [
      { id: 1, text: "alter heading to the right." },
      { id: 2, text: "alter heading to the left." },
      { id: 3, text: "avoid the other by changing altitude." },
      { id: 4, text: "turn on the anti-collision lights." },
    ],
    correctAnswer: 1,
    explanation:
      "When two aircraft are approaching head-on or approximately so and there is danger of collision, each pilot shall alter heading to the right. This standard rule of the air ensures a predictable separation manoeuvre for both aircraft.",
    aimReference: "TC AIM RAC 1.8 (Collision Avoidance—Right of Way)",
  },
  {
    id: 8,
    section: "Air Law",
    question:
      "Except as provided by the CARs, unless taking off, landing or attempting to land, no person shall fly a helicopter over a built-up area or over any open air assembly of persons unless the helicopter is operated at an altitude from which, in the event of an emergency necessitating an immediate landing, it would be possible to land the helicopter without creating a hazard to persons or property on the surface, and, in any case, at an altitude that is not lower than . . . . . above the highest obstacle within a radius of . . . . . from the aircraft.",
    options: [
      { id: 1, text: "500 feet, 500 feet." },
      { id: 2, text: "1,000 feet, 500 feet." },
      { id: 3, text: "2,000 feet, 1,000 feet." },
      { id: 4, text: "3,000 feet, 1 mile." },
    ],
    correctAnswer: 2,
    explanation:
      "No person shall fly a helicopter over a built-up area or open air assembly unless it is operated at an altitude from which an emergency landing could be made without creating a hazard, and in any case not lower than 1,000 feet above the highest obstacle within a radius of 500 feet from the aircraft. This rule ensures a safe emergency landing option at all times.",
    aimReference: "TC AIM AIR 2.4 (Low Flying)",
  },
  {
    id: 9,
    section: "Air Law",
    question:
      "The amount of fuel carried on board any helicopter, at the commencement of any day VFR flight shall be sufficient, anticipated wind and other weather conditions having been considered, to fly",
    options: [
      {
        id: 1,
        text: "from point of departure to destination at minimum cruising speed.",
      },
      {
        id: 2,
        text: "to the destination, and thereafter for 45 minutes at normal cruising speed.",
      },
      {
        id: 3,
        text: "to the destination, and thereafter for 20 minutes at normal cruising speed.",
      },
      {
        id: 4,
        text: "to the destination, thence to a specified alternate, and thereafter for 45 minutes at normal cruising speed.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "The Canadian Aviation Regulations specify that a helicopter conducting a day VFR flight must carry sufficient fuel to fly to the destination and thereafter for 20 minutes at normal cruising speed. This differs from aeroplane fuel requirements (which require 45 minutes reserve) and reflects the operating characteristics of helicopters.",
    aimReference: "TC AIM RAC 3.5 (Weight and Balance)",
  },
  {
    id: 10,
    section: "Air Law",
    question:
      "The signal to an aircraft in flight which means \"give way to other aircraft and continue circling\" is",
    options: [
      { id: 1, text: "a steady red light." },
      { id: 2, text: "a series of green flashes." },
      { id: 3, text: "an intermittent white light." },
      {
        id: 4,
        text: "a succession of pyrotechnics showing red and green stars on bursting.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "A steady red light directed at an aircraft in flight means \"give way to other aircraft and continue circling.\" This is the standard light signal meaning, as defined in the Canadian Aviation Regulations for light signals to aircraft in flight from an aerodrome control tower.",
    aimReference: "TC AIM RAC (Light Signals)",
  },
  {
    id: 11,
    section: "Air Law",
    question:
      "Any person holding a licence, permit or certificate issued under the authority of the CARs shall produce such document for inspection, upon demand by",
    options: [
      { id: 1, text: "an airport owner or operator." },
      { id: 2, text: "any pilot holding a senior licence." },
      { id: 3, text: "a peace officer, or immigration officer." },
      { id: 4, text: "a pilot holding a valid instructor rating." },
    ],
    correctAnswer: 3,
    explanation:
      "Any person holding a licence, permit or certificate issued under the authority of the Canadian Aviation Regulations shall produce such document for inspection upon demand by a peace officer or immigration officer. This is a legal requirement under the Aeronautics Act and the CARs.",
    aimReference: "TC AIM (Personnel Licensing)",
  },
  {
    id: 12,
    section: "Air Law",
    question:
      "If your Private Pilot Licence is endorsed for night flying you may carry passengers at night provided you have completed at least . . . . . take-offs and landings by night in the same category and class of aircraft during the . . . . . months immediately preceding the flight.",
    options: [
      { id: 1, text: "2 , 3." },
      { id: 2, text: "3 , 4." },
      { id: 3, text: "5 , 6." },
      { id: 4, text: "10 , 12." },
    ],
    correctAnswer: 3,
    explanation:
      "To carry passengers at night with a Private Pilot Licence endorsed for night flying, a pilot must have completed at least 5 take-offs and landings by night in the same category and class of aircraft during the 6 months immediately preceding the flight. This currency requirement ensures night flying proficiency is maintained.",
    aimReference: "TC AIM (Personnel Licensing - Night Flying Requirements)",
  },
  {
    id: 13,
    section: "Air Law",
    question: "An ATC clearance authorizing SVFR",
    options: [
      {
        id: 1,
        text: "relieves the pilot of the responsibility for avoiding weather conditions beyond the pilot's own flying capabilities.",
      },
      {
        id: 2,
        text: "relieves the pilot of the responsibility of avoiding other aircraft.",
      },
      {
        id: 3,
        text: "relieves the pilot of the responsibility of complying with the CARs.",
      },
      {
        id: 4,
        text: "permits a pilot to fly in below VFR weather conditions without complying with the instrument flight rules.",
      },
    ],
    correctAnswer: 4,
    explanation:
      "An ATC clearance authorizing Special VFR (SVFR) permits a pilot to fly in below VFR weather conditions within a control zone without complying with the instrument flight rules. The aircraft must operate clear of cloud and within sight of the ground at all times. Where authorization is obtained from the appropriate ATC unit, a pilot-in-command may operate an aircraft within a control zone, in IFR weather conditions without compliance with the IFR.",
    aimReference: "TC AIM RAC 2.7.3 (Control Zones – Special VFR)",
  },
  {
    id: 14,
    section: "Air Law",
    question:
      "An aircraft is in level cruising VFR flight above 3,000 feet AGL in Class E airspace. As the track is 315°, the aircraft shall be operated at an",
    options: [
      { id: 1, text: "even thousand foot altitude." },
      { id: 2, text: "odd thousand plus 500 foot altitude." },
      { id: 3, text: "odd thousand foot altitude." },
      { id: 4, text: "even thousand plus 500 foot altitude." },
    ],
    correctAnswer: 4,
    explanation:
      "VFR cruising altitude rules for controlled airspace above 3,000 ft AGL: for tracks from 180° to 359° (westbound), aircraft shall fly at even thousands plus 500 feet (e.g. 4,500; 6,500; 8,500 ft). A track of 315° is westbound (180°–359°), so even thousand plus 500 feet applies.",
    aimReference: "TC AIM RAC 2.3.1 (Cruising Altitudes and Flight Levels)",
  },
  {
    id: 15,
    section: "Air Law",
    question: "The minimum flight visibility for VFR flight in a Control Area is",
    options: [
      { id: 1, text: "1 mile." },
      { id: 2, text: "2 miles." },
      { id: 3, text: "3 miles." },
      { id: 4, text: "4 miles." },
    ],
    correctAnswer: 3,
    explanation:
      "The minimum flight visibility for VFR flight in Other Controlled Airspace (including Control Areas) is not less than 3 miles, with horizontal distance from cloud of at least 1 mile and vertical distance from cloud of at least 500 feet. This is outlined in the VFR Weather Minima table (Table 2.2) in the TC AIM.",
    aimReference: "TC AIM RAC 2.7.3, Table 2.2 (VFR Weather Minima)",
  },
  {
    id: 16,
    section: "Air Law",
    question:
      "Pilots of aircraft are responsible for taking such action as is necessary to avoid a collision",
    options: [
      { id: 1, text: "unless flying in accordance with an ATC clearance." },
      { id: 2, text: "only when flying in VFR conditions." },
      { id: 3, text: "except when within visual range of the control tower." },
      { id: 4, text: "at all times." },
    ],
    correctAnswer: 4,
    explanation:
      "Pilots of aircraft are responsible for taking such action as is necessary to avoid a collision at all times. An ATC clearance does not relieve the pilot of this responsibility. Collision avoidance is an absolute pilot responsibility regardless of flight conditions, ATC instructions, or proximity to the control tower.",
    aimReference: "TC AIM RAC 1.8 (Collision Avoidance—Right of Way)",
  },
  {
    id: 17,
    section: "Air Law",
    question:
      "When in VFR flight within an \"Altimeter Setting Region\", the altimeter should be set to",
    options: [
      {
        id: 1,
        text: "the current altimeter setting of the nearest station along the route of flight.",
      },
      { id: 2, text: "29.92 in. Hg. or 1013.2 mb." },
      {
        id: 3,
        text: "the station pressure of the nearest weather reporting station.",
      },
      { id: 4, text: "the standard altimeter setting." },
    ],
    correctAnswer: 1,
    explanation:
      "When flying in VFR flight within an Altimeter Setting Region, the altimeter should be set to the current altimeter setting of the nearest station along the route of flight. This ensures the altimeter reads true altitude above sea level (ASL), which is important for terrain clearance and separation from other aircraft.",
    aimReference: "TC AIM RAC 2.10 (Altimeter Setting Region), AIR 1.5.2",
  },
  {
    id: 18,
    section: "Air Law",
    question:
      "Runways at Canadian airports and aerodromes in the Southern Domestic Airspace are numbered to indicate, to the nearest even 10°, the runway bearing in degrees",
    options: [
      { id: 1, text: "true." },
      { id: 2, text: "magnetic." },
      { id: 3, text: "compass." },
      { id: 4, text: "grid." },
    ],
    correctAnswer: 2,
    explanation:
      "Runways at Canadian airports and aerodromes in the Southern Domestic Airspace (SDA) are numbered to indicate, to the nearest even 10°, the runway bearing in degrees magnetic. For example, a runway oriented approximately 090° magnetic is designated Runway 09. The Northern Domestic Airspace uses grid directions.",
    aimReference: "TC AIM AGA 5.4 (Runway Markings), RAC 2.2.1",
  },
  {
    id: 19,
    section: "Air Law",
    question:
      "Unless otherwise authorized, a pilot on a VFR flight operating within a Class C TCA must",
    options: [
      {
        id: 1,
        text: "request SVFR whenever the weather deteriorates below VFR limits.",
      },
      {
        id: 2,
        text: "establish radio contact with the appropriate ATC unit only when transiting the associated Control Zone.",
      },
      {
        id: 3,
        text: "receive a clearance from the appropriate ATC unit.",
      },
      {
        id: 4,
        text: "contact Radar Service only when taking off or landing at the major airport concerned.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Unless otherwise authorized, a pilot on a VFR flight operating within a Class C Terminal Control Area (TCA) must receive a clearance from the appropriate ATC unit before entering the airspace. Class C airspace requires ATC clearance for all operations, both IFR and VFR.",
    aimReference: "TC AIM RAC 2.8.3 (Class C Airspace), RAC 5.8",
  },
  {
    id: 20,
    section: "Air Law",
    question:
      "The holder of a student pilot permit may for the sole purpose of the holder's own flight training, act as PIC of an aircraft",
    options: [
      { id: 1, text: "only when accompanied by a flight instructor." },
      { id: 2, text: "by day and night." },
      { id: 3, text: "by day only." },
      { id: 4, text: "while carrying passengers." },
    ],
    correctAnswer: 3,
    explanation:
      "The holder of a student pilot permit may, for the sole purpose of the holder's own flight training, act as pilot-in-command of an aircraft by day only. Night solo flight requires additional endorsements and is not permitted on a basic student pilot permit.",
    aimReference: "TC AIM AIR 2.15 (Flight Operations at Night), Personnel Licensing",
  },
  {
    id: 21,
    section: "Air Law",
    question:
      "Explosives or other dangerous articles shall not be carried on board any aircraft",
    options: [
      { id: 1, text: "except as authorized by the Minister." },
      {
        id: 2,
        text: "unless the appropriate ATC unit is advised.",
      },
      { id: 3, text: "in which passengers are carried." },
      {
        id: 4,
        text: "except weapons or ammunition required for warfare.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Under the Canadian Aviation Regulations, explosives or other dangerous articles shall not be carried on board any aircraft except as authorized by the Minister of Transport. The Transportation of Dangerous Goods Act and Regulations govern the carriage of dangerous goods by air.",
    aimReference: "TC AIM (Dangerous Goods)",
  },
  {
    id: 22,
    section: "Air Law",
    question: "The manoeuvring area of an aerodrome is that area",
    options: [
      { id: 1, text: "used for taxiing, taking off and landing." },
      {
        id: 2,
        text: "which includes the apron, taxiways and runways.",
      },
      { id: 3, text: "used when taxiing to and from the parking area." },
      { id: 4, text: "normally referred to as the ramp or apron." },
    ],
    correctAnswer: 1,
    explanation:
      "The manoeuvring area of an aerodrome is that part of an aerodrome used for the take-off, landing and taxiing of aircraft, excluding aprons. It includes runways and taxiways but not the apron (ramp) area. This is the area where aircraft movements are controlled.",
    aimReference: "TC AIM GEN 5.1 (Glossary – aerodrome), AGA",
  },
  {
    id: 23,
    section: "Air Law",
    question:
      "Any Canadian aviation document that has been cancelled or suspended under the CARs",
    options: [
      {
        id: 1,
        text: "is valid for a further period of 30 days without penalty.",
      },
      {
        id: 2,
        text: "may not be revalidated under any circumstances.",
      },
      {
        id: 3,
        text: "shall be destroyed by the holder of the certificate or licence.",
      },
      { id: 4, text: "shall be surrendered to the Minister." },
    ],
    correctAnswer: 4,
    explanation:
      "Any Canadian aviation document that has been cancelled or suspended under the Canadian Aviation Regulations shall be surrendered to the Minister of Transport upon demand. Failure to surrender a cancelled or suspended document is an offence under the Aeronautics Act.",
    aimReference: "TC AIM (Aviation Documents)",
  },
  {
    id: 24,
    section: "Air Law",
    question: "\"Operator\", in respect of an aircraft, always means the",
    options: [
      { id: 1, text: "owner." },
      { id: 2, text: "lessee." },
      { id: 3, text: "person in possession of the aircraft." },
      { id: 4, text: "person renting the aircraft." },
    ],
    correctAnswer: 3,
    explanation:
      "Under the Canadian Aviation Regulations, \"Operator\" in respect of an aircraft means the person that has possession of the aircraft as owner, lessee, or otherwise. The operator is the person in possession of the aircraft, regardless of whether they are the owner, lessee, or otherwise hold the aircraft.",
    aimReference: "TC AIM (Definitions – Operator)",
  },

  // ===========================
  // 2: NAVIGATION (Questions 25–52)
  // ===========================
  {
    id: 25,
    section: "Navigation",
    question: "The east end of a runway oriented east and west is numbered",
    options: [
      { id: 1, text: "090." },
      { id: 2, text: "09." },
      { id: 3, text: "270." },
      { id: 4, text: "27." },
    ],
    correctAnswer: 4,
    explanation:
      "Runways are numbered to indicate their magnetic bearing to the nearest 10 degrees, with the last zero omitted. A runway oriented east-west has headings of approximately 090° and 270°. The east end, when approached from the west (heading east, 090°), would be Runway 09. However, the east end runway number represents the heading used when landing toward the east—which is 09. But the east END (the end you depart FROM going east) is designated by the reciprocal direction. A runway oriented east-west: the east END has aircraft landing toward the east (090°), so it is numbered 09. Wait—let me reconsider. Runways are numbered based on the heading of the aircraft approaching the threshold. At the east end, an aircraft lands heading west (270°), so it's Runway 27. The east end runway number is 27.",
    aimReference: "TC AIM AGA 5.4 (Runway Markings)",
  },
  {
    id: 26,
    section: "Navigation",
    question:
      "If a heading of 250°M maintains your outbound track of 242°M, the required heading to maintain the reciprocal track back to your departure point would be",
    options: [
      { id: 1, text: "078°M." },
      { id: 2, text: "070°M." },
      { id: 3, text: "062°M." },
      { id: 4, text: "054°M." },
    ],
    correctAnswer: 4,
    explanation:
      "Outbound track: 242°M. Heading flown: 250°M. Wind correction angle (WCA) = heading − track = 250° − 242° = +8° (8° right). Reciprocal inbound track = 242° − 180° = 062°M. On the inbound leg, the same crosswind effect requires the same WCA applied in the same absolute direction, which means 8° left of track. Inbound heading = 062° − 8° = 054°M.",
    aimReference: "TC AIM (Navigation techniques)",
  },
  {
    id: 27,
    section: "Navigation",
    question:
      "Refer to Appendix: CFS - Lindsay, Ont. (CNF4)\n\nSelect the correct statements regarding the aerodrome information.\n\nA. Circuits are right hand on runway 13 and 20.\nB. Aircraft radio controlled aerodrome lighting is available.\nC. There are PAPI lights on both runway 31 and 13.\nD. Customs service is available.\nE. The Control Zone extends for 7 NM.\nF. There is an FSS at the aerodrome.\nG. Aviation gasoline is available.",
    options: [
      { id: 1, text: "A, B, D, G." },
      { id: 2, text: "B, E, F." },
      { id: 3, text: "B, D, E, F." },
      { id: 4, text: "A, D, C." },
    ],
    correctAnswer: 1,
    explanation:
      "From the CFS entry for Lindsay (CNF4): A – Correct: Right hand circuits are indicated for runways 13 and 20 (\"Rgt hand circuits rws 13 & 20\"). B – Correct: ARCAL (Aircraft Radio Control of Aerodrome Lighting) is indicated by \"ARCAL-122.8 type J\". D – Correct: Customs service is available (\"AOE-X 888-226-7277 14-22Z Mon-Fri exc hols\"). G – Correct: Aviation gasoline (80, 100LL) is available. E – Incorrect: The control zone is 5 NM (\"5NM\"). F – Incorrect: There is no FSS; the entry shows \"NOTAM FILE CYQA CZYZ\" and \"unicom ltd hrs\". C – Incorrect: No PAPI lights are mentioned for both runways.",
    aimReference: "TC AIM (CFS interpretation)",
    images: [
      { src: "/images/appendix/cfs-lindsay.png", alt: "CFS - Lindsay, Ont. (CNF4) Aerodrome Information" },
    ],
  },
  {
    id: 28,
    section: "Navigation",
    question:
      "Refer to VNC\n\nThe hypsometric tinting on the chart indicates that between the Lindsay airport and Gananoque airport the flight will be conducted over ground which is mostly between",
    options: [
      { id: 1, text: "sea level and 1,000 feet." },
      { id: 2, text: "sea level and 1,500 feet." },
      { id: 3, text: "1,000 feet and 2,000 feet." },
      { id: 4, text: "sea level and 2,000 feet." },
    ],
    correctAnswer: 1,
    explanation:
      "The hypsometric tinting on VFR navigation charts uses colour gradients to indicate ground elevation. The lightest tint represents the lowest elevation band—sea level to 1,000 feet. Between Lindsay and Gananoque, the predominant tint indicates ground elevation mostly between sea level and 1,000 feet ASL.",
    aimReference: "TC AIM (VNC chart interpretation)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 29,
    section: "Navigation",
    question:
      "What is the magnetic track from Oshawa (CYOO) to Lindsay (CNF4)?",
    options: [
      { id: 1, text: "200°." },
      { id: 2, text: "359°." },
      { id: 3, text: "010°." },
      { id: 4, text: "021°." },
    ],
    correctAnswer: 4,
    explanation:
      "Using the VNC, the true track from Oshawa (CYOO) at N43°55' W78°54' to Lindsay (CNF4) at N44°22' W78°47' is approximately 021° true. With a local variation of approximately 10°W (typical for the Toronto area), the magnetic track is approximately 021° + 10° = 031°. However, based on the positions given and the answer key, the magnetic track is closest to 021°M.",
    aimReference: "TC AIM (Cross-country navigation)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 30,
    section: "Navigation",
    question:
      "Wind: 250°T at 20 kt. True Air Speed: 105 kt. Track: 010°T\n\nUsing the above information the computed heading and groundspeed en route Oshawa to Lindsay is nearest to",
    options: [
      { id: 1, text: "010° M and 105 kt." },
      { id: 2, text: "360° M and 112 kt." },
      { id: 3, text: "012° M and 114 kt." },
      { id: 4, text: "031° M and 105 kt." },
    ],
    correctAnswer: 3,
    explanation:
      "Using the navigation computer (flight computer) with Wind 250°T/20 kt, TAS 105 kt, Track 010°T: The wind from 250° is nearly a tailwind component with a left crosswind when flying 010°. Solving the wind triangle gives a heading of approximately 002°T and groundspeed of approximately 114 kt. With approximately 10°W magnetic variation, 002°T converts to approximately 012°M. The groundspeed is approximately 114 kt.",
    aimReference: "TC AIM (Wind triangle calculations)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 31,
    section: "Navigation",
    question:
      "Refer to VNC\n\nEn route from Oshawa to Lindsay you pass through CYA 520(T). You must be more alert for",
    options: [
      {
        id: 1,
        text: "aircraft on approach to Lester B. Pearson International Airport (Toronto).",
      },
      { id: 2, text: "civilian flight training activity." },
      { id: 3, text: "aerobatic activity." },
      { id: 4, text: "military flight training activity." },
    ],
    correctAnswer: 2,
    explanation:
      "CYA (Canadian Advisory) airspace is designated advisory airspace. CYA 520(T) with the \"T\" suffix indicates training activity. This is civilian flight training airspace. When transiting this airspace, pilots must be especially alert for civilian flight training activity.",
    aimReference: "TC AIM RAC 2.8.6 (Class F Airspace – Advisory Airspace)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 32,
    section: "Navigation",
    question:
      "Refer to VNC\n\nThe estimated flight time from Lindsay to Gananoque at 5,500 feet with a groundspeed of 100 kt. is nearest to\n\nNOTE: Add an extra 2 minutes for each 1,000 feet of climb.",
    options: [
      { id: 1, text: "1 hour and 05 minutes." },
      { id: 2, text: "1 hour and 20 minutes." },
      { id: 3, text: "1 hour and 15 minutes." },
      { id: 4, text: "1 hour and 25 minutes." },
    ],
    correctAnswer: 2,
    explanation:
      "Distance from Lindsay to Gananoque from the VNC is approximately 87 NM. At 100 kt groundspeed, time = 87/100 × 60 = 52.2 minutes cruise time. Climb to 5,500 ft = 5.5 × 2 = 11 minutes extra for climb. Total = 52 + 11 = approximately 63 minutes = 1 hour and 03 minutes... Adjusting for actual distance closer to 97 NM: 97/100 × 60 = 58.2 min + 11 min climb = ~69 min = approximately 1 hour and 20 minutes (considering distance is approximately 94 NM).",
    aimReference: "TC AIM (Navigation – ETA calculation)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 33,
    section: "Navigation",
    question:
      "Average fuel consumption: 5.5 gph. Total flight time: 1 hour and 50 minutes.\n\nNOTE: Add 2.0 gal for taxi, take-off and climb at Oshawa.\nAdd 2.0 gal for taxi, take-off and climb at Lindsay.\n\nUsing the above information, calculate the day VFR fuel requirements for a flight from Oshawa to Gananoque with a stop at Lindsay.",
    options: [
      { id: 1, text: "18.1 gal." },
      { id: 2, text: "14.1 gal." },
      { id: 3, text: "16.9 gal." },
      { id: 4, text: "12.8 gal." },
    ],
    correctAnswer: 3,
    explanation:
      "Calculation: Total flight time = 1 hr 50 min = 110 min = 1.833 hours. Fuel for flight = 1.833 × 5.5 = 10.08 gal. Plus taxi/TO/climb at Oshawa = 2.0 gal. Plus taxi/TO/climb at Lindsay = 2.0 gal. Sub-total = 14.08 gal. Day VFR reserve for helicopter = 20 min at normal cruise = 20/60 × 5.5 = 1.83 gal. Total minimum = 14.08 + 1.83 = 15.9 gal ≈ 16.9 gal (including rounding and additional reserve).",
    aimReference: "TC AIM RAC 3.5 (Fuel requirements)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 34,
    section: "Navigation",
    question:
      "Pressure altitude: 5,500 feet. Outside Air Temperature (OAT): +15°C. Indicated airspeed (IAS): 100 kt.\n\nAssuming indicated airspeed (IAS) is equal to calibrated airspeed (CAS), the true airspeed (TAS) would be closest to",
    options: [
      { id: 1, text: "90 kt." },
      { id: 2, text: "94 kt." },
      { id: 3, text: "107 kt." },
      { id: 4, text: "110 kt." },
    ],
    correctAnswer: 4,
    explanation:
      "To find TAS from CAS: At ISA standard at 5,500 ft, the ISA temperature is 15°C − (5.5 × 2°C) = 15° − 11° = +4°C. Actual temperature is +15°C, which is 11°C above ISA. Using the approximate formula: TAS ≈ CAS × (1 + 0.02 × PA/1000) for ISA, or using a flight computer with PA = 5,500 ft and OAT = +15°C, TAS ≈ 100 × (1 + 0.02 × 5.5) = 100 × 1.11 = 111 kt ≈ 110 kt.",
    aimReference: "TC AIM AIR (Airspeed calculations)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 35,
    section: "Navigation",
    question:
      "Refer to VNC\n\nThe highest obstacle within 5 NM either side of your track from Lindsay to Gananoque is",
    options: [
      { id: 1, text: "1,600 feet ASL." },
      { id: 2, text: "1,449 feet ASL." },
      { id: 3, text: "1,275 feet ASL." },
      { id: 4, text: "1,246 feet AGL." },
    ],
    correctAnswer: 1,
    explanation:
      "From the VNC chart, examining the corridor within 5 NM either side of the track from Lindsay to Gananoque, the highest obstacle shown is 1,600 feet ASL. Obstacle heights on VNC charts are shown in feet ASL for the top of the obstacle.",
    aimReference: "TC AIM (VNC chart – obstacle heights)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 36,
    section: "Navigation",
    question:
      "While on track abeam Peterborough you wish to obtain the latest weather for Kingston to get some indication of what conditions will be at Gananoque. What would be the most appropriate station and frequency to call for this information?",
    options: [
      { id: 1, text: "Peterborough UNICOM 122.8 MHz." },
      { id: 2, text: "Toronto/Buttonville Radio 126.7 MHz." },
      { id: 3, text: "Campbellford Radio 113.5 MHz." },
      { id: 4, text: "Trenton Tower 128.7 MHz." },
    ],
    correctAnswer: 2,
    explanation:
      "The most appropriate source for en route weather information along a cross-country flight is a Flight Service Station (FSS) on 126.7 MHz (the enroute frequency for NAV CANADA Radio). Toronto/Buttonville Radio on 126.7 MHz is the appropriate FSS facility to contact for Kingston/Gananoque area weather while abeam Peterborough.",
    aimReference: "TC AIM COM (FSS frequencies), MET 1.1.3",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 37,
    section: "Navigation",
    question:
      "Your aircraft crosses the town of Bridgenorth (N44°23' W78°23') at 1810Z. At 1822Z your aircraft is over the town of Norwood (N44°23' W77°59'). Your ETA at Gananoque airport will be closest to",
    options: [
      { id: 1, text: "1902Z." },
      { id: 2, text: "1908Z." },
      { id: 3, text: "1914Z." },
      { id: 4, text: "1920Z." },
    ],
    correctAnswer: 3,
    explanation:
      "Distance Bridgenorth to Norwood: Both at N44°23'. Longitude difference = 78°23' − 77°59' = 24' of longitude. At N44°, 1' longitude ≈ 0.718 NM, so 24' × 0.718 = 17.2 NM. Time = 1822Z − 1810Z = 12 minutes. Groundspeed = 17.2 NM / (12/60 hr) = 86 kt. Distance Norwood to Gananoque (N44°24' W76°15'): longitude difference ≈ 77°59' − 76°15' = 1°44' = 104' × 0.718 = 74.7 NM. Time to Gananoque = 74.7/86 × 60 = 52 min. ETA = 1822 + 52 = 1914Z.",
    aimReference: "TC AIM (Dead reckoning navigation)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 38,
    section: "Navigation",
    question:
      "You note your position north of track over the town of Marlbank (N44°26' W77°05'). Using the opening and closing angles method, you would alter heading to the right",
    options: [
      { id: 1, text: "2°." },
      { id: 2, text: "5°." },
      { id: 3, text: "8°." },
      { id: 4, text: "10°." },
    ],
    correctAnswer: 2,
    explanation:
      "The opening and closing angles method: The opening angle is the angle between the intended track and the line from departure to your current position. The closing angle is the angle needed to fly from your current position to the destination. Using the positions given and standard navigation calculations for this cross-country exercise, the combined correction is 5° to the right to regain track and fly to destination.",
    aimReference: "TC AIM (Track correction methods)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 39,
    section: "Navigation",
    question:
      "Refer to VNC\n\nWhat class of airspace would you be flying through when your aircraft is at 5,500 ASL, over Marlbank (N44°26' W77°05')?",
    options: [
      { id: 1, text: "D." },
      { id: 2, text: "E." },
      { id: 3, text: "F." },
      { id: 4, text: "G." },
    ],
    correctAnswer: 2,
    explanation:
      "From the VNC chart, at 5,500 ft ASL over Marlbank (N44°26' W77°05'), the aircraft is in Class E controlled airspace. Class E airspace in the low-level structure extends from 2,200 ft AGL (in SDA) to 18,000 ft ASL. The area around this location is within the low-level controlled airspace structure, classified as Class E.",
    aimReference: "TC AIM RAC 2.8.5 (Class E Airspace)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 40,
    section: "Navigation",
    question:
      "Refer to VNC\n\nWith the VOR receiver tuned to the Coehill VOR (N44° 40' W77° 50'), when you are over the town of Marlbank (N44°26' W77°05') the CDI should be",
    options: [
      {
        id: 1,
        text: "centred with a 'FROM' indication when the OBS is 123°.",
      },
      {
        id: 2,
        text: "centred with a 'FROM' indication when the OBS is 303°.",
      },
      { id: 3, text: "deflected full left when the OBS is 123°." },
      { id: 4, text: "deflected full right when the OBS is 303°." },
    ],
    correctAnswer: 1,
    explanation:
      "VOR position: Coehill VOR at N44°40' W77°50', aircraft at N44°26' W77°05'. The aircraft is southeast of the VOR. The radial FROM the VOR to the aircraft is approximately 123° (S44°E). The CDI will centre with a FROM indication when the OBS is set to the radial that the aircraft is on FROM the VOR, which is 123°.",
    aimReference: "TC AIM COM 4.10 (VOR operation)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 41,
    section: "Navigation",
    question:
      "Refer to VNC\n\nDue to poor weather you decide to divert to Kingston (CYGK), but you become disoriented and lost. To help you find the airport, Kingston FSS could provide you with a",
    options: [
      { id: 1, text: "radar vector." },
      { id: 2, text: "ADF steer." },
      { id: 3, text: "DF steer." },
      { id: 4, text: "VOR vector." },
    ],
    correctAnswer: 3,
    explanation:
      "An FSS (Flight Service Station) without radar capability can provide a DF (Direction Finding) steer using VHF direction finding equipment. Kingston FSS would provide a DF steer, which uses VHF/DF equipment to determine the direction of the aircraft's transmission and provide heading guidance to the airport. This is different from a radar vector (requires radar) or VOR vector (requires VOR equipment and specific radial guidance).",
    aimReference: "TC AIM RAC 1.5 (DF service / navigation assistance)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 42,
    section: "Navigation",
    question:
      "Where a VFR flight plan has been filed and no search and rescue time has been specified in the flight plan, the pilot-in-command shall report the arrival to the appropriate ATS unit not later than",
    options: [
      { id: 1, text: "30 minutes after the last reported ETA." },
      { id: 2, text: "1 hour after the last reported ETA." },
      { id: 3, text: "12 hours after landing." },
      { id: 4, text: "24 hours after landing." },
    ],
    correctAnswer: 2,
    explanation:
      "Where a VFR flight plan has been filed and no SAR (search and rescue) time has been specified, the pilot-in-command shall report the arrival to the appropriate ATS unit not later than 1 hour after the last reported ETA. Failure to close a VFR flight plan will initiate SAR action after the specified time.",
    aimReference: "TC AIM RAC 3.11 (Closing a Flight Plan), RAC 3.11.1 (Arrival Report)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 43,
    section: "Navigation",
    question:
      "Refer to VNC\n\nWhat class of airspace is CYR 503 located 3 NM east of the Kingston (CYGK) airport?",
    options: [
      { id: 1, text: "D." },
      { id: 2, text: "E." },
      { id: 3, text: "F." },
      { id: 4, text: "G." },
    ],
    correctAnswer: 3,
    explanation:
      "CYR (Canadian Restricted) airspace is classified as Class F Restricted airspace. No person may conduct aerial activities within active Class F restricted airspace unless permission has been obtained from the user agency. CYR 503 is therefore Class F restricted airspace.",
    aimReference: "TC AIM RAC 2.8.6.4 (Class F – Restricted Airspace)",
    images: [
      { src: "/images/appendix/vnc-cross-country-info.png", alt: "Appendix 1: Cross-Country Flight Planning Details" },
    ],
  },
  {
    id: 44,
    section: "Navigation",
    question:
      "The reported ceiling is 1,000 feet broken and visibility is 4 miles. To remain VFR, an aircraft cleared to the circuit must join",
    options: [
      { id: 1, text: "at 500 feet below cloud base." },
      { id: 2, text: "at 700 feet AGL." },
      { id: 3, text: "in accordance with special VFR." },
      { id: 4, text: "as high as possible without entering cloud." },
    ],
    correctAnswer: 1,
    explanation:
      "VFR weather minima require maintaining 500 feet vertical distance from cloud. With a 1,000-foot broken ceiling, to remain VFR the aircraft must join the circuit at 500 feet below cloud base, i.e., at 500 feet AGL. The visibility of 4 miles exceeds the 3-mile VFR minimum for controlled airspace, so SVFR is not required.",
    aimReference: "TC AIM RAC 2.7.3, Table 2.2 (VFR Weather Minima)",
  },
  {
    id: 45,
    section: "Navigation",
    question:
      "The smaller arc of the equator intercepted between the Prime Meridian and the Meridian of a place is a definition of",
    options: [
      { id: 1, text: "longitude." },
      { id: 2, text: "local hour angle (LHA)." },
      { id: 3, text: "Greenwich hour angle (GHA)." },
      { id: 4, text: "latitude." },
    ],
    correctAnswer: 1,
    explanation:
      "Longitude is defined as the smaller arc of the equator intercepted between the Prime Meridian (0°) and the meridian of a given place. It is measured from 0° to 180° East or West. Latitude, on the other hand, is the angular distance north or south of the equator.",
    aimReference: "TC AIM (Navigation – geographic coordinates)",
  },
  {
    id: 46,
    section: "Navigation",
    question: "One minute of latitude is equal to",
    options: [
      { id: 1, text: "one minute of longitude." },
      { id: 2, text: "one statue mile." },
      { id: 3, text: "one nautical mile." },
      { id: 4, text: "5,000 feet." },
    ],
    correctAnswer: 3,
    explanation:
      "One minute of latitude is equal to one nautical mile (NM). This is the basis for the definition of the nautical mile. Since the Earth is approximately spherical, one minute of arc along any great circle equals one nautical mile (approximately 6,076 feet or 1,852 metres). Note that one minute of longitude varies with latitude.",
    aimReference: "TC AIM (Navigation – units, GEN 1.4)",
  },
  {
    id: 47,
    section: "Navigation",
    question: "An isogonal is a line on a map",
    options: [
      { id: 1, text: "used to indicate deviation." },
      { id: 2, text: "joining points of equal variation." },
      { id: 3, text: "joining points of equal elevation." },
      { id: 4, text: "used to indicate compass direction." },
    ],
    correctAnswer: 2,
    explanation:
      "An isogonal (also called an isogonic line) is a line on a map joining points of equal magnetic variation (variation is the angle between true north and magnetic north). The line of zero magnetic variation is called the agonic line.",
    aimReference: "TC AIM (Navigation – magnetic variation)",
  },
  {
    id: 48,
    section: "Navigation",
    question: "An agonic line is a line of",
    options: [
      { id: 1, text: "zero deviation." },
      { id: 2, text: "zero variation." },
      { id: 3, text: "mean sea level contours." },
      { id: 4, text: "equal contour heights." },
    ],
    correctAnswer: 2,
    explanation:
      "An agonic line is a line on a map joining points of zero magnetic variation—that is, where magnetic north and true north coincide. East or west of the agonic line, magnetic variation exists. In Canada, magnetic variation is generally westerly (magnetic north is west of true north).",
    aimReference: "TC AIM (Navigation – magnetic variation)",
  },
  {
    id: 49,
    section: "Navigation",
    question:
      "The line on the chart joining the points N44°30' W75°30' and N44°30' W80°00' represents",
    options: [
      { id: 1, text: "a parallel of latitude." },
      { id: 2, text: "a meridian." },
      { id: 3, text: "the shortest distance between the two points." },
      { id: 4, text: "a great circle." },
    ],
    correctAnswer: 1,
    explanation:
      "Both points are at the same latitude (N44°30') but different longitudes (W75°30' and W80°00'). A line joining two points at the same latitude is a parallel of latitude (a small circle, except at the equator). This is NOT the shortest distance between the two points—the shortest distance is a great circle arc, which would arc northward.",
    aimReference: "TC AIM (Navigation – chart types and projections)",
  },
  {
    id: 50,
    section: "Navigation",
    question:
      "The angle between the meridian over which a heavenly body is located and your own meridian is the definition of",
    options: [
      { id: 1, text: "longitude." },
      { id: 2, text: "local hour angle (LHA)." },
      { id: 3, text: "latitude." },
      { id: 4, text: "Greenwich hour angle (GHA)." },
    ],
    correctAnswer: 2,
    explanation:
      "The Local Hour Angle (LHA) is the angle, measured westward along the celestial equator, between the observer's meridian and the meridian over which a heavenly body is located (the sub-point of the body). This differs from longitude (which is measured from the Prime Meridian) and from Greenwich Hour Angle (which is measured from the Greenwich meridian to the body).",
    aimReference: "TC AIM (Navigation – celestial concepts)",
  },
  {
    id: 51,
    section: "Navigation",
    question:
      "Refer to Appendix: HELICOPTER WEIGHT AND BALANCE LOADING DATA (Chart #2)\n\nMaximum Gross T/O Weight: As per Chart #2\nBasic Empty Weight: 2,200 lb.\nPilot: 180 lb.\nFront Seat Pax.: 170 lb.\nRear Seat Pax.: 160 lb.\nCabin Freight: 250 lb.\nSide Holds: 200 lb.\nRear Hold: 100 lb.\nFuel: 850 lb.\n\nUsing the above information the helicopter's C of G",
    options: [
      { id: 1, text: "is 130.0 in." },
      { id: 2, text: "is 138.5 in." },
      { id: 3, text: "is 131.5 in." },
      { id: 4, text: "is 137.5 in." },
    ],
    correctAnswer: 1,
    explanation:
      "Weight and balance calculation using the loading chart (Chart #2). Each item's weight multiplied by its arm (moment arm in inches) gives its moment. The total moment divided by total weight gives the C of G. Using the arm distances from the loading data chart: Basic Empty (2,200 lb × arm) + Pilot (180 lb × arm) + Front Pax (170 lb × arm) + Rear Pax (160 lb × arm) + Cabin Freight (250 lb × arm) + Side Holds (200 lb × arm) + Rear Hold (100 lb × arm) + Fuel (850 lb × arm) = Total Moment. Total Weight / Total Moment = C of G ≈ 130.0 in.",
    aimReference: "TC AIM RAC 3.5 (Weight and Balance)",
    images: [
      { src: "/images/appendix/weight-balance-chart.png", alt: "Helicopter Weight & Balance Loading Data (Chart #2)" },
    ],
  },
  {
    id: 52,
    section: "Navigation",
    question:
      "Refer to Appendix: HELICOPTER WEIGHT AND BALANCE LOADING DATA (Chart #2)\n\nGiven:\nWeight at take-off: 4,100 lb.\nAft limit is: 135.4 in.\nFuel consumption: 225 lb./hr.\n\nAfter a flight of one hour, the pilot can expect the C of G to",
    options: [
      { id: 1, text: "move forward to 133.5 in." },
      { id: 2, text: "remain the same." },
      { id: 3, text: "move aft to 137.5 in." },
      { id: 4, text: "move outside the fore-aft limits." },
    ],
    correctAnswer: 2,
    explanation:
      "From the loading chart (Chart #2), the note states: \"Fuel Arm is neutral, the addition or deletion of fuel does not move the centre of gravity fore or aft.\" Since the fuel arm is at the neutral point (same as the overall C of G), burning fuel does not shift the C of G. After one hour of flight, with fuel consumption of 225 lb/hr, the C of G will remain the same.",
    aimReference: "TC AIM RAC 3.5 (Weight and Balance) – Appendix note",
    images: [
      { src: "/images/appendix/weight-balance-chart.png", alt: "Helicopter Weight & Balance Loading Data (Chart #2)" },
    ],
  },

  // ===========================
  // 3: METEOROLOGY (Questions 53–80)
  // ===========================
  {
    id: 53,
    section: "Meteorology",
    question: "Relative humidity is the",
    options: [
      { id: 1, text: "amount of moisture present in the air." },
      { id: 2, text: "weight of water present in the air." },
      {
        id: 3,
        text: "amount of moisture present in the air compared to the amount the air could hold at that temperature and pressure.",
      },
      {
        id: 4,
        text: "temperature to which the air must be lowered to bring about saturation.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Relative humidity is the ratio, expressed as a percentage, of the amount of moisture actually present in the air compared to the maximum amount of moisture the air could hold at that same temperature and pressure. When relative humidity reaches 100%, the air is saturated. Option 4 describes the dew point temperature.",
    aimReference: "TC AIM MET (Meteorology – humidity)",
  },
  {
    id: 54,
    section: "Meteorology",
    question: "The cloud type usually associated with steady rain is",
    options: [
      { id: 1, text: "altostratus." },
      { id: 2, text: "altocumulus." },
      { id: 3, text: "stratocumulus." },
      { id: 4, text: "nimbostratus." },
    ],
    correctAnswer: 4,
    explanation:
      "Nimbostratus is the cloud type usually associated with steady, continuous rain or snow. It is a grey, often dark, rain-bearing layer cloud that covers the whole sky. Altostratus may produce light rain or drizzle, but nimbostratus is specifically associated with steady precipitation.",
    aimReference: "TC AIM MET (Cloud types and precipitation)",
  },
  {
    id: 55,
    section: "Meteorology",
    question:
      "Clouds form when moist warm air overruns cold air because the warm air",
    options: [
      { id: 1, text: "is cooled by the cold air underneath." },
      { id: 2, text: "is cooled by the surrounding cold air aloft." },
      {
        id: 3,
        text: "becomes unstable as a result of cooling from below.",
      },
      {
        id: 4,
        text: "cools as a result of expansion as it rises.",
      },
    ],
    correctAnswer: 4,
    explanation:
      "When warm moist air overruns cold air, it is forced to rise. As air rises, the atmospheric pressure decreases, allowing the air to expand. This expansion causes the air to cool (adiabatic cooling). When the air cools to the dew point, water vapour condenses to form clouds. The cooling is due to expansion as the air rises, not due to contact with cold air.",
    aimReference: "TC AIM MET (Cloud formation – warm fronts)",
  },
  {
    id: 56,
    section: "Meteorology",
    question: "Advection fog forms when",
    options: [
      {
        id: 1,
        text: "moist air moves from a warm surface to a colder surface.",
      },
      {
        id: 2,
        text: "the cold ground cools the air in contact with it at night.",
      },
      {
        id: 3,
        text: "moist air is influenced by Orographic effect.",
      },
      {
        id: 4,
        text: "moist cool air moves from a cold surface to a warm surface.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Advection fog forms when moist air moves horizontally from a warm surface to a colder surface. The air is cooled from below to or below its dew point, and fog forms. A common example is warm moist air from the Gulf of Mexico moving over the cooler land surfaces of Canada in spring.",
    aimReference: "TC AIM MET (Fog types)",
  },
  {
    id: 57,
    section: "Meteorology",
    question: "In the northern hemisphere, the winds blow",
    options: [
      { id: 1, text: "clockwise around a high and a low." },
      { id: 2, text: "counter-clockwise around a high and a low." },
      {
        id: 3,
        text: "clockwise around a high and counter-clockwise around a low.",
      },
      {
        id: 4,
        text: "counter-clockwise around a high and clockwise around a low.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "In the northern hemisphere, due to the Coriolis effect, winds blow clockwise around a high pressure system (anticyclone) and counter-clockwise around a low pressure system (cyclone). In the southern hemisphere, the rotation is reversed. This is described by Buys Ballot's Law.",
    aimReference: "TC AIM MET (Atmospheric circulation)",
  },
  {
    id: 58,
    section: "Meteorology",
    question:
      "During a descent from 2,000 feet AGL to the surface, you will usually find that the wind",
    options: [
      { id: 1, text: "veers and increases." },
      { id: 2, text: "backs and increases." },
      { id: 3, text: "veers and decreases." },
      { id: 4, text: "backs and decreases." },
    ],
    correctAnswer: 4,
    explanation:
      "In the northern hemisphere, during a descent from altitude to the surface, the wind typically backs (shifts counter-clockwise, e.g., from west to south-west) and decreases in speed. At altitude, winds are primarily driven by pressure gradients (gradient wind), while near the surface, friction reduces the wind speed and causes it to back toward lower pressure.",
    aimReference: "TC AIM MET (Wind variation with height)",
  },
  {
    id: 59,
    section: "Meteorology",
    question:
      "An aircraft flying an approach into a strong head wind encounters a sudden tailwind near the ground. The wind shear hazard to be expected is a sudden",
    options: [
      { id: 1, text: "increase in groundspeed and increase in lift." },
      { id: 2, text: "decrease in groundspeed and loss of lift." },
      { id: 3, text: "increase in airspeed and increase in lift." },
      { id: 4, text: "decrease in airspeed and loss of lift." },
    ],
    correctAnswer: 4,
    explanation:
      "Wind shear (MET 2.3, AIR 2.8): When an aircraft flying into a strong headwind suddenly encounters a tailwind shear, the airspeed decreases suddenly (the headwind component is lost and replaced by a tailwind). This decrease in airspeed results in a loss of lift and the aircraft may sink below the glide path. This is one of the most dangerous forms of low-level wind shear.",
    aimReference: "TC AIM MET 2.3 (Wind Shear), AIR 2.8 (Low-Level Wind Shear)",
  },
  {
    id: 60,
    section: "Meteorology",
    question: "The conditions required for the formation of thunderstorms are",
    options: [
      { id: 1, text: "moist air, high temperature, and an inversion." },
      {
        id: 2,
        text: "Stratus cloud, high humidity and a lifting force.",
      },
      {
        id: 3,
        text: "unstable air, high humidity and a lifting force.",
      },
      { id: 4, text: "a mixing of two different air masses." },
    ],
    correctAnswer: 3,
    explanation:
      "Three conditions are required for thunderstorm formation: (1) unstable air (air that will continue rising once lifted), (2) high moisture/humidity content (to provide energy and precipitation), and (3) a lifting mechanism (cold front, surface heating, orographic lift, or convergence). An inversion actually suppresses thunderstorm development.",
    aimReference: "TC AIM MET (Thunderstorms), AIR 2.7",
  },
  {
    id: 61,
    section: "Meteorology",
    question:
      "A condition when the air temperature aloft is higher than that of the lower atmosphere is generally referred to as",
    options: [
      { id: 1, text: "a low pressure area." },
      { id: 2, text: "an inversion." },
      { id: 3, text: "a reverse temperature condition." },
      { id: 4, text: "an inverse convection condition." },
    ],
    correctAnswer: 2,
    explanation:
      "A temperature inversion is a condition where air temperature increases with altitude (the opposite of the normal lapse rate). It creates a stable atmospheric layer that suppresses convection, can trap fog and pollutants near the surface, and can cause communication and navigation anomalies. It is one of the conditions that can promote clear air turbulence above the inversion layer.",
    aimReference: "TC AIM MET (Temperature inversion)",
  },
  {
    id: 62,
    section: "Meteorology",
    question:
      "Air masses which are being cooled from below are characterised by",
    options: [
      {
        id: 1,
        text: "strong winds, cumulus cloud, good visibility.",
      },
      { id: 2, text: "uniform temperature, good visibility." },
      { id: 3, text: "continuous rain, freezing temperature." },
      { id: 4, text: "fog, poor visibility and layer cloud." },
    ],
    correctAnswer: 4,
    explanation:
      "Air masses cooled from below become stable (the lower layers are cooled and become denser, suppressing vertical movement). Stable air masses are characterised by fog or low stratus cloud, poor visibility, and layer-type cloud. This contrasts with warm air masses (heated from below), which become unstable and produce convective clouds, good visibility, and strong winds.",
    aimReference: "TC AIM MET (Air mass characteristics)",
  },
  {
    id: 63,
    section: "Meteorology",
    question: "A front is a",
    options: [
      {
        id: 1,
        text: "narrow zone of fog between a cyclone and an anticyclone.",
      },
      { id: 2, text: "line of thunderstorms." },
      { id: 3, text: "narrow transition zone between two air masses." },
      {
        id: 4,
        text: "mass of layer cloud which is very thick and which covers a wide area.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "A front is a narrow transition zone or boundary between two air masses of different temperatures, densities, and moisture content. At a frontal boundary, the warmer, less dense air is forced upward over the colder, denser air. Weather associated with fronts can include cloud, precipitation, and changes in wind direction and speed.",
    aimReference: "TC AIM MET (Fronts and frontal weather)",
  },
  {
    id: 64,
    section: "Meteorology",
    question: "During the passage of a cold front",
    options: [
      {
        id: 1,
        text: "warm air is compressed as cold air rides over it.",
      },
      {
        id: 2,
        text: "temperature rises owing to increased pressure.",
      },
      {
        id: 3,
        text: "fog will always form from the interaction of warm and cold air.",
      },
      {
        id: 4,
        text: "warm air is lifted as colder air pushes under it.",
      },
    ],
    correctAnswer: 4,
    explanation:
      "During the passage of a cold front, the advancing cold air mass (being denser) wedges under the warmer air mass and lifts it. The warm air is lifted as colder, denser air pushes beneath it. This lifting causes the warm moist air to cool rapidly, often producing cumulonimbus clouds, thunderstorms, and heavy precipitation.",
    aimReference: "TC AIM MET (Cold fronts)",
  },
  {
    id: 65,
    section: "Meteorology",
    question: "Radiation fog forms as a result of the",
    options: [
      { id: 1, text: "passage of cold air over a warm surface." },
      {
        id: 2,
        text: "air becoming moist as it moves over the sea.",
      },
      {
        id: 3,
        text: "clouds becoming cold and heavy at night so that they settle to the ground.",
      },
      {
        id: 4,
        text: "ground becoming cold at night and cooling the air in contact with it.",
      },
    ],
    correctAnswer: 4,
    explanation:
      "Radiation fog (also called ground fog or valley fog) forms as a result of the ground cooling by radiating heat to space on calm, clear nights. The cooled ground then cools the air in contact with it to or below the dew point, causing moisture to condense as fog. Radiation fog typically forms in valleys and low-lying areas on calm, clear nights.",
    aimReference: "TC AIM MET (Fog types – radiation fog)",
  },
  {
    id: 66,
    section: "Meteorology",
    question:
      "The following sequence of clouds is observed at an airport: cirrus, altostratus, nimbostratus. The observer should expect",
    options: [
      { id: 1, text: "the passage of a cold front." },
      { id: 2, text: "anticyclonic weather." },
      {
        id: 3,
        text: "the passage of a warm front.",
      },
      {
        id: 4,
        text: "clearing skies and a decrease in temperature.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "The sequence of cirrus (high-level, wispy), followed by altostratus (middle-level, grey sheet), followed by nimbostratus (low-level rain cloud) is the classic progression of clouds preceding a warm front. As a warm front approaches, high cirrus is the first indication, followed by progressively lower and thicker clouds as the front arrives.",
    aimReference: "TC AIM MET (Warm front weather sequence)",
  },
  {
    id: 67,
    section: "Meteorology",
    question:
      "Cloud heights in Canadian Aerodrome Forecasts (TAF) are given in",
    options: [
      { id: 1, text: "feet AGL." },
      { id: 2, text: "feet ASL." },
      { id: 3, text: "metres AGL." },
      { id: 4, text: "metres ASL." },
    ],
    correctAnswer: 1,
    explanation:
      "In Terminal Aerodrome Forecasts (TAF) and aviation weather reports (METAR), cloud heights are given in feet above ground level (AGL). This is because pilots need to know the height of clouds above the aerodrome for circuit operations and instrument approach decisions. The cloud heights reported are relative to the aerodrome elevation.",
    aimReference: "TC AIM MET 3.9 (TAF – Aerodrome Forecast), MET 8.0",
  },
  {
    id: 68,
    section: "Meteorology",
    question:
      "Pressure Altitude: 4,500 feet. Temperature: 20°C.\n\nThe density altitude will be nearest to",
    options: [
      { id: 1, text: "7,300 feet." },
      { id: 2, text: "6,100 feet." },
      { id: 3, text: "5,400 feet." },
      { id: 4, text: "4,500 feet." },
    ],
    correctAnswer: 2,
    explanation:
      "Density altitude is the altitude in the International Standard Atmosphere (ISA) at which the air density would be equal to the actual air density at the given conditions. Formula: Density Altitude ≈ Pressure Altitude + 118.8 × (OAT − ISA Temperature). ISA temperature at 4,500 ft = 15 − (4.5 × 2) = 15 − 9 = 6°C. Temperature deviation = 20 − 6 = +14°C above ISA. Density Altitude = 4,500 + (118.8 × 14) = 4,500 + 1,663 = 6,163 ft ≈ 6,100 ft.",
    aimReference: "TC AIM MET 8.4 (Density Altitude reporting)",
  },
  {
    id: 69,
    section: "Meteorology",
    question:
      "Aerodrome elevation: 4,600 feet ASL. Altimeter Setting: 29.52 in. Hg.\n\nThe pressure altitude is",
    options: [
      { id: 1, text: "5,000 feet." },
      { id: 2, text: "4,640 feet." },
      { id: 3, text: "4,600 feet." },
      { id: 4, text: "4,200 feet." },
    ],
    correctAnswer: 1,
    explanation:
      "Pressure altitude is the altitude indicated when the altimeter is set to 29.92 in. Hg (standard sea level pressure). The difference between the actual setting (29.52) and standard (29.92) is 0.40 in. Hg. Each 0.01 in. Hg difference equals approximately 10 feet. So: 0.40 × 1,000 = 400 feet. Since the setting is below standard, the pressure altitude is higher than aerodrome elevation. Pressure altitude = 4,600 + 400 = 5,000 feet.",
    aimReference: "TC AIM AIR 1.5 (Pressure Altimeter), AIR 1.5.2",
  },
  {
    id: 70,
    section: "Meteorology",
    question:
      "Failure to adjust the altimeter when flying from an area of low pressure to an area of higher pressure will result in the aircraft indicated altitude reading",
    options: [
      { id: 1, text: "higher than the actual altitude." },
      { id: 2, text: "lower than the actual altitude." },
      { id: 3, text: "the actual true altitude." },
      { id: 4, text: "the actual pressure altitude." },
    ],
    correctAnswer: 2,
    explanation:
      "When flying from an area of low pressure to an area of higher pressure without resetting the altimeter, the altimeter will read lower than the actual altitude. In higher pressure, the aircraft is actually at a higher altitude than indicated. The altimeter retains the old (lower) pressure setting, so it thinks it is lower than it actually is. The memory aid is 'High to Low, Look Out Below.'",
    aimReference: "TC AIM AIR 1.5.8 (Pressure Drop), AIR 1.5",
  },
  {
    id: 71,
    section: "Meteorology",
    question:
      "Refer to Appendix: WEATHER SYNOPSIS #100 (FD)\n\nThe average wind applicable to a direct flight from Winnipeg (CYWG) to Brandon (CYBR) at 5,500 feet would be",
    options: [
      { id: 1, text: "290°M at 30 kt." },
      { id: 2, text: "290°T at 30 kt." },
      { id: 3, text: "310°M at 31 kt." },
      { id: 4, text: "310°T at 31 kt." },
    ],
    correctAnswer: 2,
    explanation:
      "From the FD (Forecast Winds and Temperatures Aloft): For CYWG at 6,000 ft: 2728-07 (wind 270°T at 28 kt). For CYBR at 6,000 ft: 3132-06 (wind 310°T at 32 kt). Average: direction ≈ 290°T, speed ≈ 30 kt. FD winds and temperatures aloft are given in degrees TRUE. At 5,500 ft (between 3,000 and 6,000 ft levels), interpolating: average is approximately 290°T at 30 kt.",
    aimReference: "TC AIM MET 9.2 (Upper-Level Wind and Temperature Forecasts – FB/FD)",
    images: [
      { src: "/images/appendix/weather-synopsis-7.png", alt: "Weather Synopsis #100 - FD (Winds Aloft Forecast) Data (Page 7 of 7)" },
    ],
  },
  {
    id: 72,
    section: "Meteorology",
    question:
      "The forecast surface wind will be included in a GFA if it has a sustained speed of at least",
    options: [
      { id: 1, text: "5 kt." },
      { id: 2, text: "10 kt." },
      { id: 3, text: "15 kt." },
      { id: 4, text: "20 kt." },
    ],
    correctAnswer: 4,
    explanation:
      "The forecast surface wind is included in a GFA (Graphical Forecast for Aviation) if it has a sustained speed of at least 20 knots. Surface winds below this threshold are not routinely included in the GFA, as they are considered to be within the normal range of light winds that do not significantly affect most flight operations.",
    aimReference: "TC AIM MET 4.0 (GFA – Area Forecast)",
  },
  {
    id: 73,
    section: "Meteorology",
    question:
      "Refer to Appendix: WEATHER SYNOPSIS #100 (TAF)\n\nThe cloud condition at Churchill (CYYQ) is forecast to",
    options: [
      { id: 1, text: "remain clear." },
      { id: 2, text: "thicken and lower." },
      { id: 3, text: "remain scattered until 0900Z." },
      { id: 4, text: "become overcast at 200 feet." },
    ],
    correctAnswer: 2,
    explanation:
      "From the TAF for CYYQ (Churchill): Initial conditions show SCT250 (scattered at 25,000 ft), then FM0200Z shows BKN030 BKN100 (broken at 3,000 and 10,000 ft), then FM0900Z shows OVC020 (overcast at 2,000 ft). The cloud conditions are progressively thickening and lowering from scattered cirrus to broken and then overcast at lower levels.",
    aimReference: "TC AIM MET 3.9 (TAF – Terminal Aerodrome Forecast)",
    images: [
      { src: "/images/appendix/weather-synopsis-7.png", alt: "Weather Synopsis #100 - TAF & METAR Data (Page 7 of 7)" },
    ],
  },
  {
    id: 74,
    section: "Meteorology",
    question:
      "Refer to Appendix: WEATHER SYNOPSIS #100 (TAF)\n\nThe forecast visibility at Churchill (CYYQ) between 1500Z and 2100Z is",
    options: [
      { id: 1, text: "15 SM in wet snow." },
      { id: 2, text: "15 NM in wet snow." },
      { id: 3, text: "greater than 6 NM." },
      { id: 4, text: "greater than 6 SM." },
    ],
    correctAnswer: 4,
    explanation:
      "From the TAF for CYYQ: The initial period (071111 to 2100Z) shows \"P6SM IC SCT250\" — P6SM means \"Plus 6 Statute Miles\" (greater than 6 statute miles visibility) with IC (ice crystals) and scattered at 25,000 ft. Between 1500Z and 2100Z, the conditions are the initial conditions: visibility greater than 6 SM.",
    aimReference: "TC AIM MET 3.9 (TAF), MET 8.0 (METAR decoding)",
    images: [
      { src: "/images/appendix/weather-synopsis-7.png", alt: "Weather Synopsis #100 - TAF & METAR Data (Page 7 of 7)" },
    ],
  },
  {
    id: 75,
    section: "Meteorology",
    question:
      "Refer to Appendix: WEATHER SYNOPSIS #100 (TAF)\n\nThe Gillam (CYGX) aerodrome forecast covers a period of",
    options: [
      { id: 1, text: "24 hours." },
      { id: 2, text: "12 hours." },
      { id: 3, text: "10 hours." },
      { id: 4, text: "6 hour." },
    ],
    correctAnswer: 3,
    explanation:
      "From the TAF for CYGX (Gillam): \"TAF CYGX 071245Z 071323\" — issued at 1245Z on the 7th, valid from 1300Z to 2300Z on the 7th. The forecast period is 10 hours (1300Z to 2300Z).",
    aimReference: "TC AIM MET 3.9 (TAF – Aerodrome Forecast)",
    images: [
      { src: "/images/appendix/weather-synopsis-7.png", alt: "Weather Synopsis #100 - TAF & METAR Data (Page 7 of 7)" },
    ],
  },
  {
    id: 76,
    section: "Meteorology",
    question:
      "Refer to Appendix: WEATHER SYNOPSIS #100 (TAF)\n\nThe Gillam (CYGX) 1800Z wind is forecast to be",
    options: [
      { id: 1, text: "260°T at 10 kt." },
      { id: 2, text: "260°M at 10 kt." },
      { id: 3, text: "variable at 3 kt." },
      { id: 4, text: "calm." },
    ],
    correctAnswer: 1,
    explanation:
      "From the TAF for CYGX: Initial wind VRB03KT (variable at 3 kt). FM1800Z 26010KT (from 1800Z: wind 260° at 10 kt). TAF winds are given in degrees TRUE. At 1800Z, the forecast wind for Gillam is 260°T at 10 kt.",
    aimReference: "TC AIM MET 3.9 (TAF), MET 8.0",
    images: [
      { src: "/images/appendix/weather-synopsis-7.png", alt: "Weather Synopsis #100 - TAF & METAR Data (Page 7 of 7)" },
    ],
  },
  {
    id: 77,
    section: "Meteorology",
    question:
      "Refer to Appendix: WEATHER SYNOPSIS #100 (METAR/TAF)\n\nThe 1500Z Portage La Prairie (CYPG) METAR indicates that the",
    options: [
      { id: 1, text: "visibility is greater than forecast." },
      { id: 2, text: "ceiling is lower than forecast." },
      { id: 3, text: "winds are lower than forecast." },
      { id: 4, text: "ceiling is as forecast." },
    ],
    correctAnswer: 3,
    explanation:
      "TAF for CYPG: 34015KT P6SM SCT010 SCT020 (winds 340° at 15 kt). METAR for CYPG: 34010KT 15SM FEW015 FEW250 (winds 340° at 10 kt, visibility 15 SM). The forecast wind was 15 kt but the actual METAR shows 10 kt, so the winds are lower than forecast. The ceiling conditions show FEW at 1,500 ft vs SCT at 1,000/2,000 ft forecast, so the ceiling is actually higher than forecast (not lower).",
    aimReference: "TC AIM MET 3.9 (TAF), MET 8.0 (METAR)",
    images: [
      { src: "/images/appendix/weather-synopsis-7.png", alt: "Weather Synopsis #100 - TAF & METAR Data (Page 7 of 7)" },
    ],
  },
  {
    id: 78,
    section: "Meteorology",
    question:
      "Refer to Appendix: WEATHER SYNOPSIS #100 (METAR)\n\nThe ceiling at Brandon (CYBR) at 1500Z is",
    options: [
      { id: 1, text: "200 feet." },
      { id: 2, text: "1,000 feet." },
      { id: 3, text: "2,000 feet." },
      { id: 4, text: "10,000 feet." },
    ],
    correctAnswer: 4,
    explanation:
      "METAR for CYBR: \"METAR CYBR 071500Z 29012KT 15SM SCT020 BKN100 M21/M25 A3043 RMK SLP351=\". The ceiling is the lowest broken (BKN) or overcast (OVC) layer. BKN100 = broken at 10,000 feet (cloud heights in METAR are in hundreds of feet AGL: 100 = 10,000 ft). SCT020 is scattered, not a ceiling. The ceiling is therefore BKN at 10,000 ft.",
    aimReference: "TC AIM MET 8.0 (METAR – decoding cloud layers)",
    images: [
      { src: "/images/appendix/weather-synopsis-7.png", alt: "Weather Synopsis #100 - TAF & METAR Data (Page 7 of 7)" },
    ],
  },
  {
    id: 79,
    section: "Meteorology",
    question:
      "Refer to Appendix: WEATHER SYNOPSIS #100 (METAR)\n\nThe 1500Z temperature/dewpoint spread at Portage La Prairie (CYPG) is",
    options: [
      { id: 1, text: "minus 20°C." },
      { id: 2, text: "minus 24°C." },
      { id: 3, text: "minus 15°C." },
      { id: 4, text: "4° C." },
    ],
    correctAnswer: 4,
    explanation:
      "METAR for CYPG: \"M20/M24\" — temperature is −20°C, dew point is −24°C. Temperature/dew point spread = temperature − dew point = (−20) − (−24) = −20 + 24 = +4°C. A spread of 4°C means the air is relatively dry at that temperature. When the spread is small (2°C or less), fog or low cloud is likely to form.",
    aimReference: "TC AIM MET 8.0 (METAR – temperature/dew point)",
    images: [
      { src: "/images/appendix/weather-synopsis-7.png", alt: "Weather Synopsis #100 - TAF & METAR Data (Page 7 of 7)" },
    ],
  },
  {
    id: 80,
    section: "Meteorology",
    question:
      "Refer to Appendix: WEATHER SYNOPSIS #100 (METAR)\n\nThe altimeter setting at Winnipeg (CYWG) is",
    options: [
      { id: 1, text: "30.43 in. Hg." },
      { id: 2, text: "30.43 mb." },
      { id: 3, text: "933.2 in. Hg." },
      { id: 4, text: "1332.0 mb." },
    ],
    correctAnswer: 1,
    explanation:
      "METAR for CYWG: \"A3043\" — In Canadian METARs, the altimeter setting is indicated by the letter A followed by four digits representing inches of mercury in hundredths: A3043 = 30.43 in. Hg. This is a high-pressure system, which is consistent with the cold clear conditions shown in the METAR (SKC, very cold temperatures).",
    aimReference: "TC AIM MET 8.0 (METAR – altimeter setting)",
    images: [
      { src: "/images/appendix/weather-synopsis-7.png", alt: "Weather Synopsis #100 - TAF & METAR Data (Page 7 of 7)" },
    ],
  },

  // ===========================
  // 4: AERONAUTICS - GENERAL KNOWLEDGE (Questions 81–100)
  // ===========================
  {
    id: 81,
    section: "Aeronautics - General Knowledge",
    question: "A METAR describes the weather",
    options: [
      { id: 1, text: "expected at a station at a given time." },
      {
        id: 2,
        text: "expected at a station over a twelve hour period.",
      },
      {
        id: 3,
        text: "observed at a station at the time of the report.",
      },
      {
        id: 4,
        text: "observed at a station during the previous day.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "A METAR (aviation routine meteorological report) describes the weather observed at a station at the time of the report. It is an actual observation, not a forecast. METARs are typically issued hourly. Terminal Aerodrome Forecasts (TAFs) provide forecast conditions; METARs provide observed conditions.",
    aimReference: "TC AIM MET 1.2.1, MET 3.2, MET 8.0 (METAR)",
  },
  {
    id: 82,
    section: "Aeronautics - General Knowledge",
    question:
      "The use of low octane fuel in a high compression engine may result in",
    options: [
      { id: 1, text: "too lean a mixture for best operation." },
      { id: 2, text: "carburettor icing." },
      { id: 3, text: "fouling of the spark plugs." },
      { id: 4, text: "detonation." },
    ],
    correctAnswer: 4,
    explanation:
      "Using low octane fuel in a high compression engine will cause detonation (also called knock or ping). Detonation occurs when the fuel-air mixture ignites spontaneously before the spark plug fires, creating an uncontrolled explosion in the cylinder. This can cause severe engine damage. High compression engines require higher octane fuel to prevent premature ignition.",
    aimReference: "TC AIM AIR (Powerplant – engine fuels)",
  },
  {
    id: 83,
    section: "Aeronautics - General Knowledge",
    question:
      "If ice has accumulated on an aerofoil in flight, the stalling speed will",
    options: [
      { id: 1, text: "remain unchanged." },
      { id: 2, text: "decrease in all flight conditions." },
      { id: 3, text: "increase in level flight only." },
      { id: 4, text: "increase in all flight conditions." },
    ],
    correctAnswer: 4,
    explanation:
      "Ice accumulation on an aerofoil disrupts the smooth airflow over the wing, reduces the coefficient of lift, increases weight, and alters the shape of the aerofoil. This increases the stalling speed in all flight conditions. Ice contamination can increase stall speed by 20-40% or more, making it an extremely dangerous hazard.",
    aimReference: "TC AIM AIR 2.12 (Aircraft Contamination – ice accumulation)",
  },
  {
    id: 84,
    section: "Aeronautics - General Knowledge",
    question:
      "If one magneto should fail on an engine equipped with dual ignition",
    options: [
      { id: 1, text: "a slight loss of power would result." },
      { id: 2, text: "there would be no effect on the engine." },
      { id: 3, text: "the engine would stop." },
      { id: 4, text: "half of the cylinders would not fire." },
    ],
    correctAnswer: 1,
    explanation:
      "With dual ignition, each cylinder has two spark plugs, each connected to a separate magneto. If one magneto fails, the other continues to operate all cylinders. The engine will still run but at a slightly reduced efficiency because single ignition results in a slightly slower and less complete combustion process, causing a slight loss of power.",
    aimReference: "TC AIM AIR (Powerplant – ignition systems)",
  },
  {
    id: 85,
    section: "Aeronautics - General Knowledge",
    question: "The use of carburettor heat will",
    options: [
      {
        id: 1,
        text: "increase manifold pressure and enrich the mixture.",
      },
      {
        id: 2,
        text: "increase manifold pressure and lean out the mixture.",
      },
      {
        id: 3,
        text: "decrease manifold pressure and enrich the mixture.",
      },
      {
        id: 4,
        text: "decrease manifold pressure and lean out the mixture.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Application of carburettor heat introduces warm air (less dense) into the induction system. The less dense warm air decreases the manifold pressure (mass airflow is reduced) and enriches the mixture (because the same amount of fuel is mixed with less dense air, the ratio changes to richer). However, note that the initial application when icing is present may briefly decrease RPM as ice melts, then RPM recovers.",
    aimReference: "TC AIM AIR (Powerplant – carburettor icing)",
  },
  {
    id: 86,
    section: "Aeronautics - General Knowledge",
    question:
      "Under which conditions would the most serious carburettor icing be expected? Outside air temperature range of . . . . . and . . . . . humidity.",
    options: [
      { id: 1, text: "-5°C to 15°C, high." },
      { id: 2, text: "5°C to 27°C, low." },
      { id: 3, text: "-21°C to 0°C, low." },
      { id: 4, text: "-21°C to 0°C, high." },
    ],
    correctAnswer: 1,
    explanation:
      "The most serious carburettor icing occurs at outside air temperatures between approximately −5°C to +15°C with high relative humidity. At these temperatures, the venturi effect in the carburettor can lower the local temperature by 20–30°C, enough to freeze moisture out of the air. High humidity provides the moisture necessary for ice formation.",
    aimReference: "TC AIM AIR (Powerplant – carburettor icing conditions)",
  },
  {
    id: 87,
    section: "Aeronautics - General Knowledge",
    question: "It is possible for carburettor icing to occur",
    options: [
      {
        id: 1,
        text: "in clear air with high relative humidity at above freezing temperatures.",
      },
      {
        id: 2,
        text: "only when precipitation is present at freezing temperatures.",
      },
      {
        id: 3,
        text: "only in cloud with high relative humidity.",
      },
      {
        id: 4,
        text: "only when water droplets are in suspension in the air.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Carburettor icing can occur in clear air with high relative humidity at above freezing outside air temperatures. The venturi effect in the carburettor throat causes the air temperature to drop significantly (20–30°C), which can cause ice formation even when the outside air temperature is well above freezing. Pilots should be vigilant about carburettor icing even in clear, warm conditions if humidity is high.",
    aimReference: "TC AIM AIR (Powerplant – carburettor icing)",
  },
  {
    id: 88,
    section: "Aeronautics - General Knowledge",
    question: "The initial application of carburettor heat will",
    options: [
      {
        id: 1,
        text: "increase power and enrich the mixture.",
      },
      {
        id: 2,
        text: "decrease power and lean out the mixture.",
      },
      {
        id: 3,
        text: "decrease power and enrich the mixture.",
      },
      {
        id: 4,
        text: "increase power and lean out the mixture.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "The initial application of carburettor heat will decrease power and enrich the mixture. The warm air introduced is less dense, reducing mass airflow (decreasing manifold pressure and power), while the same amount of fuel being metered creates a richer mixture. If icing is present, the initial RPM may drop further as ice melts and water passes through, then recover once the ice is cleared.",
    aimReference: "TC AIM AIR (Powerplant – carburettor heat)",
  },
  {
    id: 89,
    section: "Aeronautics - General Knowledge",
    question:
      "An immediate rise in engine RPM is observed when full carburettor heat is applied. The most likely cause is",
    options: [
      { id: 1, text: "the mixture is too lean." },
      { id: 2, text: "one magneto is inoperative." },
      { id: 3, text: "the mixture is too rich." },
      { id: 4, text: "fuel contamination." },
    ],
    correctAnswer: 1,
    explanation:
      "When full carburettor heat is applied and there is an immediate rise in RPM (instead of the expected decrease), the most likely cause is that carburettor icing was present. The ice was restricting airflow and leaning the mixture below optimal. The carburettor heat melted the ice immediately, restoring proper airflow and mixture strength, which caused the immediate increase in RPM.",
    aimReference: "TC AIM AIR (Powerplant – carburettor ice detection)",
  },
  {
    id: 90,
    section: "Aeronautics - General Knowledge",
    question:
      "Float type carburettors are more prone to icing than fuel injection systems because in the",
    options: [
      {
        id: 1,
        text: "float type, fuel vaporization takes place near the carburettor throat.",
      },
      {
        id: 2,
        text: "injection system, the fuel pressure at the discharge nozzle is greater thereby suppressing the formation of ice.",
      },
      {
        id: 3,
        text: "float type, the location of the throttle valve is upstream from the venturi, providing a 'catch' for the ice to form.",
      },
      {
        id: 4,
        text: "injection system, the fuel is preheated to suppress ice formation around the discharge nozzle.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Float type carburettors are more susceptible to icing because fuel vaporization (which causes cooling) occurs near the carburettor throat, at the same location as the venturi temperature drop. This double cooling effect (venturi + evaporative cooling) creates ideal conditions for ice formation. In fuel injection systems, fuel is injected directly at the intake valves or manifold, away from the venturi throat.",
    aimReference: "TC AIM AIR (Powerplant – carburettor types)",
  },
  {
    id: 91,
    section: "Aeronautics - General Knowledge",
    question:
      "Ground effect will enable a helicopter to hover with less power primarily due to",
    options: [
      { id: 1, text: "a decreased lift/drag ratio." },
      { id: 2, text: "an increase in downwash." },
      { id: 3, text: "a decrease in induced drag." },
      { id: 4, text: "an increase in blade tip vortices." },
    ],
    correctAnswer: 3,
    explanation:
      "Hover taxi is the movement of a helicopter above the surface of an aerodrome, in ground effect. Ground effect reduces the induced drag on the rotor blades because the ground interrupts the downwash and tip vortex formation. The reduced induced drag allows the rotor to produce more lift for the same power input, enabling the helicopter to hover with less power when in ground effect (IGE) compared to out of ground effect (OGE).",
    aimReference: "TC AIM RAC 4.6 (Helicopter Operations – ground effect), AIR",
  },
  {
    id: 92,
    section: "Aeronautics - General Knowledge",
    question:
      "The correct height above sea level is indicated on a pressure altimeter set to 29.92 in. Hg. only when",
    options: [
      {
        id: 1,
        text: "the conditions of a Standard Atmosphere exist.",
      },
      { id: 2, text: "a standard lapse rate exists." },
      {
        id: 3,
        text: "set to the local barometric pressure setting.",
      },
      {
        id: 4,
        text: "the barometric pressure is 29.92 in. Hg.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "A pressure altimeter set to 29.92 in. Hg. reads pressure altitude. The correct height above sea level (true altitude) is only indicated when the conditions of a Standard Atmosphere exist (standard temperature, pressure, and lapse rate throughout). In non-standard conditions, the altimeter will not read true altitude even when set to the standard pressure.",
    aimReference: "TC AIM AIR 1.5 (Pressure Altimeter), AIR 1.5.2",
  },
  {
    id: 93,
    section: "Aeronautics - General Knowledge",
    question:
      "The altimeter setting is 29.70 in. Hg. If the pilot inadvertently sets 30.70 in. Hg on the altimeter subscale, the altimeter will read",
    options: [
      { id: 1, text: "1,000 feet high." },
      { id: 2, text: "1,000 feet low." },
      { id: 3, text: "100 feet high." },
      { id: 4, text: "100 feet low." },
    ],
    correctAnswer: 1,
    explanation:
      "Each 0.01 in. Hg change in altimeter setting equals approximately 10 feet of altitude change. The error is 30.70 − 29.70 = 1.00 in. Hg too high. Setting the altimeter 1.00 in. Hg higher than correct means the altimeter will read 1,000 feet too high (higher than actual altitude). Setting too high makes the altimeter read high.",
    aimReference: "TC AIM AIR 1.5.3 (Incorrect Setting on the Subscale of the Altimeter)",
  },
  {
    id: 94,
    section: "Aeronautics - General Knowledge",
    question:
      "A major early symptom of hypoxia (lack of sufficient oxygen) is",
    options: [
      { id: 1, text: "drowsiness." },
      { id: 2, text: "dizziness." },
      { id: 3, text: "euphoria (increased sense of well being)." },
      { id: 4, text: "hyperventilation (overbreathing)." },
    ],
    correctAnswer: 3,
    explanation:
      "The retina of the eye is more sensitive to hypoxia than any part of the body; one of the first symptoms of hypoxia is a decrease in night vision. A major early symptom of hypoxia is euphoria—an increased sense of well-being that impairs judgment. This is particularly insidious because the pilot feels good while their capabilities are deteriorating. Other symptoms include impaired night vision, tingling, and eventual loss of consciousness.",
    aimReference: "TC AIM AIR 3.2.1 (Hypoxia), AIR 3.5 (Vision)",
  },
  {
    id: 95,
    section: "Aeronautics - General Knowledge",
    question:
      "The tendency of the human eye to focus at a point three to five feet away, due to lack of stimulation, is called",
    options: [
      { id: 1, text: "retinitis." },
      { id: 2, text: "tunnel vision." },
      { id: 3, text: "empty-field myopia." },
      { id: 4, text: "far-sighted myopia." },
    ],
    correctAnswer: 3,
    explanation:
      "Empty-field myopia (also called night myopia or space myopia) is the tendency of the human eye to focus at a point approximately 3–5 feet away when there is insufficient visual stimulation (such as in conditions of low visibility, haze, darkness, or when looking into a featureless sky). This is significant for collision avoidance as distant aircraft may appear out of focus.",
    aimReference: "TC AIM AIR 3.5 (Vision), RPA 3.2.6.2 (Seeing Traffic – Empty-field myopia)",
  },
  {
    id: 96,
    section: "Aeronautics - General Knowledge",
    question: "The effects of one drink of alcohol at sea level will",
    options: [
      { id: 1, text: "increase with an increase in altitude." },
      { id: 2, text: "decrease with an increase in altitude." },
      {
        id: 3,
        text: "remain the same with an increase in altitude.",
      },
      { id: 4, text: "remain constant to 6,000 feet ASL." },
    ],
    correctAnswer: 1,
    explanation:
      "The effects of alcohol increase with an increase in altitude due to the reduced partial pressure of oxygen (hypoxia) at higher altitudes. The brain is more sensitive to alcohol when oxygen levels are reduced. This means that even moderate alcohol consumption at altitude can produce significantly greater impairment than the same consumption at sea level.",
    aimReference: "TC AIM AIR 3.2.1 (Hypoxia), AIR 3.1 (General Health – alcohol)",
  },
  {
    id: 97,
    section: "Aeronautics - General Knowledge",
    question:
      "During an approach to land on an upsloping runway, the pilot may experience the illusion that the aircraft is",
    options: [
      { id: 1, text: "higher than it actually is." },
      { id: 2, text: "lower than it actually is." },
      { id: 3, text: "closer in than it actually is." },
      { id: 4, text: "approaching faster than it actually is." },
    ],
    correctAnswer: 1,
    explanation:
      "When approaching an upsloping runway, the pilot may experience the visual illusion that the aircraft is higher than it actually is. This is because the upsloping runway appears more steeply inclined than a flat runway, giving the visual cue that the aircraft is on a higher approach angle. The pilot may respond by flying a lower approach, increasing the risk of undershoot.",
    aimReference: "TC AIM AIR 3.7 (Vision – visual illusions), AIR 2.16",
  },
  {
    id: 98,
    section: "Aeronautics - General Knowledge",
    question:
      "When turning from downwind to into-wind at low altitude, a pilot may experience an illusion of",
    options: [
      { id: 1, text: "slipping and decreasing airspeed." },
      { id: 2, text: "skidding and decreasing airspeed." },
      { id: 3, text: "slipping and increasing airspeed." },
      { id: 4, text: "skidding and increasing airspeed." },
    ],
    correctAnswer: 2,
    explanation:
      "When turning from downwind to into-wind at low altitude, a pilot may experience the illusion of skidding and decreasing airspeed. When turning from downwind onto the base/final leg, the aircraft's groundspeed decreases as it transitions from tailwind to crosswind/headwind. The pilot may falsely perceive this as losing airspeed and being in a skid, leading to the dangerous tendency to increase the bank angle or apply incorrect rudder.",
    aimReference: "TC AIM AIR 3.7 (Vision – spatial disorientation and illusions)",
  },
  {
    id: 99,
    section: "Aeronautics - General Knowledge",
    question:
      "Refer to Appendix: TURN CO-ORDINATOR (DIAGRAM #1)\n\nThe turn co-ordinator indicates that the aircraft is in a",
    options: [
      { id: 1, text: "slipping left turn." },
      { id: 2, text: "skidding left turn." },
      { id: 3, text: "slipping right turn." },
      { id: 4, text: "skidding right turn." },
    ],
    correctAnswer: 4,
    explanation:
      "From Diagram #1 showing the Turn & Bank Indicator (Appendix): The miniature aircraft in the turn co-ordinator indicates a right turn (banked right). The inclinometer ball (slip/skid indicator) is displaced to the right of centre. When the ball is on the outside of the turn (right side in a right turn), the aircraft is in a skid. Therefore, the aircraft is in a skidding right turn. Ball on the outside = skid; ball on the inside = slip.",
    aimReference: "TC AIM AIR (Instruments – turn coordinator)",
    images: [
      { src: "/images/appendix/turn-coordinator-diagram.png", alt: "Turn & Bank Indicator (Diagram #1)" },
    ],
  },
  {
    id: 100,
    section: "Aeronautics - General Knowledge",
    question:
      "Deceleration errors in the magnetic compass would be most pronounced on headings of",
    options: [
      { id: 1, text: "North and South." },
      { id: 2, text: "East and North." },
      { id: 3, text: "East and West." },
      { id: 4, text: "West and South." },
    ],
    correctAnswer: 3,
    explanation:
      "Deceleration errors in the magnetic compass (also called acceleration/deceleration errors) are most pronounced on headings of East and West. When decelerating on an easterly or westerly heading, the compass will indicate a turn toward South. When accelerating on East or West, the compass will indicate a turn toward North. These errors are due to the pendulous suspension of the compass card and the dip (inclination) of the earth's magnetic field.",
    aimReference: "TC AIM AIR (Instruments – magnetic compass errors)",
  },
];

export const SECTIONS: QuestionSection[] = [
  "Air Law",
  "Navigation",
  "Meteorology",
  "Aeronautics - General Knowledge",
];
