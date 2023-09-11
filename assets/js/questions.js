const questions = [
    {

        question: "Who is the creator of ‘The Simpsons’?",
        answers: [
            { text: "Trey Parker and Matt Stone", correct: false },
            { text: "Seth MacFarlane", correct: false },
            { text: "Hanna-Barbera", correct: false },
            { text: "Matt Groening", correct: true },
        ]

    },

    {

        question: "What is the name of the clown who hosts a children’s television show in Springfield?",
        answers: [
            { text: "Pennywise", correct: false },
            { text: "Krusty the Clown", correct: true },
            { text: "Ronald McDonald", correct: false },
            { text: "Bozo the Clown", correct: false },
        ]
    },
    {

        question: "Who shot Mr. Burns?",
        answers: [
            { text: "Bart Simpson", correct: false },
            { text: "Mrs. Krabappel", correct: false },
            { text: "Homer Simpson", correct: false },
            { text: "Maggie Simpson", correct: true },
        ]
    },
    {

        question: "Which Springfield resident has a twin brother named Herb?",
        answers: [
            { text: "Ned Flanders", correct: false },
            { text: "Moe", correct: false },
            { text: "Homer Simpson", correct: true },
            { text: "Sideshow Bob", correct: false },
        ]
    },
    {

        question: "Who voices Moe in The Simpson?",
        answers: [
            { text: "Robert Downey Jr.", correct: false },
            { text: "Chris Evans", correct: false },
            { text: "Hank Azaria", correct: true },
            { text: "Christopher Collins", correct: false },
        ]
    },
    {


        question: "Who is the teacher of Bart’s class at Springfield Elementary?",
        answers: [
            { text: "Mrs. Vanderbilt", correct: false },
            { text: "Mrs. Krabappel", correct: true },
            { text: "Miss Hoover", correct: false },
            { text: "Mrs. Glick", correct: false },
        ]
    },
    {

        question: "What is the name of the school bus driver?",
        answers: [
            { text: "Otto Mann", correct: true },
            { text: "Barney Gumble", correct: false },
            { text: "Kent Brockman", correct: false },
            { text: "Troy McClure", correct: false },
        ]
    },
    {
        question: "What instrument does Lisa play in her school band?",
        answers: [
            { text: "Clarinet", correct: false },
            { text: "Flute", correct: false },
            { text: "Saxophone", correct: true },
            { text: "Trombone", correct: false },
        ]

    },
    {

        question: "What is the name of the elephant Bart wins in a radio contest?",
        answers: [
            { text: "Stampy", correct: true },
            { text: "Trunky", correct: false },
            { text: "Jumbo", correct: false },
            { text: "Horton", correct: false },
        ]
    },
    {

        question: "In Season 6, Homer joins an ancient secret society called what?",
        answers: [
            { text: "The Knights Templar", correct: false },
            { text: "The Illuminati", correct: false },
            { text: "The Freemasons", correct: false },
            { text: "The Stonecutters", correct: true },
        ]
    },
    {

        question: "What is the name of the bowling instructor Marge develops a crush on?",
        answers: [
            { text: "Lionel", correct: false },
            { text: "Francois", correct: false },
            { text: "Jacques", correct: true },
            { text: "Jean", correct: false },
        ]
    },
    {

        question: "Which character is obsessed with getting revenge on Bart?",
        answers: [
            { text: "Krusty the Clown", correct: false },
            { text: "Sideshow Bob", correct: true },
            { text: "Fat Tony", correct: false },
            { text: "Nelson Muntz", correct: false },
        ]
    },
    {

        question: "What is the full name of Moe, the owner of Moe’s Tavern?",
        answers: [
            { text: "Moe Slovak", correct: false },
            { text: "Moe Szyslak", correct: true },
            { text: "Moe Sawicki", correct: false },
            { text: "Moe Sadowski", correct: false },
        ]
    },
    {

        question: "What is the vehicle Homer designs called?",
        answers: [
            { text: "Convert-a-Car", correct: false },
            { text: "The Buzzwagon", correct: false },
            { text: "The Homer", correct: true },
            { text: "Turbo Donut", correct: false },
        ]
    },
    {

        question: "In which season did Ralph Wiggum first appear?",
        answers: [
            { text: "Season 1", correct: true },
            { text: "Season 2", correct: false },
            { text: "Season 3", correct: false },
            { text: "Season 4", correct: false },
        ]
    },
    {

        question: "Which pop artist’s Super Bowl half-time show was supposedly predicted in ‘The Simpsons’?",
        answers: [
            { text: "Madonna", correct: false },
            { text: "Beyoncé", correct: false },
            { text: "Janet Jackson", correct: false },
            { text: "Lady Gaga", correct: true },
        ]
    },
    {

        question: "What is Springfield’s local newspaper called?",
        answers: [
            { text: "The Springfield Times", correct: false },
            { text: "The Springfield Shopper", correct: true },
            { text: "The Springfield Post", correct: false },
            { text: "The Springfield Journal", correct: false },
        ]
    },
    {

        question: "Which acclaimed physicist made a guest appearance as himself?",
        answers: [
            { text: "Edward Witten", correct: false },
            { text: "Alan Guth", correct: false },
            { text: "Peter Higgs", correct: false },
            { text: "Stephen Hawking", correct: true },
        ]
    },
    {

        question: "Who voiced Bart’s girlfriend Jessica?",
        answers: [
            { text: "Emma Thompson", correct: false },
            { text: "Meryl Streep", correct: true },
            { text: "Helen Mirren", correct: false },
            { text: "Goldie Hawn", correct: false },
        ]
    },
    {

        question: "In what year did The Simpsons first air?",
        answers: [
            { text: "1987", correct: false },
            { text: "1989", correct: true },
            { text: "1990", correct: false },
            { text: "1992", correct: false },
        ]
    },
    {

        question: "What fruit does Homer build out of ham cubes?",
        answers: [
            { text: "Pear", correct: false },
            { text: "Orange", correct: false },
            { text: "Apple", correct: true },
            { text: "Pineapple", correct: false },
        ]
    },
    {

        question: "Bart and Milhouse’s favourite comic book character is known as what?",
        answers: [
            { text: "Bumblebee Man", correct: false },
            { text: "Spiderman", correct: false },
            { text: "Batman", correct: false },
            { text: "Radioactive Man", correct: true },
        ]
    },
    {

        question: "What is the secret ingredient in the Flaming Moe cocktail?",
        answers: [
            { text: "Cough syrup", correct: true },
            { text: "Maple syrup", correct: false },
            { text: "Mouthwash", correct: false },
            { text: "Golden syrup", correct: false },
        ]
    },
    {

        question: "What is the name of Ned Flanders’s first wife?",
        answers: [
            { text: "Martha", correct: false },
            { text: "Mildred", correct: false },
            { text: "Maude", correct: true },
            { text: "Madison", correct: false },
        ]
    },
    {

        question: "What is the name of the amusement park in Springfield?",
        answers: [
            { text: "Neverland", correct: false },
            { text: "Scratchyland", correct: false },
            { text: "Krustyland", correct: true },
            { text: "Homerland", correct: false },
        ]
    },
    {

        question: "Which character’s catchphrase is “Ha-Ha!”?",
        answers: [
            { text: "Grampa Simpson", correct: false },
            { text: "Ralph Wiggum", correct: false },
            { text: "Squeaky-Voiced Teen", correct: false },
            { text: "Nelson Muntz", correct: true },
        ]
    },
    {

        question: "Which store is located right next to Moe’s Tavern?",
        answers: [
            { text: "King Toot’s Music Store", correct: true },
            { text: "Kwik-E-Mart", correct: false },
            { text: "The Leftorium", correct: false },
            { text: "Lard Lad Donuts", correct: false },
        ]
    },
    {
        question: "Who is the leader of the infamous Springfield Mafia?",
        answers: [
            { text: "Luigi Risotto", correct: false },
            { text: "Frankie the Squealer", correct: false },
            { text: "Fat Tony", correct: true },
            { text: "Johnny Tightlips", correct: false },
        ]
    },
    {

        question: "What is the name of Springfield’s resident news anchor?",
        answers: [
            { text: "Brent Stockman", correct: false },
            { text: "Kent Brockman", correct: true },
            { text: "Krusty the Clown", correct: false },
            { text: "Godfrey Jones", correct: false },
        ]
    },
    {

        question: "In what year was ‘The Simpsons Movie’ released?",
        answers: [
            { text: "2004", correct: false },
            { text: "2005", correct: false },
            { text: "2007", correct: true },
            { text: "2008", correct: false },
        ]
    },
];