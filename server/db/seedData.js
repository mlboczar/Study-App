//Make some arrays of objects based on the schema design

//Users
const users = [
  {
    id: 1,
    first_name: "Francis",
    last_name: "O'Tierney",
    email: "fotierney0@myspace.com",
    gender: "Male",
    password: "wX9)Pv7xtKm/6",
    location: "36210",
    about_me:
      "I am an active participant in class discussions and enjoy collaborating with my peers.",
    education: "Brewton-Parker College",
    education_level: "College Senior",
    classes: ["Human development"],
    days_available: ["Wednesday", "Monday"],
    times_available: ["Morning", "Evening"],
    timezone: "EST",
    interests: ["Playing soccer"],
    photo:
      "https://marvel-b1-cdn.bc0a.com/f00000000181213/www.valpo.edu/college-of-engineering/files/2019/08/Alec-Senior-Profile-photo-size-for-webpage-800x800.jpg",
    languages: ["English"],
    study_habits: "Semi-Chill",
    major: "Business",
    age: "18-24",
    work: null,
  },
  {
    id: 2,
    first_name: "Emma",
    last_name: "O' Hern",
    email: "eohern1@wsj.com",
    gender: "Female",
    password: "zP6(mu#h_\\",
    location: "4346",
    about_me:
      "I strive for academic excellence and am always eager to take on new challenges.",
    education: "Binghamton University",
    education_level: "College Senior",
    classes: ["Biochemistry"],
    days_available: ["Monday", "Wednesday", "Friday"],
    times_available: ["Morning"],
    timezone: "EST",
    interests: ["Skateboarding"],
    photo:
      "https://www.csw.utk.edu/wp-content/uploads/sites/92/Newsletter-Haiden-Lancaster-Student-Profile.jpg",
    languages: ["English"],
    study_habits: "Grind",
    major: "Science",
    age: "18-24",
    work: null,
  },
  {
    id: 3,
    first_name: "Ben",
    last_name: "Nare",
    email: "bnare2@slashdot.org",
    gender: "Male",
    // password: "1234"
    password: "1234",
    location: "4485-174",
    about_me:
      "I strive for academic excellence and am always eager to take on new challenges.",
    education: "University of Florida",
    education_level: "College Freshman",
    classes: ["English"],
    days_available: ["Tuesday", "Thursday"],
    times_available: ["Aftenoon", "Evening"],
    timezone: "EST",
    interests: ["Reading"],
    photo:
      "https://www.birmingham.ac.uk/Images/College-EPS-only/international/Student-Profiles/justin-220x220.png",
    languages: ["English"],
    study_habits: "Semi-Grind",
    major: "Computer Science",
    age: "18-24",
    work: null,
  },
  {
    id: 4,
    first_name: "Sophie",
    last_name: "Maystone",
    email: "smaystone3@prweb.com",
    gender: "Female",
    password: "uH4$b>zOg}@k\\",
    location: "01234",
    about_me:
      "I am a motivated learner who is always seeking opportunities for growth and improvement.",
    education: "Michigan State University",
    education_level: "PhD",
    classes: ["English"],
    days_available: ["Wednesday", "Monday"],
    times_available: ["Morning", "Evening"],
    timezone: "EST",
    interests: ["Snowboarding"],
    photo:
      "https://socialwelfare.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_square/public/neldeeb_headshot_1.jpg?itok=b4dg0YzR",
    languages: ["English"],
    study_habits: "Semi-Chill",
    major: "Art",
    age: "25-29",
    work: null,
  },
  {
    id: 5,
    first_name: "George",
    last_name: "Dever",
    email: "gdever4@oaic.gov.au",
    gender: "Male",
    password: "kR1|({92{*",
    location: "01234",
    about_me:
      "I am a motivated learner who is always seeking opportunities for growth and improvement.",
    education: "Boston University",
    education_level: "College Freshman",
    classes: ["Calculus"],
    days_available: ["Monday", "Saturday"],
    times_available: ["Morning", "Afternoon"],
    timezone: "EST",
    interests: ["Cooking"],
    photo:
      "https://vrs.amsi.org.au/wp-content/uploads/sites/84/2017/12/tobinsouth_vrs_2017-18.jpeg",
    languages: ["English"],
    study_habits: "Semi-Grind",
    major: "Mathematics",
    age: "18-24",
    work: null,
  },
  {
    id: 6,
    first_name: "Thomas",
    last_name: "Noriega",
    email: "tnoriega5@hugedomains.com",
    gender: "Male",
    password: 'sL5*rR<"',
    location: "8309",
    about_me:
      "I am an active participant in class discussions and enjoy collaborating with my peers.",
    education: "Washington State University",
    education_level: "College Sophomore",
    classes: ["Calculus"],
    days_available: ["Tuesday", "Thursday"],
    times_available: ["Afternoon", "Evening"],
    timezone: "PDT",
    interests: ["Going to the gym"],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebR4rjb4duj3lY4-6hESqj8fwblmBxa4bO5zhJYcskZJxdLdODJuXwCD-yPK2cub0XRU&usqp=CAU",
    languages: ["English"],
    study_habits: "Chill",
    major: "Business",
    age: "18-24",
    work: null,
  },
  {
    id: 7,
    first_name: "Frank",
    last_name: "Gingles",
    email: "fgingles6@amazonaws.com",
    gender: "Male",
    password: "cL1)1hU?.K",
    location: "58278-000",
    about_me: "I enjoy exploring new subjects and expanding my knowledge.",
    education: "West Virginia University",
    education_level: "College Junior",
    classes: ["History"],
    days_available: ["Monday", "Tuesday", "Sunday"],
    times_available: ["Morning", "Afternoon", "Evening"],
    timezone: "EST",
    interests: ["Traveling"],
    photo:
      "https://media.licdn.com/dms/image/D4E03AQHTe4lcqE-iNg/profile-displayphoto-shrink_800_800/0/1686153051429?e=2147483647&v=beta&t=yCtCczPrVONHrsjbtox9eWqrLaWIrZF7tGLMrjXsc5s",
    languages: ["English"],
    study_habits: "Chill",
    major: "Social Studies",
    age: "18-24",
    work: null,
  },
  {
    id: 8,
    first_name: "Leah",
    last_name: "Feldheim",
    email: "lfeldheim7@nasa.gov",
    gender: "Female",
    password: "vJ4$Hl!sWW~\\m4l",
    location: "01234",
    about_me:
      "I am a motivated learner who is always seeking opportunities for growth and improvement.",
    education: "University of San Diego",
    education_level: "PhD",
    classes: ["History"],
    days_available: ["Monday", "Tuesday", "Friday"],
    times_available: ["Morning", "Afternoon", "Evening"],
    timezone: "PST",
    interests: ["Reading"],
    photo:
      "https://www.hsph.harvard.edu/biostatistics/wp-content/uploads/sites/59/2022/10/thumbnail_IMG_2725.jpg",
    languages: ["English"],
    study_habits: "Grind",
    major: "Foreign Language",
    age: "24-29",
    work: null,
  },
  {
    id: 9,
    first_name: "Nathan",
    last_name: "Fitchew",
    email: "nfitchew8@usgs.gov",
    gender: "Male",
    password: "qS7_}w|JXS",
    location: "01234",
    about_me: "I am a dedicated student with a passion for learning.",
    education: "University of Southern California",
    education_level: "College Sophomore",
    classes: ["English"],
    days_available: ["Tuesday", "Thursday", "Sunday"],
    times_available: ["Afternoon", "Evening"],
    timezone: "PST",
    interests: ["Reading"],
    photo:
      "https://www.gtc.ox.ac.uk/wp-content/uploads/2019/09/William-Leben-feature.jpg",
    languages: ["English", "German"],
    study_habits: "Semi-Grind",
    major: "Social Studies",
    age: "18-24",
    work: null,
  },
  {
    id: 10,
    first_name: "Asher",
    last_name: "Patrick",
    email: "apatrick9@netvibes.com",
    gender: "Male",
    password: "rL8`@AX7?Ijg(v",
    location: "01234",
    about_me: "I enjoy exploring new subjects and expanding my knowledge.",
    education: "Michigan University",
    education_level: "College Junior",
    classes: ["Math"],
    days_available: ["Monday", "Tuesday", "Wednesday"],
    times_available: ["Afternoon", "Evening"],
    timezone: "EST",
    interests: ["Cooking"],
    photo:
      "https://studyoverseasinfo.com/wp-content/uploads/2020/08/logo_maxwell.jpg",
    languages: ["English"],
    study_habits: "Semi-Chill",
    major: "English",
    age: "18-24",
    work: null,
  },
];

//Events
const events = [
  {
    id: 1,
    title: "Psychology 101 Study Group",
    description:
      "Our study group is dedicated to exploring the fascinating world of psychology. We will delve into different subjects",
    location: null,
    address: null,
    datetime: "2023-11-11 13:30:00",
    timezone: "EST",
    virtual: true,
    comments: "So excited for this event!",
    topic: "Social Studies",
    duration: 30,
    gender: "Male",
    group: true,
  },
  {
    id: 2,
    title: "Mathematics 301 Discussion",
    description:
      "The study group is a collaborative space where members can come together to discuss various topics and share their knowledge.",
    location: null,
    address: null,
    datetime: "2023-06-11 11:15:00",
    timezone: "EST",
    virtual: true,
    comments: "So excited for this event!",
    topic: "Mathematics",
    duration: 60,
    gender: "Female",
    group: true,
  },
  {
    id: 3,
    title: "Chemistry 101 Lab Buddies",
    description: "Gain new perspectives",
    location: null,
    address: null,
    datetime: "2023-04-06 14:45:00",
    timezone: "PST",
    virtual: true,
    comments: "I'm thrilled to be a part of this event!",
    topic: "Science",
    duration: 90,
    gender: null,
    group: true,
  },
  {
    id: 4,
    title: "Biology Research Group",
    description: "Gain new perspectives",
    location: null,
    address: null,
    datetime: "2023-01-07 12:30:00",
    timezone: "EST",
    virtual: true,
    comments: "Counting down the days until the event!",
    topic: "Science",
    duration: 60,
    gender: "Male",
    group: true,
  },
  {
    id: 5,
    title: "Art History Discussion",
    description:
      "The study group is a collaborative space where members can come together to discuss various topics and share their knowledge. We will cover a wide range of subjects including famous works of art",
    location: "10018",
    address: "New York Public Library",
    datetime: "2023-05-15 12:30:00",
    timezone: "EST",
    virtual: false,
    comments: "This event is going to be amazing!",
    topic: "Art",
    duration: 90,
    gender: null,
    group: true,
  },
  {
    id: 6,
    title: "Physics Study Group",
    description:
      "Our study group is dedicated to exploring the fascinating world of physics. We will delve into different subjects",
    location: "92101",
    address: "San Diego Central Library",
    datetime: "2023-10-25 15:15:00",
    timezone: "PST",
    virtual: false,
    comments: "This event is going to be amazing!",
    topic: "Science",
    duration: 120,
    gender: null,
    group: true,
  },
  {
    id: 7,
    title: "Economics Study Group",
    description: "Study group for all economic majors welcome!",
    location: null,
    address: null,
    datetime: "2023-12-11 13:30:00",
    timezone: "EST",
    virtual: true,
    comments: "I can't wait to attend!",
    topic: "Mathematics",
    duration: 90,
    gender: null,
    group: true,
  },
  {
    id: 8,
    title: "Developmental Behavioral Neuroscience: Foundational Overview",
    description:
      "Whether you're an psychology or human development major or just curious about the subject",
    location: "13901",
    address: "Bartle Library",
    datetime: "7/17/2024",
    timezone: "EST",
    virtual: false,
    comments: "I'm thrilled to be a part of this event!",
    topic: "Social Studies",
    duration: 60,
    gender: null,
    group: true,
  },
  {
    id: 9,
    title: "Introduction to Journalism",
    description:
      "We will explore various strategies and techniques to enhance productivity",
    location: null,
    address: null,
    datetime: "2023-03-15 13:30:00",
    timezone: "EST",
    virtual: true,
    comments: "I'm thrilled to be a part of this event!",
    topic: "English",
    duration: 90,
    gender: null,
    group: true,
  },
  {
    id: 10,
    title: "Introduction to Public Speaking",
    description:
      "designed to teach you the skills and techniques necessary to command an audience's attention, entertain and inform them, and present yourself as a highly likable speaker.",
    location: null,
    address: null,
    datetime: "2023-04-17 16:30:00",
    timezone: "PST",
    virtual: true,
    comments: "So excited for this event!",
    topic: "English",
    duration: 60,
    gender: null,
    group: true,
  },
];

//RSVPs
const rsvps = [
  { id: 1, event_id: 1, user_id: 1, rsvp_status: false },
  { id: 2, event_id: 2, user_id: 2, rsvp_status: true },
  { id: 3, event_id: 3, user_id: 3, rsvp_status: true },
  { id: 4, event_id: 4, user_id: 4, rsvp_status: true },
  { id: 5, event_id: 5, user_id: 5, rsvp_status: false },
  { id: 6, event_id: 6, user_id: 6, rsvp_status: true },
  { id: 7, event_id: 7, user_id: 7, rsvp_status: false },
  { id: 8, event_id: 8, user_id: 8, rsvp_status: false },
  { id: 9, event_id: 9, user_id: 9, rsvp_status: true },
  { id: 10, event_id: 10, user_id: 10, rsvp_status: false },
];

//Messages
const messages = [
  {
    id: 1,
    sender: 1,
    receiver: 3,
    message_content:
      "Let's collaborate on studying science. We can conduct experiments together and analyze the results.",
    thread_id: 42,
  },
  {
    id: 2,
    sender: 3,
    receiver: 9,
    message_content:
      "Let's collaborate on studying science. We can conduct experiments together and analyze the results.",
    thread_id: 36,
  },
  {
    id: 3,
    sender: 4,
    receiver: 3,
    message_content:
      "Let's collaborate on studying science. We can conduct experiments together and analyze the results.",
    thread_id: 31,
  },
  {
    id: 4,
    sender: 3,
    receiver: 4,
    message_content:
      "Let's collaborate on studying science. We can conduct experiments together and analyze the results.",
    thread_id: 31,
  },
  {
    id: 5,
    sender: 3,
    receiver: 1,
    message_content:
      "I would love to work with you on studying science. We can share notes and discuss important ideas.",
    thread_id: 42,
  },
  {
    id: 6,
    sender: 9,
    receiver: 3,
    message_content:
      "I think we can collaborate on studying math together and help each other understand complex concepts.",
    thread_id: 36,
  },
  {
    id: 7,
    sender: 10,
    receiver: 2,
    message_content:
      "Let's collaborate on studying science. We can conduct experiments together and analyze the results.",
    thread_id: 14,
  },
  {
    id: 9,
    sender: 3,
    receiver: 9,
    message_content:
      "Let's collaborate on studying science. We can conduct experiments together and analyze the results.",
    thread_id: 36,
  },
  {
    id: 10,
    sender: 4,
    receiver: 10,
    message_content:
      "I think we can collaborate on studying math together and help each other understand complex concepts.",
    thread_id: 34,
  },
];

module.exports = { users, events, rsvps, messages };
