const questions = [
    {

        question: "Who is the creator of ‘The Simpsons’?",
        answers: [
            { texto: "Trey Parker and Matt Stone", correct: false },
            { texto: "Seth MacFarlane", correct: false },
            { texto: "Hanna-Barbera", correct: false },
            { texto: "Matt Groening", correct: true },
        ]

    },

    {

        question: "What is the name of the clown who hosts a children’s television show in Springfield?",
        answers: [
            { texto: "Pennywise", correct: false },
            { texto: "Krusty the Clown", correct: true },
            { texto: "Ronald McDonald", correct: false },
            { texto: "Bozo the Clown", correct: false },
        ]
    },
    {

        question: "Who shot Mr. Burns?",
        answers: [
            { texto: "Bart Simpson", correct: false },
            { texto: "Mrs. Krabappel", correct: false },
            { texto: "Homer Simpson", correct: false },
            { texto: "Maggie Simpson", correct: true },
        ]
    },
    {

        question: "Which Springfield resident has a twin brother named Herb?",
        answers: [
            { texto: "Ned Flanders", correct: false },
            { texto: "Moe", correct: false },
            { texto: "Homer Simpson", correct: true },
            { texto: "Sideshow Bob", correct: false },
        ]
    },
    {

        question: "Who voices Moe in The Simpson?",
        answers: [
            { texto: "Robert Downey Jr.", correct: false },
            { texto: "Chris Evans", correct: false },
            { texto: "Hank Azaria", correct: true },
            { texto: "Christopher Collins", correct: false },
        ]
    },
    {


        question: "Who is the teacher of Bart’s class at Springfield Elementary?",
        answers: [
            { texto: "Mrs. Vanderbilt", correct: false },
            { texto: "Mrs. Krabappel", correct: true },
            { texto: "Miss Hoover", correct: false },
            { texto: "Mrs. Glick", correct: false },
        ]
    },
    {

        question: "What is the name of the school bus driver?",
        answers: [
            { texto: "Otto Mann", correct: true },
            { texto: "Barney Gumble", correct: false },
            { texto: "Kent Brockman", correct: false },
            { texto: "Troy McClure", correct: false },
        ]
    },
    {
        question: "What instrument does Lisa play in her school band?",
        answers: [
            { texto: "Clarinet", correct: false },
            { texto: "Flute", correct: false },
            { texto: "Saxophone", correct: true },
            { texto: "Trombone", correct: false },
        ]

    },
    {

        question: "What is the name of the elephant Bart wins in a radio contest?",
        answers: [
            { texto: "Stampy", correct: true },
            { texto: "Trunky", correct: false },
            { texto: "Jumbo", correct: false },
            { texto: "Horton", correct: false },
        ]
    },
    {

        question: "In Season 6, Homer joins an ancient secret society called what?",
        answers: [
            { texto: "The Knights Templar", correct: false },
            { texto: "The Illuminati", correct: false },
            { texto: "The Freemasons", correct: false },
            { texto: "The Stonecutters", correct: true },
        ]
    },
    {

        question: "What is the name of the bowling instructor Marge develops a crush on?",
        answers: [
            { texto: "Lionel", correct: false },
            { texto: "Francois", correct: false },
            { texto: "Jacques", correct: true },
            { texto: "Jean", correct: false },
        ]
    },
    {

        question: "Which character is obsessed with getting revenge on Bart?",
        answers: [
            { texto: "Krusty the Clown", correct: false },
            { texto: "Sideshow Bob", correct: true },
            { texto: "Fat Tony", correct: false },
            { texto: "Nelson Muntz", correct: false },
        ]
    },
    {

        question: "What is the full name of Moe, the owner of Moe’s Tavern?",
        answers: [
            { texto: "Moe Slovak", correct: false },
            { texto: "Moe Szyslak", correct: true },
            { texto: "Moe Sawicki", correct: false },
            { texto: "Moe Sadowski", correct: false },
        ]
    },
    {

        question: "What is the vehicle Homer designs called?",
        answers: [
            { texto: "Convert-a-Car", correct: false },
            { texto: "The Buzzwagon", correct: false },
            { texto: "The Homer", correct: true },
            { texto: "Turbo Donut", correct: false },
        ]
    },
    {

        question: "In which season did Ralph Wiggum first appear?",
        answers: [
            { texto: "Season 1", correct: true },
            { texto: "Season 2", correct: false },
            { texto: "Season 3", correct: false },
            { texto: "Season 4", correct: false },
        ]
    },
    {

        question: "Which pop artist’s Super Bowl half-time show was supposedly predicted in ‘The Simpsons’?",
        answers: [
            { texto: "Madonna", correct: false },
            { texto: "Beyoncé", correct: false },
            { texto: "Janet Jackson", correct: false },
            { texto: "Lady Gaga", correct: true },
        ]
    },
    {

        question: "What is Springfield’s local newspaper called?",
        answers: [
            { texto: "The Springfield Times", correct: false },
            { texto: "The Springfield Shopper", correct: true },
            { texto: "The Springfield Post", correct: false },
            { texto: "The Springfield Journal", correct: false },
        ]
    },
    {

        question: "Which acclaimed physicist made a guest appearance as himself?",
        answers: [
            { texto: "Edward Witten", correct: false },
            { texto: "Alan Guth", correct: false },
            { texto: "Peter Higgs", correct: false },
            { texto: "Stephen Hawking", correct: true },
        ]
    },
    {

        question: "Who voiced Bart’s girlfriend Jessica?",
        answers: [
            { texto: "Emma Thompson", correct: false },
            { texto: "Meryl Streep", correct: true },
            { texto: "Helen Mirren", correct: false },
            { texto: "Goldie Hawn", correct: false },
        ]
    },
    {

        question: "In what year did The Simpsons first air?",
        answers: [
            { texto: "1987", correct: false },
            { texto: "1989", correct: true },
            { texto: "1990", correct: false },
            { texto: "1992", correct: false },
        ]
    },
    {

        question: "What fruit does Homer build out of ham cubes?",
        answers: [
            { texto: "Pear", correct: false },
            { texto: "Orange", correct: false },
            { texto: "Apple", correct: true },
            { texto: "Pineapple", correct: false },
        ]
    },
    {

        question: "Bart and Milhouse’s favourite comic book character is known as what?",
        answers: [
            { texto: "Bumblebee Man", correct: false },
            { texto: "Spiderman", correct: false },
            { texto: "Batman", correct: false },
            { texto: "Radioactive Man", correct: true },
        ]
    },
    {

        question: "What is the secret ingredient in the Flaming Moe cocktail?",
        answers: [
            { texto: "Cough syrup", correct: true },
            { texto: "Maple syrup", correct: false },
            { texto: "Mouthwash", correct: false },
            { texto: "Golden syrup", correct: false },
        ]
    },
    {

        question: "What is the name of Ned Flanders’s first wife?",
        answers: [
            { texto: "Martha", correct: false },
            { texto: "Mildred", correct: false },
            { texto: "Maude", correct: true },
            { texto: "Madison", correct: false },
        ]
    },
    {

        question: "What is the name of the amusement park in Springfield?",
        answers: [
            { texto: "Neverland", correct: false },
            { texto: "Scratchyland", correct: false },
            { texto: "Krustyland", correct: true },
            { texto: "Homerland", correct: false },
        ]
    },
    {

        question: "Which character’s catchphrase is “Ha-Ha!”?",
        answers: [
            { texto: "Grampa Simpson", correct: false },
            { texto: "Ralph Wiggum", correct: false },
            { texto: "Squeaky-Voiced Teen", correct: false },
            { texto: "Nelson Muntz", correct: true },
        ]
    },
    {

        question: "Which store is located right next to Moe’s Tavern?",
        answers: [
            { texto: "King Toot’s Music Store", correct: true },
            { texto: "Kwik-E-Mart", correct: false },
            { texto: "The Leftorium", correct: false },
            { texto: "Lard Lad Donuts", correct: false },
        ]
    },
    {
        question: "Who is the leader of the infamous Springfield Mafia?",
        answers: [
            { texto: "Luigi Risotto", correct: false },
            { texto: "Frankie the Squealer", correct: false },
            { texto: "Fat Tony", correct: true },
            { texto: "Johnny Tightlips", correct: false },
        ]
    },
    {

        question: "What is the name of Springfield’s resident news anchor?",
        answers: [
            { texto: "Brent Stockman", correct: false },
            { texto: "Kent Brockman", correct: true },
            { texto: "Krusty the Clown", correct: false },
            { texto: "Godfrey Jones", correct: false },
        ]
    },
    {

        question: "In what year was ‘The Simpsons Movie’ released?",
        answers: [
            { texto: "2004", correct: false },
            { texto: "2005", correct: false },
            { texto: "2007", correct: true },
            { texto: "2008", correct: false },
        ]
    },
];