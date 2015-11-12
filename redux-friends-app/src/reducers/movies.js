const movieData = [ 
    {
      id: '1011',
      name: 'Gleaming the cube', 
      year: "1989",
      description: "A California skateboarder (Christian Slater) solves and avenges the death of his adopted Vietnamese brother.",
      image: '/public/img/gleamingthecube.jpg'
    },
    {
      id: "1012",
      name: "Airborne", 
      year: "1993",
      description: "When his parents go to Australia for six months to work on a zoology project, young Mitchell (Shane McDermott) is sent to live with his Aunt Irene (Edie McClurg) and Uncle Louie (Patrick Thomas O'Brien) in Cincinnati. Initially dismayed by the cold climate, Mitchell's unhappiness increases when he's taunted by the high school's popular kids. As he strikes up a relationship with Nikki (Brittney Powell), Mitchell begins to win over his bullies by using his Rollerblading skills in street hockey games.",
      image: "/public/img/airborne.jpg"
    },
    {
      id: "1013",
      name: "Kung Fury",
      year: "2015",
      description: "A martial artist who makes his living as a syndicate hit man finds himself the quarry of both the police and the mob.", 
      image: "/public/img/kungfury.jpg"
    },
    {
      id: "1014",
      name: "The Karate Kid", 
      year: "1984",
      description: "Daniel (Ralph Macchio) moves to Southern California with his mother, Lucille (Randee Heller), but quickly finds himself the target of a group of bullies who study karate at the Cobra Kai dojo. Fortunately, Daniel befriends Mr. Miyagi (Noriyuki Morita), an unassuming repairman who just happens to be a martial arts master himself. Miyagi takes Daniel under his wing, training him in a more compassionate form of karate and preparing him to compete against the brutal Cobra Kai.",
      image: "/public/img/karatekid.jpg"
    },
    {
      id: "1015",
      year: "1989",
      name: "Bill & Teds Excellent Adventure",
      description: "Bill (Alex Winter) and Ted (Keanu Reeves) are high school buddies starting a band. However, they are about to fail their history class, which means Ted would be sent to military school. They receive help from Rufus (George Carlin), a traveler from a future where their band is the foundation for a perfect society. With the use of Rufus time machine, Bill and Ted travel to various points in history, returning with important figures to help them complete their final history presentation.",
      image: "/public/img/billteds.jpg"
    }
]


export default function movies(state = movieData, action) {
    switch (action.type) {
        default:
            return state;
    }
}