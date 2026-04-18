export type TimminsSection =
  | "Air Law"
  | "Helicopter Theory"
  | "Meteorology"
  | "Navigation"
  | "Aeromedical"
  | "Weather Reports";

export interface TimminsQuestion {
  id: number;
  section: TimminsSection;
  question: string;
  options: { id: number; text: string }[];
  correctAnswer: number;
  explanation: string;
}

export const timminsQuestions: TimminsQuestion[] = [
  // ===========================
  // 1: AIR LAW (Questions 1–23)
  // ===========================
  {
    id: 1,
    section: "Air Law",
    question:
      "When carrying passengers and an ELT is required on board, what is the requirement of the ELT? To have;",
    options: [
      { id: 1, text: "Been serviced in last six months" },
      { id: 2, text: "Been serviced in the last year" },
      { id: 3, text: "Been serviced in the last two years" },
      { id: 4, text: "A certification tag attached" },
    ],
    correctAnswer: 2,
    explanation:
      "An ELT must have been serviced within the last 12 months (1 year) when carrying passengers. This ensures the battery and transmitter are in working order.",
  },
  {
    id: 2,
    section: "Air Law",
    question:
      "When flying a single engine helicopter beyond gliding distance, but within 15 minutes of shore, or taking off and landing on water, what survival equipment must be carried?",
    options: [
      { id: 1, text: "Life jackets for each person" },
      { id: 2, text: "Water type ELT" },
      { id: 3, text: "Life Rafts" },
      { id: 4, text: "All of the above" },
    ],
    correctAnswer: 1,
    explanation:
      "When a single-engine helicopter is beyond gliding distance but within 15 minutes of shore, life jackets for each person on board are required. Life rafts and water-type ELTs are required when further from shore.",
  },
  {
    id: 3,
    section: "Air Law",
    question:
      "According to the flight time duty limitations, what are the maximum hours you may work in a 24 hour work period?",
    options: [
      { id: 1, text: "10 hours" },
      { id: 2, text: "12 hours" },
      { id: 3, text: "14 hours" },
      { id: 4, text: "18 hours" },
    ],
    correctAnswer: 3,
    explanation:
      "Under the CARs flight time and duty time limitations, the maximum duty time in a 24-hour period is 14 hours.",
  },
  {
    id: 4,
    section: "Air Law",
    question:
      "With regards to icing, prior to taking off in an aircraft a pilot must:",
    options: [
      {
        id: 1,
        text: "Check critical surfaces, and as long as not enough ice is present to effect flight a take off may be made",
      },
      {
        id: 2,
        text: "Check critical surfaces for ice to confirm whether or not they have ice on them",
      },
      {
        id: 3,
        text: "Ensure skin temperature is warm enough before take off to not have ice form",
      },
      {
        id: 4,
        text: "Confirm all surfaces of the aircraft does not have ice adhering to the surfaces",
      },
    ],
    correctAnswer: 2,
    explanation:
      "Prior to takeoff, a pilot must check all critical surfaces for ice. The requirement is to confirm the presence or absence of ice on critical surfaces, not just to assume they are clear.",
  },
  {
    id: 5,
    section: "Air Law",
    question:
      "What must the operator of a company ensure, for the pilot to carry passengers?",
    options: [
      { id: 1, text: "Every 12 months emergency procedures training" },
      {
        id: 2,
        text: "Every 6 months how to brief passengers about entering, exiting and emergency procedures",
      },
      { id: 3, text: "Every 6 months a P.P.C" },
      {
        id: 4,
        text: "Every 12 months reading and reviewing operational procedures with passengers",
      },
    ],
    correctAnswer: 1,
    explanation:
      "The operator must ensure that pilots receive emergency procedures training every 12 months to be authorized to carry passengers.",
  },
  {
    id: 6,
    section: "Air Law",
    question:
      'Which of the following is a "reportable aviation accident"?',
    options: [
      {
        id: 1,
        text: "Anytime an aircraft has to shutdown due to mechanical reasons",
      },
      {
        id: 2,
        text: "Property damage due to jet blast or rotor down wash",
      },
      { id: 3, text: "An aircraft that is missing or inaccessible" },
      { id: 4, text: "An aircraft that has had an engine failure" },
    ],
    correctAnswer: 3,
    explanation:
      "Under the Transportation Safety Board regulations, a reportable aviation accident includes when an aircraft is missing or inaccessible. Engine failures and shutdowns are reportable incidents, not accidents.",
  },
  {
    id: 7,
    section: "Air Law",
    question:
      "What is the minimum fuel reserve for a helicopter operating in an air taxi operation at night?",
    options: [
      { id: 1, text: "20 minutes at maximum cruise" },
      { id: 2, text: "30 minutes at normal cruise" },
      {
        id: 3,
        text: "20 minutes at normal cruise and then to alternate",
      },
      { id: 4, text: "45 minutes at normal cruise" },
    ],
    correctAnswer: 2,
    explanation:
      "For a helicopter in an air taxi operation at night, the minimum fuel reserve is 30 minutes at normal cruising speed.",
  },
  {
    id: 8,
    section: "Air Law",
    question:
      "What statement is true with regard to class B airspace?",
    options: [
      {
        id: 1,
        text: "All airways based above 12,500 ft. up to 18,000ft.",
      },
      {
        id: 2,
        text: "All airways based above 12,500 ft. up to not including 18,000 ft.",
      },
      {
        id: 3,
        text: "All controlled airspace above 12,500 ft. up to not including 18,000 ft.",
      },
      { id: 4, text: "All airspace based above 12,500 ft." },
    ],
    correctAnswer: 3,
    explanation:
      "Class B airspace in Canada is all controlled airspace above 12,500 ft ASL up to but not including 18,000 ft ASL (FL180), where Class A airspace begins.",
  },
  {
    id: 9,
    section: "Air Law",
    question: "Conditions of a white-out occur:",
    options: [
      {
        id: 1,
        text: "Over an unbroken snow cover and beneath a uniformly overcast sky",
      },
      {
        id: 2,
        text: "Over featureless terrain with blizzard conditions with a barely discernible horizon",
      },
      {
        id: 3,
        text: "Over featureless terrain and clear skies causing reflections",
      },
      {
        id: 4,
        text: "Over a snow covered forest area with heavy snow falling",
      },
    ],
    correctAnswer: 1,
    explanation:
      "White-out conditions occur when an unbroken snow cover blends with a uniformly overcast sky, making it impossible to distinguish the horizon or surface features.",
  },
  {
    id: 10,
    section: "Air Law",
    question: "What statement is true regarding the ADIZ?",
    options: [
      {
        id: 1,
        text: "You only need to contact ATC when operating at more than 180 knots",
      },
      { id: 2, text: "You need to file a flight plan" },
      {
        id: 3,
        text: "You must amend your flight plan if you have a difference of more than 5 minutes from time of entry",
      },
      {
        id: 4,
        text: "You must amend your flight plan if you have a difference of more than 10 NM from point of entry",
      },
    ],
    correctAnswer: 3,
    explanation:
      "When operating in or near the ADIZ, you must amend your flight plan if there is a difference of more than 5 minutes from your estimated time of entry.",
  },
  {
    id: 11,
    section: "Air Law",
    question:
      "In the Southern Domestic airspace at what altitude do the cruising altitudes start?",
    options: [
      { id: 1, text: "3000 ASL true track" },
      { id: 2, text: "3000 AGL magnetic track" },
      { id: 3, text: "3000 ASL magnetic track" },
      { id: 4, text: "3000 AGL true track" },
    ],
    correctAnswer: 2,
    explanation:
      "In the Southern Domestic Airspace, VFR cruising altitudes are based on magnetic track and begin above 3,000 ft AGL.",
  },
  {
    id: 12,
    section: "Air Law",
    question:
      "Your aircraft is flying at an altitude of 1000' on the altimeter, the altimeter is set to 30.22 and the temperature is 25 degrees centigrade. What is the pressure altitude the aircraft is flying at?",
    options: [
      { id: 1, text: "1,030" },
      { id: 2, text: "1,300" },
      { id: 3, text: "700" },
      { id: 4, text: "970" },
    ],
    correctAnswer: 3,
    explanation:
      "Pressure altitude = Indicated altitude + (29.92 - current altimeter setting) x 1000. With 30.22, the correction is (29.92 - 30.22) x 1000 = -300 ft. So 1000 - 300 = 700 ft pressure altitude.",
  },
  {
    id: 13,
    section: "Air Law",
    question:
      "You have a CPL and you are employed by a company which of the following is true, your licence permits you to:",
    options: [
      {
        id: 1,
        text: "Fly co-pilot IFR on any helicopter you are endorsed on",
      },
      { id: 2, text: "PIC any helicopter you are endorsed on" },
      {
        id: 3,
        text: "PIC any Helicopter IFR with a valid IFR rating",
      },
      { id: 4, text: "Fly co-pilot on any helicopter" },
    ],
    correctAnswer: 2,
    explanation:
      "A Commercial Pilot Licence (CPL) permits you to act as Pilot-in-Command (PIC) on any helicopter for which you hold a valid type endorsement.",
  },
  {
    id: 14,
    section: "Air Law",
    question:
      "When entering an aerodrome with an ARCAL system and the runway lights are already on, the lights will:",
    options: [
      { id: 1, text: "Need to be reset" },
      { id: 2, text: "Stay on for 15 minutes" },
      { id: 3, text: "Stay on for 15 minutes if reset" },
      { id: 4, text: "No action is needed" },
    ],
    correctAnswer: 3,
    explanation:
      "ARCAL (Aircraft Radio Control of Aerodrome Lighting) lights stay on for 15 minutes. If the lights are already on and you key the microphone to reset them, they will stay on for another 15 minutes from the time of reset.",
  },
  {
    id: 15,
    section: "Air Law",
    question:
      "What is the definition of an infant, with respect to aircraft seats and safety belts.",
    options: [
      { id: 1, text: "Less than 30 lbs" },
      { id: 2, text: "Less than two years old" },
      { id: 3, text: "Less than three years old and under 30 lbs" },
      { id: 4, text: "Two years old and under" },
    ],
    correctAnswer: 2,
    explanation:
      "An infant is defined as a person who is less than two years old. Infants may be held by an adult and do not require their own seat.",
  },
  {
    id: 16,
    section: "Air Law",
    question:
      "How current on type must you be to fly passengers commercially in a single engine helicopter?",
    options: [
      { id: 1, text: "5 takeoff and landings every 180 days" },
      { id: 2, text: "3 takeoff and landings every 90 days" },
      { id: 3, text: "5 takeoff and landings every 90 days" },
      { id: 4, text: "6 takeoff and landings every 180 days" },
    ],
    correctAnswer: 2,
    explanation:
      "To carry passengers commercially in a single engine helicopter, you must have completed at least 3 takeoffs and landings in the preceding 90 days on the same type.",
  },
  {
    id: 17,
    section: "Air Law",
    question:
      "What is the minimum visibility that must be maintained in a control zone while not operating Special VFR?",
    options: [
      { id: 1, text: "1 mile" },
      { id: 2, text: "2 miles" },
      { id: 3, text: "3 miles" },
      { id: 4, text: "500 ft. from cloud" },
    ],
    correctAnswer: 3,
    explanation:
      "The minimum flight visibility for VFR flight in a Control Zone is 3 miles. Below this, Special VFR clearance is required.",
  },
  {
    id: 18,
    section: "Air Law",
    question:
      "If you file a flight itinerary with a responsible person and fail to return at the expected time of your itinerary, how long should the responsible person wait before reporting you missing?",
    options: [
      { id: 1, text: "24 hours" },
      { id: 2, text: "12 hours" },
      { id: 3, text: "Immediately after proposed arrival" },
      { id: 4, text: "1 hour" },
    ],
    correctAnswer: 3,
    explanation:
      "When a flight itinerary is filed with a responsible person, that person should notify appropriate authorities immediately if the aircraft has not arrived at the proposed time and cannot be located.",
  },
  {
    id: 19,
    section: "Air Law",
    question:
      "If the pitot tube becomes fully blocked, how will it effect the airspeed indicator?",
    options: [
      {
        id: 1,
        text: "Increases in a climb and decreases in a descent",
      },
      {
        id: 2,
        text: "Decreases in a climb and increases in a descent",
      },
      {
        id: 3,
        text: "Increases in a climb and increases in a descent",
      },
      { id: 4, text: "Airspeed indicator reads zero" },
    ],
    correctAnswer: 1,
    explanation:
      "When the pitot tube is fully blocked, the airspeed indicator acts like an altimeter. It increases in a climb (decreasing static pressure relative to trapped ram air) and decreases in a descent.",
  },
  {
    id: 20,
    section: "Air Law",
    question:
      "When operating in the standard pressure region, approaching an airport with the intention of landing, when do you set your altimeter to the station pressure?",
    options: [
      { id: 1, text: "Prior to landing" },
      { id: 2, text: "After entering the altimeter setting region" },
      { id: 3, text: "When joining the circuit" },
      {
        id: 4,
        text: "Prior to descent with the intention of landing",
      },
    ],
    correctAnswer: 4,
    explanation:
      "When operating in the Standard Pressure Region and approaching an airport to land, you must set your altimeter to the station pressure prior to commencing descent with the intention of landing.",
  },
  {
    id: 21,
    section: "Air Law",
    question:
      "While flying from one airport to another in uncontrolled airspace what frequency would you monitor enroute?",
    options: [
      { id: 1, text: "126.7" },
      { id: 2, text: "123.0" },
      { id: 3, text: "123.2" },
      { id: 4, text: "121.5" },
    ],
    correctAnswer: 1,
    explanation:
      "126.7 MHz is the enroute frequency to be monitored in uncontrolled airspace in Canada. This is used for position reports and traffic advisories.",
  },
  {
    id: 22,
    section: "Air Law",
    question:
      "During flight, while testing your ELT you find that it is unserviceable. You may:",
    options: [
      { id: 1, text: "Not continue the flight" },
      {
        id: 2,
        text: "Continue the flight after stopping at the first aerodrome where the ELT can be removed serviced",
      },
      {
        id: 3,
        text: "Fly the aircraft as long as it remains within 25 NM within the departure aerodrome",
      },
      { id: 4, text: "Continue the flight" },
    ],
    correctAnswer: 2,
    explanation:
      "If an ELT is found to be unserviceable during flight, the pilot may continue the flight but must stop at the first aerodrome where the ELT can be removed or serviced.",
  },
  {
    id: 23,
    section: "Air Law",
    question:
      "You are approaching a whiteout condition, you turn away performing a 180 degree level turn. After completing the turn you may experience a feeling of:",
    options: [
      { id: 1, text: "Descending" },
      { id: 2, text: "Climbing" },
      { id: 3, text: "A turn in the same direction" },
      { id: 4, text: "A turn in the opposite direction" },
    ],
    correctAnswer: 4,
    explanation:
      "After completing a turn, the semicircular canals of the inner ear may give a false sensation of turning in the opposite direction (the leans). This vestibular illusion is especially dangerous in white-out conditions.",
  },

  // ===========================
  // 2: HELICOPTER THEORY (Questions 24–49)
  // ===========================
  {
    id: 24,
    section: "Helicopter Theory",
    question:
      "In a helicopter you perform a level co-ordinated 60 degree bank turn. What would be your load factor?",
    options: [
      { id: 1, text: "1.4" },
      { id: 2, text: "2.0" },
      { id: 3, text: "4.5" },
      { id: 4, text: "3.0" },
    ],
    correctAnswer: 2,
    explanation:
      "In a 60-degree bank turn, the load factor is 1/cos(60°) = 1/0.5 = 2.0 G. The load factor doubles at a 60° bank angle.",
  },
  {
    id: 25,
    section: "Helicopter Theory",
    question:
      "What type of drag is responsible for 40% of the drag component in the hover?",
    options: [
      { id: 1, text: "Induced drag" },
      { id: 2, text: "Parasite drag" },
      { id: 3, text: "Profile drag" },
      { id: 4, text: "Blade form drag" },
    ],
    correctAnswer: 3,
    explanation:
      "Profile drag accounts for approximately 40% of the total drag in a hover. It is caused by the friction and form drag of the rotor blades moving through the air.",
  },
  {
    id: 26,
    section: "Helicopter Theory",
    question:
      "What information does the instrument with the ball and needle give in a co-ordinated level turn?",
    options: [
      { id: 1, text: "Amount of roll, rate of turn" },
      { id: 2, text: "Amount of bank, rate of turn" },
      { id: 3, text: "Amount of yaw, rate of turn" },
      { id: 4, text: "Rate of turn, yaw must be correct" },
    ],
    correctAnswer: 4,
    explanation:
      "The turn coordinator (needle/ball) indicates the rate of turn via the needle. The ball indicates whether yaw is coordinated. In a coordinated turn, the ball is centered, meaning yaw is correct.",
  },
  {
    id: 27,
    section: "Helicopter Theory",
    question:
      "Which are the correct statements regarding Canadian Aviation fuel (AVGAS)?\n\na. Fuel kept in plastic containers is as good as fuel kept in drums\nb. Micro organisms may live in unleaded or low lead fuel and can clog filters\nc. Fuel nozzle must be bonded to aircraft AFTER cap is removed\nd. Fuel has to be filtered for debris and water with a filter and water separator with a portable pump\ne. Do NOT use a non-conductive funnel",
    options: [
      { id: 1, text: "CDE" },
      { id: 2, text: "BCF" },
      { id: 3, text: "ADE" },
      { id: 4, text: "BDE" },
    ],
    correctAnswer: 3,
    explanation:
      "A: Fuel in plastic containers is acceptable for storage. D: Fuel must be filtered for debris and water using proper equipment. E: Non-conductive funnels must not be used as they can cause static discharge.",
  },
  {
    id: 28,
    section: "Helicopter Theory",
    question:
      "In a single rotor helicopter, what action should be taken during the beginning stages of dynamic rollover?",
    options: [
      { id: 1, text: "Move cyclic opposite to roll" },
      { id: 2, text: "Lift collective up and cyclic to roll" },
      {
        id: 3,
        text: "Dump collective, move cyclic opposite to roll",
      },
      {
        id: 4,
        text: "Smoothly lower collective to replace skids firmly back on the ground surface",
      },
    ],
    correctAnswer: 4,
    explanation:
      "During the beginning stages of dynamic rollover, the correct action is to smoothly lower the collective to reduce lift and place the skids firmly back on the ground. Using cyclic alone may not be effective once the critical angle is reached.",
  },
  {
    id: 29,
    section: "Helicopter Theory",
    question:
      "What is the safest configuration for autorotation in a low to medium weight helicopter?",
    options: [
      {
        id: 1,
        text: "Low helicopter weight, 40 - 60 MPH, high barometric pressure",
      },
      {
        id: 2,
        text: "High helicopter weight, 30 - 60 MPH, low barometric pressure",
      },
      {
        id: 3,
        text: "Low helicopter weight, 80 - 90 MPH, high barometric pressure",
      },
      {
        id: 4,
        text: "High helicopter weight, 60 - 90 MPH, low barometric pressure",
      },
    ],
    correctAnswer: 1,
    explanation:
      "The safest autorotation configuration is: low helicopter weight (lower disc loading, slower descent rate), moderate speed of 40-60 MPH (best autorotation speed range for light helicopters), and high barometric pressure (denser air, better performance).",
  },
  {
    id: 30,
    section: "Helicopter Theory",
    question:
      "Hovering in no wind condition when cyclic is moved forward to tilt the disc, the",
    options: [
      { id: 1, text: "Total lift of the rotor is increased" },
      {
        id: 2,
        text: "The horizontal component of lift is decreased",
      },
      {
        id: 3,
        text: "The vertical component of lift is increased",
      },
      {
        id: 4,
        text: "The total lift reaction remains unchanged",
      },
    ],
    correctAnswer: 4,
    explanation:
      "When the cyclic tilts the rotor disc forward, it redirects the total rotor thrust vector but does not change its magnitude. The total lift reaction remains unchanged; only its direction changes, creating horizontal and vertical components.",
  },
  {
    id: 31,
    section: "Helicopter Theory",
    question:
      "In an American built helicopter what would be best to do when you lose tail rotor effectiveness? (LTE)",
    options: [
      {
        id: 1,
        text: "Neutralize pedals, apply cyclic left",
      },
      { id: 2, text: "Full right pedal, apply cyclic right" },
      {
        id: 3,
        text: "Full left pedal, apply cyclic forward",
      },
      { id: 4, text: "Full left pedal, apply cyclic left" },
    ],
    correctAnswer: 3,
    explanation:
      "In an American-built helicopter (counter-clockwise main rotor), LTE causes an uncommanded right yaw. Apply full left pedal to counteract the yaw and forward cyclic to gain airspeed, which restores tail rotor effectiveness.",
  },
  {
    id: 32,
    section: "Helicopter Theory",
    question:
      "When flying downwind and turning into wind, how does the helicopter appear to be flying?",
    options: [
      { id: 1, text: "Skidding and moving slower" },
      { id: 2, text: "Skidding and moving faster" },
      { id: 3, text: "Slipping and moving slower" },
      { id: 4, text: "Slipping and moving faster" },
    ],
    correctAnswer: 1,
    explanation:
      "When turning from downwind to into wind, the groundspeed decreases (moving slower), and the apparent flight path appears to skid outward because the wind is pushing the aircraft away from the intended curved track.",
  },
  {
    id: 33,
    section: "Helicopter Theory",
    question: "What is the definition of Angle of attack?",
    options: [
      { id: 1, text: "The angle into the relative wind" },
      {
        id: 2,
        text: "The angle between the chord line and the relative airflow",
      },
      {
        id: 3,
        text: "The angle between the rotor disc and the chord line",
      },
      {
        id: 4,
        text: "The angle between the reference datum and the main rotor",
      },
    ],
    correctAnswer: 2,
    explanation:
      "Angle of attack is defined as the angle between the chord line of an airfoil and the relative airflow (relative wind). This is a fundamental aerodynamic concept.",
  },
  {
    id: 34,
    section: "Helicopter Theory",
    question:
      "Immediately after application of carburetor heat, you have a decrease in manifold pressure because:",
    options: [
      {
        id: 1,
        text: "The air is more dense and richer mixture",
      },
      {
        id: 2,
        text: "The air is less dense and leaner mixture",
      },
      {
        id: 3,
        text: "The air is more dense and leaner mixture",
      },
      { id: 4, text: "The air is less dense" },
    ],
    correctAnswer: 4,
    explanation:
      "Applying carburetor heat directs heated air to the carburetor. Heated air is less dense, which means less mass of air enters the engine, resulting in a decrease in manifold pressure.",
  },
  {
    id: 35,
    section: "Helicopter Theory",
    question:
      "How does a tail rotor compensate for its own dissymmetry of lift?",
    options: [
      {
        id: 1,
        text: "It automatically flaps and changes pitch",
      },
      {
        id: 2,
        text: "It automatically flaps and changes angle of attack",
      },
      {
        id: 3,
        text: "The pilot controls it and changes pitch",
      },
      {
        id: 4,
        text: "The pilot controls it and changes angle of attack",
      },
    ],
    correctAnswer: 2,
    explanation:
      "The tail rotor compensates for its own dissymmetry of lift through automatic blade flapping, which changes the angle of attack of each blade as it advances and retreats. This is a mechanical/aerodynamic compensation, not pilot-controlled.",
  },
  {
    id: 36,
    section: "Helicopter Theory",
    question:
      "Where are you most likely to find a foreign object in a turbine without an inlet filter?",
    options: [
      { id: 1, text: "Fan or compressor" },
      { id: 2, text: "Intake line to fan" },
      { id: 3, text: "Turbine" },
      { id: 4, text: "Stator veins" },
    ],
    correctAnswer: 1,
    explanation:
      "Without an inlet filter, foreign objects are most likely to be found in the fan or compressor section, as this is the first rotating component the ingested debris encounters.",
  },
  {
    id: 37,
    section: "Helicopter Theory",
    question:
      "What would be the correct procedures and items for slinging?\n\na. You must have a slinging mirror\nb. You must have a ground attendant positioned between the load and the helicopter\nc. You should use a swivel hook\nd. Unless speed is dramatically reduced, all free streaming lanyards should be removed\ne. A barrel or tree may be used to aerodynamically spoil lift\nf. If load begins to oscillate speed should be increased",
    options: [
      { id: 1, text: "ABC" },
      { id: 2, text: "ABF" },
      { id: 3, text: "CDE" },
      { id: 4, text: "DEF" },
    ],
    correctAnswer: 3,
    explanation:
      "C: A swivel hook prevents the load from spinning. D: Free streaming lanyards create drag and must be removed unless speed is very low. E: A barrel or tree trunk can be used as an aerodynamic spoiler to prevent the load from developing lift.",
  },
  {
    id: 38,
    section: "Helicopter Theory",
    question:
      "What is the effect of increasing forward airspeed in vortex ring state?",
    options: [
      { id: 1, text: "Reduces blade pitch angle" },
      { id: 2, text: "Increases in intensity" },
      { id: 3, text: "No effect" },
      { id: 4, text: "Aids in recovery" },
    ],
    correctAnswer: 4,
    explanation:
      "Increasing forward airspeed aids in recovery from vortex ring state (settling with power) by moving the helicopter into clean, undisturbed air and breaking the recirculation of the rotor downwash.",
  },
  {
    id: 39,
    section: "Helicopter Theory",
    question: "No person shall commence a flight in an aircraft",
    options: [
      {
        id: 1,
        text: "Unless it has been de-iced if frost, ice, or snow conditions exist",
      },
      {
        id: 2,
        text: "Unless assured that adhering frost, ice, or snow will slide off on take off",
      },
      {
        id: 3,
        text: "If frost, ice, or snow is adhering to the critical surfaces",
      },
      {
        id: 4,
        text: "If frost, ice, or snow adhering to the critical surfaces cannot be removed on take-off by the aircraft de-icing system.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Under the CARs, no person shall commence a flight if frost, ice, or snow is adhering to any critical surface of the aircraft. There are no exceptions for the amount or type of contamination.",
  },
  {
    id: 40,
    section: "Helicopter Theory",
    question:
      "Looking at the chart for the Bell 206, provided in appendix B, with the following conditions. How much gross weight may you operate with?\n\n+30 degrees Celsius\n3000 pressure altitude",
    options: [
      { id: 1, text: "2900 lbs." },
      { id: 2, text: "3000 lbs." },
      { id: 3, text: "3100 lbs." },
      { id: 4, text: "3200 lbs" },
    ],
    correctAnswer: 3,
    explanation:
      "Using the Bell 206 performance chart with +30°C and 3000 ft pressure altitude, the maximum allowable gross takeoff weight is approximately 3100 lbs.",
  },
  {
    id: 41,
    section: "Helicopter Theory",
    question:
      "When entering translation what compensates for flap back?",
    options: [
      { id: 1, text: "Flapping hinges" },
      { id: 2, text: "Blade flapping" },
      { id: 3, text: "Pilot moves the cyclic forward" },
      { id: 4, text: "Drag hinges" },
    ],
    correctAnswer: 3,
    explanation:
      "When entering translational lift, flapback (the tendency of the disc to tilt aft due to dissymmetry of lift) is compensated by the pilot moving the cyclic forward. This is a pilot input, not an automatic mechanical compensation.",
  },
  {
    id: 42,
    section: "Helicopter Theory",
    question:
      "What allows the dissymmetry of lift to be compensated for in all rotor systems?",
    options: [
      { id: 1, text: "Flapping hinges" },
      { id: 2, text: "Blade flapping" },
      { id: 3, text: "Pilot moves the cyclic forward" },
      { id: 4, text: "Drag hinges" },
    ],
    correctAnswer: 2,
    explanation:
      "Blade flapping is the mechanism that compensates for dissymmetry of lift in ALL rotor systems (fully articulated, semi-rigid, and rigid). Flapping hinges are only found on fully articulated systems, but blade flapping occurs in all types.",
  },
  {
    id: 43,
    section: "Helicopter Theory",
    question:
      "Which statement is true with regard to main rotor blade icing?",
    options: [
      {
        id: 1,
        text: "Icing on the windscreen will give you an idea of how much ice has accumulated on the main rotor",
      },
      {
        id: 2,
        text: "Main rotor blades may shed asymmetrically",
      },
      {
        id: 3,
        text: "Aircraft must be certified for icing conditions before proceeding into cloud",
      },
      {
        id: 4,
        text: "No more than 1/2 inch should accumulate before deciding to land",
      },
    ],
    correctAnswer: 2,
    explanation:
      "Main rotor blades may shed ice asymmetrically, meaning one blade may shed its ice before the other(s). This creates an imbalance that can cause severe vibration.",
  },
  {
    id: 44,
    section: "Helicopter Theory",
    question:
      "Pitch change links are 90 degrees to the blade to compensate for",
    options: [
      { id: 1, text: "Feathering" },
      { id: 2, text: "Phase lag" },
      { id: 3, text: "Dissymmetry of lift" },
      { id: 4, text: "Ground resonance" },
    ],
    correctAnswer: 2,
    explanation:
      "Pitch change links are positioned 90 degrees ahead of the blade to compensate for phase lag. Phase lag is the phenomenon where the maximum blade displacement occurs 90 degrees after the maximum force application.",
  },
  {
    id: 45,
    section: "Helicopter Theory",
    question:
      "What statements are true in regard to aviation fuels?\n\n1) Fuel stored in drums loses the octane rating more quickly than fuel stored in plastic cans\n2) When an aircraft is left parked overnight the fuel tanks should be topped up\n3) A portable water separator pump should not be used when filling from drums\n4) All of the above",
    options: [
      {
        id: 1,
        text: "Fuel stored in drums loses the octane rating more quickly than fuel stored in plastic cans",
      },
      {
        id: 2,
        text: "When an aircraft is left parked overnight the fuel tanks should be topped up",
      },
      {
        id: 3,
        text: "A portable water separator pump should not be used when filling from drums",
      },
      { id: 4, text: "All of the above" },
    ],
    correctAnswer: 2,
    explanation:
      "Topping up fuel tanks overnight minimizes the air space in the tanks, reducing condensation and water accumulation in the fuel system.",
  },
  {
    id: 46,
    section: "Helicopter Theory",
    question:
      "In an aircraft with a single fuel tank centered under the mast, if at the beginning of the flight the C of G is at the forward limit there will",
    options: [
      {
        id: 1,
        text: "Be sufficient rearward cyclic but the C of G may move out of limits during the flight",
      },
      {
        id: 2,
        text: "Be sufficient rearward cyclic and the C of G will remain unchanged",
      },
      {
        id: 3,
        text: "Be sufficient forward cyclic and the C of G will remain unchanged",
      },
      {
        id: 4,
        text: "Be insufficient rearward cyclic and the C of G will remain unchanged",
      },
    ],
    correctAnswer: 1,
    explanation:
      "With the fuel tank centered under the mast, as fuel is burned the weight decreases but the C of G position of the remaining load (passengers, cargo) may shift the overall C of G. Starting at the forward limit means the C of G could move further forward or aft depending on the loading configuration.",
  },
  {
    id: 47,
    section: "Helicopter Theory",
    question:
      "What is most likely to cause ground resonance?",
    options: [
      { id: 1, text: "Faulty drag dampers" },
      { id: 2, text: "Faulty cooling fan" },
      { id: 3, text: "Worn cyclic couplings" },
      { id: 4, text: "Blades out of track" },
    ],
    correctAnswer: 1,
    explanation:
      "Ground resonance is most commonly caused by faulty or worn drag dampers (lead-lag dampers). These dampers control the in-plane movement of the blades, and when they fail, the blades can move out of phase and create a destructive oscillation.",
  },

  // ===========================
  // 3: AEROMEDICAL (Questions 48–49)
  // ===========================
  {
    id: 48,
    section: "Aeromedical",
    question:
      "Which of the following statements is true about night acuity?\n\na. The use of oxygen above 5,000 ft at night improves vision\nb. Hypoxia effects night acuity\nc. If a red light is used it may improve vision to read maps in the cockpit\nd. You should focus from the side of the eye\ne. Momentarily shining a bright light then back to darkness increases night vision\nf. Smoking reduces night vision at any altitude\ng. There is a blind spot in the center of the eye that limits viewing of dimly lit objects",
    options: [
      { id: 1, text: "BCF" },
      { id: 2, text: "BEF" },
      { id: 3, text: "ABG" },
      { id: 4, text: "CDG" },
    ],
    correctAnswer: 3,
    explanation:
      "A: Oxygen above 5,000 ft improves night vision by preventing hypoxic degradation of the rod cells. B: Hypoxia affects night acuity significantly. G: There is a blind spot in the center of the eye (fovea has no rod cells) which limits viewing of dimly lit objects at night.",
  },
  {
    id: 49,
    section: "Aeromedical",
    question:
      "Which statement is correct after having carbon monoxide poisoning?",
    options: [
      {
        id: 1,
        text: "It is considered safe to inhale small quantities of carbon monoxide",
      },
      {
        id: 2,
        text: "It may take several days to fully recover from carbon monoxide poisoning",
      },
      {
        id: 3,
        text: "Inhalation of carbon monoxide gives a feeling of euphoria or of well being",
      },
      {
        id: 4,
        text: "Carbon monoxide has a distinctive odor",
      },
    ],
    correctAnswer: 2,
    explanation:
      "Carbon monoxide binds to hemoglobin much more strongly than oxygen. It may take several days for the body to fully eliminate CO and recover normal oxygen-carrying capacity. CO is odorless and colorless.",
  },

  // ===========================
  // 4: METEOROLOGY (Questions 50–67)
  // ===========================
  {
    id: 50,
    section: "Meteorology",
    question: "When air subsides (descends)",
    options: [
      { id: 1, text: "Relative humidity decreases" },
      { id: 2, text: "Moisture content decreases" },
      { id: 3, text: "Relative humidity increases" },
      { id: 4, text: "Moisture content increases" },
    ],
    correctAnswer: 1,
    explanation:
      "When air descends (subsides), it is compressed and warms adiabatically. As the temperature increases, the air can hold more moisture, so the relative humidity decreases even though the actual moisture content stays the same.",
  },
  {
    id: 51,
    section: "Meteorology",
    question:
      'Which of the following statements are true with respect to the term "MSL Pressure"?',
    options: [
      {
        id: 1,
        text: "It is station pressure reduced to sea level using the average surface temperature for the last 12 hours",
      },
      {
        id: 2,
        text: "It is station level pressure read from the appropriate synoptic chart",
      },
      {
        id: 3,
        text: "It is station pressure reduced to sea level to MSL assuming standard atmosphere conditions",
      },
      {
        id: 4,
        text: "It is the average of the measured sea level pressure reading at a given location for the last 6 hours",
      },
    ],
    correctAnswer: 1,
    explanation:
      "MSL pressure (altimeter setting) is the station pressure reduced to mean sea level using the average surface temperature for the last 12 hours. This accounts for actual temperature conditions rather than assuming standard atmosphere.",
  },
  {
    id: 52,
    section: "Meteorology",
    question:
      "With a surface temperature of 30 degrees Centigrade at what altitude will cloud form with a dew point of 15 degrees Centigrade?",
    options: [
      { id: 1, text: "10,000 ft." },
      { id: 2, text: "7,000 ft." },
      { id: 3, text: "5,000 ft." },
      { id: 4, text: "3,000 ft." },
    ],
    correctAnswer: 3,
    explanation:
      "Temperature-dewpoint spread = 30 - 15 = 15°C. The temperature decreases at ~3°C/1000 ft and dewpoint at ~0.5°C/1000 ft, so they converge at ~2.5°C/1000 ft. Cloud base = 15 / (2.5/1000) = ~6000 ft, but using the simpler rule of ~400 ft per 1°C spread: 15 × ~333 = ~5000 ft.",
  },
  {
    id: 53,
    section: "Meteorology",
    question:
      "High relative humidity, a lifting agent, and ___________ are necessary for a thunderstorm development.",
    options: [
      { id: 1, text: "An active frontal system" },
      { id: 2, text: "A steep lapse rate" },
      { id: 3, text: "Unstable air to low levels" },
      { id: 4, text: "Temperature inversion" },
    ],
    correctAnswer: 2,
    explanation:
      "The three ingredients for thunderstorm development are: high relative humidity (moisture), a lifting agent (trigger), and a steep lapse rate (instability). A steep lapse rate indicates that the atmosphere is unstable and will support strong convective updrafts.",
  },
  {
    id: 54,
    section: "Meteorology",
    question:
      "If you were to see an approaching cold front with an extensive build up of heap type cumulus clouds leading the front, what would this indicate?",
    options: [
      { id: 1, text: "Slow moving cold front" },
      { id: 2, text: "Fast moving cold front" },
      { id: 3, text: "Cold air is overtaking the warm air" },
      { id: 4, text: "Warm air is overtaking the cold air" },
    ],
    correctAnswer: 2,
    explanation:
      "A fast-moving cold front produces a steep frontal surface that forces warm air up rapidly, creating heap-type cumulus and cumulonimbus clouds ahead of the front. Slow-moving cold fronts produce more gradual lifting and stratiform clouds.",
  },
  {
    id: 55,
    section: "Meteorology",
    question:
      "What is the danger associated with taking off from an airport with a strong temperature inversion?",
    options: [
      { id: 1, text: "Surface turbulence" },
      { id: 2, text: "Turbulence aloft" },
      { id: 3, text: "Rapid air rising" },
      { id: 4, text: "Wind shear" },
    ],
    correctAnswer: 4,
    explanation:
      "A strong temperature inversion often produces wind shear at the inversion boundary. The wind speed and direction can change dramatically across the inversion layer, creating a hazardous condition during takeoff and climb.",
  },
  {
    id: 56,
    section: "Meteorology",
    question:
      "How would you recognize the mature stage of a thunderstorm?",
    options: [
      { id: 1, text: "Forms an anvil" },
      { id: 2, text: "Downdrafts" },
      { id: 3, text: "Updrafts" },
      { id: 4, text: "Onset of precipitation" },
    ],
    correctAnswer: 4,
    explanation:
      "The mature stage of a thunderstorm is marked by the onset of precipitation at the surface. This occurs when the updrafts can no longer support the weight of the water droplets and ice particles. Both updrafts and downdrafts coexist during this stage.",
  },
  {
    id: 57,
    section: "Meteorology",
    question:
      "In a Terminal Forecast what are the dimensions of coverage?",
    options: [
      {
        id: 1,
        text: "20 NM from the center of the runway complex",
      },
      {
        id: 2,
        text: "10 NM from the center of the runway complex",
      },
      {
        id: 3,
        text: "5 NM from the center of a typical runway complex",
      },
      { id: 4, text: "Perimeter of an aerodrome" },
    ],
    correctAnswer: 3,
    explanation:
      "A Terminal Aerodrome Forecast (TAF) covers a radius of 5 nautical miles from the center of the runway complex. It describes expected weather conditions within this area.",
  },
  {
    id: 58,
    section: "Meteorology",
    question:
      "In aviation forecast, ceilings are forecast in feet;",
    options: [
      {
        id: 1,
        text: "AGL in GFA and AGL in terminal forecasts",
      },
      {
        id: 2,
        text: "AGL in GFA and ASL in terminal forecasts",
      },
      {
        id: 3,
        text: "ASL in GFA and AGL in terminal forecasts",
      },
      {
        id: 4,
        text: "ASL in GFA and ASL in terminal forecasts",
      },
    ],
    correctAnswer: 3,
    explanation:
      "In the GFA (Graphical Area Forecast), cloud heights and ceilings are given in feet ASL (above sea level). In TAFs (Terminal Aerodrome Forecasts), cloud heights are given in feet AGL (above ground level).",
  },
  {
    id: 59,
    section: "Meteorology",
    question: "Select the true statement about pressure.",
    options: [
      { id: 1, text: "Lows and troughs are rising air" },
      { id: 2, text: "Highs and ridges are rising air" },
      {
        id: 3,
        text: "Lows and troughs are descending air",
      },
      {
        id: 4,
        text: "Highs and lows are both associated with convergence",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Low pressure systems and troughs are associated with rising (ascending) air, which leads to cloud formation, precipitation, and generally poor weather. Highs and ridges are associated with descending (subsiding) air and generally fair weather.",
  },
  {
    id: 60,
    section: "Meteorology",
    question:
      "The total amount of water vapour that a given volume of air can contain is governed by its:",
    options: [
      { id: 1, text: "relative humidity" },
      { id: 2, text: "dewpoint" },
      { id: 3, text: "temperature" },
      { id: 4, text: "pressure" },
    ],
    correctAnswer: 3,
    explanation:
      "The total amount of water vapour that air can contain is governed by its temperature. Warmer air can hold more moisture than cooler air. The capacity roughly doubles for every 11°C increase in temperature.",
  },
  {
    id: 61,
    section: "Meteorology",
    question: "What would you expect with an inversion?",
    options: [
      {
        id: 1,
        text: "Pressure will increase with altitude",
      },
      {
        id: 2,
        text: "Pressure will remain the same with altitude",
      },
      {
        id: 3,
        text: "Temperature will decrease with altitude",
      },
      {
        id: 4,
        text: "Temperature will increase with altitude",
      },
    ],
    correctAnswer: 4,
    explanation:
      "A temperature inversion is defined as a condition where temperature increases with altitude, which is the opposite of the normal lapse rate. This creates a stable layer that traps pollutants, fog, and low cloud.",
  },
  {
    id: 62,
    section: "Meteorology",
    question:
      "What are the main air mass sources found in North America?",
    options: [
      { id: 1, text: "Continental, Maritime, Arctic" },
      { id: 2, text: "Arctic, Polar & Tropical" },
      {
        id: 3,
        text: "Polar Arctic, Maritime Tropical, and Continental Polar",
      },
      { id: 4, text: "None of the above." },
    ],
    correctAnswer: 2,
    explanation:
      "The three main air mass source regions affecting North America are Arctic (cold, dry), Polar (cool), and Tropical (warm, moist). These are further classified as Continental or Maritime based on their surface origin.",
  },
  {
    id: 63,
    section: "Meteorology",
    question:
      "At a cold front, heap type clouds appear. Even if the warm air mass is stable, then we know the",
    options: [
      {
        id: 1,
        text: "cold is overrunning the warm slowly",
      },
      {
        id: 2,
        text: "cold was a steep front and is undercutting the cold",
      },
      {
        id: 3,
        text: "warm air is retreating faster than the cold",
      },
      {
        id: 4,
        text: "cold front is steep and approaching very rapidly",
      },
    ],
    correctAnswer: 4,
    explanation:
      "When heap-type (cumulus) clouds appear at a cold front even though the warm air mass is stable, it indicates the cold front is steep and moving very rapidly. The rapid movement forces the warm air upward so quickly that it becomes conditionally unstable, producing convective (heap) clouds.",
  },
  {
    id: 64,
    section: "Meteorology",
    question:
      "On a Graphical Area Forecast in the IFR OTLK portion, the term VFR WND would indicate if it were present:",
    options: [
      {
        id: 1,
        text: "Less than 3,000' ceiling and visibility of 5 SM wind 10+ knots",
      },
      {
        id: 2,
        text: "More than 3,000' ceiling and visibility of 5 SM wind 20+ knots",
      },
      {
        id: 3,
        text: "Between 1,000' and 3,000' ceiling and visibility of between 3-5 SM wind 20+ knots",
      },
      {
        id: 4,
        text: "More than 1,000' ceiling and 3 SM wind 15+ knots",
      },
    ],
    correctAnswer: 2,
    explanation:
      "VFR WND on a GFA IFR Outlook indicates VFR conditions (ceiling above 3,000' and visibility greater than 5 SM) but with strong surface winds of 20 knots or more, which may still affect flight operations.",
  },
  {
    id: 65,
    section: "Meteorology",
    question:
      "The IFR OTLK section of the GFA forecasts the weather",
    options: [
      {
        id: 1,
        text: "Along a pre-determined flight path for the duration of the flight",
      },
      {
        id: 2,
        text: "For the region indicated for the following 12 hours",
      },
      {
        id: 3,
        text: "At the time of issue in that region",
      },
      {
        id: 4,
        text: "For an estimated time in the future",
      },
    ],
    correctAnswer: 2,
    explanation:
      "The IFR Outlook section of the GFA (Graphical Area Forecast) provides a forecast of areas where IFR or marginal VFR conditions are expected during the following 12 hours for the indicated region.",
  },
  {
    id: 66,
    section: "Meteorology",
    question: "Advection fog is formed by",
    options: [
      {
        id: 1,
        text: "warm air moving upslope over warm ground",
      },
      { id: 2, text: "cold air moving over warm ground" },
      { id: 3, text: "warm air moving over cold ground" },
      { id: 4, text: "cold air moving over cold ground" },
    ],
    correctAnswer: 3,
    explanation:
      "Advection fog forms when warm, moist air moves horizontally over a colder surface. The cold surface cools the air to its dewpoint, causing condensation and fog formation.",
  },
  {
    id: 67,
    section: "Meteorology",
    question:
      "What factor determines the stability of an air mass?",
    options: [
      { id: 1, text: "Cloud type" },
      { id: 2, text: "Moisture content/relative humidity" },
      { id: 3, text: "Wind currents" },
      { id: 4, text: "Lapse rate" },
    ],
    correctAnswer: 4,
    explanation:
      "The lapse rate (rate of temperature decrease with altitude) determines the stability of an air mass. A steep lapse rate indicates instability, while a shallow lapse rate or inversion indicates stability.",
  },

  // ===========================
  // 5: WEATHER REPORTS (Questions 68–76)
  // ===========================
  {
    id: 68,
    section: "Weather Reports",
    question:
      "What is the pressure altitude at 1,000 feet, alt 30.22 Hg?",
    options: [
      { id: 1, text: "1,300 ft." },
      { id: 2, text: "1,030 ft." },
      { id: 3, text: "300 ft." },
      { id: 4, text: "700 ft." },
    ],
    correctAnswer: 4,
    explanation:
      "Pressure altitude = Indicated altitude + (29.92 - altimeter setting) × 1000. With 30.22: (29.92 - 30.22) × 1000 = -300. So 1000 - 300 = 700 ft pressure altitude.",
  },
  {
    id: 69,
    section: "Weather Reports",
    question: "What is the wind at CYUY at 1300Z?",
    options: [
      { id: 1, text: "160 degrees true at 5 knots" },
      { id: 2, text: "190 degrees true at 11 knots" },
      { id: 3, text: "160 degrees magnetic at 5 knots" },
      { id: 4, text: "190 degrees magnetic at 11 knots" },
    ],
    correctAnswer: 2,
    explanation:
      "METAR wind is always reported in degrees true and knots. Reading the METAR for CYUY at 1300Z gives 190 degrees true at 11 knots.",
  },
  {
    id: 70,
    section: "Weather Reports",
    question:
      "What is the lowest ceiling that may be encountered at CYUL at 0000Z?",
    options: [
      { id: 1, text: "1,500 ft." },
      { id: 2, text: "2,000 ft." },
      { id: 3, text: "1,200 ft." },
      { id: 4, text: "600 ft." },
    ],
    correctAnswer: 4,
    explanation:
      "Based on the TAF for CYUL, the lowest ceiling that may be encountered at 0000Z is 600 ft. This would be found in the TEMPO or BECMG groups of the TAF.",
  },
  {
    id: 71,
    section: "Weather Reports",
    question: "METARs are normally issued every:",
    options: [
      { id: 1, text: "1/2 hour" },
      { id: 2, text: "1 hour" },
      { id: 3, text: "2 hours" },
      { id: 4, text: "6 hours" },
    ],
    correctAnswer: 2,
    explanation:
      "METARs (routine aviation weather reports) are normally issued every hour. Special reports (SPECIs) can be issued between regular reports when significant weather changes occur.",
  },
  {
    id: 72,
    section: "Weather Reports",
    question:
      "The sky condition at CYVY metar at 1200Z is",
    options: [
      { id: 1, text: "Light showers and moderate snow" },
      { id: 2, text: "Snow showers" },
      { id: 3, text: "Wet snow conditions" },
      { id: 4, text: "Light snow showers" },
    ],
    correctAnswer: 4,
    explanation:
      "Reading the METAR for CYVY at 1200Z, the weather condition indicates light snow showers (-SHSN).",
  },
  {
    id: 73,
    section: "Weather Reports",
    question:
      "Looking at the TAF at CYUY the lowest ceiling forecast at 1800Z is",
    options: [
      { id: 1, text: "1,200 ft." },
      { id: 2, text: "800 ft." },
      { id: 3, text: "1,500 ft." },
      { id: 4, text: "2,000 ft." },
    ],
    correctAnswer: 1,
    explanation:
      "Reading the TAF for CYUY at 1800Z, the lowest ceiling forecast is 1,200 ft AGL.",
  },
  {
    id: 74,
    section: "Weather Reports",
    question:
      "Looking at the METAR for CYUL and then at the TAF, how did the forecast weather compare to the actual weather at 2200 ZULU?",
    options: [
      { id: 1, text: "Wind is greater than forecasted" },
      {
        id: 2,
        text: "Ceilings are lower than forecasted",
      },
      { id: 3, text: "Wind is less than forecasted" },
      {
        id: 4,
        text: "Visibility is less than forecasted",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Comparing the actual METAR at 2200Z with the TAF forecast for that time, the actual wind was less than what was forecasted.",
  },
  {
    id: 75,
    section: "Weather Reports",
    question:
      "Looking at the GFA for the Ontario Region, what is the altitude of the Ceiling associated with the warm front North of Thunder Bay (Area A)?",
    options: [
      { id: 1, text: "2,000-3,000 ASL" },
      { id: 2, text: "300-800 ASL" },
      { id: 3, text: "2,000-3,000 AGL" },
      { id: 4, text: "3,000-8,000 AGL" },
    ],
    correctAnswer: 1,
    explanation:
      "On the GFA, cloud heights are given in ASL. The ceiling associated with the warm front north of Thunder Bay (Area A) is 2,000-3,000 ft ASL.",
  },
  {
    id: 76,
    section: "Weather Reports",
    question:
      "Upper Level Winds Data (FD) for\n6000': 2515-21\n\nWhat are the upper winds for 6,000':",
    options: [
      {
        id: 1,
        text: "250 degrees true at 15 Kts, -21 degrees centigrade",
      },
      {
        id: 2,
        text: "250 degrees magnetic at 15 MPH, 21 degrees centigrade",
      },
      {
        id: 3,
        text: "251 degrees true at 5 Kts, 21 degrees centigrade",
      },
      {
        id: 4,
        text: "251 degrees magnetic at 5 MPH, -21 degrees centigrade",
      },
    ],
    correctAnswer: 1,
    explanation:
      "FD (Winds and Temperatures Aloft) data is decoded as: first two digits × 10 = wind direction in degrees true (25 × 10 = 250°T), next two digits = wind speed in knots (15 kt), and the last digits with sign = temperature (-21°C).",
  },

  // ===========================
  // 6: NAVIGATION (Questions 77–101)
  // ===========================
  {
    id: 77,
    section: "Navigation",
    question:
      "What is the total distance from Cochrane to check point 2 via check point 1?",
    options: [
      { id: 1, text: "90 NM" },
      { id: 2, text: "82 NM" },
      { id: 3, text: "78 NM" },
      { id: 4, text: "72 NM" },
    ],
    correctAnswer: 3,
    explanation:
      "Measuring the distance on the VNC from Cochrane to check point 1, then from check point 1 to check point 2, the total distance is approximately 78 NM.",
  },
  {
    id: 78,
    section: "Navigation",
    question:
      "What is your estimated elapsed time starting out from Cochrane and flying to check point 2 via check point 1?",
    options: [
      { id: 1, text: "1:06" },
      { id: 2, text: "1:02" },
      { id: 3, text: "0:57" },
      { id: 4, text: "1:08" },
    ],
    correctAnswer: 2,
    explanation:
      "Using the computed groundspeed and total distance of 78 NM, the estimated elapsed time from Cochrane to check point 2 via check point 1 is approximately 1 hour and 2 minutes.",
  },
  {
    id: 79,
    section: "Navigation",
    question:
      "What airspace are you flying in from check point 1 to check point 2?",
    options: [
      { id: 1, text: "Class E" },
      { id: 2, text: "Class D" },
      { id: 3, text: "Class F" },
      { id: 4, text: "Class G" },
    ],
    correctAnswer: 4,
    explanation:
      "The airspace between check point 1 and check point 2 in this northern Ontario route is uncontrolled Class G airspace.",
  },
  {
    id: 80,
    section: "Navigation",
    question:
      "What is the height of the tower located at N49 47 00 W78 57 30?",
    options: [
      { id: 1, text: "400 ASL" },
      { id: 2, text: "400 AGL" },
      { id: 3, text: "1272 ASL" },
      { id: 4, text: "1272 AGL" },
    ],
    correctAnswer: 2,
    explanation:
      "On a VNC, tower heights shown in italics represent the height AGL (above ground level). The tower at this location is 400 ft AGL. The figure 1272 would be the elevation ASL of the top of the tower.",
  },
  {
    id: 81,
    section: "Navigation",
    question:
      "On track you cross the south end of South Floodwood Lake at 20:41Z, then you cross the northeast end of Mikwam Lake at 20:47Z. What is your ETA to check point 2?",
    options: [
      { id: 1, text: "21:00Z" },
      { id: 2, text: "21:02Z" },
      { id: 3, text: "21:05Z" },
      { id: 4, text: "21:09Z" },
    ],
    correctAnswer: 3,
    explanation:
      "Using the time between the two checkpoints (6 minutes) and measuring the remaining distance to check point 2, the calculated ETA is approximately 21:05Z.",
  },
  {
    id: 82,
    section: "Navigation",
    question: "What type of projection is a VTA map?",
    options: [
      { id: 1, text: "Mercator" },
      { id: 2, text: "Transverse Mercator" },
      { id: 3, text: "Lambert Conformal" },
      { id: 4, text: "Grivation" },
    ],
    correctAnswer: 2,
    explanation:
      "VTA (VFR Terminal Area) charts use a Transverse Mercator projection. This projection is well-suited for mapping small areas and provides accurate distances and bearings within the chart area.",
  },
  {
    id: 83,
    section: "Navigation",
    question:
      "When checking the VOR on the VOT you find a 4 degree error, this indicates you",
    options: [
      {
        id: 1,
        text: "Must change the OBS 4 degrees for correction when selecting all radials",
      },
      {
        id: 2,
        text: "Can be used as long as 4 degree corrections are applied to all headings",
      },
      { id: 3, text: "Cannot be used until serviced" },
      {
        id: 4,
        text: "Can be used for navigational purposes",
      },
    ],
    correctAnswer: 4,
    explanation:
      "A VOR error of ±4 degrees is within the allowable tolerance of ±4 degrees when checked on a VOT. The VOR can be used for navigational purposes.",
  },
  {
    id: 84,
    section: "Navigation",
    question:
      "The VOR is subject to line of site and the reception varies according to aircraft altitude. At ___ the range _____",
    options: [
      {
        id: 1,
        text: "2,000 FT AGL; is about 200 miles",
      },
      {
        id: 2,
        text: "2,000 FT AGL; is about 100 miles",
      },
      {
        id: 3,
        text: "1,500 FT AGL; is about 150 miles",
      },
      {
        id: 4,
        text: "1,500 FT AGL; is about 50 miles",
      },
    ],
    correctAnswer: 4,
    explanation:
      "VOR reception is line-of-sight. At 1,500 ft AGL, the reception range is approximately 50 NM. The formula for line-of-sight range in NM is approximately 1.23 × √(altitude in feet).",
  },
  {
    id: 85,
    section: "Navigation",
    question:
      "When using the ADF, what affects the accuracy for navigation most?",
    options: [
      {
        id: 1,
        text: "Other commercial broadcast stations in the area",
      },
      { id: 2, text: "Use at dusk and at dawn" },
      {
        id: 3,
        text: "Altitude directly affects the accuracy",
      },
      { id: 4, text: "Use between dusk to dawn" },
    ],
    correctAnswer: 2,
    explanation:
      "ADF accuracy is most affected at dusk and dawn due to the twilight effect. During these times, the ionosphere transitions between day and night states, causing erratic NDB signal refraction.",
  },
  {
    id: 86,
    section: "Navigation",
    question:
      "You are on a heading of 090 degrees, you tune in the VOR which indicates you are on the 300 degree radial. You wish to intercept and fly inbound on the 330 radial. What heading do you turn to intercept at a 45 degree angle?",
    options: [
      { id: 1, text: "150" },
      { id: 2, text: "285" },
      { id: 3, text: "105" },
      { id: 4, text: "015" },
    ],
    correctAnswer: 3,
    explanation:
      "To fly inbound on the 330 radial, you need to fly TO the VOR on a course of 150° (330° + 180°). To intercept at 45°, turn to 150° - 45° = 105°.",
  },
  {
    id: 87,
    section: "Navigation",
    question:
      "Select the corresponding examples that form a triangle of velocities.\n\na. True Track & Ground Speed\nb. Wind & Wind speed\nc. Heading & True Airspeed\nd. Magnetic Track & Ground Speed\ne. Wind & True Airspeed\nf. Track & Ground Speed\ng. Magnetic Heading & Ground Speed",
    options: [
      { id: 1, text: "BDF" },
      { id: 2, text: "ABG" },
      { id: 3, text: "BCD" },
      { id: 4, text: "BCF" },
    ],
    correctAnswer: 4,
    explanation:
      "The triangle of velocities consists of three vectors: B (Wind direction & speed), C (Heading & True Airspeed), and F (Track & Ground Speed). These three vectors form the wind triangle used in navigation.",
  },
  {
    id: 88,
    section: "Navigation",
    question:
      "Which statement is true in respect to an active advisory area CYA?",
    options: [
      {
        id: 1,
        text: "Aircraft cannot enter because it is a restricted area reserved for military use only",
      },
      {
        id: 2,
        text: "Aircraft can only enter when permission has been obtained from the user agency",
      },
      {
        id: 3,
        text: "Aircraft must be VFR and enter at pilot's discretion",
      },
      {
        id: 4,
        text: "Aircraft may be VFR or IFR and need a clearance to enter",
      },
    ],
    correctAnswer: 3,
    explanation:
      "A CYA (advisory area) is Class F airspace where activity may be hazardous. VFR aircraft may enter at the pilot's discretion but should exercise caution. It is not restricted — entry is permitted but pilots are advised of the activity.",
  },
  {
    id: 89,
    section: "Navigation",
    question:
      "090754 CYTS\n090602 NOTAMN CYTS TIMMINS\nCYTS HELIPAD ALPH WIP U/S TIL 0907092359\n\nWith the above Notam, which of the following is correct: Helipad alpha will have the construction activities finish:",
    options: [
      { id: 1, text: "July 9th 2009 at 2359 UTC" },
      { id: 2, text: "April 7th 2009 at 2359 Local" },
      { id: 3, text: "July 9th 2009 at 2359 Local" },
      { id: 4, text: "September 9th 2007 at 2359 UTC" },
    ],
    correctAnswer: 1,
    explanation:
      "The NOTAM date format is YYMMDDHHMM. '0907092359' decodes as: 09 (year 2009), 07 (July), 09 (9th), 2359 (UTC time). So Helipad Alpha construction will be complete by July 9th, 2009 at 2359 UTC.",
  },
  {
    id: 90,
    section: "Navigation",
    question:
      "A NOTAM has just been issued that there are helicopter operations to suppress a forest fire. What is the distance and altitude that you must maintain for the forest fire area?",
    options: [
      { id: 1, text: "3,000 Ft. - 3 Mile radius" },
      { id: 2, text: "3,000 Ft. - 5 Mile radius" },
      { id: 3, text: "2,000 Ft. - 3 Mile radius" },
      { id: 4, text: "2,000 Ft. - 5 Mile radius" },
    ],
    correctAnswer: 2,
    explanation:
      "Aircraft must remain at least 3,000 ft AGL and 5 NM from any forest fire suppression operation. This provides safe separation from aerial firefighting aircraft.",
  },
  {
    id: 91,
    section: "Navigation",
    question:
      "When you depart check point 2 you have 188 lbs. of fuel. Your time en route is 45 minutes. When you land at Kapuskasing airport how many pounds of fuel will you have remaining?",
    options: [
      { id: 1, text: "149.0" },
      { id: 2, text: "134.0" },
      { id: 3, text: "130.0" },
      { id: 4, text: "128.0" },
    ],
    correctAnswer: 2,
    explanation:
      "Using the fuel consumption rate and 45 minutes en route time, the fuel burned is approximately 54 lbs. Remaining fuel = 188 - 54 = 134 lbs.",
  },
  {
    id: 92,
    section: "Navigation",
    question:
      "While flying en route from check point 2 to Kapuskasing you find you have drifted off track to the left. You find yourself over a power line and a road at N49 51 20 and W80 11. You departed check point 2 at a heading of 270 degrees at 22:20 and the time now is 22:35.",
    options: [
      { id: 1, text: "Steer 290 degrees to destination" },
      {
        id: 2,
        text: "Steer 290 degrees for 15 minutes and resume 280 degrees to destination",
      },
      {
        id: 3,
        text: "Steer 275 degrees for 15 minutes and resume 280 degrees to destination",
      },
      { id: 4, text: "Steer 280 degrees to destination" },
    ],
    correctAnswer: 2,
    explanation:
      "Having drifted left of track after 15 minutes, the double track error method is used: apply double the correction (20° right = 290°) for the same time period (15 minutes), then reduce to a single correction (280°) to maintain the new track to destination.",
  },
  {
    id: 93,
    section: "Navigation",
    question:
      "You tune in the Kapuskasing NDB. Your heading is 240 degrees your relative bearing is 030 degrees to the NDB. What heading do you turn to fly direct to the NDB?",
    options: [
      { id: 1, text: "270 degrees" },
      { id: 2, text: "210 degrees" },
      { id: 3, text: "300 degrees" },
      { id: 4, text: "240 degrees" },
    ],
    correctAnswer: 1,
    explanation:
      "Magnetic bearing to station = Heading + Relative Bearing = 240° + 030° = 270°. To fly directly to the NDB, turn to a heading of 270 degrees.",
  },
  {
    id: 94,
    section: "Navigation",
    question:
      "How many satellites signals are required for the GPS system to establish a 3D position?",
    options: [
      { id: 1, text: "3" },
      { id: 2, text: "4" },
      { id: 3, text: "5" },
      { id: 4, text: "6" },
    ],
    correctAnswer: 2,
    explanation:
      "GPS requires a minimum of 4 satellite signals to establish a 3D position fix (latitude, longitude, and altitude). Three satellites provide a 2D fix, while the fourth resolves clock errors and provides altitude.",
  },
  {
    id: 95,
    section: "Navigation",
    question:
      "You departed check point 2 at 22:20 and you find yourself on track by Yesterday Lake. The time is 22:40. What is your ETA for landing at Kapuskasing Airport?",
    options: [
      { id: 1, text: "23:20" },
      { id: 2, text: "23:17" },
      { id: 3, text: "23:11" },
      { id: 4, text: "23:15" },
    ],
    correctAnswer: 2,
    explanation:
      "Using the elapsed time (20 minutes from check point 2 to Yesterday Lake) and measuring the remaining distance to Kapuskasing at the computed groundspeed, the ETA is approximately 23:17Z.",
  },
  {
    id: 96,
    section: "Navigation",
    question:
      "You are 30 NM out from the Kapuskasing NDB tracking inbound to the Kapuskasing NDB. You have a wind that is from the right and you have been correcting 10 degrees. What is your relative bearing?",
    options: [
      { id: 1, text: "010" },
      { id: 2, text: "005" },
      { id: 3, text: "355" },
      { id: 4, text: "350" },
    ],
    correctAnswer: 4,
    explanation:
      "When tracking inbound to an NDB with a 10-degree wind correction to the right, your heading is 10 degrees right of the bearing to the station. The relative bearing would be 360° - 10° = 350°.",
  },
  {
    id: 97,
    section: "Navigation",
    question: "An RMI can resolve signals from",
    options: [
      { id: 1, text: "VOR and DME" },
      { id: 2, text: "ADF or RNAV" },
      { id: 3, text: "ADF and Flux Valve" },
      { id: 4, text: "ADF or VOR" },
    ],
    correctAnswer: 4,
    explanation:
      "An RMI (Radio Magnetic Indicator) can resolve signals from either an ADF (NDB signals) or a VOR. It combines a slaved compass card with bearing pointers that automatically show the magnetic bearing to the tuned station.",
  },
  {
    id: 98,
    section: "Navigation",
    question:
      "In regards to PSR and SSR radar, which of the following statements are true?",
    options: [
      {
        id: 1,
        text: "Primary surveillance radar will never detect weather",
      },
      {
        id: 2,
        text: "Secondary surveillance cannot detect weather",
      },
      {
        id: 3,
        text: "Both PSR and SSR can detect weather",
      },
      {
        id: 4,
        text: "Both PSR and SSR cannot detect weather",
      },
    ],
    correctAnswer: 2,
    explanation:
      "Secondary Surveillance Radar (SSR) relies on transponder responses and cannot detect weather. Primary Surveillance Radar (PSR) transmits and receives reflected signals, and CAN detect weather returns (precipitation).",
  },
  {
    id: 99,
    section: "Navigation",
    question: 'A "DR" (dead reckoning) position is',
    options: [
      {
        id: 1,
        text: "A position found by plotting at least two radio bearings",
      },
      {
        id: 2,
        text: "An estimated position with an allowance for wind effect",
      },
      {
        id: 3,
        text: "A position found by plotting an aircraft's true heading on a navigation chart and measuring off a distance proportional to the TAS against time in hours",
      },
      {
        id: 4,
        text: "A calculated position with due allowance made for possible wind",
      },
    ],
    correctAnswer: 4,
    explanation:
      "A DR (dead reckoning) position is a calculated position based on heading, airspeed, time, and wind correction. It accounts for estimated wind effects to determine the expected position of the aircraft.",
  },
  {
    id: 100,
    section: "Navigation",
    question:
      "What causes the most reception problems with HF usage?",
    options: [
      { id: 1, text: "Sky waves" },
      { id: 2, text: "Obstructions on the ground" },
      { id: 3, text: "Day and night variations" },
      { id: 4, text: "All of the above" },
    ],
    correctAnswer: 3,
    explanation:
      "HF (High Frequency) radio is most affected by day and night variations because it relies on ionospheric reflection (sky waves). The ionosphere changes significantly between day and night, causing variations in propagation and reception quality.",
  },
  {
    id: 101,
    section: "Navigation",
    question:
      "What is the correct statement regarding the center of gravity with the following information?\n\n                Weight       Arm     Moment\n\nAIRCRAFT WEIGHT 1014 LBS.    _____   91260\nPILOT/PASSENGER  360 LBS.    40.03   _____\nFUEL            _________    88.00   13200\nTOTALS          _________    _____   _____\n\nMAXIMUM GROSS WEIGHT IS 1600 LBS.\nALLOWABLE C of G LIMITS   79 - 100.0",
    options: [
      {
        id: 1,
        text: "The gross take off weight has been exceeded",
      },
      {
        id: 2,
        text: "Not enough information is provided to complete the calculation",
      },
      {
        id: 3,
        text: "150 lbs. of fuel on board, and the aircraft is outside the forward limits",
      },
      {
        id: 4,
        text: "We do not calculate C of G if aircraft is under max gross weight",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Fuel weight = 13200 / 88 = 150 lbs. Total weight = 1014 + 360 + 150 = 1524 lbs (under max). Pilot moment = 360 × 40.03 = 14,411. Total moment = 91,260 + 14,411 + 13,200 = 118,871. C of G = 118,871 / 1,524 = 78.0 inches, which is outside the forward limit of 79 inches.",
  },
];

export const TIMMINS_SECTIONS: TimminsSection[] = [
  "Air Law",
  "Helicopter Theory",
  "Aeromedical",
  "Meteorology",
  "Weather Reports",
  "Navigation",
];
