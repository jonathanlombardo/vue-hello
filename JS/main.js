const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "",
      src: "",
      jhonnys: [
        {
          name: "Jagrid",
          src: "Jagrid.png",
        },
        {
          name: "Jaquaman",
          src: "Jaquaman.png",
        },
        {
          name: "Jhanos",
          src: "Jhanos.png",
        },
        {
          name: "Jhon Of Thrones",
          src: "Jhon-of-thrones.png",
        },
        {
          name: "Jhon Of War",
          src: "Jhon-of-War.png",
        },
        {
          name: "Jimli",
          src: "Jimli.png",
        },
        {
          name: "Jonnavacciuolo",
          src: "Jonnavacciuolo.png",
        },
        {
          name: "Jonathus Silente",
          src: "Jonathus.png",
        },
      ],
    };
  },

  methods: {
    changeImg(name, src) {
      this.title = name;
      this.src = src;
    },
  },
}).mount("#app");

const pippo = {
  isActive: true,
  hasError: false,
};

pippo.isActive;
