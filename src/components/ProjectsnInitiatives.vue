
<template>
  <div>
    <project-grid :projects="projects"></project-grid>
  </div>
</template>

<script>
import ProjectGrid from "./ProjectGrid.vue";

export default {
  name: "App",
  components: {
    ProjectGrid,
  },
  data() {
    return {
      projects: [
        {
          title: "BUTTS BIN",
          description:
            "Worldwide, about 4.5 million cigarettes are littered every year having a big environmental impact. As a solution to this we made Buttsbin. ButtsBin is cylinderical pipe shaped and coloured like Cigarette. On the top of the pipe theres a hole same as size of Cigarette butt which allows only butt to put inside the ButtsBin. The purpose is to dispose the Cigarette Butts from its source itself, which will lead no Cigarette Butt exposed to the environment..",
          image: require("@/assets/PronInit/butts1.jpg"),
          link: "/project-1",
        },
        {
          title: "BIRDS FEEDER",
          description:
            "A bird feeder made from a steel oil can is a great way to  repurpose materials that would otherwise go to waste, reducing environmental impact. Providing food for birds can help maintain the local ecosystem by supporting the bird population, which plays an important role in pollination and pest control. Bird watching is a popular and rewarding hobby, and a feeder can attract a variety of bird species to your yard for observation and enjoyment.",
          image: require("@/assets/PronInit/BirdsFeeder.jpg"),
          link: "/project-2",
        },
        {
          title: "ECO BRICKS",
          description:
            "It helps in reducing plastic waste in the environment by providing an effective way to manage plastic waste. It promotes a circular economy approach, where waste is converted into a resource. The Eco Brick can be used as a building material, thus reducing the use of conventional building materials like bricks and concrete, which have a high carbon footprint. It is a low-cost solution for building materials, which makes it affordable and accessible to everyone.",
          image: require("@/assets/PronInit/eco brick.jpg"),
          link: "/project-3",
        },
        {
          title: "TREE PLANTATION",
          description:
            "The tree plantation drives are organized regularly across various locations in Nashik. The organization encourages volunteers to participate in these drives and contribute to the cause. The volunteers are provided with saplings and necessary tools required for plantation. The organization ensures that the saplings planted are of local species, which are suitable for the local environment. This helps in ensuring the survival of the saplings and the growth of the green cover.",

          image: require("@/assets/PronInit/tree plantation.jpg"),
          link: "/project-3",
        },
        {
          title: "OPEN MIC",
          description:
            "Open mic events organized by Nashik Ploggers provide a platform for local artists and performers to showcase their talents and express themselves. It promotes a sense of community and brings people together from different backgrounds and walks of life. These events also raise awareness about important social and environmental issues, such as waste management, climate change, and sustainability. Nashik Ploggers often collaborate with organizations to organize these events, which helps to build partnerships and promote local talent.",
          image: require("@/assets/PronInit/open mic.jpg"),
          link: "/project-3",
        },
        {
          title: "Wall Painting",
          description:
            "Wall painting is one of the initiatives taken by Nashik Ploggers to create awareness about environmental issues and spread the message of sustainability. They organize wall painting events where volunteers and artists come together to paint walls with beautiful and inspiring messages related to the environment and sustainability. The wall paintings not only beautify the city but also spread awareness among people about environmental issues such as waste management, plastic pollution, and conservation of natural resources.",
          image: require("@/assets/PronInit/wall painting.jpg"),
          link: "/project-3",
        },
      ],
    };
  },
};
</script>
