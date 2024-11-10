<script setup>
import {ref, defineProps} from "vue";

const video = defineProps ({
    thumbnail: String,
    rating: String,
    time: String,
    seasons: String,
    genre: Array,
})
</script>

<template>
    <div>
        <div class="video-list-item__img-container">
            <img class="video-list-item__img" :src="video.thumbnail">
        </div>
            <div class="video-list-item__hidden">
                <div class="video-list-item__description-container">
                    <div class="video-list-item__controls-list">
                        <div>
                            <i class="fa-solid fa-play video-list-item__icon icon__play"></i>
                            <i class="fa-solid fa-plus video-list-item__icon  icon__add"></i>
                            <i class="fa-regular fa-thumbs-up video-list-item__icon icon__rating"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-chevron-down video-list-item__icon icon__arrow"></i>
                        </div>
                    </div>
                    <div class="video-list-item__info">
                        <p class="video-list-item__rating">{{ video.rating }}</p>
                        <p class="video-list-item__info-item">{{ video.time }}</p>
                        <p class="video-list-item__info-item">{{ video.seasons }}</p>
                    </div>
                    <div>
                        <ul class="video-list-item__genres-list">
                            <li class="video-list-item__genre-item" v-for="genre in video.genre" :key="genre">{{ genre }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</template>