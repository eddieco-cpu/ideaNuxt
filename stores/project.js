import { defineStore, skipHydrate } from "pinia";

export const useProjectStore = defineStore("project", () => {


    const Project_data = ref([]);

    function setData(data) {
        Project_data.value = data 
    }

    function getData() {
        return Project_data.value;
    }

    return { 
        Project_data, 
        setData,
        getData
     };
  },
  {
    persist: process.client ? true : false,
  }
);
