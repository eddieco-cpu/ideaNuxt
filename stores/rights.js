import { defineStore, storeToRefs } from 'pinia';
import { useBaseStore } from '@/stores/base';

export const useRightsStore = defineStore("rights", () => {

	//
	const baseStore = useBaseStore();
	const { getPageName, getPageUrl } = baseStore;

	function getRightsPageName() {
		const pageName = getPageName();
		return pageName + " in rights";
	}
	function getRightsPageUrl() {
		const pageUrl = getPageUrl();
		return pageUrl + " in rights";
	}

	//
  let rights = ref("my rights");

  function getRights() {
    return rights.value;
  }

  function setRights(value) {
    rights.value = value;
  }

  return {
		getRightsPageName,
		getRightsPageUrl,

    rights,
    getRights,
    setRights,
  };
});