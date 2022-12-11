import { ForumCategory } from "./Forum.types";

export const FORUM_CATEGORIES: { [key: string]: ForumCategory } = {
    "university-life": {
        title: "University Life",
        subtitle: "General discussion about life in NUS!",
        image: "/forum-images/uni_life.jpeg",
        latest: "xdpd",
        threads: 100,
        comments: 100,
    },
    "module-reviews": {
        title: "Module Reviews",
        subtitle: "Discuss academic modules!",
        image: "/forum-images/mod_reviews.jpeg",
        latest: "xdpd",
        threads: 100,
        comments: 100,
    },
    "interest-groups": {
        title: "Interest Groups",
        subtitle: "Explore your interests with others!",
        image: "/forum-images/interest_groups.jpeg",
        latest: "xdpd",
        threads: 100,
        comments: 100,
    },
    "food-reviews": {
        title: "Food Reviews",
        subtitle: "Find out what to have for lunch!",
        image: "/forum-images/food_reviews.jpeg",
        latest: "xdpd",
        threads: 100,
        comments: 100,
    },
    "homework-help": {
        title: "Homework Help",
        subtitle: "Your SOS when your assignment is due!",
        image: "/forum-images/homework_help.jpeg",
        latest: "xdpd",
        threads: 100,
        comments: 100,
    },
};
