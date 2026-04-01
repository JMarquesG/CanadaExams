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
  },

  // ===========================
  // 5: EQUIPMENT
  // ===========================
  {
    id: 58,
    section: "Equipment",
    question:
      "Except for ultra-light aeroplanes and balloons, which documents shall be carried on board when flying a radio equipped Canadian privately registered aircraft?",
    options: [
      { id: 1, text: "C, D, E, G." },
      { id: 2, text: "C, D, F, H." },
      { id: 3, text: "D, E, F, G." },
      { id: 4, text: "D, E, G, H." },
    ],
    correctAnswer: 4,
    reference: "CAR 602.60",
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
  },
  {
    id: 68,
    section: "Equipment",
    question:
      "Which flight instrument systems and equipment are required on power driven aircraft for day VFR flight in controlled airspace? A magnetic direction indicating system or magnetic compass and",
    options: [
      { id: 1, text: "A, C, F." },
      { id: 2, text: "A, B, G." },
      { id: 3, text: "A, C, D, E, F." },
      { id: 4, text: "B, D, E, G." },
    ],
    correctAnswer: 1,
    reference: "CAR 605.14",
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
