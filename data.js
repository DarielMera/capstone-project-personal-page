// data.js

const projects = [
  {
    appName: "Crwn Clothing E-commerce",
    githubUrl: "https://github.com/DarielMera/crwn-clothing",
    liveDemoLink: "https://darielmera.github.io/crwn-clothing/",
    imageSrc: "https://placehold.co/600x400/b8c6db/4a4e74?text=Crwn+Clothing",
    description: "This project is a sophisticated e-commerce platform designed for selling clothing, showcasing a robust front-end application. Built as part of the Zero To Mastery 'Complete React Developer' course, it provided hands-on experience with core React concepts including functional components, routing with React Router, and state management using both React Context API and Redux. Key learnings involved implementing Firebase for user authentication (email/password, Google Sign-In) and Firestore for database interactions, integrating Redux-Saga for handling asynchronous operations, and setting up Stripe for payment processing, demonstrating a comprehensive understanding of modern web application development."
  },
  {
    appName: "React Assembly Game",
    githubUrl: "https://github.com/DarielMera/react-assembly-game",
    liveDemoLink: "https://darielmera.github.io/react-assembly-game/",
    imageSrc: "https://placehold.co/600x400/b8c6db/4a4e74?text=Assembly+Game",
    description: "This project is a React-based assembly game where users interactively select and combine various components to build a final item. Building this application solidified concepts around dynamic UI updates and intricate state management in React. It emphasized the effective use of `useState` for tracking component selections and assembled parts, implementing conditional rendering to visualize the assembly process, and designing reusable components to manage individual selectable pieces, enhancing skills in creating interactive user experiences."
  },
  {
    appName: "Tenzies Game",
    githubUrl: "https://github.com/DarielMera/tenzies-game",
    liveDemoLink: "https://darielmera.github.io/tenzies-game/",
    imageSrc: "https://placehold.co/600x400/b8c6db/4a4e74?text=Tenzies+Game",
    description: "The Tenzies game is a classic dice-rolling game where the player aims to roll ten dice to the same value and hold them. Developed by following Bob Ziroll's 'Learn React' course on Scrimba, this project was instrumental in mastering essential React Hooks like `useState` for managing game state (dice values, held status, win condition) and `useEffect` for handling side effects such as checking for a win and updating the UI accordingly. It also provided practical experience with event handling, dynamic styling, and basic accessibility considerations like focusing elements."
  },
  {
    appName: "Dicee Challenge",
    githubUrl: "https://github.com/DarielMera/roll-the-dice-competition",
    liveDemoLink: "https://darielmera.github.io/roll-the-dice-competition/",
    imageSrc: "https://placehold.co/600x400/b8c6db/4a4e74?text=Dicee+Challenge",
    description: "This project is a simple web-based competition that simulates rolling two dice, instantly declaring a winner between Player 1 and Player 2, or a draw. As part of Dr. Angela Yu's Udemy 'Complete Full-Stack Web Development Bootcamp,' this exercise primarily focused on fundamental JavaScript concepts. Key learnings included generating random numbers, manipulating the Document Object Model (DOM) to dynamically update image sources and text based on game logic, and applying conditional statements to determine the game's outcome."
  },
  {
    appName: "Monsters Rolodex",
    githubUrl: "https://github.com/DarielMera/monsters-rolodex-project",
    liveDemoLink: "https://darielmera.github.io/monsters-rolodex-project/",
    imageSrc: "https://placehold.co/600x400/b8c6db/4a4e74?text=Monsters+Rolodex",
    description: "The Monsters Rolodex is a React application that displays a searchable list of 'monsters' (fetched data), allowing users to filter the list based on search input. This project, from the Zero To Mastery React course, was crucial for understanding how to integrate API calls into a React app using `useEffect` for data fetching. It reinforced core React principles like component lifecycle, `useState` for managing both the monster data and the search field's input, and efficient list rendering with keys, providing a strong foundation for data-driven applications."
  },
  {
    appName: "Simon Game",
    githubUrl: "https://github.com/DarielMera/simon-game",
    liveDemoLink: "https://darielmera.github.io/simon-game/",
    imageSrc: "https://placehold.co/600x400/b8c6db/4a4e74?text=Simon+Game",
    description: "This is a web-based recreation of the classic Simon memory game, challenging players to replicate increasingly long sequences of flashing lights and sounds. Developed during Dr. Angela Yu's Udemy bootcamp, the project significantly deepened understanding of core JavaScript event handling for user clicks and interaction. It involved implementing complex game logic using arrays to manage sequences, utilizing timing functions (`setTimeout`, `setInterval`) for visual and auditory feedback, and dynamically updating the DOM to reflect game states and animations."
  },
  {
    appName: "Meme Generator",
    githubUrl: "https://github.com/DarielMera/meme-generator",
    liveDemoLink: "https://darielmera.github.io/meme-generator/",
    imageSrc: "https://placehold.co/600x400/b8c6db/4a4e74?text=Meme+Generator",
    description: "This application is a fun web tool that allows users to select a random meme template image and then add customizable top and bottom text to create their own memes. This project, learned from Bob Ziroll's Scrimba course, provided valuable experience in interacting with external APIs to fetch dynamic content. It focused on advanced React state management with `useState` for managing form inputs and image URLs, handling API responses, and dynamically rendering images and text within the component, showcasing practical application of Hooks for interactive UIs."
  },
  {
    appName: "Drum Kit",
    githubUrl: "https://github.com/DarielMera/drumkit",
    liveDemoLink: "https://darielmera.github.io/drumkit/",
    imageSrc: "https://placehold.co/600x400/b8c6db/4a4e74?text=Drum+Kit",
    description: "The Drum Kit project is an interactive web application that functions as a virtual drum set, allowing users to play different drum sounds by clicking on screen elements or pressing corresponding keyboard keys. As part of Dr. Angela Yu's Udemy bootcamp, this project solidified fundamental JavaScript concepts related to event handling, particularly `click` and `keydown` events. It provided hands-on experience with the HTML Audio API for playing sounds, performing basic DOM manipulation to add visual feedback to played drums, and structuring a simple, interactive front-end application."
  },
  {
    appName: "Digital Card Design",
    githubUrl: "https://github.com/DarielMera/dCardDesign",
    liveDemoLink: "https://darielmera.github.io/dCardDesign/",
    imageSrc: "https://placehold.co/600x400/b8c6db/4a4e74?text=Digital+Card",
    description: "This project is a static web page designed as a digital personal card or business card, showcasing essential contact information and social media links. It served as a foundational exercise to master core HTML and CSS concepts. Key learnings included structuring content effectively with semantic HTML, applying advanced CSS for layout (e.g., Flexbox), styling elements with properties like colors, fonts, and box shadows, and ensuring responsive design for optimal viewing across various device sizes, demonstrating proficiency in fundamental web design principles."
  }
];

export default projects;
