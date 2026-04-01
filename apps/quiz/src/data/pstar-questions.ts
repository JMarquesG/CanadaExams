export type PstarSection =
  | "Collision Avoidance"
  | "Visual Signals"
  | "Communications"
  | "Aerodromes"
  | "Equipment"
  | "Pilot Responsibilities"
  | "Wake Turbulence"
  | "Aeromedical"
  | "Flight Plans and Flight Itineraries"
  | "Clearances and Instructions"
  | "Aircraft Operations"
  | "Regulations - Canadian Airspace"
  | "Controlled Airspace"
  | "Aviation Occurrences";

export interface PstarQuestion {
  id: number;
  section: PstarSection;
  question: string;
  options: { id: number; text: string }[];
  correctAnswer: number;
  reference?: string;
  explanation?: string;
}

export const pstarQuestions: PstarQuestion[] = [
  // ===========================
  // 1: COLLISION AVOIDANCE
  // ===========================
  {
    id: 1,
    section: "Collision Avoidance",
    question:
      "Which statement is true with regard to aircraft converging at approximately the same altitude?",
    options: [
      { id: 1, text: "A jet airliner has the right of way over all other aircraft." },
      { id: 2, text: "An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft." },
      { id: 3, text: "An aeroplane has the right of way over all other aircraft which are converging from the left." },
      { id: 4, text: "Aeroplanes towing gliders must give way to helicopters." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.19(2)",
    explanation: "An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft. The rule states the aircraft that has the other on its right shall give way.",
  },
  {
    id: 2,
    section: "Collision Avoidance",
    question:
      "When two aircraft are converging at approximately the same altitude",
    options: [
      { id: 1, text: "both aircraft shall alter heading to the left." },
      { id: 2, text: "the aircraft on the right shall avoid the other by descending." },
      { id: 3, text: "the aircraft that has the other on its right shall give way." },
      { id: 4, text: "the aircraft that has the other on its left shall give way." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.19(3)",
    explanation: "The aircraft that has the other on its right shall give way. Use hands or model airplanes to practice which aircraft has right of way in converging scenarios.",
  },
  {
    id: 3,
    section: "Collision Avoidance",
    question:
      "When two aircraft are converging at approximately the same altitude, which statement applies?",
    options: [
      { id: 1, text: "Gliders shall give way to helicopters." },
      { id: 2, text: "Aeroplanes shall give way to power-driven heavier-than-air aircraft." },
      { id: 3, text: "Gliders shall give way to aeroplanes." },
      { id: 4, text: "Power-driven heavier-than-air aircraft shall give way to gliders." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.19(2)",
    explanation: "A glider is NOT power-driven, and it has the right of way over power-driven aircraft.",
  },
  {
    id: 4,
    section: "Collision Avoidance",
    question:
      "When two aircraft are converging at approximately the same altitude, which statement applies?",
    options: [
      { id: 1, text: "Gliders shall give way to helicopters." },
      { id: 2, text: "Aeroplanes shall give way to helicopters." },
      { id: 3, text: "Helicopters shall give way to aeroplanes." },
      { id: 4, text: "Helicopters shall give way to gliders." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.19(2)",
    explanation: "Everyone except balloons gives way to gliders.",
  },
  {
    id: 5,
    section: "Collision Avoidance",
    question:
      "When two aircraft are converging at approximately the same altitude, which statement applies?",
    options: [
      { id: 1, text: "Gliders shall give way to helicopters." },
      { id: 2, text: "Aeroplanes shall give way to helicopters." },
      { id: 3, text: "Helicopters shall give way to aeroplanes." },
      { id: 4, text: "Gliders shall give way to balloons." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.19(2)",
    explanation: "Priority order is: balloons first, then gliders, then helicopters and airplanes together.",
  },
  {
    id: 6,
    section: "Collision Avoidance",
    question: "When converging at approximately the same altitude",
    options: [
      { id: 1, text: "balloons shall give way to hang gliders." },
      { id: 2, text: "aeroplanes towing gliders shall give way to balloons." },
      { id: 3, text: "balloons shall give way to gliders." },
      { id: 4, text: "balloons shall give way to airships." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.19(2)",
    explanation: "Balloons have the right of way over everyone.",
  },
  {
    id: 7,
    section: "Collision Avoidance",
    question:
      "When two power-driven heavier-than-air aircraft are converging at approximately the same altitude,",
    options: [
      { id: 1, text: "the one on the left has the right of way." },
      { id: 2, text: "both shall alter heading to the left." },
      { id: 3, text: "the one on the right has the right of way." },
      { id: 4, text: "the one on the right shall give way by descending." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.19(3)",
    explanation: "The aircraft on the right has right of way.",
  },
  {
    id: 8,
    section: "Collision Avoidance",
    question:
      "When two aircraft are approaching head-on or approximately so and there is danger of collision, each pilot shall",
    options: [
      { id: 1, text: "decrease airspeed." },
      { id: 2, text: "increase airspeed." },
      { id: 3, text: "alter heading to the right." },
      { id: 4, text: "alter heading to the left." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.19(4)",
    explanation: "Turn to your own right when meeting head-on, matching how vehicles would meet on a narrow road.",
  },
  {
    id: 9,
    section: "Collision Avoidance",
    question:
      "When overtaking an aircraft at your 12 o'clock position, at your altitude, you should",
    options: [
      { id: 1, text: "climb." },
      { id: 2, text: "descend." },
      { id: 3, text: "alter heading to the right." },
      { id: 4, text: "alter heading to the left." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.19(5)",
    explanation: "Alter heading to the right when an aircraft is ahead, regardless of its direction.",
  },
  {
    id: 10,
    section: "Collision Avoidance",
    question:
      "Two aircraft are on approach to land, the aircraft at the higher altitude shall",
    options: [
      { id: 1, text: "have the right of way." },
      { id: 2, text: "overtake the lower aircraft on the left." },
      { id: 3, text: "give way." },
      { id: 4, text: "complete a 360° turn to the right." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.19(8)",
    explanation: "If you must overtake, do it on the right.",
  },

  // ===========================
  // 2: VISUAL SIGNALS
  // ===========================
  {
    id: 11,
    section: "Visual Signals",
    question:
      "A series of green flashes directed at an aircraft in flight / on the ground means respectively",
    options: [
      { id: 1, text: "cleared to land; cleared to taxi." },
      { id: 2, text: "return for landing; cleared for take-off." },
      { id: 3, text: "return for landing; cleared to taxi." },
      { id: 4, text: "cleared to land; cleared for take-off." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.17",
    explanation: "Memorize the light signals table: steady green in the air means cleared to land, steady green on ground means cleared for take-off.",
  },
  {
    id: 12,
    section: "Visual Signals",
    question:
      "A steady red light directed at an aircraft in flight / on the ground means",
    options: [
      { id: 1, text: "give way to other aircraft and continue circling; stop." },
      { id: 2, text: "give way to other aircraft and continue circling; taxi clear of landing area in use." },
      { id: 3, text: "airport unsafe do not land; taxi clear of landing area in use." },
      { id: 4, text: "airport unsafe do not land; stop." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.17",
    explanation: "Flashing green in the air means return for landing, flashing green on ground means cleared to taxi.",
  },
  {
    id: 13,
    section: "Visual Signals",
    question:
      "A series of red flashes directed at an aircraft in flight / on the ground means respectively",
    options: [
      { id: 1, text: "airport unsafe, do not land; taxi clear of landing area in use." },
      { id: 2, text: "give way to other aircraft and continue circling; stop." },
      { id: 3, text: "do not land for time being; return to starting point on airport." },
      { id: 4, text: "you are in prohibited area, alter course; stop." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.17",
    explanation: "Flashing red in the air means airport unsafe, do not land. On the ground, flashing red means taxi clear of landing area in use.",
  },
  {
    id: 14,
    section: "Visual Signals",
    question:
      "A steady green light directed at an aircraft in flight / on the ground means respectively",
    options: [
      { id: 1, text: "cleared to land; cleared to taxi." },
      { id: 2, text: "return for landing; cleared to taxi." },
      { id: 3, text: "return for landing; cleared for take-off." },
      { id: 4, text: "cleared to land; cleared for take-off." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.17",
    explanation: "Steady red in the air means give way to other aircraft and continue circling. On ground, steady red means stop.",
  },
  {
    id: 15,
    section: "Visual Signals",
    question:
      "A flashing white light directed at an aircraft on the manoeuvring area means",
    options: [
      { id: 1, text: "stop." },
      { id: 2, text: "return to starting point on the airport." },
      { id: 3, text: "cleared to taxi." },
      { id: 4, text: "taxi clear of landing area in use." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.17",
    explanation: "Blinking white on the ground means return to starting point on the airport.",
  },
  {
    id: 16,
    section: "Visual Signals",
    question:
      "Blinking runway lights advise vehicles and pedestrians to",
    options: [
      { id: 1, text: "return to the apron." },
      { id: 2, text: "vacate the runways immediately." },
      { id: 3, text: "be aware that an emergency is in progress; continue with caution." },
      { id: 4, text: "be aware that an emergency is in progress; hold your position." },
    ],
    correctAnswer: 2,
    reference: "AIM RAC 4.4.4",
    explanation: "Red flare or red pyrotechnics while on the ground means be aware that there is an emergency in progress. Vacate the runways immediately.",
  },
  {
    id: 17,
    section: "Visual Signals",
    question:
      "Chrome yellow and black strips painted on pylons or on the roof of a building identifies",
    options: [
      { id: 1, text: "an area where explosives are in use." },
      { id: 2, text: "a fur farm." },
      { id: 3, text: "an artillery range." },
      { id: 4, text: "an open pit mine." },
    ],
    correctAnswer: 2,
    reference: "AIM MAP 7.5",
    explanation: "The symbol on charts for an area where explosives are in use may also indicate an artillery range or open pit mine. Mink and similar animals on fur farms will eat their young if very frightened by low-flying aircraft.",
  },
  {
    id: 18,
    section: "Visual Signals",
    question:
      "Pilots should not overfly reindeer or caribou at an altitude of less than",
    options: [
      { id: 1, text: "2,500 feet AGL." },
      { id: 2, text: "2,000 feet AGL." },
      { id: 3, text: "1,500 feet AGL." },
      { id: 4, text: "1,000 feet AGL." },
    ],
    correctAnswer: 2,
    reference: "AIM AIR 2.3",
    explanation: "Low flying airplanes frighten and disturb wild animals and can interfere with grazing, mating and other activities. Remember TWO thousand feet because most of these animals have TWO antlers.",
  },

  // ===========================
  // 3: COMMUNICATIONS
  // ===========================
  {
    id: 19,
    section: "Communications",
    question:
      "When making initial contact with a Canadian ATC unit, the pilot of aircraft C-GFLU should transmit the registration as",
    options: [
      { id: 1, text: "Lima - Uniform over." },
      { id: 2, text: "Foxtrot - Lima - Uniform over." },
      { id: 3, text: "Golf - Foxtrot - Lima - Uniform over." },
      { id: 4, text: "Charlie - Golf - Foxtrot - Lima - Uniform over." },
    ],
    correctAnswer: 3,
    reference: "AIM COM 5.2",
    explanation: "Initial contact requires manufacturer name or aircraft type followed by last four letters of registration using the phonetic alphabet (e.g., 'Cessna Golf Alfa Delta Tango').",
  },
  {
    id: 20,
    section: "Communications",
    question:
      "When making initial contact with a Canadian ATC unit, the pilot of aircraft C-FBSQ should transmit the registration as",
    options: [
      { id: 1, text: "FBSQ." },
      { id: 2, text: "Fox, Baker, Sugar, Queen." },
      { id: 3, text: "Foxtrot, Bravo, Sierra, Quebec." },
      { id: 4, text: "Bravo, Sierra, Quebec." },
    ],
    correctAnswer: 3,
    reference: "AIM COM 5.2",
    explanation: "Memorize phonetic equivalents for your aircraft's registration letters before making radio calls. For the PSTAR exam, focus on Foxtrot, Sierra, Quebec, and Bravo.",
  },
  {
    id: 21,
    section: "Communications",
    question:
      "After a Canadian privately registered aircraft has made initial contact with an ATS unit, which items may be omitted from subsequent transmissions? The aircraft type and",
    options: [
      { id: 1, text: "any registration letters omitted by ATS in the last communication." },
      { id: 2, text: "the first two letters of the registration, if initiated by ATS." },
      { id: 3, text: "the first three letters of the registration." },
      { id: 4, text: "the phonetic equivalents." },
    ],
    correctAnswer: 2,
    reference: "AIM COM 5.2",
    explanation: "You must use the full phonetic alphabet for all letters every time. Abbreviated three-letter versions are only permitted if the air traffic service initiates the shortening.",
  },
  {
    id: 22,
    section: "Communications",
    question:
      "On initial radio contact with an ATS unit the pilot shall transmit the",
    options: [
      { id: 1, text: "type of aircraft and last four letters of the registration in phonetics." },
      { id: 2, text: "last three letters of the registration in phonetics." },
      { id: 3, text: "whole registration in phonetics." },
      { id: 4, text: "type of aircraft and the last three letters of the registration in phonetics." },
    ],
    correctAnswer: 1,
    reference: "AIM COM 5.2",
    explanation: "Include aircraft type/manufacturer in initial contact to convey speed, maneuverability, and appearance information, but omit it from subsequent transmissions.",
  },
  {
    id: 23,
    section: "Communications",
    question: "ATIS is normally provided",
    options: [
      { id: 1, text: "to replace the FSS." },
      { id: 2, text: "to relieve frequency congestion." },
      { id: 3, text: "for the rapid updating of weather forecasts." },
      { id: 4, text: "only when VFR conditions exist at airports." },
    ],
    correctAnswer: 2,
    reference: "AIM COM 5.6",
    explanation: "ATIS broadcasts continuously updated recorded airport information. For weather beyond the airport, contact Flight Service Station. ATIS reduces controller frequency congestion.",
  },
  {
    id: 24,
    section: "Communications",
    question:
      "Where ATIS is available the information which should be included on first contact with ATC is the",
    options: [
      { id: 1, text: 'phrase "with the numbers".' },
      { id: 2, text: 'phrase "ATIS received".' },
      { id: 3, text: 'phrase "with the information".' },
      { id: 4, text: "ATIS phonetic identifier." },
    ],
    correctAnswer: 4,
    reference: "AIM COM 5.6",
    explanation: "'With the numbers' indicates you've already received altimeter setting, winds, and runway information from listening to another aircraft's briefing.",
  },
  {
    id: 25,
    section: "Communications",
    question:
      "Whenever practicable, pilots operating VFR en route in uncontrolled airspace should continuously monitor",
    options: [
      { id: 1, text: "126.7 MHz." },
      { id: 2, text: "123.2 MHz." },
      { id: 3, text: "122.8 MHz." },
      { id: 4, text: "122.2 MHz." },
    ],
    correctAnswer: 1,
    reference: "AIM COM 5.14",
    explanation: "Monitor 126.7 MHz for VFR enroute operations in uncontrolled airspace to hear position reports and access FSS services.",
  },
  {
    id: 26,
    section: "Communications",
    question:
      "En route aircraft should, whenever possible, maintain a listening watch for aircraft in distress on",
    options: [
      { id: 1, text: "the receiver mode of the ELT." },
      { id: 2, text: "121.5 on the aircraft receiver." },
      { id: 3, text: "121.5 during the first 5 minutes of each hour." },
      { id: 4, text: "the voice frequency of the navigation aid in use." },
    ],
    correctAnswer: 2,
    reference: "AIM COM 5.14",
    explanation: "An ELT is a transmitter-only device with no receiver mode. If equipped with two radios, tune to 126.7 and 121.5. Testing is only permitted during the first five minutes of the hour.",
  },
  {
    id: 27,
    section: "Communications",
    question:
      "The specific frequency, distance and altitude within which MF procedures are to be followed are given in the",
    options: [
      { id: 1, text: "CFS." },
      { id: 2, text: "Designated Airspace Handbook." },
      { id: 3, text: "A.I.P. Canada." },
      { id: 4, text: "Flight Training Manual." },
    ],
    correctAnswer: 1,
    reference: "AIM RAC 4.5.7",
    explanation: "The CFS (Canada Flight Supplement) provides details on every Canadian airport. Consult it or your instructor for reference materials.",
  },
  {
    id: 28,
    section: "Communications",
    question:
      "Pilots broadcasting on a MF where no ground station is in operation should direct their transmission to the",
    options: [
      { id: 1, text: "aerodrome UNICOM." },
      { id: 2, text: "closest ATC unit." },
      { id: 3, text: "aerodrome traffic." },
      { id: 4, text: "first aircraft heard on the frequency." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 4.5.7",
    explanation: "At uncontrolled fields, address traffic as 'Powell River Traffic' or similar \\u2014 you are communicating with all traffic, not air traffic control.",
  },
  {
    id: 29,
    section: "Communications",
    question:
      "Pilots operating in VMC and intending to land at aerodromes where no UNICOM exists, should broadcast their intentions on the ATF of",
    options: [
      { id: 1, text: "121.5 MHz." },
      { id: 2, text: "122.2 MHz." },
      { id: 3, text: "123.2 MHz." },
      { id: 4, text: "126.7 MHz." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 4.5.7",
    explanation: "121.5 MHz is the emergency frequency.",
  },
  {
    id: 30,
    section: "Communications",
    question:
      "If a MF is in use, pilots departing VFR shall monitor that frequency until",
    options: [
      { id: 1, text: "beyond the specified distance or altitude." },
      { id: 2, text: "established en route." },
      { id: 3, text: "established at cruise altitude." },
      { id: 4, text: "clear of the aerodrome circuit pattern." },
    ],
    correctAnswer: 1,
    reference: "AIM RAC 4.5.7",
    explanation: "Per CARs 602.97, remain on the Mandatory Frequency until outside the designated area. AIP RAC recommends monitoring 5-10 nm further.",
  },
  {
    id: 31,
    section: "Communications",
    question:
      "A pilot is cleared to taxi to the runway in use without a hold short clearance. To get there, the aircraft must cross two taxiways and one runway. This authorizes the pilot to taxi to",
    options: [
      { id: 1, text: "the runway in use, but must hold short." },
      { id: 2, text: "the runway in use, but further clearance is required to cross each taxiway and runway en route." },
      { id: 3, text: "position on the runway without further clearance." },
      { id: 4, text: "the runway in use, but further clearance is required to cross the other runway." },
    ],
    correctAnswer: 4,
    reference: "AIM RAC 4.3.2",
    explanation: "Unless specific crossing instructions were given, hold short of runways and request authorization before crossing during taxi.",
  },
  {
    id: 32,
    section: "Communications",
    question:
      'Ground control authorizes "GOLF ALPHA BRAVO CHARLIE TAXI RUNWAY 29 HOLD SHORT OF RUNWAY 04". The pilot should acknowledge this by replying "GOLF ALPHA BRAVO CHARLIE TO',
    options: [
      { id: 1, text: 'RUNWAY 04".' },
      { id: 2, text: 'RUNWAY 29".' },
      { id: 3, text: 'HOLD SHORT OF 29".' },
      { id: 4, text: 'HOLD SHORT OF 04".' },
    ],
    correctAnswer: 4,
    reference: "AIM RAC 4.3.2",
    explanation: "Restrictions are the only part of a VFR clearance requiring readback.",
  },
  {
    id: 33,
    section: "Communications",
    question:
      'When a clearance for an "immediate take-off" is accepted, the pilot shall',
    options: [
      { id: 1, text: "back-track on the runway to use the maximum available length for take-off." },
      { id: 2, text: "taxi to a full stop in position on the runway and take off without further clearance." },
      { id: 3, text: "taxi onto the runway and take off in one continuous movement." },
      { id: 4, text: "complete the pre-take-off check before taxiing onto the runway and taking off." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 4.3.2",
    explanation: "If offered immediate takeoff but unable to comply safely, respond 'Unable' and remain stationary. There is no penalty for refusing.",
  },
  {
    id: 34,
    section: "Communications",
    question:
      'A pilot flying a heading of 270°, receives the following message from ATC, "Traffic 2 o\'clock, 5 miles, eastbound". This information indicates the traffic is',
    options: [
      { id: 1, text: "60° to the left, altitude unknown." },
      { id: 2, text: "60° to the right, altitude unknown." },
      { id: 3, text: "90° to the right, at same altitude." },
      { id: 4, text: "90° to the left, at same altitude." },
    ],
    correctAnswer: 2,
    reference: "AIM RAC 1.5",
    explanation: "Controllers provide known traffic altitude and indicate if altitude is 'unverified' or based solely on transponder reply.",
  },
  {
    id: 35,
    section: "Communications",
    question:
      'A pilot receives the following ATC clearance "CLEARED TO LAND, TURN RIGHT AT THE FIRST INTERSECTION". The pilot should',
    options: [
      { id: 1, text: "land and attempt to turn off even though the speed is considered too high to safely accomplish the turn." },
      { id: 2, text: "complete a touch-and-go if it is not possible to safely accomplish the turn." },
      { id: 3, text: "land and turn off at the nearest intersection possible commensurate with safety." },
      { id: 4, text: "land and do a 180° turn and taxi back to clear the runway at the required intersection." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 4.3.2",
    explanation: "Never comply with instructions that compromise safety, regardless of source. Prioritize safe operation.",
  },
  {
    id: 36,
    section: "Communications",
    question:
      "The radiotelephone distress signal to indicate grave and/or imminent danger requiring immediate assistance is",
    options: [
      { id: 1, text: "MAYDAY, MAYDAY, MAYDAY." },
      { id: 2, text: "PAN PAN, PAN PAN, PAN PAN." },
      { id: 3, text: "SECURITY, SECURITY, SECURITY." },
      { id: 4, text: "EMERGENCY, EMERGENCY, EMERGENCY." },
    ],
    correctAnswer: 1,
    reference: "AIM COM 5.8",
    explanation: "MAYDAY, MAYDAY, MAYDAY signals grave and imminent danger requiring immediate assistance.",
  },
  {
    id: 37,
    section: "Communications",
    question:
      "The radiotelephone urgency signal to indicate a condition concerning the safety of an aircraft, vehicle or of some person on board which does not require immediate assistance is",
    options: [
      { id: 1, text: "MAYDAY, MAYDAY, MAYDAY." },
      { id: 2, text: "PAN PAN, PAN PAN, PAN PAN." },
      { id: 3, text: "EMERGENCY, EMERGENCY, EMERGENCY." },
      { id: 4, text: "URGENCY, URGENCY, URGENCY." },
    ],
    correctAnswer: 2,
    reference: "AIM COM 5.8",
    explanation: "PAN PAN, PAN PAN, PAN PAN signals urgency concerning aircraft, vehicle, or person safety \\u2014 not requiring immediate assistance.",
  },
  {
    id: 38,
    section: "Communications",
    question:
      "What should be included along with the call sign of the aircraft and time, to indicate cancellation of a distress message?",
    options: [
      { id: 1, text: "MAYDAY, MAYDAY, MAYDAY, ALL STATIONS, DISTRESS TRAFFIC ENDED, OUT." },
      { id: 2, text: "MAYDAY, ALL STATIONS, ALL STATIONS, ALL STATIONS, SILENCE FINISHED, OUT." },
      { id: 3, text: "MAYDAY CANCELLED, MAYDAY CANCELLED, MAYDAY CANCELLED." },
      { id: 4, text: "ALL STATIONS, ALL STATIONS, ALL STATIONS, EMERGENCY OVER." },
    ],
    correctAnswer: 2,
    reference: "AIM COM 5.8",
    explanation: "Transmit one MAYDAY followed by three 'ALL STATIONS' transmissions. Conclude with 'distress traffic ended,' 'silence finished,' or 'seelonce finie.'",
  },
  {
    id: 39,
    section: "Communications",
    question:
      "A departing flight will normally remain on tower frequency until",
    options: [
      { id: 1, text: "the flight is 2,000 feet AGL." },
      { id: 2, text: "25 NM from the airport." },
      { id: 3, text: "15 NM from the Control Zone." },
      { id: 4, text: "clear of the Control Zone." },
    ],
    correctAnswer: 4,
    reference: "AIM RAC 4.3.5",
    explanation: "Departing aircraft normally remain on tower frequency until clear of the Control Zone. Early departure requires requesting, obtaining, and acknowledging permission.",
  },
  {
    id: 40,
    section: "Communications",
    question:
      "You advise ATC that you are on the downwind leg. If there is other traffic in the circuit, ATC will then",
    options: [
      { id: 1, text: "inform you of your number in the approach sequence or other appropriate instructions." },
      { id: 2, text: "inform you of the runway in use, wind and altimeter." },
      { id: 3, text: "advise you of all other circuit traffic." },
      { id: 4, text: "clear you to land." },
    ],
    correctAnswer: 1,
    reference: "AIM RAC 4.3.5",
    explanation: "Listen for position reports identifying preceding traffic. Landing clearance timing varies from downwind to short final.",
  },
  {
    id: 41,
    section: "Communications",
    question:
      "A radio equipped aircraft has been cleared to land at a controlled airport. The pilot should acknowledge the clearance by",
    options: [
      { id: 1, text: 'replying "Roger".' },
      { id: 2, text: 'replying "Wilco".' },
      { id: 3, text: "clicking the microphone button." },
      { id: 4, text: "transmitting the aircraft call sign." },
    ],
    correctAnswer: 4,
    reference: "AIM COM 5.2",
    explanation: "Simply transmitting your callsign signifies receipt, understanding, and compliance. Clarify anything misunderstood rather than remaining silent.",
  },
  {
    id: 42,
    section: "Communications",
    question:
      'An initial call to Timmins FSS should be "Timmins',
    options: [
      { id: 1, text: 'radio this is..."' },
      { id: 2, text: 'Flight Service Station this is..."' },
      { id: 3, text: 'UNICOM this is..."' },
      { id: 4, text: 'this is..."' },
    ],
    correctAnswer: 1,
    reference: "AIM COM 5.2",
    explanation: "All airport radio operators are historically addressed as 'Radio' despite title changes \\u2014 the call sign remained constant.",
  },
  {
    id: 43,
    section: "Communications",
    question:
      "A responsibility of a flight service specialist is to provide",
    options: [
      { id: 1, text: "air traffic control." },
      { id: 2, text: "flight planning service." },
      { id: 3, text: "air traffic service in uncontrolled airspace only." },
      { id: 4, text: "terminal radar service." },
    ],
    correctAnswer: 2,
    reference: "AIM COM 5.11",
    explanation: "FSS provides weather, NOTAMs, and flight plan filing services in controlled or uncontrolled airspace.",
  },
  {
    id: 44,
    section: "Communications",
    question: "NOTAM are",
    options: [
      { id: 1, text: "available at all FSS." },
      { id: 2, text: "mailed to all pilots." },
      { id: 3, text: "issued for airport facility closures only." },
      { id: 4, text: "valid for 24 hours." },
    ],
    correctAnswer: 1,
    reference: "AIM MAP 1.6",
    explanation: "NOTAMs address airport closures, navaid outages, runway hazards, airshows, parachute jumping, antenna installation, and airspace changes.",
  },
  {
    id: 45,
    section: "Communications",
    question:
      'A new or replacing NOTAM without the term "APRX" is valid',
    options: [
      { id: 1, text: "for 48 hours only." },
      { id: 2, text: "for the day it was issued." },
      { id: 3, text: "until the time quoted in the NOTAM." },
      { id: 4, text: "until a cancelling NOTAM is issued." },
    ],
    correctAnswer: 3,
    reference: "AIM MAP 1.6",
    explanation: "APRX means approximately. Without APRX notation, NOTAMs expire at the specified time.",
  },
  {
    id: 46,
    section: "Communications",
    question:
      'The term "APRX" when contained in a new or replacing NOTAM means the NOTAM is valid',
    options: [
      { id: 1, text: "for approximately 24 hours." },
      { id: 2, text: "for approximately 48 hours." },
      { id: 3, text: "until the time quoted in the NOTAM." },
      { id: 4, text: "until a cancelling or replacing NOTAM is issued." },
    ],
    correctAnswer: 4,
    reference: "AIM MAP 1.6",
    explanation: "When a NOTAM time shows APRX, a cancelling NOTAM must be issued. Exact times require no cancellation.",
  },
  {
    id: 47,
    section: "Communications",
    question:
      "Your radio transmissions are reported READABILITY THREE. This means that your transmissions are",
    options: [
      { id: 1, text: "readable now and then." },
      { id: 2, text: "readable with difficulty." },
      { id: 3, text: "readable." },
      { id: 4, text: "perfectly readable." },
    ],
    correctAnswer: 2,
    reference: "AIM COM 5.2",
    explanation: "Signal strength indicates volume level (1=bad, 5=excellent). Readability indicates clarity (1=unreadable, 5=perfectly readable).",
  },

  // ===========================
  // 4: AERODROMES
  // ===========================
  {
    id: 48,
    section: "Aerodromes",
    question: "An airport is",
    options: [
      { id: 1, text: "an aerodrome with paved runways." },
      { id: 2, text: "an aerodrome with a control tower." },
      { id: 3, text: "an uncertified aerodrome." },
      { id: 4, text: "a certified aerodrome." },
    ],
    correctAnswer: 4,
    reference: "CAR 101.01",
    explanation: "A registered aerodrome is any aerodrome listed in the CFS or WAS. Certification as an airport requires meeting stricter standards and is denoted by 'Cert' in the OPR section.",
  },
  {
    id: 49,
    section: "Aerodromes",
    question:
      "A dry Transport Canada standard wind direction indicator when horizontal indicates a wind speed of at least",
    options: [
      { id: 1, text: "25 kt." },
      { id: 2, text: "15 kt." },
      { id: 3, text: "10 kt." },
      { id: 4, text: "6 kt." },
    ],
    correctAnswer: 2,
    reference: "AIM AGA 4.3",
    explanation: "A windsock estimates wind speed: the wind is blowing at about five knots per orange stripe that is inflated. A fully extended dry windsock indicates approximately 15 knots minimum.",
  },
  {
    id: 50,
    section: "Aerodromes",
    question:
      "No person shall operate any vehicle on any part of an uncontrolled airport used for the movement of aircraft, except in accordance with permission from",
    options: [
      { id: 1, text: "the operator of the airport." },
      { id: 2, text: "the airport security officer." },
      { id: 3, text: "a federal peace officer." },
      { id: 4, text: "a qualified flying instructor." },
    ],
    correctAnswer: 1,
    reference: "CAR 601.17",
    explanation: "Permission to operate vehicles on airport grounds must be obtained from the airport operator, whose contact information appears in the CFS entry's OPR section.",
  },
  {
    id: 51,
    section: "Aerodromes",
    question:
      "Runways and taxiways or portions thereof that are closed to aircraft are marked by",
    options: [
      { id: 1, text: "red flags." },
      { id: 2, text: "horizontal red squares with yellow diagonals." },
      { id: 3, text: "white Xs on runways and yellow Xs on taxiways." },
      { id: 4, text: "white dumbbells." },
    ],
    correctAnswer: 3,
    reference: "AIM AGA 6.0",
    explanation: "Runway closures are marked with 'X's that may be painted, placed on tarpaulins, applied with dye on snow, or outlined with poles, depending on closure permanence.",
  },
  {
    id: 52,
    section: "Aerodromes",
    question:
      "The west end of a runway oriented east and west is numbered",
    options: [
      { id: 1, text: "09." },
      { id: 2, text: "90." },
      { id: 3, text: "27." },
      { id: 4, text: "270." },
    ],
    correctAnswer: 1,
    reference: "AIM AGA 5.2",
    explanation: "Runway numbering reflects compass direction: the first two digits of the compass heading is the runway number. Aircraft landing from the west fly east (090\\u00b0), so the runway is 09.",
  },
  {
    id: 53,
    section: "Aerodromes",
    question:
      "Taxiway holding position markings indicate aircraft shall stop",
    options: [
      { id: 1, text: "on the solid line side at all times." },
      { id: 2, text: "on the solid line side unless otherwise cleared by ATC." },
      { id: 3, text: "before crossing lines from either side at all times." },
      { id: 4, text: "before crossing lines unless otherwise cleared by ATC." },
    ],
    correctAnswer: 2,
    reference: "AIM AGA 5.3",
    explanation: "Pilots must stop at hold short lines until receiving clearance to cross. Once cleared for takeoff or runway positioning, crossing the line is permitted.",
  },
  {
    id: 54,
    section: "Aerodromes",
    question:
      "Where taxiway holding positions have not been established, aircraft waiting to enter an active runway should normally hold",
    options: [
      { id: 1, text: "clear of the manoeuvring area." },
      { id: 2, text: "50 feet from the edge of the runway." },
      { id: 3, text: "150 feet from the edge of the runway." },
      { id: 4, text: "200 feet from the edge of the runway." },
    ],
    correctAnswer: 4,
    reference: "AIM AGA 5.3",
    explanation: "200 feet (approximately 60 metres) is the standard distance unauthorized aircraft, pedestrians and vehicles are asked to maintain.",
  },
  {
    id: 55,
    section: "Aerodromes",
    question: "The manoeuvring area of an airport is that area",
    options: [
      { id: 1, text: "normally referred to as the ramp or apron." },
      { id: 2, text: "which includes the apron, taxiways and runways." },
      { id: 3, text: "used when taxiing to and from the parking area." },
      { id: 4, text: "used for taxiing, taking off and landing." },
    ],
    correctAnswer: 4,
    reference: "CAR 101.01",
    explanation: "The maneuvering area comprises taxiways and runways only, excluding aprons/ramps used for parking.",
  },
  {
    id: 56,
    section: "Aerodromes",
    question:
      "Except for the purpose of taking off or landing, an aircraft shall not be flown over an aerodrome at a height of less than",
    options: [
      { id: 1, text: "2,000 feet AGL." },
      { id: 2, text: "1,500 feet AGL." },
      { id: 3, text: "1,000 feet AGL." },
      { id: 4, text: "500 feet AGL." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.96",
    explanation: "Overflying at 2000 feet maintains 500 feet above circuit altitude and complies with regulations.",
  },
  {
    id: 57,
    section: "Aerodromes",
    question:
      "Helicopter ground markings identify hospital heliport and heliport respectively as",
    options: [
      { id: 1, text: "D, C." },
      { id: 2, text: "D, A." },
      { id: 3, text: "B, C." },
      { id: 4, text: "A, B." },
    ],
    correctAnswer: 4,
    reference: "AIM AGA 6.0",
    explanation: "The marking shown identifies a hospital heliport.",
  },

  // ===========================
  // 5: EQUIPMENT
  // ===========================
  {
    id: 58,
    section: "Equipment",
    question:
      "Except for ultra-light aeroplanes and balloons, which documents shall be carried on board when flying a radio equipped Canadian privately registered aircraft? Items A, B and\n\nA — Flight Authority (Certificate of Airworthiness or Flight Permit)\nB — Certificate of Registration\nC — Technical Records\nD — Crew licences\nE — Aircraft Flight Manual or equivalent document\nF — Type certificate\nG — Aircraft journey log book (where landing away from point of departure)\nH — Proof of liability insurance",
    options: [
      { id: 1, text: "C, D, E, G." },
      { id: 2, text: "C, D, F, H." },
      { id: 3, text: "D, E, F, G." },
      { id: 4, text: "D, E, G, H." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.60",
    explanation: "Remember the mnemonic 'AROWILL' for required onboard documents: Airworthiness Certificate, Registration Certificate, Owner's Manual, Weight & Balance, Insurance, Licences, and Logbook.",
  },
  {
    id: 59,
    section: "Equipment",
    question:
      "Taking into account seasonal climatic variations and geographical area, private aeroplanes and helicopters flying VFR 25 NM or more from an aerodrome or operating base may require",
    options: [
      { id: 1, text: "specified emergency supplies be carried." },
      { id: 2, text: "a functioning radio capable of two-way radio communication." },
      { id: 3, text: "the aircraft be multi-engined when passengers are carried." },
      { id: 4, text: "all of the above." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.61",
    explanation: "For journeys exceeding 25 nm, carry fire-starting means, water purification, shelter materials, and distress signalling equipment per CARs 602.61. Radio is only required in controlled airspace or mandatory frequency areas.",
  },
  {
    id: 60,
    section: "Equipment",
    question:
      "A serviceable landing light is required equipment on aircraft",
    options: [
      { id: 1, text: "carrying passengers at night." },
      { id: 2, text: "carrying passengers at night except private aircraft under 5,700 kg." },
      { id: 3, text: "using an unlighted aerodrome." },
      { id: 4, text: "taking off or landing at night." },
    ],
    correctAnswer: 1,
    reference: "CAR 605.16",
    explanation: "A serviceable landing light is required when carrying passengers at night per CARs 605.16(1)(j). Night landings at unlighted aerodromes are prohibited except for police or life-saving operations.",
  },
  {
    id: 61,
    section: "Equipment",
    question:
      "Unless oxygen and oxygen masks as specified in CARs are readily available, no person shall fly unpressurized aircraft above",
    options: [
      { id: 1, text: "9,500 feet ASL." },
      { id: 2, text: "10,000 feet ASL." },
      { id: 3, text: "12,500 feet ASL." },
      { id: 4, text: "13,000 feet ASL." },
    ],
    correctAnswer: 4,
    reference: "CAR 605.31",
    explanation: "Oxygen requirements are triggered at cabin altitudes above 10,000 ft for more than 30 minutes. Above 13,000 ft, everyone on board must use supplemental oxygen.",
  },
  {
    id: 62,
    section: "Equipment",
    question:
      "No person shall fly an unpressurized aircraft for more than _____ at an altitude between 10,000 and 13,000 feet ASL unless there is readily available to each flight crew member, an oxygen mask and a supply of oxygen.",
    options: [
      { id: 1, text: "15 minutes." },
      { id: 2, text: "30 minutes." },
      { id: 3, text: "1 hour." },
      { id: 4, text: "2 hours." },
    ],
    correctAnswer: 2,
    reference: "CAR 605.31",
    explanation: "Any aircraft flying above 10,000 ft for over 30 minutes requires oxygen availability for crew members.",
  },
  {
    id: 63,
    section: "Equipment",
    question:
      "What safety equipment must be available to each person on board a single-engine aircraft which is taking off from or landing on water?",
    options: [
      { id: 1, text: "An approved life raft." },
      { id: 2, text: "An approved life preserver." },
      { id: 3, text: "A signal flare." },
      { id: 4, text: "A signal mirror." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.62",
    explanation: "Life preservers are required for each person per CARs 602.62. Life rafts do not require a one-per-person ratio.",
  },
  {
    id: 64,
    section: "Equipment",
    question: "The International VHF Emergency Frequency is",
    options: [
      { id: 1, text: "121.5 MHz." },
      { id: 2, text: "121.9 MHz." },
      { id: 3, text: "122.2 MHz." },
      { id: 4, text: "126.7 MHz." },
    ],
    correctAnswer: 1,
    reference: "AIM COM 5.8",
    explanation: "Emergency frequency 121.5 MHz is required if radio equipped per CARs 602.143. The UHF equivalent is 243.0 MHz.",
  },
  {
    id: 65,
    section: "Equipment",
    question:
      "No pilot shall take off from or land at an aerodrome at night unless the",
    options: [
      { id: 1, text: "aircraft is equipped with a functioning two-way radio." },
      { id: 2, text: "aircraft is equipped with a functioning landing light or landing lights." },
      { id: 3, text: "aerodrome is lighted as prescribed by the Minister." },
      { id: 4, text: "pilot has completed 3 night landings in the previous 90 days." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.19",
    explanation: "Canadian night currency requires 5 night takeoffs and landings in the past six months for passenger operations.",
  },
  {
    id: 66,
    section: "Equipment",
    question:
      "The CARs define an infant passenger as a person",
    options: [
      { id: 1, text: "weighing less than 30 lb." },
      { id: 2, text: "under 3 years of age." },
      { id: 3, text: "weighing less than 50 lb and under 5 years of age." },
      { id: 4, text: "under 2 years of age." },
    ],
    correctAnswer: 4,
    reference: "CAR 101.01",
    explanation: "Per CARs 101.01, infants under two years may be held by adults or secured in car seats.",
  },
  {
    id: 67,
    section: "Equipment",
    question:
      "When the PIC directs that safety belts be fastened, an infant passenger for which no child restraint system is provided shall be",
    options: [
      { id: 1, text: "fastened securely in a seat by means of a safety belt." },
      { id: 2, text: "held securely in the arms of the responsible person whose safety belt shall be fastened." },
      { id: 3, text: "held securely in the arms of the responsible person and a safety belt shall be fastened about both." },
      { id: 4, text: "secured by any one of the above methods." },
    ],
    correctAnswer: 2,
    reference: "CAR 605.27",
    explanation: "Child restraint systems refer to car seats, not standard seatbelts.",
  },
  {
    id: 68,
    section: "Equipment",
    question:
      "Which flight instrument systems and equipment are required on power driven aircraft for day VFR flight in controlled airspace? A magnetic direction indicating system or magnetic compass and\n\nA — an airspeed indicator\nB — an attitude indicator\nC — an altimeter\nD — a vertical speed indicator\nE — a turn and bank indicator\nF — a time piece\nG — a heading indicator",
    options: [
      { id: 1, text: "A, C, F (airspeed indicator, altimeter, time piece)." },
      { id: 2, text: "A, B, G (airspeed indicator, attitude indicator, heading indicator)." },
      { id: 3, text: "A, C, D, E, F (airspeed, altimeter, VSI, turn & bank, time piece)." },
      { id: 4, text: "B, D, E, G (attitude, VSI, turn & bank, heading indicator)." },
    ],
    correctAnswer: 1,
    reference: "CAR 605.14",
    explanation: "Day VFR equipment per CARs 605.14 includes tachometer, oil gauges, compass, altimeter, timepiece, airspeed indicator, fuel gauge, and emergency/survival equipment.",
  },

  // ===========================
  // 6: PILOT RESPONSIBILITIES
  // ===========================
  {
    id: 69,
    section: "Pilot Responsibilities",
    question:
      "If cleared for take-off immediately following the very low approach and overshoot of a large aircraft, the pilot should",
    options: [
      { id: 1, text: "take off immediately otherwise the trailing vortices will descend into the flight path." },
      { id: 2, text: "taxi to position on the runway and wait until it is considered safe to take off." },
      { id: 3, text: "decline take-off clearance and inform ATC of the reason for non-acceptance." },
      { id: 4, text: "wait for 2 minutes after the large aircraft has passed then take off." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 4.3.2",
    explanation: "Controllers may offer intersection take-offs. Pilots can determine runway length via airport diagrams, controller inquiry, or ATIS, and should verify required take-off distance during preflight.",
  },
  {
    id: 70,
    section: "Pilot Responsibilities",
    question:
      "The controller suggests a take-off from a runway intersection. The pilot must be aware that",
    options: [
      { id: 1, text: "the remaining runway length will not be stated by the controller." },
      { id: 2, text: "it is the pilot's responsibility to ensure that the remaining runway length is sufficient for take-off." },
      { id: 3, text: "the controller will ensure that the remaining runway length is sufficient for take-off." },
      { id: 4, text: "noise abatement procedures have been cancelled." },
    ],
    correctAnswer: 2,
    reference: "AIM RAC 4.3.2",
    explanation: "Controllers may offer intersection take-offs. Verify the available runway length meets your aircraft's requirements.",
  },
  {
    id: 71,
    section: "Pilot Responsibilities",
    question:
      "A pilot requests an intersection take-off from ATC. If authorized,",
    options: [
      { id: 1, text: "the controller will always give the remaining runway length." },
      { id: 2, text: "the controller will ensure that the remaining runway length is sufficient for take-off." },
      { id: 3, text: "it is the pilot's responsibility to ensure that the remaining runway length is sufficient for take-off." },
      { id: 4, text: "any noise abatement procedures for the runway are automatically cancelled." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 4.3.2",
    explanation: "Pilots join on or before downwind unless specifically cleared to base or final. Controllers typically avoid crossing aircraft over airports.",
  },
  {
    id: 72,
    section: "Pilot Responsibilities",
    question:
      'When an arriving aircraft is cleared "to the circuit", the pilot should interpret this to mean join the circuit',
    options: [
      { id: 1, text: "on the downwind leg." },
      { id: 2, text: "from the upwind side of the runway in all cases." },
      { id: 3, text: "on base leg if convenient." },
      { id: 4, text: "on final for a straight in approach." },
    ],
    correctAnswer: 1,
    reference: "AIM RAC 4.5.2",
    explanation: "Cross at circuit height. At 2,000 ft AGL you are approximately 1,000 ft above circuit altitude for non-landing overflights. Fly at 500 ft above circuit to check wind information.",
  },
  {
    id: 73,
    section: "Pilot Responsibilities",
    question:
      "When a NORDO aircraft crosses an airport for the purpose of obtaining landing information it should maintain",
    options: [
      { id: 1, text: "circuit height." },
      { id: 2, text: "1,000 feet above circuit height." },
      { id: 3, text: "at least 2,000 feet AGL." },
      { id: 4, text: "at least 500 feet above circuit height." },
    ],
    correctAnswer: 4,
    reference: "AIM RAC 4.5.2",
    explanation: "Pilots should not join base or final without clearance. 'Downwind on the forty-five' is the standard uncontrolled circuit entry practice.",
  },
  {
    id: 74,
    section: "Pilot Responsibilities",
    question:
      'An aircraft is "cleared to the circuit" where a left hand circuit is in effect. Without further approval from ATC a right turn may be made to',
    options: [
      { id: 1, text: "join the final leg." },
      { id: 2, text: "join the base leg." },
      { id: 3, text: "join cross-wind or a partial right turn to join the downwind leg." },
      { id: 4, text: "descend on the downwind leg." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 4.5.2",
    explanation: "If the runway appears unobstructed and a controller is available, request clearance by stating your callsign and 'short final.' Overshoot if no clearance is received.",
  },
  {
    id: 75,
    section: "Pilot Responsibilities",
    question:
      "When instructed to continue an approach to a runway which is clear of traffic, what action should the pilot take if no landing clearance is received?",
    options: [
      { id: 1, text: "Circle 360° to the left." },
      { id: 2, text: "Circle 360° in the direction of the circuit." },
      { id: 3, text: "Complete the landing." },
      { id: 4, text: "Request landing clearance." },
    ],
    correctAnswer: 4,
    reference: "AIM RAC 4.3.2",
    explanation: "Comply with regulations requiring 500 ft below cloud base during circuit operations, regardless of published circuit altitude.",
  },
  {
    id: 76,
    section: "Pilot Responsibilities",
    question:
      "A Special Procedure NOTAM has been published for an airport, which is 400 feet ASL, stating the circuit height is 1,500 feet ASL. When the ceiling is 1,000 overcast and the visibility is 3 miles, the circuit height in controlled airspace should be",
    options: [
      { id: 1, text: "500 feet below the cloud base." },
      { id: 2, text: "1,500 feet ASL." },
      { id: 3, text: "1,100 feet above the airport elevation." },
      { id: 4, text: "1,000 feet above the airport elevation." },
    ],
    correctAnswer: 1,
    reference: "AIM RAC 4.5.2",
    explanation: "Comply with regulations requiring 500 ft below cloud base during circuit operations, regardless of published circuit altitude.",
  },
  {
    id: 77,
    section: "Pilot Responsibilities",
    question:
      "When the reported ceiling is 1,000 feet overcast and visibility is 3 miles, to remain VFR, an aircraft cleared to the circuit must join",
    options: [
      { id: 1, text: "as high as possible without entering cloud." },
      { id: 2, text: "at 500 feet below cloud base." },
      { id: 3, text: "at 700 feet AGL." },
      { id: 4, text: "in accordance with Special VFR." },
    ],
    correctAnswer: 2,
    reference: "AIM RAC 4.5.2",
    explanation: "A straight-in clearance means descending on runway heading. Circuit altitudes vary based on terrain and airspace considerations. Cloud conditions may necessitate lower circuits.",
  },
  {
    id: 78,
    section: "Pilot Responsibilities",
    question:
      "Aircraft flying VFR normally join the circuit at 1,000 feet AAE. This may not always be possible because of",
    options: [
      { id: 1, text: "the possibility of a straight in clearance to the airport." },
      { id: 2, text: "the existence of a special procedures NOTAM which provides for a different circuit altitude." },
      { id: 3, text: "weather conditions which may necessitate a circuit height lower than 1,000 feet." },
      { id: 4, text: "the existence of any of the above circumstances." },
    ],
    correctAnswer: 4,
    reference: "AIM RAC 4.5.2",
    explanation: "Reduce airspeed when instructed. Flaps lower the minimum safe speed. Maintain safety margins regardless of ATC instructions.",
  },
  {
    id: 79,
    section: "Pilot Responsibilities",
    question:
      "A pilot on final approach is requested by ATC to reduce airspeed. The pilot should",
    options: [
      { id: 1, text: "comply, giving due consideration to safe minimum manoeuvring speed of the aircraft." },
      { id: 2, text: "acknowledge transmission and execute a 360° turn." },
      { id: 3, text: "overshoot and rejoin the circuit." },
      { id: 4, text: "reduce airspeed well below normal approach speed range." },
    ],
    correctAnswer: 1,
    reference: "AIM RAC 4.3.2",
    explanation: "Full flaps in strong crosswinds risks reduced elevator effectiveness. Landing on other runways requires clearance. Safety is paramount if uncomfortable.",
  },
  {
    id: 80,
    section: "Pilot Responsibilities",
    question:
      "A pilot is cleared to land but is concerned about the high cross-wind component. The pilot should",
    options: [
      { id: 1, text: "use full flaps and approach at a reduced speed." },
      { id: 2, text: "alter heading and land on another runway which is more into wind." },
      { id: 3, text: "overshoot and request an into-wind runway." },
      { id: 4, text: "continue the approach and land as the clearance must be obeyed." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 4.3.2",
    explanation: "Pilot responsibility: maintain VFR conditions. Controllers lack cloud visibility on radar.",
  },
  {
    id: 81,
    section: "Pilot Responsibilities",
    question:
      "A pilot on a VFR flight is being vectored by ATC towards an extensive unbroken layer of cloud. The responsibility for remaining VFR rests with",
    options: [
      { id: 1, text: "the radar operator." },
      { id: 2, text: "ATC since the flight is designated VFR." },
      { id: 3, text: "ATC since the cloud is visible on radar." },
      { id: 4, text: "the pilot." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.114",
    explanation: "Pilot responsibility: maintain VFR conditions. Controllers cannot see clouds on radar.",
  },
  {
    id: 82,
    section: "Pilot Responsibilities",
    question:
      "A student pilot on a VFR flight has been given a radar vector by ATC. Ahead, at a lower altitude, is a solid overcast cloud condition. The pilot should",
    options: [
      { id: 1, text: 'climb above the cloud and fly "VFR over the top".' },
      { id: 2, text: "alter heading as necessary to remain VFR and advise ATC." },
      { id: 3, text: "maintain heading and altitude as it is an ATC clearance." },
      { id: 4, text: "maintain heading and altitude because ATC knows of the cloud and will issue further instructions." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.114",
    explanation: "Special VFR permits flight in control zones below normal VFR limits. Student pilots are prohibited from Special VFR. Pilots remain responsible for cloud and obstacle clearance.",
  },
  {
    id: 83,
    section: "Pilot Responsibilities",
    question:
      'An aircraft on a Special VFR flight has been cleared for a "straight in" approach. Because of low ceiling and poor visibility, the pilot is concerned about the exact location of a radio mast in the vicinity. Avoiding this obstruction is the responsibility',
    options: [
      { id: 1, text: "of the pilot." },
      { id: 2, text: "of the tower controller as the controller is aware of the obstruction." },
      { id: 3, text: "of ATC as the pilot has been given Special VFR clearance." },
      { id: 4, text: "shared equally by the pilot and the controller." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.117",
    explanation: "Special VFR permits flight in control zones below normal VFR limits. Student pilots are prohibited from Special VFR.",
  },
  {
    id: 84,
    section: "Pilot Responsibilities",
    question:
      "A pilot on a Special VFR flight has been cleared to the circuit. Ahead, at a lower altitude, is a solid layer of stratus cloud. Remaining clear of cloud is the responsibility of",
    options: [
      { id: 1, text: "the tower controller as it is within a Control Zone." },
      { id: 2, text: "ATC because the weather is below VFR." },
      { id: 3, text: "the pilot and ATC." },
      { id: 4, text: "the pilot." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.117",
    explanation: "Altitude changes are not always required for traffic avoidance \\u2014 heading changes are also acceptable. Pilots may request clarification from the controller.",
  },
  {
    id: 85,
    section: "Pilot Responsibilities",
    question:
      "A pilot on a VFR flight in Class C airspace is advised by ATC to maintain a specific heading. In the pilot's opinion, this heading will cause conflict with another aircraft. The pilot should",
    options: [
      { id: 1, text: "always change altitude as required to avoid the other aircraft." },
      { id: 2, text: "maintain the specified heading to comply with the regulations." },
      { id: 3, text: "alter heading to avoid the other aircraft and advise ATC." },
      { id: 4, text: "maintain the specified heading as separation will be provided by the controller." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.31",
    explanation: "VFR aircraft squawk 1200. Above 12,500 ft in Canada requires Class B clearance with a discrete code assignment or squawk 1400.",
  },
  {
    id: 86,
    section: "Pilot Responsibilities",
    question:
      "Unless ATC instructs otherwise, pilots operating VFR shall select transponder code 1200 when flying at or below _____ feet ASL and code _____ when flying above that altitude.",
    options: [
      { id: 1, text: "12,500, 1400." },
      { id: 2, text: "12,500, 1300." },
      { id: 3, text: "10,000, 1400." },
      { id: 4, text: "10,000, 1300." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.34",
    explanation: "Press the ident button only when directed by ATC. A single press allows the controller to identify your aircraft. Unauthorized use risks misidentification.",
  },
  {
    id: 87,
    section: "Pilot Responsibilities",
    question:
      'Pilots shall activate the transponder "ident" feature',
    options: [
      { id: 1, text: "before entering control zones." },
      { id: 2, text: "only when so instructed by ATC." },
      { id: 3, text: "before every change of altitude." },
      { id: 4, text: "after every change of an assigned code." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.34",
    explanation: "Four student pilot restrictions: (1) instructor is PIC when present, (2) night flight is forbidden, (3) day VFR only, (4) only a flight test examiner is permitted as passenger.",
  },
  {
    id: 88,
    section: "Pilot Responsibilities",
    question:
      "The holder of a student pilot permit may for the sole purpose of the holder's own flight training act as PIC of an aircraft",
    options: [
      { id: 1, text: "only when accompanied by a flight instructor." },
      { id: 2, text: "by day and night." },
      { id: 3, text: "by day only." },
      { id: 4, text: "while carrying passengers." },
    ],
    correctAnswer: 3,
    reference: "CAR 401.19",
    explanation: "Aircraft must comply with and acknowledge all ATC instructions. Light signals warrant compliance despite their rarity outside controlled airspace.",
  },
  {
    id: 89,
    section: "Pilot Responsibilities",
    question:
      "The PIC of an aircraft shall comply with any light signals or ground marking prescribed in the CARs",
    options: [
      { id: 1, text: "only while in class C airspace if they are part of an ATC clearance." },
      { id: 2, text: "only while in a Control Zone if they are part of an ATC instruction." },
      { id: 3, text: "at all times." },
      { id: 4, text: "at all times provided safety is not jeopardized." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.17",
    explanation: "CARs 602.71 requires familiarity with appropriate pre-flight information. Many flights require no ATC clearances.",
  },
  {
    id: 90,
    section: "Pilot Responsibilities",
    question:
      "Before setting out on any VFR flight, a pilot is required to",
    options: [
      { id: 1, text: "read all weather reports received from stations within 100 miles of destination." },
      { id: 2, text: "file a flight itinerary." },
      { id: 3, text: "be familiar with all available information appropriate to the flight." },
      { id: 4, text: "obtain an ATC clearance." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.71",
    explanation: "The Designated Airspace Handbook lists airspace coordinates and responsible contacts. VTA charts provide high-density area details. CFS supplies airport frequencies and procedures.",
  },
  {
    id: 91,
    section: "Pilot Responsibilities",
    question:
      "Terminal airspace dimensions and VHF sector frequencies for certain high density traffic airports in Canada are shown",
    options: [
      { id: 1, text: "in the Designated Airspace Handbook and the A.I.P. Canada." },
      { id: 2, text: "on the VTA chart and in the CFS." },
      { id: 3, text: "on the VTA and VNC charts." },
      { id: 4, text: "in the CFS and on the VNC chart." },
    ],
    correctAnswer: 2,
    reference: "AIM MAP 3.0",
    explanation: "Wake turbulence avoidance is always the responsibility of the pilot.",
  },

  // ===========================
  // 7: WAKE TURBULENCE
  // ===========================
  {
    id: 92,
    section: "Wake Turbulence",
    question: "Avoiding wake turbulence is",
    options: [
      { id: 1, text: "the sole responsibility of ATC." },
      { id: 2, text: "the responsibility of the pilot, only when advised by ATC." },
      { id: 3, text: "a responsibility shared by both the pilot and ATC." },
      { id: 4, text: "the sole responsibility of the pilot." },
    ],
    correctAnswer: 4,
    reference: "AIM AIR 2.6",
    explanation: "Wake turbulence avoidance is always the responsibility of the pilot.",
  },
  {
    id: 93,
    section: "Wake Turbulence",
    question:
      "Hazardous wake turbulence caused by aircraft in still air",
    options: [
      { id: 1, text: "dissipates immediately." },
      { id: 2, text: "dissipates rapidly." },
      { id: 3, text: "may persist for two minutes or more." },
      { id: 4, text: "persists indefinitely." },
    ],
    correctAnswer: 3,
    reference: "AIM AIR 2.6",
    explanation: "Plan on wake turbulence persisting for a minimum of two minutes.",
  },
  {
    id: 94,
    section: "Wake Turbulence",
    question:
      "Which response is most correct with respect to wake turbulence?",
    options: [
      { id: 1, text: "Wing tip vortices are carried by the ambient wind." },
      { id: 2, text: "Wing tip vortices have a circular and downward motion." },
      { id: 3, text: "Wake turbulence exists behind all aeroplanes and helicopters in flight." },
      { id: 4, text: "Response (1), (2) and (3) are correct." },
    ],
    correctAnswer: 4,
    reference: "AIM AIR 2.6",
    explanation: "All three options regarding wake turbulence characteristics can be correct \\u2014 vortices are invisible, unpredictable, and dangerous.",
  },
  {
    id: 95,
    section: "Wake Turbulence",
    question:
      "The wing tip vortices generated by a heavy aeroplane can cause a lighter aircraft encountering them to",
    options: [
      { id: 1, text: "go out of control." },
      { id: 2, text: "continue descent even when maximum power is applied." },
      { id: 3, text: "sustain structural damage." },
      { id: 4, text: "experience any of the above situations." },
    ],
    correctAnswer: 4,
    reference: "AIM AIR 2.6",
    explanation: "Any of the listed outcomes from wake turbulence encounters are possible, including structural damage, loss of control, or altitude loss.",
  },
  {
    id: 96,
    section: "Wake Turbulence",
    question:
      "During the two minutes after the passage of a heavy aeroplane in cruising flight, hazardous wing tip vortices will",
    options: [
      { id: 1, text: "dissipate completely." },
      { id: 2, text: "dissipate rapidly." },
      { id: 3, text: "dissipate very slowly." },
      { id: 4, text: "remain at cruising altitude." },
    ],
    correctAnswer: 3,
    reference: "AIM AIR 2.6",
    explanation: "Vortices may remain after two minutes, dissipate gradually, and sink beneath the aircraft flight path.",
  },
  {
    id: 97,
    section: "Wake Turbulence",
    question:
      "The pilot of a light aircraft on final approach close behind a heavier aircraft should plan the approach to land",
    options: [
      { id: 1, text: "beyond the touchdown point of the other aircraft." },
      { id: 2, text: "prior to the touchdown point of the other aircraft." },
      { id: 3, text: "at the touchdown point of the other aircraft." },
      { id: 4, text: "to the right or left of the touchdown point of the other aircraft." },
    ],
    correctAnswer: 1,
    reference: "AIM AIR 2.6",
    explanation: "To avoid wake effects during landing, land past the touchdown point of the larger airplane.",
  },
  {
    id: 98,
    section: "Wake Turbulence",
    question:
      "To avoid wake turbulence when taking off behind a large aircraft, the pilot should",
    options: [
      { id: 1, text: "remain in ground effect until past the rotation point of the large aircraft." },
      { id: 2, text: "become airborne in the calm airspace between the vortices." },
      { id: 3, text: "taxi until past the rotation point of the large aircraft, then take off and remain below its climb path." },
      { id: 4, text: "become airborne before the rotation point of the large aircraft and stay above its departure path or request a turn to avoid the departure path." },
    ],
    correctAnswer: 4,
    reference: "AIM AIR 2.6",
    explanation: "Since vortices are invisible, safety requires taking off before the point where you know they start.",
  },
  {
    id: 99,
    section: "Wake Turbulence",
    question: "Wake turbulence is produced by",
    options: [
      { id: 1, text: "heavy aeroplanes only, regardless of their speed." },
      { id: 2, text: "turbo-jet powered aircraft only." },
      { id: 3, text: "fast moving aeroplanes only, regardless of their weight." },
      { id: 4, text: "all fixed and rotary wing aircraft." },
    ],
    correctAnswer: 4,
    reference: "AIM AIR 2.6",
    explanation: "All rotary and fixed-wing aircraft generate wake turbulence, including gliders (though glider wake is minimal).",
  },
  {
    id: 100,
    section: "Wake Turbulence",
    question:
      "Wake turbulence caused by a departing large aeroplane begins",
    options: [
      { id: 1, text: "before rotation." },
      { id: 2, text: "with rotation." },
      { id: 3, text: "after becoming airborne." },
      { id: 4, text: "with full power application." },
    ],
    correctAnswer: 2,
    reference: "AIM AIR 2.6",
    explanation: "Rotation occurs when the airplane's nose lifts off the ground, initiating wingtip vortex formation.",
  },
  {
    id: 101,
    section: "Wake Turbulence",
    question:
      "Wake turbulence caused by a departing aeroplane is most severe immediately",
    options: [
      { id: 1, text: "before rotation." },
      { id: 2, text: "following take-off." },
      { id: 3, text: "above its flight path." },
      { id: 4, text: "following full power application." },
    ],
    correctAnswer: 2,
    reference: "AIM AIR 2.6",
    explanation: "Wake turbulence originates at rotation and descends below the flight path.",
  },
  {
    id: 102,
    section: "Wake Turbulence",
    question:
      "Which statement concerning wing tip vortices is false?",
    options: [
      { id: 1, text: "Vortices normally settle below and behind the aircraft." },
      { id: 2, text: "With a light cross-wind, one vortex can remain stationary over the ground for some time." },
      { id: 3, text: "Lateral movement of vortices, even in a no wind condition, may place a vortex core over a parallel runway." },
      { id: 4, text: 'Vortices are caused directly by "jet wash".' },
    ],
    correctAnswer: 4,
    reference: "AIM AIR 2.6",
    explanation: "Wingtip vortices are independent of engine operation \\u2014 they are generated by lift, not thrust.",
  },
  {
    id: 103,
    section: "Wake Turbulence",
    question:
      "Wake turbulence will be greatest when generated by an aeroplane which is",
    options: [
      { id: 1, text: "heavy, landing configuration and slow speed." },
      { id: 2, text: "heavy, clean configuration and slow speed." },
      { id: 3, text: "light, clean configuration and high speed." },
      { id: 4, text: "heavy, take-off configuration and slow speed." },
    ],
    correctAnswer: 2,
    reference: "AIM AIR 2.6",
    explanation: "Maximum turbulence results from aircraft being heavy, clean (flaps up, gear up) and slow.",
  },
  {
    id: 104,
    section: "Wake Turbulence",
    question:
      "A helicopter in forward flight produces hazardous vortices",
    options: [
      { id: 1, text: "which rise above the helicopter." },
      { id: 2, text: "similar to wing tip vortices." },
      { id: 3, text: "which remain at the same level as the helicopter." },
      { id: 4, text: "ahead of the helicopter." },
    ],
    correctAnswer: 2,
    reference: "AIM AIR 2.6",
    explanation: "Helicopter rotor downwash behaves similarly to wingtip vortices, trailing behind and below.",
  },
  {
    id: 105,
    section: "Wake Turbulence",
    question:
      "Which statement concerning vortices caused by helicopters is correct?",
    options: [
      { id: 1, text: "Helicopter vortices are generally weak and dissipate rapidly." },
      { id: 2, text: "The size and weight of the helicopter has a direct influence on the intensity of the vortices." },
      { id: 3, text: "Helicopter vortices are less intense than the vortices of an aeroplane of the same weight." },
      { id: 4, text: "Wind does not influence the movement of vortices generated by a helicopter in hovering flight." },
    ],
    correctAnswer: 2,
    reference: "AIM AIR 2.6",
    explanation: "Heavier helicopters produce more intense wake turbulence.",
  },
  {
    id: 106,
    section: "Wake Turbulence",
    question:
      "What effect would a light cross-wind have on the wing tip vortices generated by a large aeroplane that had just taken off?",
    options: [
      { id: 1, text: "could cause one vortex to remain over the runway for some time." },
      { id: 2, text: "would rapidly dissipate the strength of both vortices." },
      { id: 3, text: "would rapidly clear the runway of all vortices." },
      { id: 4, text: "would not affect the lateral movement of the vortices." },
    ],
    correctAnswer: 1,
    reference: "AIM AIR 2.6",
    explanation: "Light crosswinds can trap vortices over runways, affecting adjacent runways and taxiways.",
  },

  // ===========================
  // 8: AEROMEDICAL
  // ===========================
  {
    id: 107,
    section: "Aeromedical",
    question:
      "A flight crew member aware of being under a physical disability that might invalidate licence issue or renewal shall",
    options: [
      { id: 1, text: "so advise the Minister." },
      { id: 2, text: "not commence a flight as a crew member." },
      { id: 3, text: "forward the licence to the Regional Aviation Medical Officer." },
      { id: 4, text: "fly as crew member only if a back-up member is available." },
    ],
    correctAnswer: 2,
    reference: "CAR 404.06",
    explanation: "You cannot exercise pilot privileges if physically disabled per CARs 404.06. You need not report to Transport Canada or surrender your license, and you can still be a passenger.",
  },
  {
    id: 108,
    section: "Aeromedical",
    question:
      "What is the recommended treatment for hyperventilation below 8,000 feet?",
    options: [
      { id: 1, text: "Increase the depth of breathing." },
      { id: 2, text: "Hold the breath and perform a Valsalva manoeuvre." },
      { id: 3, text: "Slow the breathing rate to below 12 times per minute." },
      { id: 4, text: "Increase oxygen flow rates." },
    ],
    correctAnswer: 3,
    reference: "AIM AIR 3.0",
    explanation: "Hyperventilation and hypoxia symptoms overlap. At altitude, provide oxygen first. If ineffective after 3-4 breaths, treat hyperventilation by slowing breathing. Below 8,000 ft, treat for hyperventilation immediately.",
  },
  {
    id: 109,
    section: "Aeromedical",
    question:
      "Damage to the ear drum in flight is most likely to occur",
    options: [
      { id: 1, text: "during a climb." },
      { id: 2, text: "during a descent." },
      { id: 3, text: "when using supplementary oxygen." },
      { id: 4, text: "after SCUBA diving." },
    ],
    correctAnswer: 2,
    reference: "AIM AIR 3.0",
    explanation: "During climb, ear pressure releases easily. During descent, pressure differences can close eustachian tubes, risking eardrum damage. Use max 500 fpm descent rate with passengers.",
  },
  {
    id: 110,
    section: "Aeromedical",
    question:
      "Clearing the ears on a rapid descent may be assisted by",
    options: [
      { id: 1, text: "swallowing." },
      { id: 2, text: "opening the mouth widely or yawning." },
      { id: 3, text: "a Valsalva manoeuvre." },
      { id: 4, text: "all of the above." },
    ],
    correctAnswer: 4,
    reference: "AIM AIR 3.0",
    explanation: "Swallowing and yawning help open eustachian tubes. The Valsalva maneuver (plug nose, close mouth, blow) is most effective but risks forcing bacteria into the middle ear if done with a cold.",
  },
  {
    id: 111,
    section: "Aeromedical",
    question:
      "Flight crew members who require decompression stops on the way to the surface when SCUBA diving should not fly for",
    options: [
      { id: 1, text: "4 hours." },
      { id: 2, text: "8 hours." },
      { id: 3, text: "12 hours." },
      { id: 4, text: "24 hours." },
    ],
    correctAnswer: 4,
    reference: "AIM AIR 3.14",
    explanation: "SCUBA divers must wait 24 hours before flying above 8,000 ft. 12 hours suffices below 8,000 ft if no decompression stops were required.",
  },
  {
    id: 112,
    section: "Aeromedical",
    question:
      "With regard to fatigue, which statement is correct?",
    options: [
      { id: 1, text: "Financial or family problems do not influence tolerance to fatigue." },
      { id: 2, text: "Fatigue slows reaction time and causes foolish inattentive errors." },
      { id: 3, text: "A fatigued person recuperates more quickly as altitude is gained." },
      { id: 4, text: "A fatigued person must have food immediately before and during flight." },
    ],
    correctAnswer: 2,
    reference: "AIM AIR 3.0",
    explanation: "Financial and family problems contribute to fatigue. Fatigue impairs pilot performance dramatically. Altitude and hunger increase fatigue. CARs 602.02 forbids flying while fatigued.",
  },
  {
    id: 113,
    section: "Aeromedical",
    question:
      "A pilot who has donated blood should not act as a flight crew member for at least the next",
    options: [
      { id: 1, text: "12 hours." },
      { id: 2, text: "24 hours." },
      { id: 3, text: "36 hours." },
      { id: 4, text: "48 hours." },
    ],
    correctAnswer: 4,
    reference: "AIM AIR 3.0",
    explanation: "The AIP recommends against blood donation for active pilots but allows it with a 48-hour waiting period.",
  },
  {
    id: 114,
    section: "Aeromedical",
    question:
      "Any pilot who has had a general anaesthetic should not act as a flight crew member",
    options: [
      { id: 1, text: "during the next 12 hrs." },
      { id: 2, text: "during the next 36 hrs." },
      { id: 3, text: "during the next 48 hrs." },
      { id: 4, text: "unless advised it is safe to do so by a doctor." },
    ],
    correctAnswer: 4,
    reference: "AIM AIR 3.0",
    explanation: "General anesthesia itself may prevent flying. Consult your doctor about safe return-to-flying timing.",
  },
  {
    id: 115,
    section: "Aeromedical",
    question:
      "Any pilot who has had a local anaesthetic for extensive dental procedures should not act as a flight crew member during the next",
    options: [
      { id: 1, text: "12 hrs." },
      { id: 2, text: "24 hrs." },
      { id: 3, text: "36 hrs." },
      { id: 4, text: "48 hrs." },
    ],
    correctAnswer: 1,
    reference: "AIM AIR 3.0",
    explanation: "Use common sense \\u2014 wait at least 24 hours after dental work before flying.",
  },
  {
    id: 116,
    section: "Aeromedical",
    question:
      "Relatively small amounts of alcohol affect tolerance to hypoxia (lack of sufficient oxygen). This tolerance",
    options: [
      { id: 1, text: "deteriorates with increase of altitude." },
      { id: 2, text: "improves with increase of altitude." },
      { id: 3, text: "is not affected by altitude change." },
      { id: 4, text: "remains constant to 6,000 feet ASL." },
    ],
    correctAnswer: 1,
    reference: "AIM AIR 3.0",
    explanation: "Altitude reduces alcohol tolerance. Wait minimum 8 hours; AIP recommends 24 hours. Alcohol impairs judgment and balance.",
  },
  {
    id: 117,
    section: "Aeromedical",
    question:
      "Many common drugs such as cold tablets, cough mixtures, antihistamines and other over-the-counter remedies may seriously impair the judgement and co-ordination needed while flying. The safest rule is to",
    options: [
      { id: 1, text: "read the manufacturer's warning to ensure that you are aware of possible reactions to such drugs." },
      { id: 2, text: "take no medicine when you plan to fly, except on the advice of an Aviation Medical Examiner." },
      { id: 3, text: "allow at least 12 hours between taking any medicine or drugs and flying." },
      { id: 4, text: "allow at least 8 hours between taking any medicine or drugs and flying." },
    ],
    correctAnswer: 2,
    reference: "AIM AIR 3.0",
    explanation: "Manufacturers may not know drug effects at altitude. Safest rule: don't fly while taking unfamiliar medications. Consult your CAME about over-the-counter drugs.",
  },
  {
    id: 118,
    section: "Aeromedical",
    question:
      "The Canadian Medical Certificate of a private pilot 40 years old and over is valid, in Canada, for a period of",
    options: [
      { id: 1, text: "12 months." },
      { id: 2, text: "24 months." },
      { id: 3, text: "36 months." },
      { id: 4, text: "48 months." },
    ],
    correctAnswer: 2,
    reference: "CAR 404.04",
    explanation: "Medical validity periods: private pilots under 40 now have 5-year validity. Those 40 and over have 2-year validity.",
  },
  {
    id: 119,
    section: "Aeromedical",
    question:
      "The Canadian Medical Certificate of a private pilot under 40 years of age is valid, in Canada, for a period of",
    options: [
      { id: 1, text: "72 months." },
      { id: 2, text: "60 months." },
      { id: 3, text: "48 months." },
      { id: 4, text: "24 months." },
    ],
    correctAnswer: 2,
    reference: "CAR 404.04",
    explanation: "Medical validity periods: private pilots under 40 now have 5-year validity. Those 40 and over have 2-year validity.",
  },

  // ===========================
  // 9: FLIGHT PLANS AND FLIGHT ITINERARIES
  // ===========================
  {
    id: 120,
    section: "Flight Plans and Flight Itineraries",
    question:
      "The amount of fuel and oil carried on board any helicopter at the commencement of a day VFR flight must be sufficient, to provide for foreseeable delays having been considered, to fly to the destination aerodrome,",
    options: [
      { id: 1, text: "and thereafter for 45 minutes at normal cruising speed." },
      { id: 2, text: "then to a specified alternate and thereafter for 45 minutes at normal cruising speed." },
      { id: 3, text: "and thereafter for 20 minutes at normal cruising speed." },
      { id: 4, text: "then to a specified alternate and thereafter for 20 minutes at normal cruising speed." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.88",
    explanation: "Helicopter and airplane pilots answer the same PSTAR. Day VFR requires 20 minutes fuel reserve in a helicopter and 30 minutes reserve in an airplane.",
  },
  {
    id: 121,
    section: "Flight Plans and Flight Itineraries",
    question:
      "The amount of fuel carried on board any propeller-driven aeroplane at the commencement of a day VFR flight must be sufficient to fly to the destination aerodrome",
    options: [
      { id: 1, text: "and then fly for a period of 45 minutes at normal cruising speed." },
      { id: 2, text: "and then fly for a period of 30 minutes at normal cruising speed." },
      { id: 3, text: "then to a specified alternate and then for a period of 45 minutes at normal cruising speed." },
      { id: 4, text: "then to a specified alternate and then fly for a period of 30 minutes at normal cruising speed." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.88",
    explanation: "Same fuel reserve guidance applies: 20 minutes for helicopter, 30 minutes for airplane for day VFR.",
  },
  {
    id: 122,
    section: "Flight Plans and Flight Itineraries",
    question:
      "If a flight plan is not filed, a flight itinerary must be filed",
    options: [
      { id: 1, text: "for flights proceeding 25 NM or more from the point of origin." },
      { id: 2, text: "only for flights in sparsely settled areas." },
      { id: 3, text: "for flights destined to land at aerodromes or places other than the point of origin." },
      { id: 4, text: "for all flights." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.73",
    explanation: "Any aircraft traveling more than 25 nautical miles from origin needs a flight plan or itinerary per CARs 602.73, whether it lands or not.",
  },
  {
    id: 123,
    section: "Flight Plans and Flight Itineraries",
    question:
      "After landing from a VFR flight for which a flight plan has been filed, the pilot shall report the arrival to the appropriate ATS unit within",
    options: [
      { id: 1, text: "15 minutes." },
      { id: 2, text: "30 minutes." },
      { id: 3, text: "45 minutes." },
      { id: 4, text: "60 minutes." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.77",
    explanation: "Pilots should report in as soon as practicable after landing but never exceeding 60 minutes after filed ETA.",
  },
  {
    id: 124,
    section: "Flight Plans and Flight Itineraries",
    question:
      "When there is a deviation from a VFR flight plan, ATC shall be notified of such deviation",
    options: [
      { id: 1, text: "as soon as possible." },
      { id: 2, text: "within 10 minutes." },
      { id: 3, text: "within 30 minutes." },
      { id: 4, text: "within 60 minutes after landing." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.77",
    explanation: "Notify air traffic services as soon as practicable of route, duration, or destination changes. Search begins within 10 nm of proposed route, then 15 nm.",
  },
  {
    id: 125,
    section: "Flight Plans and Flight Itineraries",
    question:
      'Where no search and rescue initiation time is specified in a flight itinerary, when shall the pilot report to the "responsible person"?',
    options: [
      { id: 1, text: "Within one hour after the expiration of the estimated duration of the flight specified in the flight itinerary." },
      { id: 2, text: "Within one hour after landing." },
      { id: 3, text: "Within 24 hours after the expiration of the estimated duration of the flight specified in the flight itinerary." },
      { id: 4, text: "As soon as practicable after landing but no later than 24 hours after the last reported ETA." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.77",
    explanation: "Call your responsible person as soon as practicable after landing. 24 hours represents the absolute maximum timeframe.",
  },
  {
    id: 126,
    section: "Flight Plans and Flight Itineraries",
    question:
      'With regard to a flight itinerary, the "responsible person" means someone who',
    options: [
      { id: 1, text: "has agreed to report the aircraft overdue." },
      { id: 2, text: "is 18 years of age or over." },
      { id: 3, text: "holds an aeronautical licence." },
      { id: 4, text: "has agreed to report the arrival of the aircraft." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.73",
    explanation: "No age or knowledge qualifications are required for a responsible person per CARs 602.70. Choosing a pilot is preferable over non-pilots.",
  },
  {
    id: 127,
    section: "Flight Plans and Flight Itineraries",
    question:
      "Where a VFR flight plan has been filed, an arrival report must be filed by the pilot",
    options: [
      { id: 1, text: "by advising an ATS unit." },
      { id: 2, text: "at each intermediate stop and then reopened on take-off." },
      { id: 3, text: "by parking the aircraft in close proximity to the tower." },
      { id: 4, text: "except at airports served by a control tower in which case the tower will automatically close the flight plan." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.77",
    explanation: "The pilot bears responsibility for requesting flight plan closure. Do not close until at final destination.",
  },
  {
    id: 128,
    section: "Flight Plans and Flight Itineraries",
    question:
      'Estimated elapsed time A to B: 1 hour 15 minutes. Estimated stopover time at B: 30 minutes. Estimated elapsed time B to C: 1 hour 20 minutes. Using the above information, what time should be entered in the "Elapsed Time" box of a VFR flight plan?',
    options: [
      { id: 1, text: "3 hours 50 minutes." },
      { id: 2, text: "3 hours 20 minutes." },
      { id: 3, text: "3 hours 05 minutes." },
      { id: 4, text: "2 hours 35 minutes." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 3.6",
    explanation: "Total time calculation: add all leg times plus stopover durations. 1h15 + 30min + 1h20 = 3 hours 05 minutes.",
  },
  {
    id: 129,
    section: "Flight Plans and Flight Itineraries",
    question:
      "When filing a VFR flight plan with an intermediate stop, the total elapsed time to be entered is the total",
    options: [
      { id: 1, text: "elapsed time for all legs including the duration of the intermediate stop." },
      { id: 2, text: "elapsed time for all legs, plus the intermediate stop, plus 45 minutes." },
      { id: 3, text: "flight time for all legs." },
      { id: 4, text: "elapsed time to the first landing plus intermediate stops." },
    ],
    correctAnswer: 1,
    reference: "AIM RAC 3.6",
    explanation: "Add all leg times plus stopover times. Avoid adding extra contingency time.",
  },
  {
    id: 130,
    section: "Flight Plans and Flight Itineraries",
    question:
      "How is an intermediate stop indicated on the flight plan form for a VFR flight?",
    options: [
      { id: 1, text: 'By including duration of the intermediate stop in "Elapsed Time" box as ATC automatically checks time between points.' },
      { id: 2, text: "Same as any VFR flight plan if the intermediate time does not exceed 30 minutes at each point." },
      { id: 3, text: 'By repeating the name of intermediate stop and its duration in the "Route" column.' },
      { id: 4, text: 'By simply indicating "Intermediate Stop" in "Other Information" column.' },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 3.6",
    explanation: "Format intermediate stops by repeating airport name and duration in four consecutive digits (e.g., '0030' for a 30-minute stop).",
  },

  // ===========================
  // 10: CLEARANCES AND INSTRUCTIONS
  // ===========================
  {
    id: 131,
    section: "Clearances and Instructions",
    question: "An ATC instruction",
    options: [
      { id: 1, text: "must be complied with when received by the pilot providing the safety of the aircraft is not jeopardized." },
      { id: 2, text: 'must be "read back" in full to the controller and confirmed before becoming effective.' },
      { id: 3, text: "is in effect advice provided by ATC and does not require acceptance or formal acknowledgement by the pilot concerned." },
      { id: 4, text: "is the same as an ATC clearance." },
    ],
    correctAnswer: 1,
    reference: "AIM RAC 1.7",
    explanation: "An ATC instruction becomes effective upon receipt and requires acknowledgment. A clearance becomes effective when accepted.",
  },
  {
    id: 132,
    section: "Clearances and Instructions",
    question: "An ATC clearance",
    options: [
      { id: 1, text: "is the same as an ATC instruction." },
      { id: 2, text: "is in effect advice provided by ATC and does not require acceptance or acknowledgement by the PIC." },
      { id: 3, text: "requires compliance when accepted by the PIC." },
      { id: 4, text: "must be complied with when received by the PIC." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 1.7",
    explanation: "An ATC instruction becomes effective upon receipt. A clearance must be accepted to become effective. VFR pilots need not read back clearances.",
  },
  {
    id: 133,
    section: "Clearances and Instructions",
    question:
      "A pilot, after accepting a clearance and subsequently finding that all or part of the clearance cannot be complied with, should",
    options: [
      { id: 1, text: "disregard the clearance." },
      { id: 2, text: "comply with only the part that is suitable." },
      { id: 3, text: "comply as best as possible under the circumstances and need not say anything to ATC." },
      { id: 4, text: "comply as best as possible under the circumstances and advise ATC as soon as possible." },
    ],
    correctAnswer: 4,
    reference: "AIM RAC 1.7",
    explanation: "Any time you must deviate from a clearance or instruction, you must inform ATC. Take necessary safety actions and communicate immediately.",
  },
  {
    id: 134,
    section: "Clearances and Instructions",
    question:
      "After accepting a clearance and subsequently finding that it cannot be complied with, a pilot should",
    options: [
      { id: 1, text: "take any immediate action required and advise ATC as soon as possible." },
      { id: 2, text: "comply as best as possible under the circumstances and say nothing to ATC." },
      { id: 3, text: "disregard the clearance." },
      { id: 4, text: "comply with the suitable parts." },
    ],
    correctAnswer: 1,
    reference: "AIM RAC 1.7",
    explanation: "In controlled airspace: obtain permission before acting, comply with instructions if safe, take necessary safety actions if instructions become unsafe, then inform the controller.",
  },
  {
    id: 135,
    section: "Clearances and Instructions",
    question:
      "An ATC clearance or instruction is predicated on known traffic only. Therefore, when a pilot is proceeding in accordance with a clearance or instruction",
    options: [
      { id: 1, text: "ATC is relieved of the responsibility for traffic separation." },
      { id: 2, text: "the responsibility for traffic separation is divided between ATC and the pilot." },
      { id: 3, text: "the pilot is not relieved of the responsibility for traffic avoidance." },
      { id: 4, text: "the pilot is relieved of the responsibility for traffic avoidance." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 1.7",
    explanation: "The only time the pilot is relieved of responsibility for separation from other traffic is on an IFR flight plan, in IMC (in cloud).",
  },
  {
    id: 136,
    section: "Clearances and Instructions",
    question:
      "If all or part of an ATC clearance is unacceptable, a pilot should",
    options: [
      { id: 1, text: "comply as best as possible under the circumstances." },
      { id: 2, text: "refuse the clearance without giving a reason for refusal." },
      { id: 3, text: "acknowledge the clearance and read back only the acceptable parts." },
      { id: 4, text: "refuse the clearance and inform ATC of the pilot's intentions." },
    ],
    correctAnswer: 4,
    reference: "AIM RAC 1.7",
    explanation: "If offered an unsuitable clearance, turn it down and ask for what you want. Communicate specific reasons for refusal.",
  },

  // ===========================
  // 11: AIRCRAFT OPERATIONS
  // ===========================
  {
    id: 137,
    section: "Aircraft Operations",
    question:
      "In an emergency requiring the use of an ELT, it should be turned on",
    options: [
      { id: 1, text: "immediately and left on." },
      { id: 2, text: "at the ETA in the flight plan." },
      { id: 3, text: "for the first five minutes of each hour UTC." },
      { id: 4, text: "during daylight hours only to conserve the battery." },
    ],
    correctAnswer: 1,
    reference: "AIM SAR 3.5",
    explanation: "Turn on the ELT as soon as possible after an emergency landing. The sooner you turn it on, the more quickly help will come. Turning it on and off could delay the pinpointing process.",
  },
  {
    id: 138,
    section: "Aircraft Operations",
    question:
      "An aircraft's ELT may be switched to transmit for test purposes anytime",
    options: [
      { id: 1, text: "following a hard landing." },
      { id: 2, text: "during the first 5 minutes of any hour UTC." },
      { id: 3, text: "following a component or battery change." },
      { id: 4, text: "prior to flight and listening on 121.5 MHz." },
    ],
    correctAnswer: 2,
    reference: "AIM SAR 3.5",
    explanation: "Refer to CARs 605.40 regarding when you may or may not activate your ELT.",
  },
  {
    id: 139,
    section: "Aircraft Operations",
    question:
      "Before shutting down you can verify that the aircraft's ELT is not transmitting by",
    options: [
      { id: 1, text: "checking that the ELT switch is in the off position." },
      { id: 2, text: "listening on 121.5 MHz for a signal." },
      { id: 3, text: "ensuring that the master switch is off." },
      { id: 4, text: "checking the ELT visual warning light." },
    ],
    correctAnswer: 2,
    reference: "AIM SAR 3.5",
    explanation: "If you hear a signal on 121.5, switch to an adjacent frequency like 121.55 or 121.6 to determine if the ELT originates from your own aircraft or one nearby.",
  },
  {
    id: 140,
    section: "Aircraft Operations",
    question:
      "All accidental ELT activations should be reported to the",
    options: [
      { id: 1, text: "airport manager." },
      { id: 2, text: "R.C.M.P." },
      { id: 3, text: "Minister." },
      { id: 4, text: "nearest ATS unit." },
    ],
    correctAnswer: 4,
    reference: "AIM SAR 3.5",
    explanation: "If your ELT activates accidentally, turn it off immediately and contact the nearest air traffic services unit, then return it to the armed position.",
  },
  {
    id: 141,
    section: "Aircraft Operations",
    question:
      "When an aircraft engine is left running on the ground and no person remains onboard, the aircraft's movement must be restricted and",
    options: [
      { id: 1, text: "it must remain in sight of the pilot at all times." },
      { id: 2, text: "it must not be left unattended." },
      { id: 3, text: "its gross weight must be below 4,409 lb (2,000 kg)." },
      { id: 4, text: "its control locks must be installed." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.09",
    explanation: "Per CARs 602.10, an aircraft must be attended, though regulations don't specify who must remain with the aircraft.",
  },
  {
    id: 142,
    section: "Aircraft Operations",
    question:
      "When confronted with an approaching thunderstorm, a take-off or landing",
    options: [
      { id: 1, text: "should be avoided as a sudden wind shift or low level turbulence could cause a loss of control." },
      { id: 2, text: "is safe if you can see under the thunderstorm through to the other side." },
      { id: 3, text: "should be avoided unless the take-off can be made away from the thunderstorm." },
      { id: 4, text: 'is safe if the thunderstorm is regarded as "light".' },
    ],
    correctAnswer: 1,
    reference: "AIM MET 3.11",
    explanation: "Strong winds, downdrafts, and windshear from thunderstorms extend up to 20 miles away. Waiting for the storm to pass is safest before landing.",
  },
  {
    id: 143,
    section: "Aircraft Operations",
    question:
      "An isolated thunderstorm is in close proximity to your aerodrome of intended landing. You should",
    options: [
      { id: 1, text: "land giving due consideration to wind shear on final approach." },
      { id: 2, text: "hold over a known point clear of the thunderstorm until it is well past the aerodrome." },
      { id: 3, text: "land as quickly as possible." },
      { id: 4, text: "add one-half the wind gust factor to the recommended landing speed and land." },
    ],
    correctAnswer: 2,
    reference: "AIM MET 3.11",
    explanation: "Strong winds, downdrafts, and windshear from thunderstorms extend up to 20 miles away.",
  },
  {
    id: 144,
    section: "Aircraft Operations",
    question:
      "The take-off thrust blast danger area includes at least that area extending back from the tail of a medium size jet transport aeroplane for",
    options: [
      { id: 1, text: "1,200 feet." },
      { id: 2, text: "900 feet." },
      { id: 3, text: "500 feet." },
      { id: 4, text: "450 feet." },
    ],
    correctAnswer: 1,
    reference: "AIM AIR 2.7",
    explanation: "Jet blast danger zones at ground idle: small jets 200ft/500ft, medium jets 450ft/1200ft, large jets 600ft/1600ft. Remember '2-4-6' then triple for takeoff thrust.",
  },
  {
    id: 145,
    section: "Aircraft Operations",
    question:
      "The ground idle blast danger area extends back from the tail of a jumbo jet aeroplane for at least",
    options: [
      { id: 1, text: "200 feet." },
      { id: 2, text: "450 feet." },
      { id: 3, text: "600 feet." },
      { id: 4, text: "750 feet." },
    ],
    correctAnswer: 3,
    reference: "AIM AIR 2.7",
    explanation: "Know the jet blast distance references for safety around different jet aircraft sizes.",
  },
  {
    id: 146,
    section: "Aircraft Operations",
    question:
      "The ground idle blast danger area extends back from the tail of a medium size jet aeroplane for at least",
    options: [
      { id: 1, text: "200 feet." },
      { id: 2, text: "450 feet." },
      { id: 3, text: "600 feet." },
      { id: 4, text: "750 feet." },
    ],
    correctAnswer: 2,
    reference: "AIM AIR 2.7",
    explanation: "Know the jet blast distance references for safety around different jet aircraft sizes.",
  },
  {
    id: 147,
    section: "Aircraft Operations",
    question:
      "The ground idle blast danger area extends back from the tail of an executive jet aeroplane for",
    options: [
      { id: 1, text: "200 feet." },
      { id: 2, text: "450 feet." },
      { id: 3, text: "600 feet." },
      { id: 4, text: "750 feet." },
    ],
    correctAnswer: 1,
    reference: "AIM AIR 2.7",
    explanation: "Know the jet blast distance references for safety around different jet aircraft sizes.",
  },
  {
    id: 148,
    section: "Aircraft Operations",
    question:
      "A 45 kt blast area can be expected _____ behind the propellers of a large turbo-prop aeroplane during taxi.",
    options: [
      { id: 1, text: "60 feet." },
      { id: 2, text: "80 feet." },
      { id: 3, text: "100 feet." },
      { id: 4, text: "120 feet." },
    ],
    correctAnswer: 1,
    reference: "AIM AIR 2.7",
    explanation: "45 knots propeller thrust produces a danger zone of approximately 60 feet.",
  },
  {
    id: 149,
    section: "Aircraft Operations",
    question:
      "At the request of the pilot, VHF direction finding stations normally provide a homing service",
    options: [
      { id: 1, text: "only in Class B airspace." },
      { id: 2, text: "only after declaration of an emergency on 121.5 MHz." },
      { id: 3, text: "on the approach control frequency." },
      { id: 4, text: "on a pre-selected tower or FSS frequency." },
    ],
    correctAnswer: 4,
    reference: "AIM COM 4.4",
    explanation: "VDF steers (VHF Direction Finding) allow ground stations to determine your bearing using your radio transmissions.",
  },
  {
    id: 150,
    section: "Aircraft Operations",
    question:
      "VDF steers are intended to provide directional assistance to VFR flights",
    options: [
      { id: 1, text: "in times of difficulties." },
      { id: 2, text: "on routine navigational trips." },
      { id: 3, text: "cleared for Special VFR." },
      { id: 4, text: "in uncontrolled airspace." },
    ],
    correctAnswer: 1,
    reference: "AIM COM 4.4",
    explanation: "VDF steers (VHF Direction Finding) allow ground stations to determine your bearing using your radio transmissions.",
  },
  {
    id: 151,
    section: "Aircraft Operations",
    question:
      "You are uncertain of your position and have requested a VDF steer to an airport. You should be aware that",
    options: [
      { id: 1, text: "avoiding other traffic is your responsibility but terrain clearance will be provided." },
      { id: 2, text: "avoiding other traffic and terrain clearance is your responsibility." },
      { id: 3, text: "traffic avoidance and terrain clearance will be provided." },
      { id: 4, text: "traffic avoidance will be provided but terrain clearance is your responsibility." },
    ],
    correctAnswer: 2,
    reference: "AIM COM 4.4",
    explanation: "VDF steers (VHF Direction Finding) allow ground stations to determine your bearing using your radio transmissions.",
  },
  {
    id: 152,
    section: "Aircraft Operations",
    question:
      "ATC advises that simultaneous operations (SIRO) are in progress at an airport. Pilots could expect a clearance to",
    options: [
      { id: 1, text: "take off over top of an aircraft on an intersecting runway." },
      { id: 2, text: "take off on a specified parallel runway." },
      { id: 3, text: "land and hold short of an intersecting runway." },
      { id: 4, text: "land on a specified parallel runway." },
    ],
    correctAnswer: 3,
    reference: "AIM RAC 4.3.7",
    explanation: "SIRO means Simultaneous Intersecting Runway Operations, where aircraft hold short of crossing runways.",
  },
  {
    id: 153,
    section: "Aircraft Operations",
    question:
      "When issued a clearance to land and hold short of an intersecting runway, pilots",
    options: [
      { id: 1, text: "shall comply regardless of the circumstances." },
      { id: 2, text: "may taxi across the intersection after the departing or arriving aircraft has cleared their path." },
      { id: 3, text: "who inadvertently go through the intersection should immediately do a 180° turn and backtrack to the hold position." },
      { id: 4, text: "should immediately inform ATC if they are unable to comply." },
    ],
    correctAnswer: 4,
    reference: "AIM RAC 4.3.7",
    explanation: "Pilots must inform ATC immediately if unable to hold short of a runway, even after accepting clearance.",
  },

  // ===========================
  // 12: REGULATIONS - CANADIAN AIRSPACE
  // ===========================
  {
    id: 154,
    section: "Regulations - Canadian Airspace",
    question: "ADIZ rules normally apply",
    options: [
      { id: 1, text: "only to aircraft flying above 12,500 feet." },
      { id: 2, text: "only to aircraft flying at true airspeeds of 180 kt or more." },
      { id: 3, text: "only to all southbound aircraft." },
      { id: 4, text: "to all aircraft." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.145",
    explanation: "File a defence flight plan or itinerary with ATS for ADIZ penetration. Any change in time by more than 5 minutes or route by more than 20 nm must be reported.",
  },
  {
    id: 155,
    section: "Regulations - Canadian Airspace",
    question:
      "When operating in accordance with VFR, aircraft shall be flown",
    options: [
      { id: 1, text: "clear of aerodrome traffic zones." },
      { id: 2, text: "clear of control zones." },
      { id: 3, text: "with visual reference to the surface." },
      { id: 4, text: "in compliance with all of the above." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.114",
    explanation: "VFR flight is defined as flight with visual reference to the surface.",
  },
  {
    id: 156,
    section: "Regulations - Canadian Airspace",
    question:
      "Normally, a helicopter in uncontrolled airspace at less than 1,000 feet AGL may operate during the day in flight visibility which is not less than",
    options: [
      { id: 1, text: "1/2 mile." },
      { id: 2, text: "1 mile." },
      { id: 3, text: "2 miles." },
      { id: 4, text: "3 miles." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.115",
    explanation: "Helicopter visibility rules are almost always half of aeroplane requirements.",
  },
  {
    id: 157,
    section: "Regulations - Canadian Airspace",
    question:
      "What distance from cloud shall an aircraft maintain when flying below 1,000 feet AGL within uncontrolled airspace?",
    options: [
      { id: 1, text: "At least 2,000 feet horizontally and 500 feet vertically." },
      { id: 2, text: "At least 1 mile horizontally and 500 feet vertically." },
      { id: 3, text: "At least 2 miles horizontally and 500 feet vertically." },
      { id: 4, text: "Clear of cloud." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.115",
    explanation: "When below 1,000 ft AGL, pilots must stay clear of cloud rather than maintain specific distances, with visibility doubled to 2 miles for airplanes.",
  },
  {
    id: 158,
    section: "Regulations - Canadian Airspace",
    question:
      "No person shall drop anything from an aircraft in flight",
    options: [
      { id: 1, text: "which will create a hazard to persons or property." },
      { id: 2, text: "unless approval has been granted by the Minister." },
      { id: 3, text: "unless over an authorized jettison area." },
      { id: 4, text: "unless it is attached to a parachute." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.23",
    explanation: "No person shall create a hazard to persons or property on the surface by dropping an object from an aircraft in flight. You must ensure items won't cause harm.",
  },
  {
    id: 159,
    section: "Regulations - Canadian Airspace",
    question:
      "A person may conduct aerobatic manoeuvres in an aircraft",
    options: [
      { id: 1, text: "over an airport provided the appropriate frequency is monitored." },
      { id: 2, text: "over the suburban area of a city above 2,000 feet AGL." },
      { id: 3, text: "within Class F advisory airspace when visibility is 3 miles or greater." },
      { id: 4, text: "within Class C airspace when the visibility is 1 mile or greater." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.27",
    explanation: "Minimum visibility for aerobatics combined with class F airspace designation requirements.",
  },
  {
    id: 160,
    section: "Regulations - Canadian Airspace",
    question:
      "CARs state that after the consumption of any alcoholic beverage, no person shall act as a crew member of an aircraft within",
    options: [
      { id: 1, text: "8 hours." },
      { id: 2, text: "12 hours." },
      { id: 3, text: "24 hours." },
      { id: 4, text: "36 hours." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.03",
    explanation: "As of 2019, twelve hours minimum rest is required before flight duties.",
  },
  {
    id: 161,
    section: "Regulations - Canadian Airspace",
    question:
      "Day in Canada is that period of time between",
    options: [
      { id: 1, text: "sunrise and sunset." },
      { id: 2, text: "one hour before sunrise and one hour after sunset." },
      { id: 3, text: "the beginning of morning civil twilight and the end of evening civil twilight." },
      { id: 4, text: "the end of morning civil twilight and the beginning of evening civil twilight." },
    ],
    correctAnswer: 3,
    reference: "CAR 101.01",
    explanation: "Day means the time between the beginning of morning civil twilight and the end of evening civil twilight.",
  },
  {
    id: 162,
    section: "Regulations - Canadian Airspace",
    question:
      "Night in Canada is that period of time between",
    options: [
      { id: 1, text: "sunset and sunrise." },
      { id: 2, text: "the beginning of evening civil twilight and the end of morning civil twilight." },
      { id: 3, text: "one hour after sunset and one hour before sunrise." },
      { id: 4, text: "the end of evening civil twilight and the beginning of morning civil twilight." },
    ],
    correctAnswer: 4,
    reference: "CAR 101.01",
    explanation: "Night occurs from the end of evening civil twilight to the beginning of morning civil twilight.",
  },
  {
    id: 163,
    section: "Regulations - Canadian Airspace",
    question:
      "Formation flying is permitted only if such flights",
    options: [
      { id: 1, text: "have been pre-arranged by the pilots-in-command." },
      { id: 2, text: "are conducted above 3,000 feet AGL." },
      { id: 3, text: "are conducted by commercial pilots." },
      { id: 4, text: "are led by a pilot whose licence is endorsed for formation flight." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.38",
    explanation: "If you prearrange a formation, it is legal, and you can fly side by side wherever you have a clearance.",
  },
  {
    id: 164,
    section: "Regulations - Canadian Airspace",
    question:
      "Flight through active Class F airspace with the designator CYR",
    options: [
      { id: 1, text: "may be undertaken only by aircraft equipped with two-way radio communication and a transponder." },
      { id: 2, text: "is restricted to military aircraft operating under the authority of the Minister of National Defence." },
      { id: 3, text: "will be approved only for aircraft on IFR flight plans under positive radar control." },
      { id: 4, text: "is permitted only in accordance with permission issued by the user agency." },
    ],
    correctAnswer: 4,
    reference: "CAR 601.04",
    explanation: "No one may fly in restricted airspace without permission. To get permission, contact the person responsible for that airspace.",
  },
  {
    id: 165,
    section: "Regulations - Canadian Airspace",
    question:
      "Which statement is correct with regard to 'advisory airspace'?",
    options: [
      { id: 1, text: "A transient aircraft entering active advisory airspace shall be equipped with a serviceable transponder." },
      { id: 2, text: "Non-participating VFR aircraft are encouraged to avoid flight in advisory airspace during active periods specified on aeronautical charts and NOTAM." },
      { id: 3, text: "Aircraft need to be equipped with a two-way radio to enter active advisory airspace." },
      { id: 4, text: "Only military aircraft may enter advisory airspace depicted on aeronautical charts." },
    ],
    correctAnswer: 2,
    reference: "CAR 601.04",
    explanation: "Class F advisory airspace (CYA) means the chart is telling you that a certain kind of activity goes on there \\u2014 it's advice, not a rule.",
  },
  {
    id: 166,
    section: "Regulations - Canadian Airspace",
    question:
      "Except as provided by CARs, unless taking off, landing or attempting to land, no person shall fly a helicopter over a built-up area or open air assembly of persons except at an altitude that will permit, in the event of an emergency, the landing of the aircraft without creating a hazard to persons or property on the surface, and such altitude shall not be less than _____ above the highest obstacle within a horizontal radius of _____ from the aircraft.",
    options: [
      { id: 1, text: "3,000 feet, 1 mile." },
      { id: 2, text: "2,000 feet, 1,000 feet." },
      { id: 3, text: "1,000 feet, 500 feet." },
      { id: 4, text: "500 feet, 500 feet." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.14",
    explanation: "Helicopters must maintain 500 ft horizontal clearance from obstacles. Airplanes require 2,000 ft horizontal clearance.",
  },
  {
    id: 167,
    section: "Regulations - Canadian Airspace",
    question:
      "Over non-populous areas or over open water, a pilot may not fly an aircraft at a distance less than _____ feet from any person, vessel, vehicle or structure.",
    options: [
      { id: 1, text: "200." },
      { id: 2, text: "500." },
      { id: 3, text: "1,000." },
      { id: 4, text: "2,000." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.14",
    explanation: "500 ft above or horizontally from obstacles applies to both helicopters and airplanes.",
  },
  {
    id: 168,
    section: "Regulations - Canadian Airspace",
    question:
      "Except for balloons and as provided by CARs, no person shall cause any aircraft to take off or attempt to take off from, land on or attempt to land on, any surface within the built-up area of any city or town unless",
    options: [
      { id: 1, text: "the aircraft is multi-engined." },
      { id: 2, text: "all obstacles on approach and departure can be cleared by a minimum of 500 feet." },
      { id: 3, text: "that surface is an airport or military aerodrome." },
      { id: 4, text: "noise abatement procedures are followed." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.13",
    explanation: "Take-offs and landings are only permitted in built-up areas at airports, during police operations, or when saving human life.",
  },
  {
    id: 169,
    section: "Regulations - Canadian Airspace",
    question:
      "What is the height AGL above which an aircraft in VFR flight shall be operated to conform with the Cruising Altitudes Order?",
    options: [
      { id: 1, text: "700 feet." },
      { id: 2, text: "2,200 feet." },
      { id: 3, text: "3,000 feet." },
      { id: 4, text: "3,500 feet." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.34",
    explanation: "Although 3,500 ft is the lowest VFR cruising altitude, aircraft above 3,000 ft must comply with cruising altitude rules.",
  },
  {
    id: 170,
    section: "Regulations - Canadian Airspace",
    question:
      "An aircraft cruising VFR in level flight above 3,000 feet AGL on a track of 290°M shall be flown at an",
    options: [
      { id: 1, text: "even thousand foot altitude." },
      { id: 2, text: "even thousand plus 500 foot altitude." },
      { id: 3, text: "odd thousand foot altitude." },
      { id: 4, text: "odd thousand plus 500 foot altitude." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.34",
    explanation: "Since 290\\u00b0 falls between 180\\u00b0 and 359\\u00b0, use even thousands plus 500 ft ASL.",
  },
  {
    id: 171,
    section: "Regulations - Canadian Airspace",
    question:
      "The selection of a cruising altitude in the Southern Domestic Airspace should be based on the",
    options: [
      { id: 1, text: "true track." },
      { id: 2, text: "magnetic track." },
      { id: 3, text: "true heading." },
      { id: 4, text: "magnetic heading." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.34",
    explanation: "The track is the path over the ground; the heading is the direction the airplane is pointing. Magnetic track is used to dictate cruising altitude.",
  },
  {
    id: 172,
    section: "Regulations - Canadian Airspace",
    question:
      "Every person who is the holder of any pilot licence or permit shall, on demand, produce such licence or permit for inspection by persons authorized by the Minister, by peace officers and",
    options: [
      { id: 1, text: "FSS operators." },
      { id: 2, text: "Transport Canada airport managers." },
      { id: 3, text: "immigration officers." },
      { id: 4, text: "all of the above." },
    ],
    correctAnswer: 3,
    reference: "CAR 401.03",
    explanation: "Only police, customs, and Transport Canada officials may demand license presentation.",
  },
  {
    id: 173,
    section: "Regulations - Canadian Airspace",
    question:
      "Low Level Airspace is defined as all airspace",
    options: [
      { id: 1, text: "extending upwards from 2,200 feet AGL within designated airways." },
      { id: 2, text: "extending upwards from 700 feet AGL within designated airways." },
      { id: 3, text: "extending upwards from the surface of the earth within designated airways." },
      { id: 4, text: "within the Canadian Domestic Airspace below 18,000 feet ASL." },
    ],
    correctAnswer: 4,
    reference: "CAR 601.01",
    explanation: "Class E airspace extends up to, but not including, 18,000 ft ASL.",
  },
  {
    id: 174,
    section: "Regulations - Canadian Airspace",
    question:
      "A Control Zone normally is controlled airspace extending upwards from",
    options: [
      { id: 1, text: "2,200 feet above the surface of the earth." },
      { id: 2, text: "700 feet above the surface of the earth." },
      { id: 3, text: "the surface of the earth to 3,000 feet." },
      { id: 4, text: "a specified height above the surface of the earth." },
    ],
    correctAnswer: 3,
    reference: "CAR 601.01",
    explanation: "The control zone starts at the ground. The top of the control zone is a specified height above the surface.",
  },

  // ===========================
  // 13: CONTROLLED AIRSPACE
  // ===========================
  {
    id: 175,
    section: "Controlled Airspace",
    question:
      '"Controlled Airspace" means all airspace of defined dimensions within which',
    options: [
      { id: 1, text: "Control Zone regulations are in force." },
      { id: 2, text: "security regulations are in force." },
      { id: 3, text: "Special VFR flight only is permitted." },
      { id: 4, text: "an ATC service is provided." },
    ],
    correctAnswer: 4,
    reference: "CAR 101.01",
    explanation: "Controlled airspace per CARs 101.01 is an airspace of fixed dimensions within which air traffic control service is provided.",
  },
  {
    id: 176,
    section: "Controlled Airspace",
    question:
      "When in VFR flight within controlled airspace, a pilot must remain clear of cloud by at least",
    options: [
      { id: 1, text: "500 feet vertically and 1 mile horizontally." },
      { id: 2, text: "500 feet vertically and 2,000 feet horizontally." },
      { id: 3, text: "1,000 feet vertically and 1 mile horizontally." },
      { id: 4, text: "1,000 feet vertically and 3 miles horizontally." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.114",
    explanation: "Controlled airspace requires 500 ft vertical separation from cloud, 1 mile horizontal separation, and 3 miles visibility per CARs 602.114.",
  },
  {
    id: 177,
    section: "Controlled Airspace",
    question:
      "The minimum flight visibility for VFR flight within a low level airway is",
    options: [
      { id: 1, text: "1 mile." },
      { id: 2, text: "1½ miles." },
      { id: 3, text: "2 miles." },
      { id: 4, text: "3 miles." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.114",
    explanation: "Low level airways are Class E airspace where VFR traffic doesn't need controller contact but must maintain controlled airspace weather minima.",
  },
  {
    id: 178,
    section: "Controlled Airspace",
    question:
      "When in VFR flight within a Control Zone, a pilot must remain clear of cloud by at least",
    options: [
      { id: 1, text: "500 feet vertically and 2,000 feet horizontally." },
      { id: 2, text: "500 feet vertically and 1 mile horizontally." },
      { id: 3, text: "1,000 feet vertically and 1 mile horizontally." },
      { id: 4, text: "1,000 feet vertically and 3 miles horizontally." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.114",
    explanation: "Controlled airspace requires controlled airspace weather minima to be maintained at all times.",
  },
  {
    id: 179,
    section: "Controlled Airspace",
    question:
      "VFR cross-country pilots wishing to cross through any part of a Class C Control Zone should",
    options: [
      { id: 1, text: "advise the associated FSS." },
      { id: 2, text: "monitor the Approach Control frequency." },
      { id: 3, text: "advise ATC of their intentions and obtain a clearance." },
      { id: 4, text: "conform with circuit direction at that airport." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.31",
    explanation: "Per CARs 601.08, you must obtain an ATC clearance before entering any Class C control zone.",
  },
  {
    id: 180,
    section: "Controlled Airspace",
    question:
      "ATC may authorize an aeroplane equipped with a functioning two-way radio to transit a Control Zone under day Special VFR provided visibility is not less than",
    options: [
      { id: 1, text: "1/2 mile." },
      { id: 2, text: "1 mile." },
      { id: 3, text: "2 miles." },
      { id: 4, text: "3 miles." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.117",
    explanation: "Per CARs 602.117, minimum 1 mile visibility is required for airplanes operating under Special VFR.",
  },
  {
    id: 181,
    section: "Controlled Airspace",
    question:
      "ATC may authorize a helicopter equipped with a functioning two-way radio to transit a Control Zone under day Special VFR where visibility is not less than",
    options: [
      { id: 1, text: "1 mile and operated at not less than 500 feet AGL." },
      { id: 2, text: "1/2 mile." },
      { id: 3, text: "1 mile." },
      { id: 4, text: "1/2 mile and operated at not less than 500 feet AGL." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.117",
    explanation: "Helicopters may operate with half the airplane visibility requirements under Special VFR \\u2014 1/2 mile.",
  },
  {
    id: 182,
    section: "Controlled Airspace",
    question:
      "An aircraft flying in accordance with Special VFR would be flying within",
    options: [
      { id: 1, text: "a Control Zone." },
      { id: 2, text: "an Aerodrome Traffic Zone." },
      { id: 3, text: "a Terminal Control Area." },
      { id: 4, text: "an airway." },
    ],
    correctAnswer: 1,
    reference: "CAR 602.117",
    explanation: "Special VFR exists only within control zones, so any SVFR operation must occur in a control zone.",
  },
  {
    id: 183,
    section: "Controlled Airspace",
    question:
      "An arriving VFR flight shall make initial radio contact with the control tower",
    options: [
      { id: 1, text: "upon entering an Aerodrome Traffic Zone." },
      { id: 2, text: "prior to entering a Control Zone." },
      { id: 3, text: "immediately prior to joining the circuit." },
      { id: 4, text: "immediately after entering a Control Zone." },
    ],
    correctAnswer: 2,
    reference: "CAR 602.31",
    explanation: "You need permission prior to entering an Aerodrome Traffic Zone.",
  },
  {
    id: 184,
    section: "Controlled Airspace",
    question:
      "VFR flight within Class B airspace is permitted",
    options: [
      { id: 1, text: "only when the flight visibility is 5 miles or better." },
      { id: 2, text: "for all aircraft except gliders and balloons." },
      { id: 3, text: "if the pilot holds a Class B Airspace Endorsement." },
      { id: 4, text: "in accordance with an ATC clearance." },
    ],
    correctAnswer: 4,
    reference: "CAR 601.08",
    explanation: "Class B airspace requires an ATC clearance. Such flights are considered CVFR (controlled VFR).",
  },
  {
    id: 185,
    section: "Controlled Airspace",
    question:
      "The pilot of an arriving VFR flight shall make initial radio contact with a control tower in Class C airspace",
    options: [
      { id: 1, text: "immediately after entering the Control Zone." },
      { id: 2, text: "10 NM outside the Control Zone." },
      { id: 3, text: "prior to entering the Control Zone." },
      { id: 4, text: "immediately prior to joining the circuit." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.31",
    explanation: "You must obtain clearance before crossing the control zone boundary.",
  },
  {
    id: 186,
    section: "Controlled Airspace",
    question:
      "Unless otherwise authorized, a pilot on a VFR flight operating within a Class C Terminal Control Area must",
    options: [
      { id: 1, text: "exit the airspace whenever the weather deteriorates below VFR limits." },
      { id: 2, text: "establish radio contact with the appropriate ATC unit only when transiting the associated Control Zone." },
      { id: 3, text: "establish and maintain radio communication with the appropriate ATC Unit." },
      { id: 4, text: "contact Radar Service only when taking off or landing at the major airport concerned." },
    ],
    correctAnswer: 3,
    reference: "CAR 602.31",
    explanation: "Continuous listening watch is required in Class C airspace, with limited permission for brief frequency departures.",
  },

  // ===========================
  // 14: AVIATION OCCURRENCES
  // ===========================
  {
    id: 187,
    section: "Aviation Occurrences",
    question:
      "The primary objective of an aviation safety investigation into an aircraft accident or aircraft incident is to",
    options: [
      { id: 1, text: "apportion blame and liability." },
      { id: 2, text: "determine the adequacy of insurance regulations." },
      { id: 3, text: "enforce regulations." },
      { id: 4, text: "prevent recurrences." },
    ],
    correctAnswer: 4,
    reference: "CTAISB Act",
    explanation: "Accidents are investigated to find out what went wrong, to try to ensure it doesn't happen again.",
  },
  {
    id: 188,
    section: "Aviation Occurrences",
    question:
      "Details on civil aviation accident reporting procedures can be found in the",
    options: [
      { id: 1, text: "A.I.P. Canada." },
      { id: 2, text: "Canadian Aviation Regulations." },
      { id: 3, text: "Canada Flight Supplement." },
      { id: 4, text: "Aviation Safety Manual." },
    ],
    correctAnswer: 1,
    reference: "AIM GEN 3.5",
    explanation: "The procedures and information to report are all listed in AIP-GEN 3.3.",
  },
  {
    id: 189,
    section: "Aviation Occurrences",
    question:
      "When an aircraft accident occurs, the pilot or operator of the aircraft involved shall ensure that the particulars of the accident are reported to the TSB",
    options: [
      { id: 1, text: "within 7 days by registered mail." },
      { id: 2, text: "within 24 hours by telephone." },
      { id: 3, text: "within 48 hours by facsimile." },
      { id: 4, text: "as soon as possible and by the quickest means available." },
    ],
    correctAnswer: 4,
    reference: "CTAISB Act",
    explanation: "The fastest approach to reporting is notifying any air traffic service unit, e.g., the tower. TSB fax and 24-hour telephone numbers appear in the AIP.",
  },
  {
    id: 190,
    section: "Aviation Occurrences",
    question:
      "TSB shall be notified of a reportable aviation accident when",
    options: [
      { id: 1, text: "a person sustains serious or fatal injury as a result of being in or coming into direct contact with any part of an aircraft." },
      { id: 2, text: "an aircraft sustains damage or structural failure adversely affecting performance or flight characteristics and requiring major repair or replacement." },
      { id: 3, text: "an aircraft is missing or completely inaccessible." },
      { id: 4, text: "any of the above conditions exist." },
    ],
    correctAnswer: 4,
    reference: "CTAISB Act",
    explanation: "A serious injury is anything that requires overnight hospitalization, or a fracture of any bone except a toe, finger, or nose. Even property damage constitutes a reportable accident without injuries.",
  },
  {
    id: 191,
    section: "Aviation Occurrences",
    question:
      "What circumstance(s) permit an aircraft to be moved without approval of the Minister after it has been involved in an accident which caused serious injury or death? When it becomes necessary to",
    options: [
      { id: 1, text: "rescue survivors." },
      { id: 2, text: "avoid danger to persons or property." },
      { id: 3, text: "prevent destruction by fire." },
      { id: 4, text: "implement (1), (2) or (3) above." },
    ],
    correctAnswer: 4,
    reference: "CTAISB Act",
    explanation: "Three authorized reasons for disturbing wreckage are stated in the AIP. Salvaging logbooks is NOT an acceptable reason.",
  },
  {
    id: 192,
    section: "Aviation Occurrences",
    question:
      "The TSB considers missing aircraft to be",
    options: [
      { id: 1, text: "a reportable aviation incident." },
      { id: 2, text: "an occurrence which need not be reported." },
      { id: 3, text: "an aviation incident which need not be reported." },
      { id: 4, text: "a reportable aviation accident." },
    ],
    correctAnswer: 4,
    reference: "CTAISB Act",
    explanation: "Reportable incidents apply only to airplanes over 5,700 kg or helicopters over 2,250 kg. Missing or inaccessible aircraft must be reported and are counted as reportable aviation accidents until proved otherwise.",
  },
];

export const PSTAR_SECTIONS: PstarSection[] = [
  "Collision Avoidance",
  "Visual Signals",
  "Communications",
  "Aerodromes",
  "Equipment",
  "Pilot Responsibilities",
  "Wake Turbulence",
  "Aeromedical",
  "Flight Plans and Flight Itineraries",
  "Clearances and Instructions",
  "Aircraft Operations",
  "Regulations - Canadian Airspace",
  "Controlled Airspace",
  "Aviation Occurrences",
];
