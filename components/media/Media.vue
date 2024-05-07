<template>
    <div class="flex gap-x-7">
        <nuxt-link :to="youtubeSite" target="_blank">
            <img src="~assets/images/icon/youTube-icon.svg" alt="youTube" width="20" />
        </nuxt-link>

        <nuxt-link :to="facebookSite" target="_blank">
            <img src="~assets/images/icon/fb-icon.svg" alt="fb" class="cursor-pointer" width="20" />
        </nuxt-link>

        <nuxt-link :to="instagramSite" target="_blank">
            <img src="~assets/images/icon/instagram-icon.svg" alt="instagram" class="cursor-pointer" width="20" />
        </nuxt-link>
        <nuxt-link :to="officialSite" target="_blank">
            <img src="~assets/images/icon/internet-icon.svg" alt="internet" class="cursor-pointer" width="20" />
        </nuxt-link>
    </div>
</template>

<script setup>
    const { facebookSite, instagramSite, youtubeSite, officialSite} = defineProps({
        facebookSite: {
            default: '',
            type:String
        },
        instagramSite: {
            default: '',
            type:String
        },
        youtubeSite: {
            default: '',
            type:String
        },
        officialSite: {
            default: '',
            type:String
        }
    })

</script>
